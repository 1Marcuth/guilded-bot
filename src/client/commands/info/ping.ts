import * as guilded from "guilded.js"

import { getRandomColor } from "../../utils/several/color"

import ICommand from "../../interfaces/command"

export const command: ICommand = {
    name: "ping",
    description: "Envia o ping do bot.",
    run: async (context) => {
        const client = context.client
        const ping = client.ws.ping
        const clientAvatarUrl = client.user?.avatar as string
        const messageUserMention = `<@${context.createdById}>`
        
        const randomColor = getRandomColor()

        const pingEmbed = new guilded.Embed()
            .setAuthor(client.user?.name, "https://avatars.githubusercontent.com/u/91915075?v=4")
            .setTitle("Ping Bot")
            .setDescription(`Olá ${messageUserMention}, meu ping está em \`${ping}\` ms`)
            .setColor(randomColor)
            .setThumbnail(clientAvatarUrl)

        return context.reply({ embeds: [ pingEmbed ], isPrivate: true })
    }
}