"use strict";
exports.__esModule = true;
var StarRatingComponent = function (_a) {
    var rating = _a.rating;
    return (React.createElement("div", { className: "flex space-x-1" }, Array.from({ length: rating }, function (_, index) { return (React.createElement(FaStar, { key: index, size: 20, className: "text-yellow-500" })); })));
};
exports["default"] = StarRatingComponent;
