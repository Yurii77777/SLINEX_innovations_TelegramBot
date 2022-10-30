"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QRTemplateModel = void 0;
var mongoose_1 = require("mongoose");
var QRTemplateSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    exampleImages: [{ type: String, required: true }],
    style: {
        type: String,
        required: true,
        default: 'style 1',
        enum: ['style 1', 'style 2', 'style 3'],
    },
}, { timestamps: true });
exports.QRTemplateModel = (0, mongoose_1.model)('qrtemplates', QRTemplateSchema);
//# sourceMappingURL=qrTemplate.model.js.map