import { Telegraf } from 'telegraf';
import _ from 'lodash';

export const yesListener = (bot: Telegraf) => {
    bot.hears(['да', 'ДА', 'Да'], (ctx) => {
        const replies: string[] = [
            'Пизда!🙂',
            'Пакет говна!🙂',
            'Сковорода!🙂',
        ];
        ctx.reply(_.sample(replies)!, {
            reply_to_message_id: ctx.message.message_id,
        });
    });
};
