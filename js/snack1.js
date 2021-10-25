const bikesList = [
    {
        name: "Bicicletta da corsa",
        weight: 40
    },

    {
        name: "Mountain bike",
        weight: 60
    },

    {
        name: "Bici leggera",
        weight: 20
    }
];

console.log("SNACK 1");

function printLighterBike(bikesList) {
    let lighterBike = bikesList[0];

    for (let i = 0; i < bikesList.length; i++) {
        const bike = bikesList[i];
        
        const { weight } = bike;

        if (weight < lighterBike.weight) {
            lighterBike = bike;
        }
    }

    console.log(`Nome bicicletta più leggera: ${lighterBike.name}`)
    console.log(`Peso bicicletta più leggera: ${lighterBike.weight}`)
}

printLighterBike(bikesList);

console.log("");

