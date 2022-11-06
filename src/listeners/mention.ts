import { Telegraf } from 'telegraf';
import { logger } from '../../logger';

export const mentionListener = (bot: Telegraf) => {
    bot.mention('belkacar_telematics_jobs_bot', async (ctx: any) => {
        logger.info(
            `Received new mention from user ${JSON.stringify(ctx.from)}`
        );
        logger.info(`Chat id: ${ctx.chat.id}`);

        ctx.reply('Чего надо?', {
            reply_to_message_id: ctx.message.message_id,
        });
    });
};
