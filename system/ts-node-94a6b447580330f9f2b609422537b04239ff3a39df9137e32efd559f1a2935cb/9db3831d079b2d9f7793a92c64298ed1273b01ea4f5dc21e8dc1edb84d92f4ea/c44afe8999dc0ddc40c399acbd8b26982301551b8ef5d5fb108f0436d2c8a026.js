"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoutesClass = (function () {
    function RoutesClass() {
    }
    return RoutesClass;
}());
exports.RoutesClass = RoutesClass;
/**
 * To add new group of routes go to plugins/routes/index.ts
 */
var RoutesFactory = (function () {
    function RoutesFactory(routes) {
        this.routes = [];
        this.routes.concat(routes.register());
    }
    RoutesFactory.prototype.register = function () {
        return this.routes;
    };
    return RoutesFactory;
}());
exports.RoutesFactory = RoutesFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFzdGVyL0RvY3VtZW50cy9IYXBpL2hhcGktc2VuZWNhLXRzL2FwaS1nYXRld2F5L3JvdXRlcy9pbmRleC50cyIsInNvdXJjZXMiOlsiL2hvbWUvbWFzdGVyL0RvY3VtZW50cy9IYXBpL2hhcGktc2VuZWNhLXRzL2FwaS1nYXRld2F5L3JvdXRlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBO0lBQUE7SUFFQSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZxQixrQ0FBVztBQUtqQzs7R0FFRztBQUNIO0lBR0ksdUJBQVksTUFBbUI7UUFGdkIsV0FBTSxHQUFVLEVBQUUsQ0FBQztRQUd2QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sZ0NBQVEsR0FBZjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTCxvQkFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBWFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEhhcGlTZXJ2ZXIgfSBmcm9tICcuLi9zZXZlci10eXBlcyc7XG5pbXBvcnQgeyBQaW5nUm91dGVzIH0gZnJvbSAnLi9waW5nL3Bpbmcucm91dGVzJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUm91dGVzQ2xhc3Mge1xuICAgIHB1YmxpYyBhYnN0cmFjdCByZWdpc3RlcigpOiBhbnlbXTtcbn1cblxuXG4vKipcbiAqIFRvIGFkZCBuZXcgZ3JvdXAgb2Ygcm91dGVzIGdvIHRvIHBsdWdpbnMvcm91dGVzL2luZGV4LnRzXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3V0ZXNGYWN0b3J5IGltcGxlbWVudHMgUm91dGVzQ2xhc3Mge1xuICAgIHByaXZhdGUgcm91dGVzOiBhbnlbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3Iocm91dGVzOiBSb3V0ZXNDbGFzcykge1xuICAgICAgICB0aGlzLnJvdXRlcy5jb25jYXQocm91dGVzLnJlZ2lzdGVyKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlcigpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXM7XG4gICAgfVxuXG59XG4iXX0=