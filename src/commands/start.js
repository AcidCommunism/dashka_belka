"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startBotCommand = void 0;
const logger_1 = require("../../logger");
const startBotCommand = (bot) => bot.start((ctx) => {
    logger_1.logger.info(`Received new /start command from user ${JSON.stringify(ctx.from)}`);
    logger_1.logger.info(`Chat id: ${ctx.chat.id}`);
    renderStartMenu(bot, ctx);
});
exports.startBotCommand = startBotCommand;
async function renderStartMenu(bot, ctx) {
    bot.telegram.sendMessage(
    // TODO:
    ctx?.chat?.id ?? 'well, I just hope it never happens for now', 'Ну привет)', {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Привет, какие джобы ты умеешь запускать?',
                        callback_data: 'listjobs',
                    },
                ],
            ],
        },
    });
}
