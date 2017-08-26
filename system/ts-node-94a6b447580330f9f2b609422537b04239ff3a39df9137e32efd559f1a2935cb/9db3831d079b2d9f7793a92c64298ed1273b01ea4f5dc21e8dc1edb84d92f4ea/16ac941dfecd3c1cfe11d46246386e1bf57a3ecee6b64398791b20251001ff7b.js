"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environments_1 = require("./environments");
var Hapi = require("hapi");
var index_1 = require("./modules/index");
var HOST = process.env.HOST;
var BASES = process.env.BASES;
// const BROADCAST = process.env.BROADCAST
var REGISTRY = process.env.REGISTRY;
var StartServer = (function () {
    function StartServer() {
        this.server = new Hapi.Server();
        var port = environments_1.getServerConfigs().port;
        this.server.connection({
            port: port,
            routes: {
                cors: true
            }
        });
    }
    StartServer.prototype.connectServer = function (env) {
        var _this = this;
        return this.server.register(index_1.Modlues, {
            routes: {
                prefix: '/v1'
            }
        }, function (err) {
            if (err) {
                throw err;
            }
            _this.server.initialize(function (err) {
                if (err) {
                    throw err;
                }
                // Don't continue to start server if module
                // is being require()'d (likely in a test)
                if (!env) {
                    // Starting the server
                    _this.server.seneca
                        .use('mqlight-transport', {})
                        .client({
                        id: "SenecaClient",
                        type: 'mqlight',
                        pins: [
                            'role:ping,cmd:*'
                        ],
                        timeout: 1
                    })
                        .use('mesh', {
                        // auto: true,
                        host: HOST,
                        bases: [BASES + ":39999"],
                    })
                        .ready(function () {
                        _this.server.start(function () {
                            var serverUri = _this.server.info.uri;
                            console.log("Server running at:, " + serverUri);
                        });
                    });
                }
            });
        });
    };
    return StartServer;
}());
exports.StartServer = StartServer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFzdGVyL0RvY3VtZW50cy9IYXBpL2hhcGktc2VuZWNhLXRzL2FwaS1nYXRld2F5L3NlcnZlci50cyIsInNvdXJjZXMiOlsiL2hvbWUvbWFzdGVyL0RvY3VtZW50cy9IYXBpL2hhcGktc2VuZWNhLXRzL2FwaS1nYXRld2F5L3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtDQUFrRDtBQUVsRCwyQkFBNkI7QUFFN0IseUNBQTBDO0FBQzFDLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0FBQzlCLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0FBQ2hDLDBDQUEwQztBQUMxQyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQTtBQUVyQztJQUdJO1FBRk8sV0FBTSxHQUFlLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBZ0IsQ0FBQztRQUd4RCxJQUFNLElBQUksR0FBRywrQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQztRQUVyQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNuQixJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRTtnQkFDSixJQUFJLEVBQUUsSUFBSTthQUNiO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLG1DQUFhLEdBQXBCLFVBQXFCLEdBQVk7UUFBakMsaUJBeURDO1FBdkRHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFPLEVBQUU7WUFDakMsTUFBTSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxLQUFLO2FBQ2hCO1NBQ0osRUFDRyxVQUFDLEdBQUc7WUFDQSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNOLE1BQU0sR0FBRyxDQUFBO1lBQ2IsQ0FBQztZQUVELEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQUMsR0FBRztnQkFDdkIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDTixNQUFNLEdBQUcsQ0FBQztnQkFDZCxDQUFDO2dCQUVELDJDQUEyQztnQkFDM0MsMENBQTBDO2dCQUMxQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ1Asc0JBQXNCO29CQUN0QixLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07eUJBQ2IsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQzt5QkFDNUIsTUFBTSxDQUFDO3dCQUNKLEVBQUUsRUFBRSxjQUFjO3dCQUNsQixJQUFJLEVBQUUsU0FBUzt3QkFDZixJQUFJLEVBQUU7NEJBQ0YsaUJBQWlCO3lCQUNwQjt3QkFDRCxPQUFPLEVBQUUsQ0FBQztxQkFDYixDQUFFO3lCQUNGLEdBQUcsQ0FBQyxNQUFNLEVBQUU7d0JBQ1QsY0FBYzt3QkFDZCxJQUFJLEVBQUUsSUFBSTt3QkFDVixLQUFLLEVBQUUsQ0FBSSxLQUFLLFdBQVEsQ0FBQztxQkFPNUIsQ0FBQzt5QkFFRCxLQUFLLENBQUM7d0JBRUgsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7NEJBQ2QsSUFBSSxTQUFTLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOzRCQUVyQyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF1QixTQUFXLENBQUMsQ0FBQzt3QkFDcEQsQ0FBQyxDQUFDLENBQUM7b0JBRVAsQ0FBQyxDQUFDLENBQUE7Z0JBQ1YsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLENBQUM7SUFFWCxDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQUFDLEFBekVELElBeUVDO0FBekVZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBnZXRTZXJ2ZXJDb25maWdzIH0gZnJvbSAnLi9lbnZpcm9ubWVudHMnO1xuaW1wb3J0ICogYXMgU2VuZWNhIGZyb20gXCJzZW5lY2FcIjtcbmltcG9ydCAqIGFzIEhhcGkgZnJvbSAnaGFwaSc7XG5pbXBvcnQgeyBIYXBpU2VydmVyIH0gZnJvbSAnLi9zZXZlci10eXBlcyc7XG5pbXBvcnQgeyBNb2RsdWVzIH0gZnJvbSAnLi9tb2R1bGVzL2luZGV4JztcbmNvbnN0IEhPU1QgPSBwcm9jZXNzLmVudi5IT1NUO1xuY29uc3QgQkFTRVMgPSBwcm9jZXNzLmVudi5CQVNFUztcbi8vIGNvbnN0IEJST0FEQ0FTVCA9IHByb2Nlc3MuZW52LkJST0FEQ0FTVFxuY29uc3QgUkVHSVNUUlkgPSBwcm9jZXNzLmVudi5SRUdJU1RSWVxuXG5leHBvcnQgY2xhc3MgU3RhcnRTZXJ2ZXIge1xuICAgIHB1YmxpYyBzZXJ2ZXI6IEhhcGlTZXJ2ZXIgPSBuZXcgSGFwaS5TZXJ2ZXIoKSBhcyBIYXBpU2VydmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IHBvcnQgPSBnZXRTZXJ2ZXJDb25maWdzKCkucG9ydDtcblxuICAgICAgICB0aGlzLnNlcnZlci5jb25uZWN0aW9uKHtcbiAgICAgICAgICAgIHBvcnQ6IHBvcnQsXG4gICAgICAgICAgICByb3V0ZXM6IHtcbiAgICAgICAgICAgICAgICBjb3JzOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25uZWN0U2VydmVyKGVudjogYm9vbGVhbik6IHZvaWQge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZlci5yZWdpc3RlcihNb2RsdWVzLCB7XG4gICAgICAgICAgICByb3V0ZXM6IHtcbiAgICAgICAgICAgICAgICBwcmVmaXg6ICcvdjEnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZlci5pbml0aWFsaXplKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgY29udGludWUgdG8gc3RhcnQgc2VydmVyIGlmIG1vZHVsZVxuICAgICAgICAgICAgICAgICAgICAvLyBpcyBiZWluZyByZXF1aXJlKCknZCAobGlrZWx5IGluIGEgdGVzdClcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbnYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0aW5nIHRoZSBzZXJ2ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VydmVyLnNlbmVjYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51c2UoJ21xbGlnaHQtdHJhbnNwb3J0Jywge30pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNsaWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIlNlbmVjYUNsaWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbXFsaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyb2xlOnBpbmcsY21kOionXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudXNlKCdtZXNoJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhdXRvOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3N0OiBIT1NULFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlczogW2Ake0JBU0VTfTozOTk5OWBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsaXN0ZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwaW5zOiBbJ3JvbGU6cGluZyxjbWQ6ZGF0ZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGhvc3Q6IEhPU1RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVhZHkoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VydmVyLnN0YXJ0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZXJ2ZXJVcmkgPSB0aGlzLnNlcnZlci5pbmZvLnVyaTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFNlcnZlciBydW5uaW5nIGF0OiwgJHtzZXJ2ZXJVcml9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxufSJdfQ==