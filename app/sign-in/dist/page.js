"use strict";
exports.__esModule = true;
var nextjs_1 = require("@clerk/nextjs");
function Page() {
    return (React.createElement("div", { className: "flex justify-center py-24" },
        React.createElement(nextjs_1.SignIn, { afterSignInUrl: "/" })));
}
exports["default"] = Page;
