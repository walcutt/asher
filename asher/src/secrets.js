import fs from 'fs';

export const secretKeys = {
    BOT_KEY: 'botkey',
    DEFAULT_CHANNEL: 'default-channel',
};

const secretManifest = [
    secretKeys.BOT_KEY,
    secretKeys.DEFAULT_CHANNEL,
];

let secrets = {};

secretManifest.forEach(
    (key) => {
        secrets[key] = fs.readFileSync(`/run/secrets/${key}`, { encoding: "utf-8" }).trim();
    }
);

export function getSecret(key) {
    return secrets[key];
}