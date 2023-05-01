import { bot } from "../../settings"

function isCommand(mesasgeContet: string) {
    return mesasgeContet.startsWith(bot.prefix) && mesasgeContet[bot.prefix.length + 1] !== " " && mesasgeContet.trim().length > bot.prefix.length
}

export { isCommand }