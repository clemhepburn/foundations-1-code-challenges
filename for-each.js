// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const newArray = [];
    arr.forEach((pet) => {
        newArray.push(pet.name)
    })
    return newArray;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const newArray = [];
    arr.forEach((pet) => {
        newArray.push(pet.type)
    })
    return newArray.reverse();
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const newArray = [];
    arr.forEach((pet) => {
        newArray.push({'nombre': pet.name, 'tipo': pet.type});

    })
    return newArray;
}

