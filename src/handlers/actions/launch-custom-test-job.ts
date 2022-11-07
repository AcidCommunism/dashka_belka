import { Telegraf } from 'telegraf';
import { launchCustomTestJob } from '../../util/jenkins';
import { logger } from '../../../logger';

export const launchCustomJobAction = async (bot: Telegraf) => {
    bot.action('launchCustomTestJob', async (ctx) => {
        logger.info(
            `Received new custom job launch action from user ${JSON.stringify(
                ctx.from
            )}`
        );
        logger.info(`Chat id: ${ctx?.chat?.id}`);
        await ctx.deleteMessage();
        await launchCustomTestJob();
        return await bot.telegram.sendMessage(
            // TODO:
            ctx?.chat?.id ?? 'well, I just hope it never happens for now',
            'Запустила!',
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'В начало!',
                                callback_data: 'topLevelMenu',
                            },
                        ],
                    ],
                },
            }
        );
    });
};
