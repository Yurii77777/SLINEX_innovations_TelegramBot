"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModel = void 0;
var mongoose_1 = require("mongoose");
var ClientSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    feedbacks: [{ type: mongoose_1.Types.ObjectId, ref: 'FeedbackModel' }],
});
exports.ClientModel = (0, mongoose_1.model)('clients', ClientSchema);
//# sourceMappingURL=client.model.js.map