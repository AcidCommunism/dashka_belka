"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noListener = void 0;
const lodash_1 = __importDefault(require("lodash"));
const noListener = (bot) => {
    bot.hears(['нет', 'НЕТ', 'Нет'], (ctx) => {
        const replies = ['Говна пакет!🙂', 'Пидора ответ!🙂'];
        ctx.reply(lodash_1.default.sample(replies), {
            reply_to_message_id: ctx.message.message_id,
        });
    });
};
exports.noListener = noListener;
