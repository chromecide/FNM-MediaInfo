var mediainfo = require("mediainfo");

var mixinFunctions = {
	init: function(cfg, callback){
		var thisNode = this;
		//add properties that are needed by this mixin
	
		//add Events that are emitted by this mixin
		
		
		//should be called when the mixin is actually ready, not simp;y at the end of the init function
		var mixinReturn = {
			name: 'FNM-MediaInfo',
			config: cfg
		}
		
		if(callback){
			callback(mixinReturn);
		}
		
		thisNode.emit('Mixin.Ready', mixinReturn);
	},
	FNM_MediaInfo_getInfo: function(path, callback){
		var thisNode = this;

		mediainfo("/path/to/something.mp3", function(err, res) {
	  		if (!err) {
	    		thisNode.emit('FNM-MediaInfo.Info', {
					path: path,
					info: res
				});
	  		}
			
			if(callback){
				callback(err?true:false, err?err:{
					path: path,
					info: res
				});
			}
		});
		
		return true;
	}
}

if (typeof define === 'function' && define.amd) {
	define(mixinFunctions);
} else {
	module.exports = mixinFunctions;
}
	