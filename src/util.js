


export function increment(number){
    return ++number;
}

export function decrement(number){
    return --number;
}

export function getRandomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
