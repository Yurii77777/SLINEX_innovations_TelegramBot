const { Telegraf } = require("telegraf");

// How to create new Telegram Bot?
// 1. In Telegram messenger find @BotFather Bot
// 2. Send him a command /newbot
// 3. Choose a username for your bot
// 4. Now let's choose a username for your bot. It must end in `bot`
// 5. BotFather sends us a unique Token
// 6. Set Token in var TELEGRAM_API .env
const token = process.env["TELEGRAM_API"];

// For example this Bot is available on https://t.me/SLINEX_innovationsBot
export const bot = new Telegraf(token);

// Also you can do with helping @BotFather Bot:
// /setuserpic - change bot profile photo. Must be at least 150x150.
// /setdescription - change bot description
// /setabouttext - change bot about info
