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
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston = __importStar(require("winston"));
const logConfig = {
    format: winston.format.combine(winston.format.colorize(), winston.format.timestamp(), winston.format.splat(), winston.format.label({
        label: '🤖🐿',
    }), winston.format.printf(({ timestamp, level, message, service, label }) => {
        return `[${timestamp}] ${service} ${level}: ${label} ${JSON.stringify(message, null, 4)}`;
    })),
    defaultMeta: { service: 'dashka-belka' },
    transports: [
        new winston.transports.Console({ level: 'info' }),
        new winston.transports.File({
            level: 'error',
            filename: `${__dirname}/log/error.log`,
        }),
        new winston.transports.File({
            filename: `${__dirname}/log/combined.log`,
        }),
    ],
};
exports.logger = winston.createLogger(logConfig);
