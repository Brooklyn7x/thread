"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var button_1 = require("@/components/ui/button");
var form_1 = require("@/components/ui/form");
var input_1 = require("@/components/ui/input");
var api_1 = require("@/convex/_generated/api");
var use_api_mutation_1 = require("@/hooks/use-api-mutation");
var zod_1 = require("@hookform/resolvers/zod");
var navigation_1 = require("next/navigation");
var react_hook_form_1 = require("react-hook-form");
var zod_2 = require("zod");
var sonner_1 = require("sonner");
var nextjs_1 = require("@clerk/nextjs");
var user_avatar_1 = require("@/components/user-card/user-avatar");
var react_1 = require("convex/react");
var image_1 = require("next/image");
var react_2 = require("react");
var formSchema = zod_2.z.object({
    content: zod_2.z.string(),
    file: zod_2.z
        .custom(function (val) { return val instanceof FileList; }, "Required")
        .refine(function (files) { return files.length > 0; }, "Required")
});
var CreateForm = function (_a) {
    var _b;
    var handleClose = _a.handleClose;
    var _c = react_2["default"].useState(), selectedFile = _c[0], setSelectedFile = _c[1];
    var _d = react_2["default"].useState(""), fileURL = _d[0], setFileURL = _d[1];
    var handleFileChange = function (event) {
        var file = event.target.files[0];
        setSelectedFile(file);
        var fileURL = URL.createObjectURL(file);
        setFileURL(fileURL);
    };
    var user = nextjs_1.useUser().user;
    var router = navigation_1.useRouter();
    var generateUploadUrl = react_1.useMutation(api_1.api.thread.generateUploadUrl);
    var _e = use_api_mutation_1.useApiMutation(api_1.api.thread.createThread), mutate = _e.mutate, pending = _e.pending;
    var form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(formSchema),
        defaultValues: {
            content: "",
            file: undefined
        }
    });
    var fileRef = form.register("file");
    var onSubmit = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var postUrl, result, storageId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, generateUploadUrl()];
                case 1:
                    postUrl = _a.sent();
                    return [4 /*yield*/, fetch(postUrl, {
                            method: "POST",
                            headers: { "Content-Type": values.file[0].type },
                            body: values.file[0]
                        })];
                case 2:
                    result = _a.sent();
                    return [4 /*yield*/, result.json()];
                case 3:
                    storageId = (_a.sent()).storageId;
                    return [4 /*yield*/, mutate({
                            content: values.content,
                            imageUrl: storageId,
                            userId: user === null || user === void 0 ? void 0 : user.id
                        })
                            .then(function () {
                            sonner_1.toast.success("Thread created.");
                            handleClose();
                        })["catch"](function () { return sonner_1.toast.error("Something went wrong."); })];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_2["default"].createElement(form_1.Form, __assign({}, form),
        react_2["default"].createElement("form", { onSubmit: form.handleSubmit(onSubmit) },
            react_2["default"].createElement("div", { className: "w-full sm:max-w-lg" },
                react_2["default"].createElement("div", { className: "flex w-full py-4" },
                    react_2["default"].createElement("div", { className: "flex flex-col w-full" },
                        react_2["default"].createElement("div", { className: "flex gap-2 place-items-end" },
                            react_2["default"].createElement(user_avatar_1["default"], null),
                            react_2["default"].createElement("span", { className: "text-sm mb-2 mt-2 font-bold" },
                                " ", (_b = user === null || user === void 0 ? void 0 : user.username) === null || _b === void 0 ? void 0 :
                                _b.toUpperCase())),
                        react_2["default"].createElement("div", { className: "flex flex-col w-full gap-2 pt-6" },
                            react_2["default"].createElement(form_1.FormField, { control: form.control, name: "content", render: function (_a) {
                                    var field = _a.field;
                                    return (react_2["default"].createElement(form_1.FormItem, null,
                                        react_2["default"].createElement(form_1.FormControl, null,
                                            react_2["default"].createElement(input_1.Input, __assign({ placeholder: "start a thread" }, field, { className: "" })))));
                                } })),
                        react_2["default"].createElement("div", { className: "flex flex-col gap-y-2 mt-5" },
                            react_2["default"].createElement(form_1.FormField, { control: form.control, name: "file", render: function () { return (react_2["default"].createElement(form_1.FormItem, null,
                                    react_2["default"].createElement(form_1.FormControl, null,
                                        react_2["default"].createElement(input_1.Input, __assign({ type: "file" }, fileRef, { placeholder: "select an image", onChange: handleFileChange }))))); } }),
                            selectedFile && (react_2["default"].createElement(image_1["default"], { src: fileURL, alt: "image", height: 100, width: 200, className: "max-w-[300px] max-h-[300px] h-auto w-full rounded-md border shadow-md" })),
                            react_2["default"].createElement(button_1.Button, { type: "submit", variant: "secondary", disabled: pending, className: "pt-2" }, "Post"))))))));
};
exports["default"] = CreateForm;
