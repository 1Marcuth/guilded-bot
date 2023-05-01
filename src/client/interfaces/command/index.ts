import * as guilded from "guilded.js"

import CommandOptionsStorage from "../../utils/command/options/storage"

import IOption from "bot-command-options-parser/dist/interfaces/option"

interface ICommand {
    name: string
    description: string
    options?: IOption[]
    run: (context: guilded.Message, options?: CommandOptionsStorage) => Promise<any>
}

export default ICommand