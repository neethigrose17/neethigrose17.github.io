exports.dealCards = (arr) => {
    let computer = [];
    let player = [];
    arr.forEach((elem, index) => {
        if (index % 2 === 0) {
            computer.push(elem)
        } else {
            player.push(elem)
        }
    });
    return {computer, player};
}

exports.updateValues = (arr) => {
    let updatedCards = arr.map(elem => {
        switch(elem.value) {
            case "JACK":
                elem.value = 11;
                break; // try a flag system instead of breaks in future
            case "QUEEN":
                elem.value = 12;
                break;
            case "KING":
                elem.value = 13;
                break;
            case "ACE":
                elem.value = 14;
                break;
            default:
                elem.value = Number(elem.value);
        }
        // returns updated element to create a new array of elems
        return elem;
    });
    // when all elements have been gone through
    // return updated array of new elements with int values
    return updatedCards;
}

exports.sortHand = (arr) => {
    let sortedCards = arr.sort((a,b) => a.value - b.value);
    return sortedCards;
}