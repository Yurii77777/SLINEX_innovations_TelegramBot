"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackModel = void 0;
var mongoose_1 = require("mongoose");
var FeedbackSchema = new mongoose_1.Schema({
    rating: { type: Number, required: true },
    message: { type: String, required: true, maxLength: 2000, trim: true },
    name: { type: String, maxLength: 500, trim: true },
    created_at: { type: Date, required: true, default: Date.now },
    status: { type: Number, default: 0 },
    company: { type: mongoose_1.Types.ObjectId, ref: 'CompanyModel' },
});
exports.FeedbackModel = (0, mongoose_1.model)('feedbacks', FeedbackSchema);
//# sourceMappingURL=feedback.model.js.map