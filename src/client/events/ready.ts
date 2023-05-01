import * as guilded from "guilded.js"

import IEvent from "../interfaces/event"

export const event: IEvent = {
    type: "once",
    name: "ready",
    run: async (client: guilded.Client) => {
        console.log(`> [client] Successfully started as '${client.user?.name}'.`)

        const totalOfGuilds = 1
        const totalOfMembers = client.members.cache.size

        console.log(`> [client] I'm on '${totalOfGuilds}' servers with '${totalOfMembers}' total members!`)
    }
}