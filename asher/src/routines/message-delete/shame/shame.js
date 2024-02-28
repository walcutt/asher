export function shame(deletedMessage) {
    const messageContent = deletedMessage.content;
    const user = deletedMessage.author.displayName;
    const timestamp = deletedMessage.createdTimestamp;

    const newMessage = `${user} posted the following at <t:${timestamp}:F>:\n${messageContent}`;
    
    deletedMessage.reply(newMessage).then((m) => m.pin());
}