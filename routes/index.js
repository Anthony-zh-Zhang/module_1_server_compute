var express = require('express');
var router = express.Router();
var fs = require('fs');
var exec = require('exec');
var AudioContext = require('web-audio-api').AudioContext

context = new AudioContext

var pcmdata = [] ;

//var wap = require('web-audio-api');
//var context = wap.AudioContext;
//var audio = require('audio');
//var ffmpeg = require('fluent-ffmpeg');
//var AudioContext = window.AudioContext || window.webkitAudioContext;
//audioCtx = new AudioContext();

// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('index', { title: 'Express' });
});

router.use('/public', express.static(__dirname + '/public'));



// line 22-45 works fine!!!
/** Implementing Simple Music Server using Express JS **/

// router.get('/', function(req,res, next){
// 	// File to be served
//
// 	//var fileId = req.query.id;
// 	//var file = __dirname + '/music/' + fileId;
//   var file =  './public/Jiangnan.mp3';
// 	fs.exists(file,function(exists){
// 		if(exists)
// 		{
//
// 			var rstream = fs.createReadStream(file);
// 			rstream.pipe(res);
//       var ffmpeg = require('ffmpeg');
//
//       new ffmpeg('./public/Jiangnan.mp3', function (err, video) {
//       		if (!err) {
//       			console.log('The video is ready to be processed');
//       		} else {
//       			console.log('Error: ' + err);
//       		}
//       	});
//       }
//
// 		else
// 		{
// 			res.send("Its a 404");
// 			res.end();
// 		}
//
// 	});
//
// });


// var soundfile = "public/Jiangnan.mp3"
// decodeSoundFile(soundfile);
// function decodeSoundFile(soundfile){
//   console.log("decoding mp3 file ", soundfile, " ..... ")
//   fs.readFile(soundfile, function(err, buf) {
//     if (err) throw err
//     context.decodeAudioData(buf, function(audioBuffer) {
//       console.log(audioBuffer.numberOfChannels, audioBuffer.length, audioBuffer.sampleRate, audioBuffer.duration);
//       pcmdata = (audioBuffer.getChannelData(0)) ;
//       samplerate = audioBuffer.sampleRate; // store sample rate
//       maxvals = [] ; max = 0 ;
//       playsound(soundfile)
//       findPeaks(pcmdata, samplerate)
//     }, function(err) { throw err })
//
//   })
// }
// //findPeaks
// function findPeaks(pcmdata, samplerate){
//   var interval = 0.05 * 1000 ; index = 0 ;
//   var step = Math.round( samplerate * (interval/1000) );
//   var max = 0 ;
//   var prevmax = 0 ;
//   var prevdiffthreshold = 0.3 ;
//
//   //loop through song in time with sample rate
//   var samplesound = setInterval(function() {
//     if (index >= pcmdata.length) {
//       clearInterval(samplesound);
//       console.log("finished sampling sound")
//       return;
//     }
//
//     for(var i = index; i < index + step ; i++){ max = pcmdata[i] > max ? pcmdata[i].toFixed(1)  : max ;
//     }
//
//     // Spot a significant increase? Potential peak
//     bars = getbars(max) ;
//     if(max-prevmax >= prevdiffthreshold){
//       bars = bars + " == peak == "
//     }
//
//     // Print out mini equalizer on commandline
//     console.log(bars, max )
//     prevmax = max ; max = 0 ; index += step ;
//   }, interval,pcmdata);
// }
//
//
//
// function getbars(val){
//   bars = ""
//   for (var i = 0 ; i < val*50 + 2 ; i++){
//     bars= bars + "|";
//   }
//   return bars ;
// }
//
//
//
// function playsound(soundfile){
// // linux or raspi
// // var create_audio = exec('aplay'+soundfile, {maxBuffer: 1024 * 500}, function (error, stdout, stderr) {
// var create_audio = exec('ffplay -autoexit '+soundfile, {maxBuffer: 1024 * 500}, function (error, stdout, stderr) {
// if (error !== null) {
// console.log('exec error: ' + error);
// }else {
// //console.log(" finshed ");
// //micInstance.resume();
// }
// });
// }





module.exports = router;
