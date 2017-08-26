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
                        .client({ type: 'mqlight' })
                        .act({ service: 'generate_id' }, function (err, result) {
                        console.log(JSON.stringify(result));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFzdGVyL0RvY3VtZW50cy9IYXBpL2hhcGktc2VuZWNhLXRzL2FwaS1nYXRld2F5L3NlcnZlci50cyIsInNvdXJjZXMiOlsiL2hvbWUvbWFzdGVyL0RvY3VtZW50cy9IYXBpL2hhcGktc2VuZWNhLXRzL2FwaS1nYXRld2F5L3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtDQUFrRDtBQUVsRCwyQkFBNkI7QUFFN0IseUNBQTBDO0FBQzFDLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0FBQzlCLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0FBQ2hDLDBDQUEwQztBQUMxQyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQTtBQUVyQztJQUdJO1FBRk8sV0FBTSxHQUFlLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBZ0IsQ0FBQztRQUd4RCxJQUFNLElBQUksR0FBRywrQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQztRQUVyQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNuQixJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRTtnQkFDSixJQUFJLEVBQUUsSUFBSTthQUNiO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLG1DQUFhLEdBQXBCLFVBQXFCLEdBQVk7UUFBakMsaUJBc0RDO1FBcERHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFPLEVBQUU7WUFDakMsTUFBTSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxLQUFLO2FBQ2hCO1NBQ0osRUFDRyxVQUFDLEdBQUc7WUFDQSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNOLE1BQU0sR0FBRyxDQUFBO1lBQ2IsQ0FBQztZQUVELEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQUMsR0FBRztnQkFDdkIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDTixNQUFNLEdBQUcsQ0FBQztnQkFDZCxDQUFDO2dCQUVELDJDQUEyQztnQkFDM0MsMENBQTBDO2dCQUMxQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ1Asc0JBQXNCO29CQUN0QixLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07eUJBQ2IsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQzt5QkFDNUIsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDO3lCQUMzQixHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLEVBQy9CLFVBQVUsR0FBTyxFQUFFLE1BQVU7d0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO29CQUN2QyxDQUFDLENBQUM7eUJBQ0QsR0FBRyxDQUFDLE1BQU0sRUFBRTt3QkFDVCxjQUFjO3dCQUNkLElBQUksRUFBRSxJQUFJO3dCQUNWLEtBQUssRUFBRSxDQUFJLEtBQUssV0FBUSxDQUFDO3FCQU81QixDQUFDO3lCQUVELEtBQUssQ0FBQzt3QkFFSCxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQzs0QkFDZCxJQUFJLFNBQVMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7NEJBRXJDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXVCLFNBQVcsQ0FBQyxDQUFDO3dCQUNwRCxDQUFDLENBQUMsQ0FBQztvQkFFUCxDQUFDLENBQUMsQ0FBQTtnQkFDVixDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsQ0FBQztJQUVYLENBQUM7SUFFTCxrQkFBQztBQUFELENBQUMsQUF0RUQsSUFzRUM7QUF0RVksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGdldFNlcnZlckNvbmZpZ3MgfSBmcm9tICcuL2Vudmlyb25tZW50cyc7XG5pbXBvcnQgKiBhcyBTZW5lY2EgZnJvbSBcInNlbmVjYVwiO1xuaW1wb3J0ICogYXMgSGFwaSBmcm9tICdoYXBpJztcbmltcG9ydCB7IEhhcGlTZXJ2ZXIgfSBmcm9tICcuL3NldmVyLXR5cGVzJztcbmltcG9ydCB7IE1vZGx1ZXMgfSBmcm9tICcuL21vZHVsZXMvaW5kZXgnO1xuY29uc3QgSE9TVCA9IHByb2Nlc3MuZW52LkhPU1Q7XG5jb25zdCBCQVNFUyA9IHByb2Nlc3MuZW52LkJBU0VTO1xuLy8gY29uc3QgQlJPQURDQVNUID0gcHJvY2Vzcy5lbnYuQlJPQURDQVNUXG5jb25zdCBSRUdJU1RSWSA9IHByb2Nlc3MuZW52LlJFR0lTVFJZXG5cbmV4cG9ydCBjbGFzcyBTdGFydFNlcnZlciB7XG4gICAgcHVibGljIHNlcnZlcjogSGFwaVNlcnZlciA9IG5ldyBIYXBpLlNlcnZlcigpIGFzIEhhcGlTZXJ2ZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgcG9ydCA9IGdldFNlcnZlckNvbmZpZ3MoKS5wb3J0O1xuXG4gICAgICAgIHRoaXMuc2VydmVyLmNvbm5lY3Rpb24oe1xuICAgICAgICAgICAgcG9ydDogcG9ydCxcbiAgICAgICAgICAgIHJvdXRlczoge1xuICAgICAgICAgICAgICAgIGNvcnM6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbm5lY3RTZXJ2ZXIoZW52OiBib29sZWFuKTogdm9pZCB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmVyLnJlZ2lzdGVyKE1vZGx1ZXMsIHtcbiAgICAgICAgICAgIHJvdXRlczoge1xuICAgICAgICAgICAgICAgIHByZWZpeDogJy92MSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVyclxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmVyLmluaXRpYWxpemUoKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCBjb250aW51ZSB0byBzdGFydCBzZXJ2ZXIgaWYgbW9kdWxlXG4gICAgICAgICAgICAgICAgICAgIC8vIGlzIGJlaW5nIHJlcXVpcmUoKSdkIChsaWtlbHkgaW4gYSB0ZXN0KVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVudikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhcnRpbmcgdGhlIHNlcnZlclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJ2ZXIuc2VuZWNhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnVzZSgnbXFsaWdodC10cmFuc3BvcnQnLCB7fSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2xpZW50KHsgdHlwZTogJ21xbGlnaHQnIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFjdCh7IHNlcnZpY2U6ICdnZW5lcmF0ZV9pZCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyOmFueSwgcmVzdWx0OmFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnVzZSgnbWVzaCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXV0bzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogSE9TVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZXM6IFtgJHtCQVNFU306Mzk5OTlgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGlzdGVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcGluczogWydyb2xlOnBpbmcsY21kOmRhdGUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBob3N0OiBIT1NUXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlYWR5KCgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcnZlci5zdGFydCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VydmVyVXJpID0gdGhpcy5zZXJ2ZXIuaW5mby51cmk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgcnVubmluZyBhdDosICR7c2VydmVyVXJpfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbn0iXX0=