# jquery-capturewheel

Different browsers generate different wheel events.
These events were not defined by any standard until DOM3 which few browsers have yet implemented.

This module tries to simplify wheel events handling across different browsers
via converting various styles of events into single format.

To use this module call capturewheel() method for specified DOM element, and then simply capture
"dom3wheel" event.

Call of releasewheel() on same object will stop capturing of wheel events.

Module's event contains 'deltaY' and 'deltaMode' fields from DOM3 standard.
Original jQuery event saved in 'originalEvent' property.
You can use preventDefault() and stopPropagationMethods() as with original keyboard events.

Example:
  $("div").capturewheel().on("dom3wheel", event_handler);
