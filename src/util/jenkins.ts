import axios from 'axios';
import { logger } from '../../logger';

export const launchCustomTestJob = async () => {
    const jobName = 'custom-tests-launch';
    const defaultBranch = 'aggregate-817-821';
    try {
        const res = await axios({
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            url: `${process.env.JENKINS_URL}/job/${jobName}/buildWithParameters?token=telegram&E2E_TESTS_BRANCH=${defaultBranch}`,
            auth: {
                username: process.env.JENKINS_USER,
                password: process.env.JENKINS_TOKEN,
            },
        });
    } catch (error) {
        logger.error(error);
        throw error;
    }
};
