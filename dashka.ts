import path from 'path';
import { logger } from './logger';
import * as dotenv from 'dotenv';
import { Telegraf } from 'telegraf';
import { text } from 'body-parser';

dotenv.config({ path: path.resolve(__dirname, '.env') });
const { TOKEN, SERVER_URL, PORT } = process.env;
const dashka = new Telegraf(TOKEN || 'blya:(');

logger.info('Ну чеу...Погнали?🚀');

import { startBotCommand } from './src/commands/start';
startBotCommand(dashka);

import { listJobsActionHandler } from './src/handlers/actions/list-jobs';
listJobsActionHandler(dashka);

import { topLevelMenuActionHandler } from './src/handlers/actions/top-level-menu';
topLevelMenuActionHandler(dashka);

import { customJobActionHandler } from './src/handlers/actions/custom-job';
customJobActionHandler(dashka);

import { helpCommand } from './src/commands/help';
helpCommand(dashka);

import { getJobsCommand } from './src/commands/get-jobs';
getJobsCommand(dashka);

import { fortuneCookieCommand } from './src/commands/fortune-cookie';
fortuneCookieCommand(dashka);

// dashka.command('startjob', async (ctx) => {
//     logger.info(
//         `Received new /startjob command from user ${JSON.stringify(ctx.from)}`
//     );
//     logger.info(`Chat id: ${ctx.chat.id}`);

//     const input = ctx.message.text.split(' ');
//     if (input.length < 2) {
//         ctx.reply('А название джобы я тебе откуда должна родить по-твоему?');
//         ctx.reply(
//             'Простите, но мой уровень экстрасенсорики сегодня низковат. Название джобы мне запилите, сильвупле.'
//         );
//         return;
//     }
//     const jobNameInput = input[1];
//     if (supportedJobs.includes(jobNameInput)) {
//         dashka.telegram.sendChatAction(ctx.chat.id, 'upload_photo');
//         await dashka.telegram.sendPhoto(ctx.chat.id, {
//             source: 'src/media-content/start-job.png',
//         });
//         ctx.reply('Not yet implemented:(\nPlease standby...');
//     } else {
//         const suggestions = supportedJobs.filter((item) => {
//             return item.startsWith(jobNameInput);
//         });
//         let message =
//             '*Не поняла, что за джоба такая: "' +
//             jobNameInput.replaceAll('-', '\\-') +
//             '"*\n' +
//             'Мб ты имел в виду:\n';
//         suggestions.forEach((job) => {
//             message += `  \\- \`${job}\`\n`;
//         });
//         if (suggestions.length == 0) {
//             message += '  \\- ХЗ даже\n';
//         }

//         dashka.telegram.sendMessage(ctx.chat.id, message, {
//             parse_mode: 'MarkdownV2',
//         });
//     }
// });

import { greetingsListener } from './src/listeners/greeting';
greetingsListener(dashka);

import { yesListener } from './src/listeners/yes';
yesListener(dashka);

import { noListener } from './src/listeners/no';
noListener(dashka);

import { mentionListener } from './src/listeners/mention';
mentionListener(dashka);

import { textListener } from './src/listeners/text';
//textListener(dashka);

import { launchCustomJobAction } from './src/handlers/actions/launch-custom-test-job';
launchCustomJobAction(dashka);

dashka.launch({
    webhook: {
        domain: SERVER_URL,
        port: PORT,
        hookPath: `/webhook/${TOKEN}`,
    },
});

process.once('SIGINT', () => dashka.stop('SIGINT'));
process.once('SIGTERM', () => dashka.stop('SIGTERM'));
