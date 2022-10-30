/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
interface IMessages {
    [key: string]: string | number;
}

export const handleStartCommand = async (options: {
    ctx: any;
    messagesUA: IMessages;
}): Promise<any> => {
    const { ctx, messagesUA } = options;
    const { first_name } = ctx.from;

    await ctx.reply(`${first_name}, ${messagesUA.startMessageNewUser}`);
};
