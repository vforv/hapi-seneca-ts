"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PingLogic = (function () {
    function PingLogic() {
    }
    PingLogic.prototype.getPing = function (req, reply) {
        req.seneca
            .act({
            role: 'ping',
            cmd: 'date',
            format: req.params.format
        }, function (err, out) {
            return reply(err || out);
        });
    };
    return PingLogic;
}());
exports.PingLogic = PingLogic;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFzdGVyL0RvY3VtZW50cy9IYXBpL2hhcGktc2VuZWNhLXRzL2FwaS1nYXRld2F5L2xvZ2ljL3BpbmcvcGluZy5sb2dpYy50cyIsInNvdXJjZXMiOlsiL2hvbWUvbWFzdGVyL0RvY3VtZW50cy9IYXBpL2hhcGktc2VuZWNhLXRzL2FwaS1nYXRld2F5L2xvZ2ljL3BpbmcvcGluZy5sb2dpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0k7SUFBZ0IsQ0FBQztJQUVqQiwyQkFBTyxHQUFQLFVBQVEsR0FBZ0IsRUFBRSxLQUEyQjtRQUVqRCxHQUFHLENBQUMsTUFBTTthQUNMLEdBQUcsQ0FDSjtZQUNJLElBQUksRUFBRSxNQUFNO1lBQ1osR0FBRyxFQUFFLE1BQU07WUFDWCxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNO1NBQzVCLEVBQ0QsVUFBQyxHQUFRLEVBQUUsR0FBUTtZQUNmLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFBO1FBQzVCLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEhhcGkgZnJvbSAnaGFwaSc7XG5pbXBvcnQgeyBIYXBpUmVxdWVzdCB9IGZyb20gJy4uLy4uL3NldmVyLXR5cGVzJztcbmV4cG9ydCBjbGFzcyBQaW5nTG9naWMge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBnZXRQaW5nKHJlcTogSGFwaVJlcXVlc3QsIHJlcGx5OiBIYXBpLlJlcGx5Tm9Db250aW51ZSkge1xuXG4gICAgICAgIHJlcS5zZW5lY2FcbiAgICAgICAgICAgIC5hY3QoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcm9sZTogJ3BpbmcnLFxuICAgICAgICAgICAgICAgIGNtZDogJ2RhdGUnLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogcmVxLnBhcmFtcy5mb3JtYXRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyOiBhbnksIG91dDogYW55KTogYW55ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwbHkoZXJyIHx8IG91dClcbiAgICAgICAgICAgIH0pXG4gICAgfVxufVxuIl19