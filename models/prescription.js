const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please Add a Title'],
        unique: true,
        trim: true,
        maxlength: [40, "Limit of Title Reached, Max 40 Characters"]
    },
    doctorName:{
        type: String,
        required: [true, 'Doctor name is Necessary'],
        maxlength: [40, "Name Limit Reached"]
    },
    patientName:{
        type: String,
        required: [true, 'Doctor name is Necessary'],
        maxlength: [40, "Name Limit Reached"]
    },
    description:{
        type: String,
        required: [true, "Please Insert Details"],
        maxlength: [400, "Error! Characters Exceed 400"]
    }
})

module.exports = mongoose.models.Appointment || mongoose.model('Appointment', AppointmentSchema);