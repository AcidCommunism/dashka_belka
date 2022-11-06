"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFortune = void 0;
const axios_1 = __importDefault(require("axios"));
const logger_1 = require("../../logger");
const getFortune = async () => {
    try {
        const response = await axios_1.default.get('http://yerkee.com/api/fortune');
        return response.data.fortune;
    }
    catch (e) {
        logger_1.logger.error(e);
    }
};
exports.getFortune = getFortune;
