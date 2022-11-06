"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fortuneCookieCommand = void 0;
const logger_1 = require("../../logger");
const fortune_cookie_1 = require("../util/fortune-cookie");
const fortuneCookieCommand = (bot) => {
    bot.command('fortunecookie', async (ctx) => {
        logger_1.logger.info(`Received new /fortune command from user ${JSON.stringify(ctx.from)}`);
        logger_1.logger.info(`Chat id: ${ctx.chat.id}`);
        const fortune = await (0, fortune_cookie_1.getFortune)();
        ctx.reply(fortune);
    });
};
exports.fortuneCookieCommand = fortuneCookieCommand;
