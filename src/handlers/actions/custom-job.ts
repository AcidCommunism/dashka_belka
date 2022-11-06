import { Telegraf } from 'telegraf';

export const customJobActionHandler = async (bot: Telegraf) => {
    bot.action('customJob', async (ctx) => {
        await ctx.deleteMessage();
        await renderCustomJobMenu(bot, ctx);
    });
};

async function renderCustomJobMenu(bot: Telegraf, ctx: any) {
    bot.telegram.sendChatAction(ctx.chat.id, 'upload_photo');
    await bot.telegram.sendPhoto(ctx.chat.id, {
        source: 'src/media-content/start-job.png',
    });
    return await bot.telegram.sendMessage(
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
