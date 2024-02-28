import { secretKeys, getSecret } from "../../../secrets.js";
import { textStrings } from "../../../constants.js";

export function startupSendMessage(readyClient) {
    const channelId = getSecret(secretKeys.DEFAULT_CHANNEL);
    console.log(channelId);

    const channel = readyClient.channels.resolve(channelId);

    channel.send(textStrings.BOOT_MESSAGE);
}