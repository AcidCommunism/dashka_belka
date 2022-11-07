import { Telegraf } from 'telegraf';
import { logger } from '../../../logger';

export const listJobsActionHandler = (bot: Telegraf) => {
    bot.action('listjobs', async (ctx) => {
        logger.info(
            `Received new list jobs action from user ${JSON.stringify(
                ctx.from
            )}`
        );
        logger.info(`Chat id: ${ctx?.chat?.id}`);
        await ctx.deleteMessage();
        bot.telegram.sendMessage(
            // TODO:
            ctx?.chat?.id ?? 'well, I just hope it never happens for now',
            'Вот че могу:',
            {
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
            }
        );
    });
};
