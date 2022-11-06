/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

import { UserModel } from "../model/user.model";

import { sendLanguageKeyboard } from "../commands/sendLanguageKeyboard";
import { handleDelayedSendMessage } from "../utils/handleDelayedSendMessage";

interface IMessages {
    [key: string]: string | number;
}

export const handleStartCommand = async (options: {
    ctx: any;
    messagesUA: IMessages;
}): Promise<any> => {
    const { ctx, messagesUA } = options;
    const chatId: number = ctx.chat.id;
    const { first_name } = ctx.from;

    // Look for the same User in DB
    let isUserData = null;

    try {
        const userData = await UserModel.find({ chatId });
        isUserData = !!userData.length;
    } catch (error) {
        console.log("[ERROR]:: Start command, find user", error.message);
    }

    // New User actions
    if (!isUserData) {
        await ctx.reply(`${first_name}, ${messagesUA.startMessageNewUser}`);

        try {
            await UserModel.create({
                chatId,
                userTelegramName: first_name,
            });
        } catch (error) {
            console.log(
                "[ERROR]:: Start command, create new user",
                error.message
            );

            // TODO: Send error message to Admin via Telegram
            return ctx.reply(messagesUA.errorDB);
        }

        const {
            startMessage1NewUser,
            startMessage2NewUser,
            startMessage3NewUser,
        } = messagesUA;

        await handleDelayedSendMessage({
            delayValue: 5000,
            ctx,
            message: startMessage1NewUser,
        });

        await handleDelayedSendMessage({
            delayValue: 5000,
            ctx,
            message: startMessage2NewUser,
        });

        await handleDelayedSendMessage({
            delayValue: 5000,
            ctx,
            message: startMessage3NewUser,
        });

        await handleDelayedSendMessage({
            delayValue: 5000,
            ctx,
            action: sendLanguageKeyboard,
        });

        return;
    }
};
