import { Telegraf } from 'telegraf';

export const topLevelMenuActionHandler = async (bot: Telegraf) => {
    bot.action('topLevelMenu', async (ctx) => {
        await ctx.deleteMessage();
        await renderStartMenu(bot, ctx);
    });
};

async function renderStartMenu(bot: Telegraf, ctx: any) {
    await bot.telegram.sendMessage(
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
