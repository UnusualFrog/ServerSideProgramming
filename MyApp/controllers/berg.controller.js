const Berg = require ("../models/berg.model.js");

const getBergs = async (req, res) => {
    try {
        const bergs = await Berg.find({});
        res.status(200).json(bergs);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

const createBurg = async (req, res) => {
    try {
        const berg = await Berg.create(req.body);
        res.status(200).json(berg);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const bergSplit = async (req, res) => {
    //bergID is found in params.req.bergID
    try {
        // Get orginal berg and make copies
        const orgBerg = await Berg.findOne({ bergId: req.params.bergId });
        console.log(orgBerg)

        // Add identifiers
        const bergA = {
            mission: orgBerg.mission,
            aircraft: orgBerg.aircraft,
            latitude: orgBerg.latitude,
            longitude: orgBerg.longitude,
            altitude: orgBerg.altitude,
            timestamp: orgBerg.timestamp,
            bergId: orgBerg.bergId + "a",
            iceType: orgBerg.iceType,
            iceSize: orgBerg.iceSize,
            seaState: orgBerg.seaState,
            seaTemp: orgBerg.seaTemp,
            iceGrounded: orgBerg.iceGrounded,
            comment: orgBerg.comment,
        }

        const bergB = {
            mission: orgBerg.mission,
            aircraft: orgBerg.aircraft,
            latitude: orgBerg.latitude,
            longitude: orgBerg.longitude,
            altitude: orgBerg.altitude,
            timestamp: orgBerg.timestamp,
            bergId: orgBerg.bergId + "b",
            iceType: orgBerg.iceType,
            iceSize: orgBerg.iceSize,
            seaState: orgBerg.seaState,
            seaTemp: orgBerg.seaTemp,
            iceGrounded: orgBerg.iceGrounded,
            comment: orgBerg.comment,
        }
        await Berg.create(bergA);
        await Berg.create(bergB);

        await Berg.findOneAndDelete({bergId: req.params.bergId});

        res.status(200).json({message: "Succesfully split " + req.params.bergId})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

const deleteAllBergs = async (req, res) => {
    try {
        const bergs = await Berg.deleteMany ({});
        res.status(200).json(bergs);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

  module.exports = {
    getBergs,
    bergSplit,
    createBurg,
    deleteAllBergs
};

