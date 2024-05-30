"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var ProfileHeader = function (_a) {
    var _b, _c;
    var user = _a.user;
    if (!user)
        return null;
    return (React.createElement("div", null,
        React.createElement("div", { className: "flex items-center justify-between py-5" },
            React.createElement("div", { className: "flex flex-col w-full" },
                React.createElement("h2", { className: "pt-1 text-xl font-semibold" }, (_b = user[0]) === null || _b === void 0 ? void 0 : _b.name),
                React.createElement("span", { className: "text-sm pl-1" }, user[0].username)),
            React.createElement("div", null,
                React.createElement(image_1["default"], { src: (_c = user[0].image) !== null && _c !== void 0 ? _c : "", height: 84, width: 84, alt: "profile-image" }))),
        React.createElement("span", { className: "w-full" }, "😓")));
};
exports["default"] = react_1.memo(ProfileHeader);
