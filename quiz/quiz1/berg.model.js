const mongoose = require('mongoose');

const BergSchema = mongoose.Schema ({
    mission: {
        type: String,
        required: [true, "Please enter the mission ID"],
    },
    aircraft: {
        type: String,
        required: [true, "Please enter a callsign"],
        default: "C-GCNA"
    },
    latitude: {
        type: Number,
        required: [true, "Please enter a latititude"]
    },
    longitude: {
        type: Number,
        required: [true, "Please enter a longitude"]
    },
    altitude: {
        type: Number,
        required: [true, "Please enter an altitude"]
    },
    timestamp: {
        type: String,
        required: [true, "Please enter a timestamp"]
    },
    bergId: {
        type: String,
        required: [true, "Please enter a berg ID"]
    },
    iceType: {
        type: String,
        default: "Tabular"
    },
    iceSize: {
        type: Number,
    },
    seaState: {
        type: String,
        default: "Calm"
    },
    seaTemp: {
        type: Number
    }, 
    iceGrounded: {
        type: Boolean,
        default: false
    },
    comment: {
        type: String
    }

},
{ 
    timestamps: true
});

const Berg = mongoose.model("berg", BergSchema);

module.exports = Berg;
