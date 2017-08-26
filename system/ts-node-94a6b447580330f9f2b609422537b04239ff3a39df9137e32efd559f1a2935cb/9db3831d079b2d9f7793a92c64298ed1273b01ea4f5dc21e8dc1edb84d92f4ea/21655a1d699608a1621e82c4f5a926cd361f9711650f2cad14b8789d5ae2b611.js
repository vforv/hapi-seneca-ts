"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ping_routes_1 = require("../../routes/ping/ping.routes");
var index_1 = require("../../routes/index");
var RegisterRoutes = (function () {
    function RegisterRoutes() {
        var _this = this;
        this.register = function (server, options, next) {
            server.bind(_this);
            //New group of routes
            var routes = new index_1.RoutesFactory(new ping_routes_1.PingRoutes(server));
            //New group of routes
            routes.register();
            _this._register(server, {});
            next();
        };
        this.register.attributes = {
            pkg: require('../../package.json')
        };
    }
    RegisterRoutes.prototype._register = function (server, options) {
        // Register
        return 'register';
    };
    RegisterRoutes.prototype.errorInit = function (error) {
        if (error) {
            console.log('Error: Failed to load plugin (RegisterRoutes):', error);
        }
    };
    return RegisterRoutes;
}());
exports.RegisterRoutes = RegisterRoutes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFzdGVyL0RvY3VtZW50cy9IYXBpL2hhcGktc2VuZWNhLXRzL2FwaS1nYXRld2F5L3BsdWdpbnMvcm91dGVzL2luZGV4LnRzIiwic291cmNlcyI6WyIvaG9tZS9tYXN0ZXIvRG9jdW1lbnRzL0hhcGkvaGFwaS1zZW5lY2EtdHMvYXBpLWdhdGV3YXkvcGx1Z2lucy9yb3V0ZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2REFBMkQ7QUFDM0QsNENBQW1EO0FBR25EO0lBQ0k7UUFBQSxpQkFJQztRQUVELGFBQVEsR0FBYyxVQUFDLE1BQWtCLEVBQUUsT0FBWSxFQUFFLElBQVM7WUFDOUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQztZQUNsQixxQkFBcUI7WUFDckIsSUFBSSxNQUFNLEdBQUcsSUFBSSxxQkFBYSxDQUFDLElBQUksd0JBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1lBQ3RELHFCQUFxQjtZQUNyQixNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFbEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDM0IsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUM7UUFkRSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRztZQUN2QixHQUFHLEVBQUUsT0FBTyxDQUFDLG9CQUFvQixDQUFDO1NBQ3JDLENBQUM7SUFDTixDQUFDO0lBYU8sa0NBQVMsR0FBakIsVUFBa0IsTUFBa0IsRUFBRSxPQUFZO1FBQzlDLFdBQVc7UUFDWCxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxrQ0FBUyxHQUFULFVBQVUsS0FBVTtRQUNoQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6RSxDQUFDO0lBQ0wsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQTVCRCxJQTRCQztBQTVCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpbmdSb3V0ZXMgfSBmcm9tICcuLi8uLi9yb3V0ZXMvcGluZy9waW5nLnJvdXRlcyc7XG5pbXBvcnQgeyBSb3V0ZXNGYWN0b3J5IH0gZnJvbSAnLi4vLi4vcm91dGVzL2luZGV4JztcbmltcG9ydCB7IEhhcGlTZXJ2ZXIsIElSZWdpc3RlciB9IGZyb20gJy4uLy4uL3NldmVyLXR5cGVzJztcblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyUm91dGVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlci5hdHRyaWJ1dGVzID0ge1xuICAgICAgICAgICAgcGtnOiByZXF1aXJlKCcuLi8uLi9wYWNrYWdlLmpzb24nKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlZ2lzdGVyOiBJUmVnaXN0ZXIgPSAoc2VydmVyOiBIYXBpU2VydmVyLCBvcHRpb25zOiBhbnksIG5leHQ6IGFueSkgPT4ge1xuICAgICAgICBzZXJ2ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgLy9OZXcgZ3JvdXAgb2Ygcm91dGVzXG4gICAgICAgIGxldCByb3V0ZXMgPSBuZXcgUm91dGVzRmFjdG9yeShuZXcgUGluZ1JvdXRlcyhzZXJ2ZXIpKVxuICAgICAgICAvL05ldyBncm91cCBvZiByb3V0ZXNcbiAgICAgICAgcm91dGVzLnJlZ2lzdGVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9yZWdpc3RlcihzZXJ2ZXIsIHt9KTtcbiAgICAgICAgbmV4dCgpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIF9yZWdpc3RlcihzZXJ2ZXI6IEhhcGlTZXJ2ZXIsIG9wdGlvbnM6IGFueSkge1xuICAgICAgICAvLyBSZWdpc3RlclxuICAgICAgICByZXR1cm4gJ3JlZ2lzdGVyJztcbiAgICB9XG5cbiAgICBlcnJvckluaXQoZXJyb3I6IGFueSkge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogRmFpbGVkIHRvIGxvYWQgcGx1Z2luIChSZWdpc3RlclJvdXRlcyk6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==