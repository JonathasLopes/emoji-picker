import { Recent } from './recent';
import { People } from './peopleEmoji';
import { Nature } from './nature';
import { FoodDrink } from './food&Drink';
import { TravelPlaces } from './travel&Places';
import { Activity } from './activity';
import { Objects } from './objects';
import { SymbolsFlags } from './symbols&Flags';

export const TypesEmojis = [
    {
        id: 1,
        title: 'Recentes',
        icon: '0x1F551',
        Emojis: Recent
    },
    {
        id: 2,
        title: 'Expressões e Pessoas',
        icon: '0x1F600',
        Emojis: People
    }, 
    {
        id: 3,
        title: 'Natureza',
        icon: '0x1F30D',
        Emojis: Nature
    }, 
    {
        id: 4,
        title: 'Alimentos e Bebidas',
        icon: '0x1F354',
        Emojis: FoodDrink
    }, 
    {
        id: 5,
        title: 'Atividades',
        icon: '0x1F3C0',
        Emojis: Activity
    },
    {
        id: 6,
        title: 'Turismo e Lugares',
        icon: '0x1F30B',
        Emojis: TravelPlaces
    }, 
    {
        id: 7,
        title: 'Objetos',
        icon: '0x1F4A1',
        Emojis: Objects
    },
    {
        id: 8,
        title: 'Símbolos e Bandeiras',
        icon: '0x1F51B',
        Emojis: SymbolsFlags
    }
];