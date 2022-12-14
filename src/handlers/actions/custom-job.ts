import { Telegraf } from 'telegraf';
import { logger } from '../../../logger';

export const customJobActionHandler = async (bot: Telegraf) => {
    bot.action('customJob', async (ctx) => {
        logger.info(
            `Received new custom job action from user ${JSON.stringify(
                ctx.from
            )}`
        );
        logger.info(`Chat id: ${ctx?.chat?.id}`);
        await ctx.deleteMessage();
        await renderCustomJobMenu(bot, ctx);
    });
};

async function renderCustomJobMenu(bot: Telegraf, ctx: any) {
    await bot.telegram.sendMessage(
        // TODO:
        ctx?.chat?.id ?? 'well, I just hope it never happens for now',
        'Погнали?',
        {
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
        }
    );
}
