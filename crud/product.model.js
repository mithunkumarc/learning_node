const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
	title: String,
	description: String,
	price: Number,
	company: String
}, {
	timestamps: true
});

//we can create objects of Products, crud methods are readily available on this object 
module.exports = mongoose.model('Products', ProductSchema);