"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TgSubscribers = void 0;
var mongoose_1 = require("mongoose");
var TgSubscribersSchema = new mongoose_1.Schema({
    chatId: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String },
    language: { type: String },
    subscriptions: { type: Array },
});
exports.TgSubscribers = (0, mongoose_1.model)('tgSubscribers', TgSubscribersSchema);
//# sourceMappingURL=tgSubscribers.model.js.map