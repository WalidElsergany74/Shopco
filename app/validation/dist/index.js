"use strict";
exports.__esModule = true;
exports.addProductSchema = void 0;
var zod_1 = require("zod");
exports.addProductSchema = zod_1.z.object({
    productName: zod_1.z.string().min(1, { message: "Product name is required" }),
    productDescription: zod_1.z.string().min(1, { message: "Product description is required" }).max(550, "Product Description must be less than 550 characters"),
    productStock: zod_1.z.string().min(1, { message: "Product stock is required" }).max(5, "Product stock must be less than or equal 5 numbers"),
    productPrice: zod_1.z.string().min(1, { message: "Product price is required" }).max(5, "Product price must be less than or equal 5 numbers"),
    productType: zod_1.z.string().nonempty("Product Type is required"),
    category: zod_1.z.string().nonempty("Category is required"),
    subCategory: zod_1.z.string().nonempty("Sub-Category is required"),
    color: zod_1.z.string().nonempty("Color is required"),
    size: zod_1.z.string().nonempty("Size is required"),
    img1: zod_1.z["instanceof"](File),
    img2: zod_1.z["instanceof"](File),
    img3: zod_1.z["instanceof"](File)
});
