"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetingsListener = void 0;
const telegraf_1 = require("telegraf");
const greetingsListener = (bot) => {
    bot.hears([
        /.*ривет.*/,
        /.*даров.*/,
        /.*ello.*/,
        /hi.*/,
        /Hi.*/,
        /HI.*/,
        /.*ратути.*/,
        /.*reeting.*/,
    ], telegraf_1.Telegraf.reply('Ну привет)'));
};
exports.greetingsListener = greetingsListener;
