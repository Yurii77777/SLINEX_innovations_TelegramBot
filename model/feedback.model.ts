import { model, Schema, Model, Document, Types } from 'mongoose';
import { IClient } from './client.model';
import { ICompany } from './company.model';

export interface IFeedback extends Document {
  rating: number;
  message: string;
  name?: string;
  created_at: Date;
  status: number;
  company?: ICompany; // "?" is temporary
}

const FeedbackSchema: Schema = new Schema({
  rating: { type: Number, required: true },
  message: { type: String, required: true, maxLength: 2000, trim: true },
  name: { type: String, maxLength: 500, trim: true },
  created_at: { type: Date, required: true, default: Date.now },
  status: { type: Number, default: 0 },
  company: { type: Types.ObjectId, ref: 'CompanyModel' },
});

export const FeedbackModel: Model<IFeedback> = model<IFeedback>('feedbacks', FeedbackSchema);
