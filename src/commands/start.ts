import { Telegraf } from 'telegraf';
import { logger } from '../../logger';

export const startBotCommand = (bot: Telegraf) =>
    bot.start((ctx) => {
        logger.info(
            `Received new /start command from user ${JSON.stringify(ctx.from)}`
        );
        logger.info(`Chat id: ${ctx.chat.id}`);
        renderStartMenu(bot, ctx);
    });

async function renderStartMenu(bot: Telegraf, ctx: any) {
    bot.telegram.sendMessage(
        // TODO:
        ctx?.chat?.id ?? 'well, I just hope it never happens for now',
        'Ну привет)',
        {
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
        }
    );
}
