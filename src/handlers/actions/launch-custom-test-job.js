"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.launchCustomJobAction = void 0;
const jenkins_1 = require("../../util/jenkins");
const launchCustomJobAction = async (bot) => {
    bot.action('launchCustomTestJob', async (ctx) => {
        await ctx.deleteMessage();
        await (0, jenkins_1.launchCustomTestJob)();
        return await bot.telegram.sendMessage(
        // TODO:
        ctx?.chat?.id ?? 'well, I just hope it never happens for now', 'Запустила!', {
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
        });
    });
};
exports.launchCustomJobAction = launchCustomJobAction;
