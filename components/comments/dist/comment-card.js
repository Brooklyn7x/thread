"use client";
"use strict";
exports.__esModule = true;
var utils_1 = require("@/lib/utils");
var user_image_1 = require("../user-card/user-image");
var user_card_name_1 = require("../user-card/user-card-name");
var separator_1 = require("../ui/separator");
var comment_actions_button_1 = require("./comment-actions.button");
var comment_button_1 = require("./comment-button");
var react_1 = require("react");
var CommentCard = function (_a) {
    var comment = _a.comment;
    var createdAtLabel = utils_1.formatTime(comment._creationTime);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex w-full h-auto py-3 px-1" },
            React.createElement("div", { className: "px-2 pt-2" },
                React.createElement(user_image_1["default"], { userId: comment.userId }),
                React.createElement("div", { className: "flex items-start justify-center h-full py-2" },
                    React.createElement("div", { className: "border-[1px] border-[#333638]" }))),
            React.createElement("div", { className: "flex flex-col flex-1 w-full px-2" },
                React.createElement("div", { className: "flex items-center justify-between gap-3" },
                    React.createElement("div", { className: "flex items-center gap-4" },
                        React.createElement(user_card_name_1["default"], { userId: comment.userId }),
                        React.createElement("p", { className: "pr-1 text-sm text-muted-foreground" }, createdAtLabel)),
                    React.createElement("div", { className: "sm:hidden" },
                        React.createElement(comment_actions_button_1["default"], { threadId: comment.threadId }))),
                React.createElement("p", { className: "pb-2 text-sm" }, comment.comments))),
        React.createElement("div", { className: "px-2 pt-2 flex" },
            React.createElement("div", null),
            React.createElement(comment_button_1["default"], { comment: comment, threadId: comment.threadId })),
        React.createElement(separator_1.Separator, null)));
};
// Adding display name
CommentCard.displayName = 'CommentCard';
exports["default"] = react_1.memo(CommentCard);
