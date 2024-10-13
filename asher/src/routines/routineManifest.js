import { Events } from "discord.js";
// Import routines.
import { startupHeartbeat } from "./client-ready/startup-heartbeat/startupHeartbeat.js";
import { startupSendMessage } from "./client-ready/startup-send-message/startupSendMessage.js";
import { shame } from "./message-delete/shame/shame.js";
import { shameEdit } from "./message-update/shame-edit.js";

/*
 *  All bot actions are "routines" that fire off of some trigger.
 *  Here we compile them all and group by those triggers.
 *  This manifest will then be fed into the hooks in @/index.js.
 *  To add new routines to existing triggers, add them to the trigger array.
 *  To add routines to new triggers, create a new object in the manifest with that trigger.
 * 
 *  A routine is a function that takes a `ClientEvent` object as its parameter and then acts in response.
 * 
 */
export const routineManifest = [
    {
        event: Events.ClientReady,
        routines: [
            startupHeartbeat,
            startupSendMessage,
        ],
    },
    {
        event: Events.MessageDelete,
        routines: [
            shame,
        ],
    },
    {
        event: Events.MessageUpdate,
        routines: [
            shameEdit,
        ],
    }
];