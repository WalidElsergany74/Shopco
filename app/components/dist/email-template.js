"use strict";
exports.__esModule = true;
exports.EmailTemplate = void 0;
var components_1 = require("@react-email/components");
var React = require("react");
exports.EmailTemplate = function (_a) {
    var body = _a.body;
    return (React.createElement(components_1.Html, null,
        React.createElement(components_1.Head, null),
        React.createElement(components_1.Preview, null, "The Ecommerce Platform For Your Digital Products - Search Now for Your Future"),
        React.createElement(components_1.Body, { style: main },
            React.createElement(components_1.Container, { style: container },
                React.createElement(components_1.Img, { src: "https://res.cloudinary.com/dmjmejad7/image/upload/v1729807212/Rectangle_2_6d6f8d2880.png", width: "420", height: "300", alt: "Koala", style: logo }),
                React.createElement(components_1.Text, { style: paragraph },
                    "Hi ",
                    body.fullName,
                    ","),
                React.createElement(components_1.Text, { style: paragraph }, "Thank you for purchasing on ShopCo Ecommerce."),
                React.createElement(components_1.Text, { style: paragraph }, body.productDetails),
                React.createElement(components_1.Text, { style: paragraph },
                    "Total :   ",
                    body.amount,
                    " $"),
                React.createElement(components_1.Text, { style: paragraph },
                    "Best,",
                    React.createElement("br", null),
                    "ShopCo Team."),
                React.createElement(components_1.Hr, { style: hr }),
                React.createElement(components_1.Text, { style: footer }, "Subscribe to ShopCo.")))));
};
var main = {
    backgroundColor: '#ffffff',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};
var container = {
    margin: '0 auto',
    padding: '20px 0 48px'
};
var logo = {
    margin: '0 auto'
};
var paragraph = {
    fontSize: '16px',
    lineHeight: '26px'
};
var hr = {
    borderColor: '#cccccc',
    margin: '20px 0'
};
var footer = {
    color: '#8898aa',
    fontSize: '12px'
};
exports["default"] = exports.EmailTemplate;
