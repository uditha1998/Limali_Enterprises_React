const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const SquotationSchema = new Schema({
    item :{
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },

    

})

const Supplier_quotations = mongoose.model("Supplier_quotations",SquotationSchema);

module.exports = Supplier_quotations;
