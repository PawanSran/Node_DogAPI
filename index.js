var dogapi = require ('dogapi');
var fs = require('fs');
const async = require('async');
const DEFAULT_PATH = `/Users/pawanjeetk/Documents/Workspace/Testing_pack/.report.json`;

var options = {
 api_key: 'ce70b42792fdc3670c7441ff5802701a',
 app_key: 'da4f4fc460d16296e0be1c7163a4e2205d6e8570',
};

// dogapi.initialize(options);
// var fileLoc = DEFAULT_PATH;
// var now = parseInt(new Date().getTime() / 1000);
// //write code to read the file and send metrics to account
// //var dat = [{}];
// var ops = [];
//
// var dat = [
//     // { metric: 'new_help',
//     //   host: 'darwin',
//     //   metric_type: 'gauge',
//     //   points: [[now, 10]]
//     // },
//     { metric: 'new_help',
//       host: 'darwin',
//       metric_type: 'count',
//       points: [[now, 10]]
//     },
//     {
//       metric: 'create_help',
//       host: 'darwin',
//       metric_type: 'count',
//       points: 1
//     }
//    ];
//
//
//     dogapi.metric.send_all(dat , function(err, res){
//         if(err){
//           console.log("error");
//           console.log(err);
//         }
//         else {
//           console.log("no error");
//           console.log(res);
//         }
//     });

// fs.readFile(fileLoc, 'utf8', function(err, data) {
//   console.log("reading file and logging it on console");
//     if (err) throw err;
//     //dat = data;
// });

// function func3(arg , callback) {
//   console.log("parallel first function", arg);
//   //callback(null);
// }
//
// function func4(callback) {
//   return async.waterfall([
//    function func1(callback)
//     {
//       console.log("waterfall first function");
//       setTimeout( function(){ callback(null); } , 1500);
//     },
//     function func2(callback){
//       console.log("waterfall second function");
//       callback(null);
//     }
//   ], function(error){
//
//   });
// }
//
// //ops.push(func3.bind(null));
// //ops.push(func4.bind(null));
//
// async.parallel(
//   [
//     func3("test"),
//     func4
//   ], function(error)
//   {
//         console.log("in callback error for parallel" , error);
//   });


const path = "/Users/pawanjeetk/Documents/Workspace/freshapps_samples-pvt/Freshsales/SalesRevenue/.fdk/metrics";

fs.readFile(path, 'utf8', function(err, data) {
  if(err){
    console.log("error" , err);
  }
  console.log("data" , data);
  var metrics = JSON.parse(data);

  console.log("metrics:" , metrics);

  var dat2 = metrics["metricData"];
  console.log(dat2);

});

module.exports = {
  sendMetric(file) {

  }
}
