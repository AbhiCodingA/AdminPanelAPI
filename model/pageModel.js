let mongoose = require('mongoose');

let pageSchema = mongoose.Schema({
    pageUrl: String,
    pageNavText: String,
    pageTitle: String,
    pageMetaDescription: String,
    pageMetaKeyword: String, 
    pageHeading: String,
    pageDetails: String,
});

let pageModel = mongoose.model('pageTable', pageSchema);

module.exports = pageModel;
