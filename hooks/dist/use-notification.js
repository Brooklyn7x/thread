"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var zustand_1 = require("zustand");
var useNotificationStore = zustand_1.create(function (set) { return ({
    notifications: [],
    addNotification: function (notification) {
        return set(function (state) { return ({
            notifications: __spreadArrays(state.notifications, [notification])
        }); });
    }
}); });
exports["default"] = useNotificationStore;
