export function deathPenalty(newMessage) {
    const isPoll = !!newMessage.poll;

    if(!isPoll) {
        return;
    }

    newMessage.reply("death penalty.");
}