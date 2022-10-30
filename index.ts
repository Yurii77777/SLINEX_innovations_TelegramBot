/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2022> <Yurii Andriiko>
 * http://yurets.info/
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */

import { connect } from "./config/db.config";
import { handleEvents } from "./app";

const start = async () => {
    // Connect to MongoDB
    connect();

    // Start Telegram Bot
    try {
        await handleEvents();
    } catch (error) {
        console.log("The bot has not been launched :::", error.message);
    }
};

start();
