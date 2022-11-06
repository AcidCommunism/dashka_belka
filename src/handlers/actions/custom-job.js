"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customJobActionHandler = void 0;
const customJobActionHandler = async (bot) => {
    bot.action('customJob', async (ctx) => {
        await ctx.deleteMessage();
        await renderCustomJobMenu(bot, ctx);
    });
};
exports.customJobActionHandler = customJobActionHandler;
async function renderCustomJobMenu(bot, ctx) {
    bot.telegram.sendChatAction(ctx.chat.id, 'upload_photo');
    await bot.telegram.sendPhoto(ctx.chat.id, {
        source: 'src/media-content/start-job.png',
    });
    return await bot.telegram.sendMessage(
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
