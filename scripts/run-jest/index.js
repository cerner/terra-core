var exec = require('child_process').exec;
var spawn = require('child_process').spawn;
var path = require("path");
var os = require('os');

function log(error, stdout, stderr) {
	if (error) {
		console.error(`exec error: ${error}`);
		return;
	}
	console.log(`stdout: ${stdout}`);
	console.log(`stderr: ${stderr}`);
}

var regex = "";
if (os.type() === 'Linux') 
	regex = process.env.npm_package_name + "/tests";
else if (os.type() === 'Darwin') 
	regex = process.env.npm_package_name + "/tests";
else if (os.type() === 'Windows_NT') 
	regex = process.env.npm_package_name + "\\\\tests";
else
   throw new Error("Unsupported OS found: " + os.type());

var jest = spawn("jest.cmd", [process.env.npm_package_name + "\\\\tests", "--config", "../../jestconfig.json"], {stdio: 'inherit'});
jest.on('error', function (err) {
  console.log('jest error', err);
});

