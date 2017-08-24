"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../plugins/routes/index");
var Blipp = require('blipp');
var Chairo = require('chairo');
var Swagger = require('hapi-swagger');
var Labbable = require('labbable');
var R = new index_1.RegisterRoutes;
exports.Modlues = [
    {
        register: R.register
    },
    {
        register: Blipp
    }, {
        register: Chairo
    },
    {
        register: require('inert')
    },
    {
        register: require('vision')
    },
    {
        register: Swagger
    }, {
        register: Labbable.plugin
    },
    {
        register: require('good'),
        options: {
            reporters: {
                console: [{
                        module: 'good-squeeze',
                        name: 'Squeeze',
                        args: [{
                                log: '*',
                                request: '*',
                                response: '*'
                            }]
                    }, {
                        module: 'good-console'
                    }, 'stdout']
            }
        }
    }
];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFzdGVyL0RvY3VtZW50cy9IYXBpL2hhcGktc2VuZWNhLXRzL2FwaS1nYXRld2F5L21vZHVsZXMvaW5kZXgudHMiLCJzb3VyY2VzIjpbIi9ob21lL21hc3Rlci9Eb2N1bWVudHMvSGFwaS9oYXBpLXNlbmVjYS10cy9hcGktZ2F0ZXdheS9tb2R1bGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQXlEO0FBQ3pELElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBQ3ZDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUVyQyxJQUFNLENBQUMsR0FBRyxJQUFJLHNCQUFjLENBQUE7QUFFZixRQUFBLE9BQU8sR0FBRztJQUNuQjtRQUNJLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtLQUN2QjtJQUNEO1FBQ0ksUUFBUSxFQUFFLEtBQUs7S0FDbEIsRUFBRTtRQUNDLFFBQVEsRUFBRSxNQUFNO0tBQ25CO0lBQ0Q7UUFDSSxRQUFRLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQztLQUM3QjtJQUNEO1FBQ0ksUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUM7S0FDOUI7SUFDRDtRQUNJLFFBQVEsRUFBRSxPQUFPO0tBQ3BCLEVBQUU7UUFDQyxRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU07S0FDNUI7SUFDRDtRQUNJLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ3pCLE9BQU8sRUFBRTtZQUNMLFNBQVMsRUFBRTtnQkFDUCxPQUFPLEVBQUUsQ0FBQzt3QkFDTixNQUFNLEVBQUUsY0FBYzt3QkFDdEIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsSUFBSSxFQUFFLENBQUM7Z0NBQ0gsR0FBRyxFQUFFLEdBQUc7Z0NBQ1IsT0FBTyxFQUFFLEdBQUc7Z0NBQ1osUUFBUSxFQUFFLEdBQUc7NkJBQ2hCLENBQUM7cUJBQ0wsRUFBRTt3QkFDQyxNQUFNLEVBQUUsY0FBYztxQkFDekIsRUFBRSxRQUFRLENBQUM7YUFDZjtTQUNKO0tBQ0o7Q0FDSixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVnaXN0ZXJSb3V0ZXMgfSBmcm9tICcuLi9wbHVnaW5zL3JvdXRlcy9pbmRleCc7XG5jb25zdCBCbGlwcCA9IHJlcXVpcmUoJ2JsaXBwJyk7XG5jb25zdCBDaGFpcm8gPSByZXF1aXJlKCdjaGFpcm8nKTtcbmNvbnN0IFN3YWdnZXIgPSByZXF1aXJlKCdoYXBpLXN3YWdnZXInKVxuY29uc3QgTGFiYmFibGUgPSByZXF1aXJlKCdsYWJiYWJsZScpO1xuXG5jb25zdCBSID0gbmV3IFJlZ2lzdGVyUm91dGVzXG5cbmV4cG9ydCBjb25zdCBNb2RsdWVzID0gW1xuICAgIHtcbiAgICAgICAgcmVnaXN0ZXI6IFIucmVnaXN0ZXJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcmVnaXN0ZXI6IEJsaXBwXG4gICAgfSwge1xuICAgICAgICByZWdpc3RlcjogQ2hhaXJvXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHJlZ2lzdGVyOiByZXF1aXJlKCdpbmVydCcpXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHJlZ2lzdGVyOiByZXF1aXJlKCd2aXNpb24nKVxuICAgIH0sXG4gICAge1xuICAgICAgICByZWdpc3RlcjogU3dhZ2dlclxuICAgIH0sIHtcbiAgICAgICAgcmVnaXN0ZXI6IExhYmJhYmxlLnBsdWdpblxuICAgIH0sXG4gICAge1xuICAgICAgICByZWdpc3RlcjogcmVxdWlyZSgnZ29vZCcpLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICByZXBvcnRlcnM6IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlOiBbe1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGU6ICdnb29kLXNxdWVlemUnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnU3F1ZWV6ZScsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2c6ICcqJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6ICcqJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiAnKidcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZTogJ2dvb2QtY29uc29sZSdcbiAgICAgICAgICAgICAgICB9LCAnc3Rkb3V0J11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbl1cbiJdfQ==