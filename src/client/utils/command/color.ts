type ArrayRgbColor = [number, number, number]

function getRandomNumberColor(): number {
    return Math.floor(Math.random() * 255)
}

function getRandomColor(): ArrayRgbColor {
    const randomColor: ArrayRgbColor = [
        getRandomNumberColor(), 
        getRandomNumberColor(),
        getRandomNumberColor()
    ]

    return randomColor
}

class Colors {
    public static DarkRed = "#8b0000"
    public static Aqua = "#1ABC9C"
    public static DarkAqua = "#11806A"
    public static Green = "#57F287"
    public static DarkGreen = "#1F8B4C"
    public static Blue = "#3498DB"
    public static DarkBlue = "#206694"
    public static Purple = "#9B59B6"
    public static DarkPurple = "#71368A"
    public static LuminousVividPink = "#E91E63"
    public static DarkVividPink = "#AD1457"
    public static Gold = "#F1C40F"
    public static DarkGold = "#C27C0E"
    public static Orange = "#E67E22"
    public static DarkOrange = "#A84300"
    public static Red = "#ED4245"
    public static Grey = "#95A5A6"
    public static DarkGrey = "#979C9F"
    public static DarkerGrey = "#7F8C8D"
    public static LightGrey = "#BCC0C0"
    public static Navy = "#34495E"
    public static DarkNavy = "#2C3E50"
    public static Yellow = "#FFFF00"
    public static White = "#FFFFFF"
    public static Greyple = "#99AAb5"
    public static Black = "#23272A"
    public static DarkButNotBlack = "#2C2F33"
    public static NotQuiteBlack = "#23272A"
    public static Blurple = "#5865F2"
    public static Fuchsia = "#EB459E"
    public static UnnamedRoleColor1 = "#607D8B"
    public static UnnamedRoleColor2 = "#546E7A"
    public static BackgroundBlackColor = "#36393F"

    public static get Random() {
        return getRandomColor()
    }
}

export { getRandomColor }
export default Colors