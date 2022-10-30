/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
import { bot } from "./config/telegram.config";

export const handleEvents = async () => {
    await bot.telegram.setMyCommands([
        {
            command: "/start",
            description: "для старту, все логічно 😉",
        },
        {
            command: "/setlanguage",
            description: "встановити мову посіпаки 🗣",
        },
        {
            command: "/catalog",
            description: "відкрити каталог продукції 📘",
        },
    ]);
};
