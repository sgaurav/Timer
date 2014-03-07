/*global Timer:false, performance:false */
"use strict";

// var Timer = Timer || (function () {
// 	var Timer, timerPrototype,
// 	now = Date.now || function () {
// 		return (new Date()).getTime();
// 	};

// 	if (typeof chrome !== "undefined" && typeof chrome.Interval === "function") {
// 		// Google Chrome has a native timer constructor
// 		timerPrototype = (Timer = chrome.Interval).prototype;
// 		timerPrototype.milliseconds = function () {
// 			return this.microseconds() / 1000;
// 		};
// 	}
// 	else {
// 		timerPrototype = (Timer = function () {
// 			var startT = 0,
// 			stopT = 0;

// 			this.start = function () {
// 				stopT = 0;
// 				startT = performance.now();
// 			};

// 			this.stop = function () {
// 				stopT = now();
// 				if (startT === 0) {
// 					stopT = 0;
// 				}
// 			};
// 			this.milliseconds = function () {
// 				var stop = stopT;
// 				if (stop === 0 && startT !== 0) {
// 					stop = performance.now();
// 				}
// 				return stop - startT;
// 			};
// 		}).prototype;
// 		timerPrototype.microseconds = function () {
// 			return this.milliseconds() * 1000;
// 		};
// 	}
// 	timerPrototype.profile = function (fn, iterations) {
// 		if (typeof fn === "string") {
// 			fn = new Function(fn);
// 		}
// 		this.start();
// 		while (iterations--) {
// 			fn();
// 		}
// 		this.stop();
// 	};
// 	timerPrototype.seconds = function () {
// 		return this.milliseconds() / 1000;
// 	};
// 	return Timer;
// }());

(function() {
	var _startTime = 0, _stopTime = 0, _start, _stop, _microseconds;

	window.Timer = {};

	Timer.start = function(){
		_start();
	};

	Timer.stop = function(){
		_stop();
	};

	Timer.microseconds = function(){
		return _microseconds();
	};

	Timer.milliseconds = function(){
		return _microseconds()/1000;
	};

	Timer.seconds = function(){
		return _microseconds/1000000;
	};

	_start = function(){
		_startTime = performance.now();
		_stopTime = 0;
	};

	_stop = function(){
		_stopTime = performance.now();

		if(_startTime === 0){
			_stopTime = 0;
		}
	};

	_microseconds = function(){
		var stop = _stopTime;

		if(_startTime !== 0 && stop === 0){
			stop = performance.now();
		}

		return stop - _startTime;
	};
})();