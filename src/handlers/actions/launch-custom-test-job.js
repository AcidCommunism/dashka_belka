"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.launchCustomJobAction = void 0;
const jenkins_1 = require("../../util/jenkins");
const logger_1 = require("../../../logger");
const lodash_1 = __importDefault(require("lodash"));
const greetings = [
    'Хэллоу',
    'Привет',
    'Салют',
    'Хола',
    'Гамарджоба',
    'Баден Дзез',
    'Коничиуа',
    'Нихао',
    'Здарова',
    'Здравствуйте',
    'Доброго времени суток',
    'Добрейший вечерочек',
    'Добрый вечер',
    'йоу',
    'Sup',
    'Бонджьорно',
    'Вечер в хату',
];
const audiences = [
    'коллеги',
    'посонессы и посоны',
    'Дамы и Господа',
    'товарищи',
    'пипл',
    'друзья',
    'пролетарии',
    'леди и джентльмены',
    'приматы',
    'люди',
    'биосфера планеты Земля',
    'эволюционировавшие обезьяны',
    'кожаные мешки',
    'чуваки и чувакессы',
    'братья и сестры',
    'раста',
];
const pickMeUpVideoLinks = [
    'https://www.youtube.com/watch?v=YxvBPH4sArQ&ab_channel=JTMichaelson',
    'https://www.youtube.com/watch?v=8DyziWtkfBw&ab_channel=RedHotChiliPeppers',
    'https://www.youtube.com/watch?v=fAcYS-_8L2s&ab_channel=LarsvonRetriever',
    'https://www.youtube.com/watch?v=CU3mc0yvRNk&ab_channel=TheDandyWarholsVEVO',
    'https://www.youtube.com/watch?v=DXAAzNIrmIc&ab_channel=BeeAppleseed',
    'https://www.youtube.com/watch?v=o5i6fHlvtL0&ab_channel=CobraMan',
    'https://www.youtube.com/watch?v=dcseRYRUUck&ab_channel=%D0%91%D0%B0%D0%B1%D0%B1%D0%B0',
    'https://www.youtube.com/watch?v=nVhNCTH8pDs&ab_channel=PinkFloyd',
    'https://www.youtube.com/watch?v=Olgn9sXNdl0&ab_channel=UniversalPictures',
    'https://www.youtube.com/watch?v=j-ihkH3-yC4&ab_channel=ANACONDAZ',
    'https://www.youtube.com/watch?v=AdHJurX0yVA&ab_channel=InsideOutMusicTV',
];
const notificationsChannelId = -1001818268170;
const launchCustomJobAction = async (bot) => {
    bot.action('launchCustomTestJob', async (ctx) => {
        logger_1.logger.info(`Received new custom job launch action from user ${JSON.stringify(ctx.from)}`);
        logger_1.logger.info(`Chat id: ${ctx?.chat?.id}`);
        await ctx.deleteMessage();
        bot.telegram.sendChatAction(ctx?.chat?.id ?? 'well, I just hope it never happens for now', 'upload_photo');
        await bot.telegram.sendPhoto(ctx?.chat?.id ?? 'well, I just hope it never happens for now', {
            source: 'src/media-content/start-job.png',
        });
        await (0, jenkins_1.launchCustomTestJob)();
        await bot.telegram.sendMessage(
        // TODO:
        ctx?.chat?.id ?? 'well, I just hope it never happens for now', 'Запустила!', {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'В начало!',
                            callback_data: 'topLevelMenu',
                        },
                    ],
                ],
            },
        });
        await bot.telegram.sendMessage(notificationsChannelId, `${lodash_1.default.sample(greetings)},  ${lodash_1.default.sample(audiences)}!👋\n` +
            `Стартанула джобу с Е2Е тестами по просьбе @${ctx.from?.username}🚀\n` +
            'По результатам отпишусь!\n' +
            `<a href="${lodash_1.default.sample(pickMeUpVideoLinks)}">Не скучайте</a>!🙂`, {
            parse_mode: 'HTML',
            disable_web_page_preview: true,
        });
    });
};
exports.launchCustomJobAction = launchCustomJobAction;
