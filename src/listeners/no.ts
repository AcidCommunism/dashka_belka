import { Telegraf } from 'telegraf';
import _ from 'lodash';

export const noListener = (bot: Telegraf) => {
    bot.hears(['нет', 'НЕТ', 'Нет'], (ctx) => {
        const replies: string[] = ['Говна пакет!🙂', 'Пидора ответ!🙂'];
        ctx.reply(_.sample(replies)!, {
            reply_to_message_id: ctx.message.message_id,
        });
    });
};
