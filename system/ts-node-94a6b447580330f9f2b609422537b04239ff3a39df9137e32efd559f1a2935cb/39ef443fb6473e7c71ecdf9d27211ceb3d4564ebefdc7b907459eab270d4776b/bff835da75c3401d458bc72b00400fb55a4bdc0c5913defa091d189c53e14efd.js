"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ping_actions_1 = require("../actions/ping.actions");
var ping = new ping_actions_1.PingActions;
var PingLogic = (function () {
    function PingLogic() {
    }
    PingLogic.prototype.getPing = function (options) {
        this.add('role:ping,cmd:date', ping.cb);
        return "getPing";
    };
    return PingLogic;
}());
exports.PingLogic = PingLogic;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFzdGVyL0RvY3VtZW50cy9IYXBpL2hhcGktc2VuZWNhLXRzL3Bpbmctc2VydmljZS9sb2dpYy9waW5nLmxvZ2ljLnRzIiwic291cmNlcyI6WyIvaG9tZS9tYXN0ZXIvRG9jdW1lbnRzL0hhcGkvaGFwaS1zZW5lY2EtdHMvcGluZy1zZXJ2aWNlL2xvZ2ljL3BpbmcubG9naWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx3REFBc0Q7QUFFdEQsSUFBTSxJQUFJLEdBQUcsSUFBSSwwQkFBVyxDQUFDO0FBRTdCO0lBQUE7SUFTQSxDQUFDO0lBUFEsMkJBQU8sR0FBZCxVQUFzQyxPQUFZO1FBRWhELElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXhDLE1BQU0sQ0FBQyxTQUFTLENBQUE7SUFDbEIsQ0FBQztJQUVILGdCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFUWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgU2VuZWNhIGZyb20gJ3NlbmVjYSc7XG5pbXBvcnQgeyBQaW5nQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvcGluZy5hY3Rpb25zJztcblxuY29uc3QgcGluZyA9IG5ldyBQaW5nQWN0aW9ucztcblxuZXhwb3J0IGNsYXNzIFBpbmdMb2dpYyB7XG5cbiAgcHVibGljIGdldFBpbmcodGhpczogU2VuZWNhLkluc3RhbmNlLCBvcHRpb25zOiBhbnkpOiBzdHJpbmcge1xuICAgIFxuICAgIHRoaXMuYWRkKCdyb2xlOnBpbmcsY21kOmRhdGUnLCBwaW5nLmNiKTtcblxuICAgIHJldHVybiBcImdldFBpbmdcIlxuICB9XG5cbn1cbiJdfQ==