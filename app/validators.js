import moment from 'moment'

export default {
	NameValidation: {
		validator : function(v){
			if(v.length < 2 || v.length > 30){
				return false
			}
			let name=/^[A-Z ?a-z]*$/
			return name.test(v)
		},
		message: "{VALUE} is not a valid format or less than 2 or more than 30 characters"
	},
	DiverNameValidation: {
		validator: function(v){
			if(!v){
				return true
			}
			let name =/^[A-Z ?a-z]*$/
			return name.test(v)
		}

	},
	OrganizationNameValidation:{
		validator : function(v){
			if(v.length< 5 && v.length > 30){
				return false
			}
			// let name=/^[A-Z ?a-z\-?_?&?.?]*$/
			let name=/^[A-Za-z]([a-zA-Z]|[- _.&])*$/
			return name.test(v)
		},
		message: "{VALUE} is not a valid format or exceeded 30 characters"
	},
	EmailValidation : {
		validator : function(v) {
			let emailAddress=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			if(v.length>50){
				return false
			}
			return emailAddress.test(v)
		},
		message: "{VALUE} is not a valid format or exceeded 50 characters"
	},
	ContactValidation : {

		validator : function(v) {
			if(!v) return true   //there exist field so when empty it should return true, if we want to validate only if field exist then this line is not needed
			let mobileNo=/^\+?(977)?-?\9\d{2}-?\d{3}-?\d{4}$/	
			let outsideValleyLandline=/^\+?(977)?-?(0\d{2})?-?\d{3}-?\d{3}$/
			let valleyLandline=/^\+?(977)?-?(0\d{1})?-?\d{3}-?\d{4}$/
			return mobileNo.test(v) || outsideValleyLandline.test(v) || valleyLandline.test(v)
		},
		message: "{VALUE} is not a valid contact_no"
	},
	PasswordValidation:{
		validator : function(v){
			//return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(v)
			// return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()+_\-=}{[\]|:;"/?.><,`~])(?=.{8,})/.test(v)

			return v ? (v.length >=8 && v.length <=30) : false 
		},
		message:"Password must be between 8 to 30 characters"
	},
	NumberValidation:{
		validator : function(v){
			if(!v) return true
			let smsCredit=/^(\d+(\.\d+)?)*$/
			return smsCredit.test(v)
		},
		message:"{VALUE} is not a number"

	},
	imedValidation:{
		validator : function(v){
			let imedwithOutTRV=/^\d{15}$/
			let imedwithTRV=/^TRV\d{15}$/
			return imedwithOutTRV.test(v) ||imedwithTRV.test(v) 
		},
		message:"Imed must be number or number with \"TRV\" appended in the first with length exactly 15 or 18 respectively"
	},
	deviceGsmNoValidation:{
		validator : function(v) {
			if (v) {
				let gsmNo=/^\d{10}$/
				return gsmNo.test(v)
			}
		},
		message:"{VALUE} is not a number or length is not 10"
	},
	plateNoValidation:{
		validator : function(v){
			//if(v.length>30){
			return v.length<=13
			//}
		},
		message:"{VALUE} is exceeded length 12"

	},
	dateValidation:{ //subscription_deadline, guarantee_start_date, guarantee_end_date
		validator : function(v){
			let date = moment(v)			
			let now = moment()
			return date > now || true  //date should be greater than present date
		},
		message: "{VALUE} is not a future date"
	},
	GeolocDateValidation:{
		validator : function(v){
			let date = moment(v)			
			let now = moment()
			return date <= now || true  //date should be greater than present date
		},
		message: "{VALUE} is not a past date"
	},
	FeedbackCommentsValidation:{
		validator : function(v){
			return (v.length >= 30 && v.length <= 1000)
			//let comments =  /^[A-Z ?a-z?0-9\-?_?&?.?,?]*$/
			// if(v.length>1000){
			// 	return false
			// }
			// else{
			// 	return v.replace(/<(?:.|\n)*?>/gm, "")
			// }

		},
		message:"Message exceeded 1000 characters"
	}	
}