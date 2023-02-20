// ARSHPREET KAUR- 101343743

const {model, Schema} = require('mongoose');

const userSchema = new Schema({
 
    username :{
        type: String,
        required: true,            
        primaryKey: true,
        max: 80
    },

    email:{
        type: String, 
        required:true,
        max:200
    },
    
    password:{
        type:String,
        required:true,
        unique: true
    }
});

module.exports = model('users', userSchema);
