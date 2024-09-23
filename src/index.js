class Character {
    constructor(name, type, health, level, attack, defence) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }
}


class Team {
    constructor() {
        this.characters = [];
    }

    addCharacter(character) {
        if (character instanceof Character) {
            this.characters.push(character);
        } else {
            throw new Error('Invalid character type');
        }
    }

    *[Symbol.iterator]() {
        for (const character of this.characters) {
            yield character; // используем yield для выдачи каждого персонажа
        }
    }
}
