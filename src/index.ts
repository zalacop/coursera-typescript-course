import * as fs from 'fs';
import { showReview, populateUser } from './utils.js';
const reviews : {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
    {
        name: 'Emily',
        stars: 5,
        loyaltyUser: true,
        date: '25-03-2021'
    },
    {
        name: 'Liam',
        stars: 2,
        loyaltyUser: false,
        date: '24-03-2021'
    },
    {
        name: 'Sophia',
        stars: 4,
        loyaltyUser: true,
        date: '23-03-2021'
    },
    {
        name: 'Jackson',
        stars: 3,
        loyaltyUser: false,
        date: '22-03-2021'
    },
    {
        name: 'Ava',
        stars: 5,
        loyaltyUser: true,
        date: '21-03-2021'
    },
    {
        name: 'Mason',
        stars: 4,
        loyaltyUser: false,
        date: '20-03-2021'
    },
    {
        name: 'Olivia',
        stars: 5,
        loyaltyUser: true,
        date: '19-03-2021'
    },
    {
        name: 'Lucas',
        stars: 1,
        loyaltyUser: false,
        date: '18-03-2021'
    },
    {
        name: 'Amelia',
        stars: 4,
        loyaltyUser: true,
        date: '17-03-2021'
    },
    {
        name: 'nkjsfn',
        stars: 2,
        loyaltyUser: true,
        date: '17-03-2025'
    }
];

const you: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: (string | number)[];
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow', 24]
}

const properties: {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string; 
    };
    contact: string;
    isAvailable: boolean;
}[] = [
    {
        image: '',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Columbia',
        },
        contact: 'marywinkle@gmail.com',
        isAvailable: true,
    },
    {
        image: '',
        title: 'Cozy Chalet',
        price: 110,
        location: {
            firstLine: 'Chalet 7',
            city: 'Zermatt',
            code: 3920,
            country: 'Switzerland',
        },
        contact: 'alpinegetaway@example.com',
        isAvailable: true,
    },
    {
        image: '',
        title: 'Beach Bungalow',
        price: 85,
        location: {
            firstLine: 'Bungalow 45',
            city: 'Phuket',
            code: 83100,
            country: 'Thailand',
        },
        contact: 'beachvibes@example.com',
        isAvailable: true,
    },
    {
        image: '',
        title: 'Historic Townhouse',
        price: 140,
        location: {
            firstLine: 'House 22B',
            city: 'Lisbon',
            code: 1100,
            country: 'Portugal',
        },
        contact: 'townhouseheritage@example.com',
        isAvailable: false,
    },
    {
        image: '',
        title: 'Modern Studio',
        price: 60,
        location: {
            firstLine: 'Studio 19',
            city: 'Tokyo',
            code: 10001,
            country: 'Japan',
        },
        contact: 'tokyoliving@example.com',
        isAvailable: true,
    },
    {
        image: '',
        title: 'Rustic Cottage',
        price: 50,
        location: {
            firstLine: 'Cottage 3A',
            city: 'Cotswolds',
            code: 6743,
            country: 'United Kingdom',
        },
        contact: 'countrysideserenity@example.com',
        isAvailable: true,
    },
    {
        image: '',
        title: 'Desert Villa',
        price: 250,
        location: {
            firstLine: 'Villa 21',
            city: 'Dubai',
            code: 642398,
            country: 'United Arab Emirates',
        },
        contact: 'luxuryindesert@example.com',
        isAvailable: false,
    },
    {
        image: '',
        title: 'Rainforest Hideaway',
        price: 130,
        location: {
            firstLine: 'Lodge 18',
            city: 'Manaus',
            code: 69000,
            country: 'Brazil',
        },
        contact: 'rainforestlodge@example.com',
        isAvailable: true,
    }
    
]

showReview(reviews.length, reviews[1].name, reviews[1].loyaltyUser);

populateUser(you.isReturning, you.firstName);
