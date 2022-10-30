import { model, Schema, Model, Document } from 'mongoose';

export interface IComment extends Document {
  feedbackId: string;
  telegramMessageId: string;
  chatId: number;
  comment?: string;
  created_at: Date;
  adminName: string;
}

const CommentSchema: Schema = new Schema({
  feedbackId: { type: String, required: true },
  telegramMessageId: { type: String, required: true },
  chatId: { type: Number },
  comment: { type: String },
  created_at: { type: Date, required: true, default: Date.now },
  adminName: { type: String, required: true },
});

export const CommentModel: Model<IComment> = model<IComment>('comments', CommentSchema);
