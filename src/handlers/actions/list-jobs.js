"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listJobsActionHandler = void 0;
const logger_1 = require("../../../logger");
const listJobsActionHandler = (bot) => {
    bot.action('listjobs', async (ctx) => {
        logger_1.logger.info(`Received new list jobs action from user ${JSON.stringify(ctx.from)}`);
        logger_1.logger.info(`Chat id: ${ctx?.chat?.id}`);
        await ctx.deleteMessage();
        bot.telegram.sendMessage(
        // TODO:
        ctx?.chat?.id ?? 'well, I just hope it never happens for now', 'Вот че могу:', {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'custom-tests-launch',
                            callback_data: 'customJob',
                        },
                    ],
                    [
                        {
                            text: 'Список в Jenkins',
                            url: process.env.JENKINS_URL,
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
    });
};
exports.listJobsActionHandler = listJobsActionHandler;
