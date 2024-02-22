import dotenv from "dotenv"

dotenv.config()

const bot = {
    token: process.env.BOT_TOKEN as string,
    name: "Marcuth's butler",
    prefix: "/",
    description: "Bot template made by Marcuth at https://github.com/1Marcuth",
    commands: {
        optionsSeparator: ":"
    },
    id: "",
    user: {
        id: ""
    },
    admin: {
        id: ""
    },
    webhook: {
        id: "",
        token: "",
        username: "",
        avatarURL: "",
        url: ""
    }
}

export { bot }