"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpCommand = void 0;
const logger_1 = require("../../logger");
const helpCommand = (bot) => {
    bot.help(async (ctx) => {
        logger_1.logger.info(`Received new /help command from user ${JSON.stringify(ctx.from)}`);
        logger_1.logger.info(`Chat id: ${ctx.chat.id}`);
        const firstName = ctx.chat?.first_name;
        ctx.reply(`Че сразу хелп-то? Ну серьезно, че как маленький, ${firstName}?!\n` +
            'Давай-ка сам разберись, потыкай, все и так же понятно!');
    });
};
exports.helpCommand = helpCommand;
