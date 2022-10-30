"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
var mongoose_1 = require("mongoose");
var TaskSchema = new mongoose_1.Schema({
    task: { type: String, required: true },
    assignee: { type: String, required: true },
    status: { type: String, required: true },
    createDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
    createdBy: { type: String, required: false },
    updatedBy: { type: String, required: false },
    timestamps: { createDate: Date, updatedDate: Date },
});
exports.TaskModel = (0, mongoose_1.model)('tasks', TaskSchema);
//# sourceMappingURL=task.model.js.map