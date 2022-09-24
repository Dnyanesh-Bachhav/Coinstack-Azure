const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const MostLossedCoinSchema = new Schema({
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    shortName:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    percentage:{
        type: String,
        required: true,
    },
    imgSrc:{
        type: String,
        required: true,
    },
    coinType:{
            type: String,
            required: true,
        
    }
});
mongoose.models = {};
const MostLossedCoinsModel = mongoose.model.MostLossedCoins || mongoose.model('MostLossedCoins',MostLossedCoinSchema);

module.exports = MostLossedCoinsModel;