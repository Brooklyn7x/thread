"use client";
"use strict";
exports.__esModule = true;
var api_1 = require("@/convex/_generated/api");
var use_api_mutation_1 = require("@/hooks/use-api-mutation");
var nextjs_1 = require("@clerk/nextjs");
var react_1 = require("convex/react");
var lucide_react_1 = require("lucide-react");
var sonner_1 = require("sonner");
var comment_modal_1 = require("@/components/modal/comment-modal");
var react_2 = require("react");
var like_button_1 = require("../thread/buttons/like-button");
var CommentButton = function (_a) {
    var comment = _a.comment, threadId = _a.threadId;
    var userId = nextjs_1.useAuth().userId;
    var toggleLike = use_api_mutation_1.useApiMutation(api_1.api.like.toogleLike).mutate;
    var likes = react_1.useQuery(api_1.api.like.getLike, { threadId: threadId }) || [];
    var isLiked = !!likes.find(function (like) { return like.userId === userId; });
    var handleLikeThread = react_2.useCallback(function (event) {
        event.preventDefault();
        toggleLike({ threadId: threadId, userId: userId })
            .then(function () {
            return sonner_1.toast.success(isLiked ? "Unliked the comment" : "Liked the comment");
        })["catch"](function () { return sonner_1.toast.error("Try again."); });
    }, [isLiked, toggleLike, threadId, userId]);
    return (React.createElement("div", { className: "flex w-full" },
        React.createElement(like_button_1["default"], { isLiked: isLiked, onClick: function () { } }),
        React.createElement("button", { className: "p-2" },
            React.createElement(comment_modal_1["default"], { comment: comment })),
        React.createElement("button", { className: "p-2" },
            React.createElement(lucide_react_1.Repeat, { className: "w-4 h-4" })),
        React.createElement("button", { className: "p-2" },
            React.createElement(lucide_react_1.Send, { className: "w-4 h-4" }))));
};
exports["default"] = CommentButton;
