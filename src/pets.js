import {randomUUID} from 'crypto';
export const pets = [
    {
        id: randomUUID(),
        nome: "Plinio",
        raça: "Labrador",
        idade: 5,
        tutor: "João Gomes"
    },
    {
        id: randomUUID(),
        nome: "Mia",
        raça: "Poodle",
        idade: 3,
        tutor: "Maria Silva"
    },
    {
        id: randomUUID(),
        nome: "Nina",
        raça: "Vira-lata",
        idade: 7,
        tutor: "Nathalia Rayssa"
    },
    {
        id: randomUUID(),
        nome: "Toby",
        raça: "Bulldog",
        idade: 4,
        tutor: "Carlos Eduardo"
    }
]
