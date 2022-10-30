"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollingModel = void 0;
var mongoose_1 = require("mongoose");
var PollingSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Types.ObjectId, ref: 'UserSchema', required: true },
    company: { type: mongoose_1.Types.ObjectId, ref: 'CompanySchema', required: false },
    code: { type: String, unique: true, required: true },
}, { timestamps: true });
exports.PollingModel = (0, mongoose_1.model)('pollings', PollingSchema);
//# sourceMappingURL=polling.model.js.map