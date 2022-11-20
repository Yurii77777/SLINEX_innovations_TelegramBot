/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
import { bot } from "./config/telegram.config";
import { setBotCommands } from "./utils/setBotCommands";
import { handleStartCommand } from "./commands/handleStartCommand";
import { setBotLanguage } from "./commands/setBotLanguage";
import { sendLanguageKeyboard } from "./commands/sendLanguageKeyboard";
import { sendCatalogButton } from "./commands/sendCatalogButton";

import messagesUA from "./translate/messagesUA.json";

export const handleEvents = async (): Promise<any> => {
    await setBotCommands(bot);

    // Menu commands handlers
    bot.start(async (ctx: any): Promise<any> => {
        await handleStartCommand({ ctx, messagesUA });
    });

    bot.command("setlanguage", async (ctx: any): Promise<any> => {
        await sendLanguageKeyboard({ ctx });
    });

    bot.command("catalog", async (ctx: any): Promise<any> => {
        await sendCatalogButton({ ctx });
    });

    // Actions handlers
    bot.action("setUaLanguage", async (ctx: any): Promise<any> => {
        await setBotLanguage({ ctx, language: "UA" });
    });

    bot.action("setSurjikLanguage", async (ctx: any): Promise<any> => {
        await setBotLanguage({ ctx, language: "SU" });
    });

    bot.action("setEngLanguage", async (ctx: any): Promise<any> => {
        await setBotLanguage({ ctx, language: "ENG" });
    });

    bot.launch();
};
