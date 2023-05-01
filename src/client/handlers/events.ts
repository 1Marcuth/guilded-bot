import guilded from "guilded.js"
import path from "path"
import fs from "fs"

import IEvent from "../interfaces/event"

export default async (client: guilded.Client) => {
    const eventsDir = path.join(__dirname, "../events")
    const fileExtension = path.extname(__filename)

    fs.readdirSync(eventsDir)
        .filter(file => file.endsWith(fileExtension))
        .forEach(async (file) => {
            const filePath = path.join(eventsDir, file)
            const event = await importEvent(filePath)

            if (event.type === "on") {
                client.on(event.name, (...args: any) => event.run(client, ...args))

            } else if (event.type === "once") {
                client.once(event.name, (...args: any) => event.run(client, ...args))
                
            } else {
                throw new Error(`> [client-error] The value ${event.type} that informed for the type of the event is invalid`)
            }
        })

    async function importEvent(filePath: string) {
        const event: IEvent = (await import(filePath)).event
        return event
    }
}