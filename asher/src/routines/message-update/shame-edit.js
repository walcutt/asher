export function shameEdit(oldMessage, newMessage) {
    const oldContent = oldMessage.content;
    const newContent = newMessage.content;

    const user = oldMessage.author.displayName;
    const timestamp = newMessage.createdTimestamp;

    const messageToSend = `${user} edited this message at <t:${timestamp}:F>. It used to say:\n${oldContent}`;

    newMessage.reply(messageToSend).then((m) => m.pin());
}