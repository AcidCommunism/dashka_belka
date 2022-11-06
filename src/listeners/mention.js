"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mentionListener = void 0;
const logger_1 = require("../../logger");
const mentionListener = (bot) => {
    bot.mention('belkacar_telematics_jobs_bot', async (ctx) => {
        logger_1.logger.info(`Received new mention from user ${JSON.stringify(ctx.from)}`);
        logger_1.logger.info(`Chat id: ${ctx.chat.id}`);
        ctx.reply('Чего надо?', {
            reply_to_message_id: ctx.message.message_id,
        });
    });
};
exports.mentionListener = mentionListener;
