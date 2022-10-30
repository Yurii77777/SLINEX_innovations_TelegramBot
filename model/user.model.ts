/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
import { model, Schema, Model, Document } from "mongoose";

export interface IUser extends Document {
    chatId: number;
    userRole: string;
    userTelegramName?: string;
    language: string;
}

const UserSchema: Schema = new Schema(
    {
        chatId: { type: Number, required: true, unique: true },
        userRole: { type: String, required: true, unique: false },
        userTelegramName: { type: String, unique: false },
        language: { type: String, unique: false },
    },
    { timestamps: true }
);

export const UserModel: Model<IUser> = model<IUser>("users", UserSchema);
