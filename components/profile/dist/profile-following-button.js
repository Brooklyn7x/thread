"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("convex/react");
var button_1 = require("../ui/button");
var api_1 = require("@/convex/_generated/api");
var use_api_mutation_1 = require("@/hooks/use-api-mutation");
var sonner_1 = require("sonner");
var react_2 = require("react");
var nextjs_1 = require("@clerk/nextjs");
var ProfileFollowingButton = function (_a) {
    var id = _a.id;
    var userId = nextjs_1.useAuth().userId;
    var followerId = userId;
    var followingList = react_1.useQuery(api_1.api.follow.getFollowing, {
        userId: followerId
    });
    console.log(followingList);
    var isFollowing = followingList === null || followingList === void 0 ? void 0 : followingList.some(function (follow) { return follow.followingId === id; });
    var toggleFollow = use_api_mutation_1.useApiMutation(api_1.api.follow.toggleFollow).mutate;
    var handleFollow = react_2.useCallback(function () {
        toggleFollow({ followerId: userId, followingId: id }).then(function () {
            return sonner_1.toast.success(isFollowing ? "Unfollowed successfully" : "Followed successfully");
        });
    }, [toggleFollow, userId, id, isFollowing]);
    return (React.createElement("div", { className: "flex w-full gap-2 my-2" },
        React.createElement(button_1.Button, { className: "w-full", size: "sm", variant: "secondary", onClick: handleFollow }, isFollowing ? "Unfollow" : "Follow"),
        React.createElement(button_1.Button, { className: "w-full", size: "sm", variant: "secondary" }, "Mention")));
};
exports["default"] = react_2.memo(ProfileFollowingButton);
