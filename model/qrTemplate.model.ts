import { model, Schema, Model, Document, Types } from 'mongoose';

export interface IQRTemplate extends Document {
  name: String;
  description: String;
  exampleImages: String[];
  style: String;
}

const QRTemplateSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    exampleImages: [{ type: String, required: true }],
    style: {
      type: String,
      required: true,
      default: 'style 1',
      enum: ['style 1', 'style 2', 'style 3'],
    },
  },
  { timestamps: true },
);

export const QRTemplateModel: Model<IQRTemplate> = model<IQRTemplate>('qrtemplates', QRTemplateSchema);
