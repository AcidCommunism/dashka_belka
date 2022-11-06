import { Telegraf } from 'telegraf';
import { launchCustomTestJob } from '../../util/jenkins';

export const launchCustomJobAction = async (bot: Telegraf) => {
    bot.action('launchCustomTestJob', async (ctx) => {
        await ctx.deleteMessage();
        await launchCustomTestJob();
        return await bot.telegram.sendMessage(
            // TODO:
            ctx?.chat?.id ?? 'well, I just hope it never happens for now',
            'Готово!',
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
