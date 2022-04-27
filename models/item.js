const mongoose = require('mongoose')
const Schema = mongoose.Schema

const item = new Schema(
    {
        name: {type: String, required: true},
        price: {type: Number, required: true},
        type: {type: String, required: true}
    },
    {timestamp:true}
)

module.exports = mongoose.model('item', item)

