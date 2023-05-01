type ArrayRGBColor = [number, number, number]

function getRandomColor() {
    const randomColor: ArrayRGBColor = [
        getRandomNumberColor(), 
        getRandomNumberColor(),
        getRandomNumberColor()
    ]

    return randomColor

    function getRandomNumberColor() {
        return Math.floor(Math.random() * 255)
    }
}


export { getRandomColor }