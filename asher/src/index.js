import { secretKeys, getSecret } from "./secrets.js";
import { Client, Events, GatewayIntentBits } from "discord.js";
import { routineManifest } from "./routines/routineManifest.js";

const token = getSecret(secretKeys.BOT_KEY);

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildMessageReactions,
    // Privileged!
    GatewayIntentBits.MessageContent,
] });

routineManifest.forEach(
    (eventClass) => {
        client.on(eventClass.event, (event) => {
            eventClass.routines.forEach(
                (routine) => routine(event)
            )
        });
    }
);

client.login(token);