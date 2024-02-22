import { OptionValidationResult } from "command-options-handler"

class CommandOptionsStorage {
    private options: OptionValidationResult[]

    constructor(options: OptionValidationResult[]) {
        this.options = options
    }

    public get(optionName: string) {
        return this.options.find(option => option.name === optionName)
    }

    public getRawValue(optionName: string) {
        for (const option of this.options)  {
            if (option.name === optionName) {
                return option.value.raw
            }
        }
    }

    public getParsedValue(optionName: string) {
        for (const option of this.options)  {
            if (option.name === optionName) {
                return option.value.parsed
            }
        }
    }

    public getType(optionName: string) {
        for (const option of this.options)  {
            if (option.name === optionName) {
                return ""
            }
        }
    }
}

export default CommandOptionsStorage