var mongoose= require('mongoose');
var UserSchema=mongoose.Schema({
	userId:{
		type: String,
		index:true,
		
	},
	disease : {
		type:String
	},
	userResponse:{
		type:String
	},
	ModelResponse: {
		type:String
	}
});

var User=module.exports=mongoose.model('User',UserSchema);

