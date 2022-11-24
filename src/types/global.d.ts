namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: string;
        PORT: number;
        TOKEN: string;
        SERVER_URL: string;
        LOG_LEVEL: string;
        JENKINS_URL: string;
        JENKINS_USER: string;
        JENKINS_TOKEN: string;
        TELEGRAM_CHANNEL_ID: number;
    }
}
