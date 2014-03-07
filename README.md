Timer
=====

Inspired from https://github.com/eligrey/timer.js, Timer is a javascript library for profiling web apps upto microsecond level. Timer uses `performace.now()` to obtain precision better than usual javascript `Date.now()`.

API
=====

`Timer.start();`
Starts the Timer
  
`Timer.stop();`
Stops the Timer

`Timer.microseconds();`
Returns micro-seconds passed since the time when Timer was started.

`Timer.milliseconds();`
Returns milliseconds passed since the time when Timer was started.

`Timer.seconds();`
Returns seconds passed since the time when Timer was started.

Support
========

Timer can be used in Chrome 24.0+, Firefox 15.0+, IE 10.0+ and Opera 15.0
