const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];

    for (let i = 0; i < players.length; i++) {
        let type;
        if (i % 2 !== 0) {
            type = "villain";
        } else {
            type = "hero";
        }

        detailedPlayers.push({
            name: players[i],
            strength: getRandomStrength(),
            type: type,
            image: `images/super-${i + 1}.png`
        });
    }

    return detailedPlayers;
};

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
};

// Build player template
const buildPlayers = (players, type) => {
    const filteredPlayers = players.filter((player) => player.type === type);

    const htmlOutput = filteredPlayers.map((player) => `
        <div class="player">
            <img src="${player.image}" alt="">
            <div class="name">${player.name}</div>
            <div class="strength">${player.strength}</div>
        </div>`);

    return htmlOutput.join('');
};

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
};

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
};
