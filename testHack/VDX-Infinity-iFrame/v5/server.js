//jshint esnext: true
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var app = express();
var exec = require('child_process').exec;
var fs = require('fs');

console.log(__dirname);

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '../../../src/HTML5')));
app.use(express.static(path.join(__dirname, './')));
app.use(express.static(path.join(__dirname, './dist/muse')));
app.use(express.static(path.join(__dirname, '../../../src/muse/widgets')));
//app.use(express.static(path.join(__dirname, './dist/testHack')));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });


app.get('/sameDomain', function(req, res) {
    res.sendfile('sameDomain.html');
});

app.get('/new', function(req, res) {
    res.sendfile('newThing.html');
});

app.get('/different', function(req, res) {
    res.sendfile('new_unified_index.html');
});

app.get('/creative', function(req, res) {
    res.sendfile(path.join(__dirname, './dist/publisher_src.html'));
});
app.get('/iframe', function(req, res) {
    res.sendfile('under_construction_iframe.html');
});

app.get('/160x600', function(req, res) {
    res.sendfile('160x600.html');
});


app.get('/empty', function(req, res) {
    res.sendfile('empty.html');
});

app.get('/creative.html', function(req, res) {
    res.sendfile(path.join(__dirname, './dist/creative_src.html'));
});
app.get('/hack.html', function(req, res) {
    res.sendfile(path.join(__dirname, './dist/hack.html'));
});

app.listen('3000', function() {
    console.log('Server is running on PORT 3000');
});
app.listen('4000', function() {
    console.log('Server is running on PORT 4000');
});

//listen to inputs when the server is running
process.stdin.on('data', function(cmd) {
    cmd = cmd.toString().trim();

    var folderPath,
        adunitPath;

    if (cmd.indexOf('--source=') === 0) {
        adunitPath = cmd.split('=')[1];
        // adunitPath = path.join(__dirname, '../demoUnits/', folderPath);

        if (fs.existsSync(adunitPath + '/')) {
            exec(('npm run dev -- --source ' + adunitPath.replace(/ /g, '\\ ')), function(err, stdout, stderr) {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Adunit Built Successfully!!!');
            });
        } else {
            console.error(`Adunit '${adunitPath}' does not exists`);
        }
    }
});
