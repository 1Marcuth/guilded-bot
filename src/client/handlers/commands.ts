import { Collection } from "@discordjs/collection"
import path from "path"
import fs from "fs"

import ICommand from "../interfaces/command"

export const commands = new Collection()

export default async () => {
    const commandsDirPath = path.join(__dirname, "../commands")
    const fileExtension = path.extname(__filename)

    fs.readdirSync(commandsDirPath)
        .forEach(dir => {
            const subFolder = path.join(commandsDirPath, dir)

            fs.readdirSync(subFolder)
                .filter(file => file.endsWith(fileExtension))
                .forEach(async (file) => {
                    const commandFilePath = path.join(subFolder, file)
                    const command = await importCommand(commandFilePath)

                    if (!command.name) {
                        throw new Error("> [client-commands-handler-error] Not valid commmand name")
                    }

                    if (!command.run) {
                        throw new Error("> [client-commands-handler-error] Not valid command run")
                    }

                    commands.set(command.name, command)
                })
        })

    async function importCommand(filePath: string) {
        const command: ICommand = (await import(filePath)).command
        return command
    }
}