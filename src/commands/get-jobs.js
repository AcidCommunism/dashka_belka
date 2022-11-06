"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobsCommand = void 0;
const logger_1 = require("../../logger");
const supportedJobs = ['custom-tests-launch'];
const getJobsCommand = (bot) => {
    bot.command('getjobs', (ctx) => {
        logger_1.logger.info(`Received new /getjobs command from user ${JSON.stringify(ctx.from)}`);
        logger_1.logger.info(`Chat id: ${ctx.chat.id}`);
        let message = '*Поддерживаемые джобы:*\n';
        supportedJobs.forEach((job) => {
            message += `  \\- \`${job}\`\n`;
        });
        bot.telegram.sendMessage(ctx.chat.id, message, {
            parse_mode: 'MarkdownV2',
        });
    });
};
exports.getJobsCommand = getJobsCommand;
