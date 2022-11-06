"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.topLevelMenuActionHandler = void 0;
const topLevelMenuActionHandler = async (bot) => {
    bot.action('topLevelMenu', async (ctx) => {
        await ctx.deleteMessage();
        await renderStartMenu(bot, ctx);
    });
};
exports.topLevelMenuActionHandler = topLevelMenuActionHandler;
async function renderStartMenu(bot, ctx) {
    return await bot.telegram.sendMessage(
    // TODO:
    ctx?.chat?.id ?? 'well, I just hope it never happens for now', 'Ну привет)', {
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
    });
}
