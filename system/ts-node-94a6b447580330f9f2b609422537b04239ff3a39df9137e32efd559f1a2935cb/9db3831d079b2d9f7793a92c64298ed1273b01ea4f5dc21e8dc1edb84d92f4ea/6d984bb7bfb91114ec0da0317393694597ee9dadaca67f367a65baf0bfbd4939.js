"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ping_logic_1 = require("../../logic/ping/ping.logic");
var ping_validators_1 = require("../../validators/ping/ping.validators");
var PingRoutes = (function () {
    function PingRoutes(server) {
        this.server = server;
        this.pingLogic = new ping_logic_1.PingLogic;
    }
    PingRoutes.prototype.register = function () {
        return [
            {
                register: this.server.route({
                    method: 'GET',
                    path: '/ping/{format}',
                    handler: this.pingLogic.getPing,
                    config: {
                        description: 'This is ping route',
                        tags: ['api', 'v1', 'ping route'],
                        validate: {
                            params: ping_validators_1.pingValidator
                        }
                    }
                })
            }
        ];
    };
    return PingRoutes;
}());
exports.PingRoutes = PingRoutes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFzdGVyL0RvY3VtZW50cy9IYXBpL2hhcGktc2VuZWNhLXRzL2FwaS1nYXRld2F5L3JvdXRlcy9waW5nL3Bpbmcucm91dGVzLnRzIiwic291cmNlcyI6WyIvaG9tZS9tYXN0ZXIvRG9jdW1lbnRzL0hhcGkvaGFwaS1zZW5lY2EtdHMvYXBpLWdhdGV3YXkvcm91dGVzL3BpbmcvcGluZy5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwwREFBd0Q7QUFDeEQseUVBQXNFO0FBTXRFO0lBR0ksb0JBQW1CLE1BQVc7UUFBWCxXQUFNLEdBQU4sTUFBTSxDQUFLO1FBRnZCLGNBQVMsR0FBRyxJQUFJLHNCQUFTLENBQUM7SUFHakMsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFDSSxNQUFNLENBQUM7WUFDSDtnQkFDSSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ3hCLE1BQU0sRUFBRSxLQUFLO29CQUNiLElBQUksRUFBRSxnQkFBZ0I7b0JBQ3RCLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87b0JBQy9CLE1BQU0sRUFBRTt3QkFDSixXQUFXLEVBQUUsb0JBQW9CO3dCQUNqQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQzt3QkFDakMsUUFBUSxFQUFFOzRCQUNOLE1BQU0sRUFBRSwrQkFBYTt5QkFDeEI7cUJBQ0o7aUJBQ0osQ0FBQzthQUNMO1NBQ0osQ0FBQTtJQUVMLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7QUF6QlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBKb2kgZnJvbSAnam9pJztcbmltcG9ydCB7IEhhcGlTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXZlci10eXBlcyc7XG5pbXBvcnQgeyBQaW5nTG9naWMgfSBmcm9tICcuLi8uLi9sb2dpYy9waW5nL3BpbmcubG9naWMnO1xuaW1wb3J0IHsgcGluZ1ZhbGlkYXRvciB9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcnMvcGluZy9waW5nLnZhbGlkYXRvcnMnO1xuaW1wb3J0ICogYXMgSGFwaSBmcm9tICdoYXBpJztcbmltcG9ydCB7IFJvdXRlc0NsYXNzIH0gZnJvbSAnLi4vaW5kZXgnO1xuXG5cblxuZXhwb3J0IGNsYXNzIFBpbmdSb3V0ZXMgaW1wbGVtZW50cyBSb3V0ZXNDbGFzcyB7XG4gICAgcHVibGljIHBpbmdMb2dpYyA9IG5ldyBQaW5nTG9naWM7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmVyOiBhbnkpIHtcbiAgICB9XG5cbiAgICByZWdpc3RlcigpOiBhbnkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZ2lzdGVyOiB0aGlzLnNlcnZlci5yb3V0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvcGluZy97Zm9ybWF0fScsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IHRoaXMucGluZ0xvZ2ljLmdldFBpbmcsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIHBpbmcgcm91dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnczogWydhcGknLCAndjEnLCAncGluZyByb3V0ZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHBpbmdWYWxpZGF0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cblxuICAgIH1cbn0iXX0=