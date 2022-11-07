
# Dashka

Dashka can help you launch your test jobs, send updates about results and just be there for you.

To reach Jenkins she needs to be deployed on host inside VPN (or add functionality to explicitly install VPN client and connect by herself).

To start:

- `npm run build`;
- `npm run start`.

In `.env` file following parameters should be specified:

- `TOKEN` - Telegram bot token;
- `SERVER_URL` - server URL, accessible to the world, of bot where it is hosted or some ngrok URL or whatever;
- `PORT` - port number the bot is listening;
- `JENKINS_URL` - Jenkins URL;
- `JENKINS_USER` - Jenkins username;
- `JENKINS_TOKEN` - Jenkins user's auth token.
