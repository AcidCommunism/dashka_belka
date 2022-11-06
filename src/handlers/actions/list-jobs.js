"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listJobsActionHandler = void 0;
const listJobsActionHandler = (bot) => {
    bot.action('listjobs', async (ctx) => {
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
