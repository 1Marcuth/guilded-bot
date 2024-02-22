import * as guilded from "guilded.js"

import { bot } from "./settings"

import handleCommands from "./handlers/commands"
import handleEvents from "./handlers/events"

function createClient() {
    const client = new guilded.Client({ token: bot.token })

    async function useEventsHandler(client: guilded.Client) {
        await handleEvents(client)
    }

    async function useCommandsHandler() {
        await handleCommands()
    }

    function start() {
        console.log("> [client] Starting client...")

        return new Promise(async (resolve) => {
            await useEventsHandler(client)
            await useCommandsHandler()

            client.login({ fresh: true })

            client.on("ready", () => resolve(null))
        })
    }

    function stop() {
        console.log("> [client] Stoping...")

        client.disconnect()

        console.log("> [client] Successfully stopped!")
    }
    return { start, stop }
}

export default createClient