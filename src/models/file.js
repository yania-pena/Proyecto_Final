var mongoose = require('mongoose');
var Schema = mongoose.Schema;

fileSchema = new Schema( {
	fileName: String,
	filePath: String,
	fileUploadBy: String,
	fileUploadOn: Date,
	fileAchieve: Boolean
});
File = mongoose.model('File', fileSchema);

module.exports = File;