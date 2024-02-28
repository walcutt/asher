import fs from 'fs';

export const secretKeys = {
    BOT_KEY: 'botkey'
};

const secretManifest = [
    secretKeys.BOT_KEY,
];

let secrets = {};

secretManifest.forEach(
    (key) => {
        secrets[key] = fs.readFileSync(`/run/secrets/${key}`, { encoding: "utf-8" });
    }
);

export function getSecret(key) {
    return secrets[key];
}