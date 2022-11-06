import { Telegraf } from 'telegraf';
import { logger } from '../../logger';

const supportedJobs = ['custom-tests-launch'];

export const getJobsCommand = (bot: Telegraf) => {
    bot.command('getjobs', (ctx) => {
        logger.info(
            `Received new /getjobs command from user ${JSON.stringify(
                ctx.from
            )}`
        );
        logger.info(`Chat id: ${ctx.chat.id}`);
        let message = '*Поддерживаемые джобы:*\n';
        supportedJobs.forEach((job) => {
            message += `  \\- \`${job}\`\n`;
        });

        bot.telegram.sendMessage(ctx.chat.id, message, {
            parse_mode: 'MarkdownV2',
        });
    });
};
