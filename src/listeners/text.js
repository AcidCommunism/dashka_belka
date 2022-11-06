"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textListener = void 0;
const logger_1 = require("../../logger");
const textListener = (bot) => {
    bot.on('text', (ctx) => {
        logger_1.logger.info(`Received new text message from user ${JSON.stringify(ctx.from)}`);
        logger_1.logger.info(`Chat id: ${ctx.chat.id}`);
        const firstName = ctx.update.message.from.first_name;
        ctx.reply(`Привет, ${firstName}!, \n` +
            '\nЯ, конечно, понимаю, что тебе хочется со мной пообщаться и все такое...\n' +
            'Но давай будем придерживаться здоровых рабочих отношений и общаться через команды.\n' +
            'Без негатива😏', {
            reply_to_message_id: ctx.message.message_id,
        });
    });
};
exports.textListener = textListener;
