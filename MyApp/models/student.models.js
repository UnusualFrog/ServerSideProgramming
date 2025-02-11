const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    schoolID: {
        type: Number,
        required: [true, "Please enter a schoolID"]
    },
    firstName: {
        type: String,
        required: [true, "Please enter a first name"]
    },
    lastName: {
        type: String,
        required: [true, "Please enter a first name"]
    },
    dob: {
        type: String,
        required: [true, "Please enter a date of birth"]
    },
    addressUnit: {
        type: String,
        required: [true, "Please enter an address unit"]
    },
    addressStreet: {
        type: String,
        required: [true, "Please enter a street name"]
    },
    addressCity: {
        type: String,
        required: [true, "Please enter a city"]
    },
    addressStateProv: {
        type: String,
        required: [true, "Please enter a state or province"]
    },
    addressCountry: {
        type: String,
        required: [true, "Please enter a country"]
    },
    addressPostCode: {
        type: String,
        required: [true, "Please enter a postal code"]
    },
    phone: {
        type: String,
        required: [true, "Please enter a phone number"]
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
    },
    emergContactName: {
        type: String,
        required: [true, "Please enter an emergency contact name"]
    },
    emergContactPhone: {
        type: String,
        required: [true, "Please enter an emergency contact phone number"]
    },
    emergContactRel: {
        type: String,
        required: [true, "Please enter an emergency contact relationship"]
    },
    program: {
        type: String,
        required: [true, "Please enter a program"]
    }
})

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;