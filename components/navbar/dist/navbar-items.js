"use client";
"use strict";
exports.__esModule = true;
var button_1 = require("@/components/ui/button");
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var nextjs_1 = require("@clerk/nextjs");
var navigation_1 = require("next/navigation");
var utils_1 = require("@/lib/utils");
var use_post_modal_1 = require("@/hooks/use-post-modal");
var react_1 = require("react");
var NavbarItems = function () {
    var _a, _b, _c;
    var session = nextjs_1.useUser();
    var pathname = navigation_1.usePathname();
    var isMainPage = pathname === "/";
    var createPostModal = use_post_modal_1["default"]();
    var toggleCreatePost = react_1.useCallback(function () {
        if (!session) {
            return null;
        }
        createPostModal.onOpen();
    }, [session, createPostModal]);
    return (React.createElement("div", { className: "flex items-center justify-between w-full h-full px-4" },
        React.createElement(button_1.Button, { variant: "ghost", className: utils_1.cn("h-full", isMainPage), size: "lg" },
            React.createElement(link_1["default"], { href: "/" },
                React.createElement(lucide_react_1.HomeIcon, null))),
        React.createElement(button_1.Button, { variant: "ghost", className: utils_1.cn("h-full ", pathname === "/search" && "bg-secondary"), size: "lg" },
            React.createElement(link_1["default"], { href: "/search" },
                React.createElement(lucide_react_1.Search, null))),
        React.createElement(button_1.Button, { variant: "ghost", className: "h-full", size: "lg", onClick: toggleCreatePost },
            React.createElement(lucide_react_1.SquarePen, null)),
        React.createElement(button_1.Button, { asChild: true, variant: "ghost", className: "h-full", size: "lg" },
            React.createElement(link_1["default"], { href: "/activity/" + ((_a = session === null || session === void 0 ? void 0 : session.user) === null || _a === void 0 ? void 0 : _a.id), className: utils_1.cn("", pathname === "/activity" && "bg-secondary") },
                React.createElement(lucide_react_1.Heart, null))),
        React.createElement(button_1.Button, { asChild: true, variant: "ghost", className: "h-full", size: "lg" },
            React.createElement(link_1["default"], { href: "/profile/" + ((_b = session === null || session === void 0 ? void 0 : session.user) === null || _b === void 0 ? void 0 : _b.id), className: utils_1.cn("", pathname === "/profile/" + ((_c = session === null || session === void 0 ? void 0 : session.user) === null || _c === void 0 ? void 0 : _c.id) && "bg-secondary") },
                React.createElement(lucide_react_1.UserRound, null)))));
};
exports["default"] = NavbarItems;
