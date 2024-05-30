"use strict";
exports.__esModule = true;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var Follower = function (_a) {
    var followerCount = _a.followerCount;
    return (React.createElement("div", { className: "flex items-center justify-between my-3" },
        React.createElement("div", { className: "text-sm" },
            followerCount || 0,
            " Followers . Hyper.ss"),
        React.createElement("div", { className: "pl-3 flex" },
            React.createElement(lucide_react_1.InstagramIcon, { className: "w-6 h-6" }))));
};
exports["default"] = react_1.memo(Follower);
