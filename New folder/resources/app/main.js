var app = require('app'); 
var BrowserWindow = require('browser-window'); 
require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});
app.on('window-closed', function() {
  if (process.platform != 'darwin')
    quit();
});
app.on('ready', function() {
	var atomScreen = require('screen');
	var size = atomScreen.getPrimaryDisplay().workAreaSize;
	
	  mainWindow = new BrowserWindow({center:true, title:"fides", width:size.width, height:size.height,javascript:false});
		
	  mainWindow.loadUrl('file://' + __dirname + '/pages/client/addClient.html');

	  //mainWindow.openDevTools();

	  mainWindow.on('closed', function() {
		mainWindow = null;
	  });
  
});