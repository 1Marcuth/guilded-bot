import * as guilded from "guilded.js"

import { extractCommandAndOptions, formatHtmlToMarkdown } from "../utils/message/content"
import CommandWrapper from "../utils/command/wrapper"
import { isCommand } from "../utils/command/tools"
import { commands } from "../handlers/commands"
import { bot } from "../settings"

import IEvent from "../interfaces/event/index"
import ICommand from "../interfaces/command"

export const event: IEvent = {
    name: "messageCreated",
    type: "on",
    run: async (client: guilded.Client, context: guilded.Message) => {
        const messageContent = context.content

        if (!isCommand(messageContent)) return
        if (context.createdByBotId) return

        const { command, options } = extractCommandAndOptions(messageContent)

        const commandObject = commands.get(command) as ICommand

        if (!commandObject) {
            return await context.reply({ content: formatHtmlToMarkdown(`O comando <code>${bot.prefix}${command}</code> não existe!`), isPrivate: true })
        }

        try {
            console.log(`> [client] Running the command '${command}'.`)

            const commandWrapper = new CommandWrapper(commandObject)
            await commandWrapper.run(context, options)
        } catch(error) {
            console.error(error)
            await context.reply({ content: `Ocorreu um erro ao tentar executar o comando '${command}'.`, isPrivate: true })
        }
    }
}