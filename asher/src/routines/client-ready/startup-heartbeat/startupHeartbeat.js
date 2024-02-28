export function startupHeartbeat(readyClient) {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
}