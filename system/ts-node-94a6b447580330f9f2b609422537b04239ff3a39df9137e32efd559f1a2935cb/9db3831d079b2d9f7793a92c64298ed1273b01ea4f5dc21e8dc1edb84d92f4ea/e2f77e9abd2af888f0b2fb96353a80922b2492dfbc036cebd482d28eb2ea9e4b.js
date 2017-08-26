"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PingLogic = (function () {
    function PingLogic() {
    }
    PingLogic.prototype.getPing = function (req, reply) {
        req.seneca
            .client({
            id: "SenecaClient",
            type: 'mqlight',
            pins: [
                'role:ping,cmd:*'
            ]
        })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFzdGVyL0RvY3VtZW50cy9IYXBpL2hhcGktc2VuZWNhLXRzL2FwaS1nYXRld2F5L2xvZ2ljL3BpbmcvcGluZy5sb2dpYy50cyIsInNvdXJjZXMiOlsiL2hvbWUvbWFzdGVyL0RvY3VtZW50cy9IYXBpL2hhcGktc2VuZWNhLXRzL2FwaS1nYXRld2F5L2xvZ2ljL3BpbmcvcGluZy5sb2dpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBO0lBQ0k7SUFBZ0IsQ0FBQztJQUVqQiwyQkFBTyxHQUFQLFVBQVEsR0FBZ0IsRUFBRSxLQUEyQjtRQUVqRCxHQUFHLENBQUMsTUFBTTthQUNMLE1BQU0sQ0FBQztZQUNKLEVBQUUsRUFBRSxjQUFjO1lBQ2xCLElBQUksRUFBRSxTQUFTO1lBQ2YsSUFBSSxFQUFFO2dCQUNGLGlCQUFpQjthQUNwQjtTQUNKLENBQ0E7YUFDQSxHQUFHLENBQ0o7WUFDSSxJQUFJLEVBQUUsTUFBTTtZQUNaLEdBQUcsRUFBRSxNQUFNO1lBQ1gsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTTtTQUM1QixFQUNELFVBQUMsR0FBUSxFQUFFLEdBQVE7WUFDZixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQTtRQUM1QixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUF4QlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBIYXBpIGZyb20gJ2hhcGknO1xuaW1wb3J0IHsgSGFwaVJlcXVlc3QgfSBmcm9tICcuLi8uLi9zZXZlci10eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBQaW5nTG9naWMge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBnZXRQaW5nKHJlcTogSGFwaVJlcXVlc3QsIHJlcGx5OiBIYXBpLlJlcGx5Tm9Db250aW51ZSkge1xuXG4gICAgICAgIHJlcS5zZW5lY2FcbiAgICAgICAgICAgIC5jbGllbnQoe1xuICAgICAgICAgICAgICAgIGlkOiBcIlNlbmVjYUNsaWVudFwiLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdtcWxpZ2h0JyxcbiAgICAgICAgICAgICAgICBwaW5zOiBbXG4gICAgICAgICAgICAgICAgICAgICdyb2xlOnBpbmcsY21kOionXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFjdChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByb2xlOiAncGluZycsXG4gICAgICAgICAgICAgICAgY21kOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiByZXEucGFyYW1zLmZvcm1hdFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnI6IGFueSwgb3V0OiBhbnkpOiBhbnkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBseShlcnIgfHwgb3V0KVxuICAgICAgICAgICAgfSlcbiAgICB9XG59XG4iXX0=