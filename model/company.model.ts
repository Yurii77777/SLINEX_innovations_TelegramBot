import { model, Schema, Model, Document, Types } from 'mongoose';
import countries from '../constants/countries';

export interface ICompany extends Document {
  city: string;
  country: string;
  name: string;
  type: string;
  address: string;
  user: {};
}

const CompanySchema: Schema = new Schema(
  {
    user: { type: Types.ObjectId, ref: 'UserSchema' },
    city: {
      type: String,
      required: true,
      set: (city: string) => city.toLowerCase(),
    },
    country: {
      type: String,
      required: true,
      enum: [...countries],
    },
    name: { type: String, required: true, minLength: 2 },
    type: { type: String, required: true, minLength: 2 },
    address: { type: String, required: true, minLength: 2 },
  },
  { timestamps: true },
);

export const CompanyModel: Model<ICompany> = model<ICompany>('companies', CompanySchema);
