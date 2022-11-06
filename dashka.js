"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const logger_1 = require("./logger");
const dotenv = __importStar(require("dotenv"));
const telegraf_1 = require("telegraf");
dotenv.config({ path: path_1.default.resolve(__dirname, '.env') });
const { TOKEN, SERVER_URL, PORT } = process.env;
const dashka = new telegraf_1.Telegraf(TOKEN || 'blya:(');
logger_1.logger.info('Ну чеу...Погнали?🚀');
const start_1 = require("./src/commands/start");
(0, start_1.startBotCommand)(dashka);
const list_jobs_1 = require("./src/handlers/actions/list-jobs");
(0, list_jobs_1.listJobsActionHandler)(dashka);
const top_level_menu_1 = require("./src/handlers/actions/top-level-menu");
(0, top_level_menu_1.topLevelMenuActionHandler)(dashka);
const custom_job_1 = require("./src/handlers/actions/custom-job");
(0, custom_job_1.customJobActionHandler)(dashka);
const help_1 = require("./src/commands/help");
(0, help_1.helpCommand)(dashka);
const get_jobs_1 = require("./src/commands/get-jobs");
(0, get_jobs_1.getJobsCommand)(dashka);
const fortune_cookie_1 = require("./src/commands/fortune-cookie");
(0, fortune_cookie_1.fortuneCookieCommand)(dashka);
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
const greeting_1 = require("./src/listeners/greeting");
(0, greeting_1.greetingsListener)(dashka);
const yes_1 = require("./src/listeners/yes");
(0, yes_1.yesListener)(dashka);
const no_1 = require("./src/listeners/no");
(0, no_1.noListener)(dashka);
const mention_1 = require("./src/listeners/mention");
(0, mention_1.mentionListener)(dashka);
const text_1 = require("./src/listeners/text");
(0, text_1.textListener)(dashka);
const launch_custom_test_job_1 = require("./src/handlers/actions/launch-custom-test-job");
(0, launch_custom_test_job_1.launchCustomJobAction)(dashka);
dashka.launch({
    webhook: {
        domain: SERVER_URL,
        port: PORT,
        hookPath: `/webhook/${TOKEN}`,
    },
});
process.once('SIGINT', () => dashka.stop('SIGINT'));
process.once('SIGTERM', () => dashka.stop('SIGTERM'));
