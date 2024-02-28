import { secretKeys, getSecret } from "./secrets.js";
import { Client, Events, GatewayIntentBits } from "discord.js";

const token = getSecret(secretKeys.BOT_KEY);

const client = new Client({ intents: GatewayIntentBits.Guilds });

client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(token);