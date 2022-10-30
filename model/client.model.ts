import { model, Schema, Model, Document, Types } from 'mongoose';

export interface IClient extends Document {
  name: string;
  phone: string;
  feedbacks?: Array<object>;
}

const ClientSchema: Schema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  feedbacks: [{ type: Types.ObjectId, ref: 'FeedbackModel' }],
});

export const ClientModel: Model<IClient> = model<IClient>('clients', ClientSchema);
