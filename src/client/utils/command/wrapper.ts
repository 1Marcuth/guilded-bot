import CommandOptionsParser from "bot-command-options-parser/dist"
import * as guilded from "guilded.js"

import { formatHtmlToMarkdown } from "../message/content"
import CommandOptionsStorage from "./options/storage"

import IValidateResult from "bot-command-options-parser/dist/interfaces/validate-result"
import ICommand from "../../interfaces/command"

class CommandWrapper {
    public command: ICommand

    constructor(command: ICommand) {
        this.command = command
    }

    public async run(context: guilded.Message, rawOptions: string[]) {
        const options = this.command.options

        if (options) {
            const optionsParser = new CommandOptionsParser(options)
            let optionsValidateResult: IValidateResult[]
            
            if (rawOptions.length > 0) {
                optionsValidateResult = optionsParser.validateOptions(rawOptions)

                let optionsError: any[] = []
                
                optionsValidateResult.forEach((option, i) => {
                    if (!option.isValid.value) optionsError.push({ i, ...option })
                })

                if (optionsError.length > 0) {
                    const optionsErrorMessage = "<b>Erro de argumentos:</b><br><br>" + optionsError.map((option, i) => {
                        const commandOption = options.find(opt => opt.name === option.name)
                        return `<code>- ${i + 1} : ${commandOption?.name} [${commandOption?.type}]</code> | <i>${commandOption?.description}</i><br>`
                    }).join("")

                    return await context.reply({ content: formatHtmlToMarkdown(optionsErrorMessage) })
                }

                const optionsStorage = new CommandOptionsStorage(optionsValidateResult)

                return await this.command.run(context, optionsStorage)
            } else {
                const optionsMenu = options.map((option, i) => `- ${i + 1} : <b>${option.name} [${option.type}]</b> | <i>${option.description}</i><br>`).join("")

                return await context.send({ content: formatHtmlToMarkdown(`<b>Envie os argumentos:</b><br>${optionsMenu}`).trim() })
            }
        }
        
        return await this.command.run(context)
    }
}

export default CommandWrapper