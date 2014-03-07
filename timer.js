/*global Timer:false, performance:false */
"use strict";

(function(window) {
	var Local = (function(window){

		function Local(){
			this.startTime = 0;
			this.stopTime = 0;
		}

		Local.prototype.start = function(){
			this.startTime = performance.now();
			this.stopTime = 0;
		};

		Local.prototype.stop = function(){
			this.stopTime = performance.now();

			if(this.startTime === 0){
				this.stopTime = 0;
			}
		};

		Local.prototype.milliseconds = function(){
			var stop = this.stopTime;

			if(this.startTime !== 0 && stop === 0){
				stop = performance.now();
			}

			return stop - this.startTime;
		};

		return Local;
	})(window);

	var Timer = function Timer(){
		Local = new Local();
	};

	Timer.prototype.start = function(){
		Local.start();
	};

	Timer.prototype.stop = function(){
		Local.stop();
	};

	Timer.prototype.microseconds = function(){
		return Local.milliseconds()*1000;
	};

	Timer.prototype.milliseconds = function(){
		return Local.milliseconds();
	};

	Timer.prototype.seconds = function(){
		return Local.milliseconds()/1000;
	};

	var Timer = new Timer();
	window.Timer = Timer;
})(window);