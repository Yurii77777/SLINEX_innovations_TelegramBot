"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyModel = void 0;
var mongoose_1 = require("mongoose");
var countries_1 = __importDefault(require("../constants/countries"));
var CompanySchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Types.ObjectId, ref: 'UserSchema' },
    city: {
        type: String,
        required: true,
        set: function (city) { return city.toLowerCase(); },
    },
    country: {
        type: String,
        required: true,
        enum: __spreadArray([], countries_1.default, true),
    },
    name: { type: String, required: true, minLength: 2 },
    type: { type: String, required: true, minLength: 2 },
    address: { type: String, required: true, minLength: 2 },
}, { timestamps: true });
exports.CompanyModel = (0, mongoose_1.model)('companies', CompanySchema);
//# sourceMappingURL=company.model.js.map