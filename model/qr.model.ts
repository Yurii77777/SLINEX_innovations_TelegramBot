import { model, Schema, Model, Document, Types } from 'mongoose';
import countries from '../constants/countries';

export interface IQr extends Document {
  user: {};
  company: {};
  code: string;
}

const QrSchema: Schema = new Schema(
  {
    template: {
      type: Types.ObjectId,
      ref: 'QRTemplateSchema',
      required: false,
    },
    pollingLink: { type: String, required: true },
    footer: { type: String, required: true },
    title: { type: String, required: true },
    logo: { type: String, required: true },
    size: {
      type: String,
      required: true,
      enum: ['50x100mm', '100x100mm', '100x150mm'],
      default: '100X100mm',
    },
    name: { type: String, required: true },
  },
  { timestamps: true },
);

export const QrModel: Model<IQr> = model<IQr>('qr', QrSchema);
