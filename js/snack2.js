const teamsList = [
    {
        name: "Inter",
        pt: "0",
        fs: "0"
    },

    {
        name: "Milan",
        pt: "0",
        fs: "0"
    },

    {
        name: "Juventus",
        pt: "0",
        fs: "0"
    },

    {
        name: "Napoli",
        pt: "0",
        fs: "0"
    },

    {
        name: "Roma",
        pt: "0",
        fs: "0"
    },

    {
        name: "Lazio",
        pt: "0",
        fs: "0"
    },

    {
        name: "Atalanta",
        pt: "0",
        fs: "0"
    }
];

console.log("SNACK 2");

function generateRandomPoints() {
    const numberOfPoints = Math.floor(Math.random() * 38 * 3);
    return numberOfPoints;
}

function generateRandomFouls() {
    const numberOfFouls = Math.floor(Math.random() * 38 * 30);
    return numberOfFouls;
}

function generateDataForTeams(teamsList) {
    for (let i = 0; i < teamsList.length; i++) {
        const team = teamsList[i];
    
        team.fs = generateRandomFouls();
        team.pt = generateRandomPoints();
    }
}

function generateNewTeamsList(teamsList) {
    const newTeamsList = [];

    for (let i = 0; i < teamsList.length; i++) {
        const team = teamsList[i];

        let { name, fs } = team;
        let newTeamObject = { name, fs };

        newTeamsList.push(newTeamObject);

        console.log("La squadra " + name + " ha subito " + fs + " falli nell'arco del campionato");
    }
    console.log(newTeamsList);
}

generateDataForTeams(teamsList);
generateNewTeamsList(teamsList);