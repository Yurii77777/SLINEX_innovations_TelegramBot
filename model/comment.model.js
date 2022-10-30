"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = void 0;
var mongoose_1 = require("mongoose");
var CommentSchema = new mongoose_1.Schema({
    feedbackId: { type: String, required: true },
    telegramMessageId: { type: String, required: true },
    chatId: { type: Number },
    comment: { type: String },
    created_at: { type: Date, required: true, default: Date.now },
    adminName: { type: String, required: true },
});
exports.CommentModel = (0, mongoose_1.model)('comments', CommentSchema);
//# sourceMappingURL=comment.model.js.map