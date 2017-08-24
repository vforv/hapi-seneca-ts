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
                    }, 'stdout'],
                myHTTPReporter: [{
                        module: 'good-squeeze',
                        name: 'Squeeze',
                        args: [{ error: '*' }]
                    }]
            }
        }
    }
];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFzdGVyL0RvY3VtZW50cy9IYXBpL2hhcGktc2VuZWNhLXRzL2FwaS1nYXRld2F5L21vZHVsZXMvaW5kZXgudHMiLCJzb3VyY2VzIjpbIi9ob21lL21hc3Rlci9Eb2N1bWVudHMvSGFwaS9oYXBpLXNlbmVjYS10cy9hcGktZ2F0ZXdheS9tb2R1bGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQXlEO0FBQ3pELElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBQ3ZDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUVyQyxJQUFNLENBQUMsR0FBRyxJQUFJLHNCQUFjLENBQUE7QUFFZixRQUFBLE9BQU8sR0FBRztJQUNuQjtRQUNJLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtLQUN2QjtJQUNEO1FBQ0ksUUFBUSxFQUFFLEtBQUs7S0FDbEIsRUFBRTtRQUNDLFFBQVEsRUFBRSxNQUFNO0tBQ25CO0lBQ0Q7UUFDSSxRQUFRLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQztLQUM3QjtJQUNEO1FBQ0ksUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUM7S0FDOUI7SUFDRDtRQUNJLFFBQVEsRUFBRSxPQUFPO0tBQ3BCLEVBQUU7UUFDQyxRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU07S0FDNUI7SUFDRDtRQUNJLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ3pCLE9BQU8sRUFBRTtZQUNMLFNBQVMsRUFBRTtnQkFDUCxPQUFPLEVBQUUsQ0FBQzt3QkFDTixNQUFNLEVBQUUsY0FBYzt3QkFDdEIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsSUFBSSxFQUFFLENBQUM7Z0NBQ0gsR0FBRyxFQUFFLEdBQUc7Z0NBQ1IsT0FBTyxFQUFFLEdBQUc7Z0NBQ1osUUFBUSxFQUFFLEdBQUc7NkJBQ2hCLENBQUM7cUJBQ0wsRUFBRTt3QkFDQyxNQUFNLEVBQUUsY0FBYztxQkFDekIsRUFBRSxRQUFRLENBQUM7Z0JBQ1osY0FBYyxFQUFFLENBQUM7d0JBQ2IsTUFBTSxFQUFFLGNBQWM7d0JBQ3RCLElBQUksRUFBRSxTQUFTO3dCQUNmLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO3FCQUN6QixDQUFDO2FBQ0w7U0FDSjtLQUNKO0NBQ0osQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlZ2lzdGVyUm91dGVzIH0gZnJvbSAnLi4vcGx1Z2lucy9yb3V0ZXMvaW5kZXgnO1xuY29uc3QgQmxpcHAgPSByZXF1aXJlKCdibGlwcCcpO1xuY29uc3QgQ2hhaXJvID0gcmVxdWlyZSgnY2hhaXJvJyk7XG5jb25zdCBTd2FnZ2VyID0gcmVxdWlyZSgnaGFwaS1zd2FnZ2VyJylcbmNvbnN0IExhYmJhYmxlID0gcmVxdWlyZSgnbGFiYmFibGUnKTtcblxuY29uc3QgUiA9IG5ldyBSZWdpc3RlclJvdXRlc1xuXG5leHBvcnQgY29uc3QgTW9kbHVlcyA9IFtcbiAgICB7XG4gICAgICAgIHJlZ2lzdGVyOiBSLnJlZ2lzdGVyXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHJlZ2lzdGVyOiBCbGlwcFxuICAgIH0sIHtcbiAgICAgICAgcmVnaXN0ZXI6IENoYWlyb1xuICAgIH0sXG4gICAge1xuICAgICAgICByZWdpc3RlcjogcmVxdWlyZSgnaW5lcnQnKVxuICAgIH0sXG4gICAge1xuICAgICAgICByZWdpc3RlcjogcmVxdWlyZSgndmlzaW9uJylcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcmVnaXN0ZXI6IFN3YWdnZXJcbiAgICB9LCB7XG4gICAgICAgIHJlZ2lzdGVyOiBMYWJiYWJsZS5wbHVnaW5cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcmVnaXN0ZXI6IHJlcXVpcmUoJ2dvb2QnKSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgcmVwb3J0ZXJzOiB7XG4gICAgICAgICAgICAgICAgY29uc29sZTogW3tcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiAnZ29vZC1zcXVlZXplJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1NxdWVlemUnLFxuICAgICAgICAgICAgICAgICAgICBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nOiAnKicsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiAnKicsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogJyonXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGU6ICdnb29kLWNvbnNvbGUnXG4gICAgICAgICAgICAgICAgfSwgJ3N0ZG91dCddLFxuICAgICAgICAgICAgICAgIG15SFRUUFJlcG9ydGVyOiBbe1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGU6ICdnb29kLXNxdWVlemUnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnU3F1ZWV6ZScsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3M6IFt7IGVycm9yOiAnKicgfV1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXVxuIl19