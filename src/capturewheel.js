/*global WheelEvent:false*/
(function($, undefined) {
"use strict";

function has_moz_wheel() {
	try {
		new WheelEvent("wheel");
		return true;
	} catch(e) {
		return false;
	}
}

$.fn.capturewheel = function() {
	var self = this;
	if (document.implementation.hasFeature("Events", "3.0") || has_moz_wheel()) {
		return self.on("wheel.capturewheel", function(evt) {
			var e = evt.originalEvent;
			evt.type = "dom3wheel";
			self.trigger($.Event(evt, { deltaY: e.deltaY, deltaMode: e.deltaMode }));
		});
	}
	if (document.onmousewheel !== undefined) {
		return self.on("mousewheel.capturewheel", function(evt) {
			var e = evt.originalEvent;
			evt.type = "dom3wheel";
			self.trigger($.Event(evt, { deltaY: -e.wheelDelta / 40.0, deltaMode: 1 }));
		});
	} else {
		return self.on("MozMousePixelScroll.capturewheel", function(evt) {
			var e = evt.originalEvent;
			evt.type = "dom3wheel";
			self.trigger($.Event(evt, { deltaY: e.detail, deltaMode: 0 }));
		});
	}
};

$.fn.releasewheel = function() {
	this.off(".capturewheel");
};

})(jQuery);
