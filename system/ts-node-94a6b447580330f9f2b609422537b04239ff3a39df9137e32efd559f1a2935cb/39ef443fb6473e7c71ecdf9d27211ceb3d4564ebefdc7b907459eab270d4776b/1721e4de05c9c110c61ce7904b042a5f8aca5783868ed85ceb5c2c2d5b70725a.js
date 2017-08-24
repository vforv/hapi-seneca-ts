"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Moment = require("moment");
var PingActions = (function () {
    function PingActions() {
    }
    PingActions.prototype.cb = function (msg, done) {
        var date = Date.now();
        if (msg.format == 'formated') {
            date = Moment().format('MMMM Do YYYY, h:mm:ss a');
        }
        else if (msg.format == 'timestamp') {
            date = Date.now();
        }
        done(null, {
            date: date
        });
    };
    return PingActions;
}());
exports.PingActions = PingActions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFzdGVyL0RvY3VtZW50cy9IYXBpL2hhcGktc2VuZWNhLXRzL3Bpbmctc2VydmljZS9hY3Rpb25zL3BpbmcuYWN0aW9ucy50cyIsInNvdXJjZXMiOlsiL2hvbWUvbWFzdGVyL0RvY3VtZW50cy9IYXBpL2hhcGktc2VuZWNhLXRzL3Bpbmctc2VydmljZS9hY3Rpb25zL3BpbmcuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUFpQztBQUVqQztJQUFBO0lBZUEsQ0FBQztJQWJVLHdCQUFFLEdBQVQsVUFBVSxHQUFRLEVBQUUsSUFBUztRQUN6QixJQUFJLElBQUksR0FBb0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRXZDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLEdBQUcsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUNyQixDQUFDO1FBQ0QsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLElBQUksRUFBRSxJQUFJO1NBQ2IsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIE1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgY2xhc3MgUGluZ0FjdGlvbnMge1xuXG4gICAgcHVibGljIGNiKG1zZzogYW55LCBkb25lOiBhbnkpOiBhbnkge1xuICAgICAgICBsZXQgZGF0ZTogbnVtYmVyIHwgc3RyaW5nID0gRGF0ZS5ub3coKTtcblxuICAgICAgICBpZiAobXNnLmZvcm1hdCA9PSAnZm9ybWF0ZWQnKSB7XG4gICAgICAgICAgICBkYXRlID0gTW9tZW50KCkuZm9ybWF0KCdNTU1NIERvIFlZWVksIGg6bW06c3MgYScpO1xuICAgICAgICB9IGVsc2UgaWYgKG1zZy5mb3JtYXQgPT0gJ3RpbWVzdGFtcCcpIHtcbiAgICAgICAgICAgIGRhdGUgPSBEYXRlLm5vdygpXG4gICAgICAgIH1cbiAgICAgICAgZG9uZShudWxsLCB7XG4gICAgICAgICAgICBkYXRlOiBkYXRlXG4gICAgICAgIH0pXG4gICAgfVxuXG59Il19