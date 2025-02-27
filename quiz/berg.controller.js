const Berg = require ("./berg.models.js");

const bergSplit = async (req, res) => {
    //bergID is found in params.req.bergID
    try {
        // Get orginal berg and make copies
        const orgBerg = await Berg.findOne({ bergId: req.params.bergId });
        const bergA = orgBerg;
        const bergB = orgBerg;

        // Add identifiers
        bergA.bergId += "a";
        bergA.save()

        bergB.bergId += "b";
        bergB.save()

        await Berg.findOneAndDelete({bergId: req.params.bergId});

        res.status(200).json({message: "Succesfully split " + req.params.bergId})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

  module.exports = {
    bergSplit
};

