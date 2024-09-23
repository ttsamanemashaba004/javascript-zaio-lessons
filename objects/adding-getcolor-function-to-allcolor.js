const primaryColors = {
    red: 'red',
    blue: 'blue'
};

const secondaryColors = {
    grey: 'grey',
    black: 'black'
}

const allColors = {
    //use spread operato here
    ...primaryColors,
    ...secondaryColors,

    //add getColor function that takes 1 param of color and returns it
    getColor(color){
        return this[color]
    }

}

console.log(allColors.getColor("red"));

const getColor = (color) => {
    return allColors[color];
}