"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customJobActionHandler = void 0;
const logger_1 = require("../../../logger");
const customJobActionHandler = async (bot) => {
    bot.action('customJob', async (ctx) => {
        logger_1.logger.info(`Received new custom job action from user ${JSON.stringify(ctx.from)}`);
        logger_1.logger.info(`Chat id: ${ctx?.chat?.id}`);
        await ctx.deleteMessage();
        await renderCustomJobMenu(bot, ctx);
    });
};
exports.customJobActionHandler = customJobActionHandler;
async function renderCustomJobMenu(bot, ctx) {
    await bot.telegram.sendMessage(
    // TODO:
    ctx?.chat?.id ?? 'well, I just hope it never happens for now', 'Погнали?', {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Go!',
                        callback_data: 'launchCustomTestJob',
                    },
                ],
                [
                    {
                        text: 'В начало',
                        callback_data: 'topLevelMenu',
                    },
                ],
            ],
        },
    });
}
