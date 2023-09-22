const mongoose = require("mongoose");
const Schema = mongoose.Schema



const districtSchema = new Schema({
    stateID:{type:Schema.Types.ObjectId, ref: 'State', required: true },
    state: { type: String, required: true },
    district:{ type: String, required: true }
}, { timestamps: true });



module.exports = mongoose.model("District", districtSchema);