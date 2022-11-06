import { Telegraf } from 'telegraf';

export const greetingsListener = (bot: Telegraf) => {
    bot.hears(
        [
            /.*ривет.*/,
            /.*даров.*/,
            /.*ello.*/,
            /hi.*/,
            /Hi.*/,
            /HI.*/,
            /.*ратути.*/,
            /.*reeting.*/,
        ],
        Telegraf.reply('Ну привет)')
    );
};
