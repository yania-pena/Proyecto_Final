var express = require('express');
var router = express.Router();
var File= require('../models/file');
const multer = require('multer');
const upload = multer();

router.get('/insert', function (req, res, next) {
	console.log("profile");
	User.findOne({unique_id:req.session.userId},function(err,data){
		console.log("data");
		console.log(data);
		if(!data){
			res.redirect('/');
		}else{
			//console.log("found");
			return res.render('insert.ejs', {"name":data.username,"email":data.email});
		}
	});
});


router.post('/insert', upload.single('data'), async (req, res) => {
	const archivo = req.file;
	
  var newData = new File({
	fileName: archivo.filename,
	  filePath: archivo.filePath,
	fileUploadBy: archivo.fileUploadBy,
	fileUploadOn: archivo.fileUploadOn,
	fileAchieve: archivo.fileAchieve
});

newData.save(function(err, Datos){
	if(err)
		console.log(err);
	else
		console.log('Success');
});
});
module.exports = router;