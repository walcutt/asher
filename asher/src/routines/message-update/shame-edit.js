export function shameEdit(oldMessage, newMessage) {
    const oldContent = oldMessage.content;
    const newContent = newMessage.content;

    const user = oldMessage.author.displayName;

    const self = oldMessage.client.user;

    const timestamp = newMessage.createdTimestamp;

    const messageToSend = `${user} edited this message at <t:${timestamp}:F>. It used to say:\n${oldContent}`;

    console.log("Received message update event!");
    console.log(oldMessage);
    console.log("---------------");
    console.log(newMessage);
    console.log("---------------");
    console.log(self);

    if(oldMessage.user.id == self.id || newMessage.user.id === self.id) {
        return;
    }

    // newMessage.reply(messageToSend).then((m) => m.pin());
}