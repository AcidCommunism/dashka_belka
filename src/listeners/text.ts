import { Telegraf } from 'telegraf';
import { logger } from '../../logger';

export const textListener = (bot: Telegraf) => {
    bot.on('text', (ctx) => {
        logger.info(
            `Received new text message from user ${JSON.stringify(ctx.from)}`
        );
        logger.info(`Chat id: ${ctx.chat.id}`);

        const firstName = ctx.update.message.from.first_name;

        ctx.reply(
            `Привет, ${firstName}!, \n` +
                '\nЯ, конечно, понимаю, что тебе хочется со мной пообщаться и все такое...\n' +
                'Но давай будем придерживаться здоровых рабочих отношений и общаться через команды.\n' +
                'Без негатива😏',
            {
                reply_to_message_id: ctx.message.message_id,
            }
        );
    });
};
