import { Telegraf } from 'telegraf';
import { logger } from '../../logger';

export const helpCommand = (bot: Telegraf) => {
    bot.help(async (ctx: any) => {
        logger.info(
            `Received new /help command from user ${JSON.stringify(ctx.from)}`
        );
        logger.info(`Chat id: ${ctx.chat.id}`);

        const firstName = ctx.chat?.first_name;
        ctx.reply(
            `Че сразу хелп-то? Ну серьезно, че как маленький, ${firstName}?!\n` +
                'Давай-ка сам разберись, потыкай, все и так же понятно!'
        );
    });
};
