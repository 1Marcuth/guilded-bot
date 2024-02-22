import * as guilded from "guilded.js"

import CommandOptionsStorage from "../../utils/command/options/storage"
import { CommandOption } from "command-options-handler"

interface ICommand {
    name: string
    description: string
    options?: CommandOption[]
    run: (context: guilded.Message, options?: CommandOptionsStorage) => Promise<any>
}

export default ICommand