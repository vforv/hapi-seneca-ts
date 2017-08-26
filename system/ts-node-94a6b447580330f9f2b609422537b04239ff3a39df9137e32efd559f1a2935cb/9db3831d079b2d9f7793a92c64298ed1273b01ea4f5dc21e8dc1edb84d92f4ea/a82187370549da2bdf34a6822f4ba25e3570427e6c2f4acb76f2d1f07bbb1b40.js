"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PingLogic = (function () {
    function PingLogic() {
    }
    PingLogic.prototype.getPing = function (req, reply) {
        req.seneca
            .client({
            type: 'mqlight'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFzdGVyL0RvY3VtZW50cy9IYXBpL2hhcGktc2VuZWNhLXRzL2FwaS1nYXRld2F5L2xvZ2ljL3BpbmcvcGluZy5sb2dpYy50cyIsInNvdXJjZXMiOlsiL2hvbWUvbWFzdGVyL0RvY3VtZW50cy9IYXBpL2hhcGktc2VuZWNhLXRzL2FwaS1nYXRld2F5L2xvZ2ljL3BpbmcvcGluZy5sb2dpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0k7SUFBZ0IsQ0FBQztJQUVqQiwyQkFBTyxHQUFQLFVBQVEsR0FBZ0IsRUFBRSxLQUEyQjtRQUVqRCxHQUFHLENBQUMsTUFBTTthQUNMLE1BQU0sQ0FBQztZQUNKLElBQUksRUFBRSxTQUFTO1NBQ2xCLENBQUM7YUFDRCxHQUFHLENBQ0o7WUFDSSxJQUFJLEVBQUUsTUFBTTtZQUNaLEdBQUcsRUFBRSxNQUFNO1lBQ1gsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTTtTQUM1QixFQUNELFVBQUMsR0FBUSxFQUFFLEdBQVE7WUFDZixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQTtRQUM1QixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBIYXBpIGZyb20gJ2hhcGknO1xuaW1wb3J0IHsgSGFwaVJlcXVlc3QgfSBmcm9tICcuLi8uLi9zZXZlci10eXBlcyc7XG5leHBvcnQgY2xhc3MgUGluZ0xvZ2ljIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgZ2V0UGluZyhyZXE6IEhhcGlSZXF1ZXN0LCByZXBseTogSGFwaS5SZXBseU5vQ29udGludWUpIHtcblxuICAgICAgICByZXEuc2VuZWNhXG4gICAgICAgICAgICAuY2xpZW50KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbXFsaWdodCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWN0KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJvbGU6ICdwaW5nJyxcbiAgICAgICAgICAgICAgICBjbWQ6ICdkYXRlJyxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHJlcS5wYXJhbXMuZm9ybWF0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycjogYW55LCBvdXQ6IGFueSk6IGFueSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5KGVyciB8fCBvdXQpXG4gICAgICAgICAgICB9KVxuICAgIH1cbn1cbiJdfQ==