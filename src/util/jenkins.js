"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.launchCustomTestJob = void 0;
const axios_1 = __importDefault(require("axios"));
const logger_1 = require("../../logger");
const launchCustomTestJob = async () => {
    const jobName = 'custom-tests-launch';
    const defaultBranch = 'aggregate-817-821';
    try {
        const res = await (0, axios_1.default)({
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            url: `${process.env.JENKINS_URL}/job/${jobName}/buildWithParameters?token=telegram&E2E_TESTS_BRANCH=${defaultBranch}`,
            auth: {
                username: process.env.JENKINS_USER,
                password: process.env.JENKINS_TOKEN,
            },
        });
    }
    catch (error) {
        logger_1.logger.error(error);
    }
};
exports.launchCustomTestJob = launchCustomTestJob;
