import { model, Schema, Model, Document, Types } from 'mongoose';
import countries from '../constants/countries';

export interface IPolling extends Document {
  user: {};
  company: {};
  code: string;
}

const PollingSchema: Schema = new Schema(
  {
    user: { type: Types.ObjectId, ref: 'UserSchema', required: true },
    company: { type: Types.ObjectId, ref: 'CompanySchema', required: false },
    code: { type: String, unique: true, required: true },
  },
  { timestamps: true },
);

export const PollingModel: Model<IPolling> = model<IPolling>('pollings', PollingSchema);
