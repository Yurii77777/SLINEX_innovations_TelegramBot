/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
const { Markup } = require("telegraf");

const messagesUA = require("../translate/messagesUA.json");

export const sendLanguageKeyboard = async (options: { ctx: any }) => {
    const { ctx } = options;

    const keyboard = [
        [Markup.button.callback("Українська 🇺🇦", "setUaLanguage")],
        [Markup.button.callback("Суржик 😅", "setSurjikLanguage")],
        [Markup.button.callback("English 🇺🇸", "setEngLanguage")],
    ];

    await ctx.reply(
        `${messagesUA.sendKeyboardMessage}`,
        Markup.inlineKeyboard(keyboard)
    );
};
