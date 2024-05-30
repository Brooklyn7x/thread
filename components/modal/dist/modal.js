"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var dialog_1 = require("@/components/ui/dialog");
var Modal = function (_a) {
    var onClose = _a.onClose, onSumbit = _a.onSumbit, title = _a.title, body = _a.body, disabled = _a.disabled, isOpen = _a.isOpen;
    var _b = react_1.useState(isOpen), showModal = _b[0], setShowModal = _b[1];
    react_1.useEffect(function () {
        setShowModal(isOpen);
    }, [isOpen]);
    var handleClose = react_1.useCallback(function () {
        if (disabled)
            return null;
        setShowModal(false);
        setTimeout(function () {
            onClose();
        }, 300);
    }, [disabled, onClose]);
    // const handelSubmit = useCallback(() => {
    //   if (disabled) return null;
    //   onSumbit();
    // }, [disabled, onSumbit]);
    return (React.createElement(dialog_1.Dialog, { open: showModal, onOpenChange: handleClose },
        React.createElement(dialog_1.DialogContent, { className: "max-w-[300px] sm:max-w-md rounded-md" },
            React.createElement(dialog_1.DialogHeader, null,
                React.createElement(dialog_1.DialogTitle, null, title)),
            React.createElement("div", { className: "p-3" },
                " ",
                body),
            React.createElement(dialog_1.DialogFooter, null))));
};
exports["default"] = Modal;
