// log levels: Debug, Info, Error, etc

var log = function(loglevel, message, data) {
	// console.log("LOG [" + loglevel + "]: " + message);
	// console.log("    Timestamp:" + new Date() + " " + loglevel + " :" + message);
	
	// if (data) {
	// 	console.log("    Data: " + JSON.stringify(data));
	// }
};

exports.log = log;