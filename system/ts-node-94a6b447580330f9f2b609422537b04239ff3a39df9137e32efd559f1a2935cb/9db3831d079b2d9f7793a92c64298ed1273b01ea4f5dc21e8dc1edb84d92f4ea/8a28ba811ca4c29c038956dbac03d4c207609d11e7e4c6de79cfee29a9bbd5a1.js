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
                                response: '*',
                                error: '*'
                            }]
                    }, {
                        module: 'good-console'
                    }, 'stdout']
            }
        }
    }
];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFzdGVyL0RvY3VtZW50cy9IYXBpL2hhcGktc2VuZWNhLXRzL2FwaS1nYXRld2F5L21vZHVsZXMvaW5kZXgudHMiLCJzb3VyY2VzIjpbIi9ob21lL21hc3Rlci9Eb2N1bWVudHMvSGFwaS9oYXBpLXNlbmVjYS10cy9hcGktZ2F0ZXdheS9tb2R1bGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQXlEO0FBQ3pELElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBQ3ZDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUVyQyxJQUFNLENBQUMsR0FBRyxJQUFJLHNCQUFjLENBQUE7QUFFZixRQUFBLE9BQU8sR0FBRztJQUNuQjtRQUNJLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtLQUN2QjtJQUNEO1FBQ0ksUUFBUSxFQUFFLEtBQUs7S0FDbEIsRUFBRTtRQUNDLFFBQVEsRUFBRSxNQUFNO0tBQ25CO0lBQ0Q7UUFDSSxRQUFRLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQztLQUM3QjtJQUNEO1FBQ0ksUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUM7S0FDOUI7SUFDRDtRQUNJLFFBQVEsRUFBRSxPQUFPO0tBQ3BCLEVBQUU7UUFDQyxRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU07S0FDNUI7SUFDRDtRQUNJLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ3pCLE9BQU8sRUFBRTtZQUNMLFNBQVMsRUFBRTtnQkFDUCxPQUFPLEVBQUUsQ0FBQzt3QkFDTixNQUFNLEVBQUUsY0FBYzt3QkFDdEIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsSUFBSSxFQUFFLENBQUM7Z0NBQ0gsR0FBRyxFQUFFLEdBQUc7Z0NBQ1IsT0FBTyxFQUFFLEdBQUc7Z0NBQ1osUUFBUSxFQUFFLEdBQUc7Z0NBQ2IsS0FBSyxFQUFFLEdBQUc7NkJBQ2IsQ0FBQztxQkFDTCxFQUFFO3dCQUNDLE1BQU0sRUFBRSxjQUFjO3FCQUN6QixFQUFFLFFBQVEsQ0FBQzthQUNmO1NBQ0o7S0FDSjtDQUNKLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWdpc3RlclJvdXRlcyB9IGZyb20gJy4uL3BsdWdpbnMvcm91dGVzL2luZGV4JztcbmNvbnN0IEJsaXBwID0gcmVxdWlyZSgnYmxpcHAnKTtcbmNvbnN0IENoYWlybyA9IHJlcXVpcmUoJ2NoYWlybycpO1xuY29uc3QgU3dhZ2dlciA9IHJlcXVpcmUoJ2hhcGktc3dhZ2dlcicpXG5jb25zdCBMYWJiYWJsZSA9IHJlcXVpcmUoJ2xhYmJhYmxlJyk7XG5cbmNvbnN0IFIgPSBuZXcgUmVnaXN0ZXJSb3V0ZXNcblxuZXhwb3J0IGNvbnN0IE1vZGx1ZXMgPSBbXG4gICAge1xuICAgICAgICByZWdpc3RlcjogUi5yZWdpc3RlclxuICAgIH0sXG4gICAge1xuICAgICAgICByZWdpc3RlcjogQmxpcHBcbiAgICB9LCB7XG4gICAgICAgIHJlZ2lzdGVyOiBDaGFpcm9cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcmVnaXN0ZXI6IHJlcXVpcmUoJ2luZXJ0JylcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcmVnaXN0ZXI6IHJlcXVpcmUoJ3Zpc2lvbicpXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHJlZ2lzdGVyOiBTd2FnZ2VyXG4gICAgfSwge1xuICAgICAgICByZWdpc3RlcjogTGFiYmFibGUucGx1Z2luXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHJlZ2lzdGVyOiByZXF1aXJlKCdnb29kJyksXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHJlcG9ydGVyczoge1xuICAgICAgICAgICAgICAgIGNvbnNvbGU6IFt7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZTogJ2dvb2Qtc3F1ZWV6ZScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdTcXVlZXplJyxcbiAgICAgICAgICAgICAgICAgICAgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZzogJyonLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogJyonLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6ICcqJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiAnKidcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZTogJ2dvb2QtY29uc29sZSdcbiAgICAgICAgICAgICAgICB9LCAnc3Rkb3V0J11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbl1cbiJdfQ==