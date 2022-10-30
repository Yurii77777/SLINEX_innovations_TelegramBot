import { model, Schema, Model, Document } from 'mongoose';

export interface ITgSubscribers extends Document {
  chatId: number;
  name: string;
  phone?: string;
  language: string;
  subscriptions?: Array<string>;
}

const TgSubscribersSchema: Schema = new Schema({
  chatId: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String },
  language: { type: String },
  subscriptions: { type: Array },
});

export const TgSubscribers: Model<ITgSubscribers> = model<ITgSubscribers>('tgSubscribers', TgSubscribersSchema);
