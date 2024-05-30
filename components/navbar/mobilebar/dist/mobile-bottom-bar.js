"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var button_1 = require("@/components/ui/button");
var utils_1 = require("@/lib/utils");
var lucide_react_1 = require("lucide-react");
var navigation_1 = require("next/navigation");
var use_post_modal_1 = require("@/hooks/use-post-modal");
var react_1 = require("react");
var MobileBottombar = function (_a) {
    var userId = _a.userId;
    var pathname = navigation_1.usePathname();
    var isActive = pathname;
    var createPostModal = use_post_modal_1["default"]();
    var toggleCreatePost = react_1.useCallback(function () {
        createPostModal.onOpen();
    }, [createPostModal]);
    return (React.createElement("div", { className: "flex items-center justify-around w-full h-16 p-1" },
        React.createElement(button_1.Button, { variant: "ghost", asChild: true, className: utils_1.cn("text-purple-100 h-full", isActive) },
            React.createElement(link_1["default"], { href: "/" },
                React.createElement(lucide_react_1.HomeIcon, null))),
        React.createElement(button_1.Button, { variant: "ghost", className: "h-full" },
            React.createElement(link_1["default"], { href: "/search", className: utils_1.cn("text-purple-100", isActive && "fill-blue-400") },
                React.createElement(lucide_react_1.Search, null))),
        React.createElement(button_1.Button, { variant: "ghost", className: "h-full", size: "lg", onClick: toggleCreatePost },
            React.createElement(lucide_react_1.SquarePen, null)),
        React.createElement(button_1.Button, { variant: "ghost", className: "h-full" },
            React.createElement(link_1["default"], { href: "/activity/" + userId, className: utils_1.cn("text-purple-100", isActive && "fill-blue-400") },
                React.createElement(lucide_react_1.Heart, null))),
        React.createElement(button_1.Button, { variant: "ghost", className: "h-full", size: "sm" },
            React.createElement(link_1["default"], { href: "/profile/" + userId, className: utils_1.cn("text-purple-100", isActive && "fill-blue-400") },
                React.createElement(lucide_react_1.UserRound, null)))));
};
exports["default"] = MobileBottombar;
