// ARSHPREET KAUR- 101343743

const {model, Schema} = require('mongoose');

const employeeSchema = Schema({

    first_name:{
        type:String,
        required: true,
        max:50
    },

    last_name:{
        type:String,
        required: true,
        max:40
    },

    email:{
        type:String,
        required: true,
        unique: true    
    },

    gender:{
        type: String,
        emum :['Male','Female','Other' ]
    },

    salary:{
        type: Number,
        required: true
    }
})

module.exports = model('employee', employeeSchema);