var path = require('path');

var SRC_DIR = path.resolve(__dirname,"src");
var DIST_DIR = path.resolve(__dirname,"dist");

var config = {
    entry:SRC_DIR + "/app/index.js",
    output:{
        filename:'bundle.js',
        path:DIST_DIR + "/app",
        publicPath:"/app/"
    },
    module:{
        rules:[
            {
                loader:"babel-loader",
                query:{
                    presets:["react","es2015"]
                }
            }
        ]
    }
};

module.exports = config;
