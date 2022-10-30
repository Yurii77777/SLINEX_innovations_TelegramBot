"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrModel = void 0;
var mongoose_1 = require("mongoose");
var QrSchema = new mongoose_1.Schema({
    template: {
        type: mongoose_1.Types.ObjectId,
        ref: 'QRTemplateSchema',
        required: false,
    },
    pollingLink: { type: String, required: true },
    footer: { type: String, required: true },
    title: { type: String, required: true },
    logo: { type: String, required: true },
    size: {
        type: String,
        required: true,
        enum: ['50x100mm', '100x100mm', '100x150mm'],
        default: '100X100mm',
    },
    name: { type: String, required: true },
}, { timestamps: true });
exports.QrModel = (0, mongoose_1.model)('qr', QrSchema);
//# sourceMappingURL=qr.model.js.map