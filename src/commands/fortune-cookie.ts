import { Telegraf } from 'telegraf';
import { logger } from '../../logger';
import { getFortune } from '../util/fortune-cookie';

export const fortuneCookieCommand = (bot: Telegraf) => {
    bot.command('fortunecookie', async (ctx: any) => {
        logger.info(
            `Received new /fortune command from user ${JSON.stringify(
                ctx.from
            )}`
        );
        logger.info(`Chat id: ${ctx.chat.id}`);

        const fortune = await getFortune();
        ctx.reply(fortune);
    });
};
