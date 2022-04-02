const mongoose = require('mongoose');


//create schema with field names
const addcusSchema = new mongoose.Schema({
  customerid: {type: Number, required: true,unique:true},
  fullname: {type: String, required: true, trim: true},
  primaryphone: {type: String, required: true, match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/] },
  streetaddress: {type: String, required: true, trim: true},
  dateofbirth: {type: String, required: true, trim: true},
  emailaddress: {type: String, required: true, trim: true,match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/] },
});

const Customer = mongoose.model('customers', addcusSchema);

module.exports = Customer;