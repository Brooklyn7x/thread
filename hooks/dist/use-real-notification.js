"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("convex/react");
var api_1 = require("@/convex/_generated/api");
var use_notification_1 = require("@/hooks/use-notification");
var useRealTimeNotifications = function (userId) {
    var _a = use_notification_1["default"](function (state) { return ({
        notifications: state.notifications,
        hasLoaded: state.hasLoaded,
        setNotifications: state.setNotifications,
        addNotification: state.addNotification,
        setHasLoaded: state.setHasLoaded
    }); }), notifications = _a.notifications, hasLoaded = _a.hasLoaded, setNotifications = _a.setNotifications, addNotification = _a.addNotification, setHasLoaded = _a.setHasLoaded;
    var fetchedNotifications = react_2.useQuery(api_1.api.notifications.fetchNotifications, { userId: userId });
    react_1.useEffect(function () {
        if (!hasLoaded && fetchedNotifications) {
            setNotifications(fetchedNotifications);
            setHasLoaded(true);
        }
    }, [hasLoaded, fetchedNotifications, setNotifications, setHasLoaded]);
    react_1.useEffect(function () {
        if (fetchedNotifications && hasLoaded) {
            var newNotifications = fetchedNotifications.filter(function (notification) { return !notifications.some(function (n) { return n._id === notification._id; }); });
            newNotifications.forEach(function (notification) {
                addNotification(notification);
            });
        }
    }, [fetchedNotifications, hasLoaded, notifications, addNotification]);
};
exports["default"] = useRealTimeNotifications;
