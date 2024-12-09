import * as fs from 'fs';
import { showReview, populateUser } from './utils.js';
import { Permissions, LoyaltyUser } from './enums.js';

let isLoggedIn: boolean;

// const reviews : ({
//     name: string;
//     stars: number;
//     loyaltyUser: LoyaltyUser;
//     date: string;
// } | {
//     name: string;
//     stars: number;
//     loyaltyUser: LoyaltyUser;
//     date: string;
//     description: string;
// })[] =

const reviews : any[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '27-03-2021',
        description: 'Great hosts, location was a bit further than said'
    },
    {
        name: 'Emily',
        stars: 5,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '25-03-2021'
    },
    {
        name: 'Liam',
        stars: 2,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '24-03-2021'
    },
    {
        name: 'Sophia',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '23-03-2021'
    },
    {
        name: 'Jackson',
        stars: 3,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '22-03-2021'
    },
    {
        name: 'Ava',
        stars: 5,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '21-03-2021'
    },
    {
        name: 'Mason',
        stars: 4,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '20-03-2021'
    },
    {
        name: 'Olivia',
        stars: 5,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '19-03-2021'
    },
    {
        name: 'Lucas',
        stars: 1,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '18-03-2021'
    },
    {
        name: 'Amelia',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '17-03-2021'
    },
    {
        name: 'Signe',
        stars: 2,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '17-03-2025'
    }
];

showReview(reviews.length, reviews[2].name, reviews[2].loyaltyUser);

const you: {
    firstName: string;
    lastName: string;
    permissions: Permissions,
    isReturning: boolean;
    age: number;
    stayedAt: (string | number)[];
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow', 24]
}

populateUser(you.isReturning, you.firstName);

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
    contact: [number, string];
    isAvailable: boolean;
}[] = [
    {
        image: 'https://img.freepik.com/premium-photo/small-wooden-house-large-stone-forest_236859-1336.jpg?w=740',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Columbia',
        },
        contact: [ +1123495082908, 'marywinkle@gmail.com'],
        isAvailable: true,
    },
    {
        image: 'https://img.freepik.com/free-photo/cozy-cabin-nestled-colorful-autumn-forest_9975-23880.jpg',
        title: 'Cozy Chalet',
        price: 110,
        location: {
            firstLine: 'Chalet 7',
            city: 'Zermatt',
            code: 3920,
            country: 'Switzerland',
        },
        contact: [ +1123495082908, 'alpinegetaway@example.com'],
        isAvailable: true,
    },
    {
        image: 'https://img.freepik.com/premium-photo/craftsman-bungalow-lush-suburban-setting-front-view_501731-18767.jpg?w=1800',
        title: 'Beach Bungalow',
        price: 85,
        location: {
            firstLine: 'Bungalow 45',
            city: 'Phuket',
            code: 83100,
            country: 'Thailand',
        },
        contact: [ +1123495082908, 'beachvibes@gmail.com'],
        isAvailable: true,
    },
    {
        image: 'https://img.freepik.com/free-photo/old-brick-house-paved-street_23-2147764400.jpg?t=st=1733318627~exp=1733322227~hmac=91bff1edf849a2fc224c49fe809ee5c9607d4720aebd6f884746eb7251a02a17&w=1800',
        title: 'Historic Townhouse',
        price: 140,
        location: {
            firstLine: 'House 22B',
            city: 'Lisbon',
            code: 1100,
            country: 'Portugal',
        },
        contact: [ +1123495082908, 'townhouseheritage@hotmail.com'],
        isAvailable: false,
    },
    {
        image: 'https://img.freepik.com/premium-photo/modern-interior-bright-kitchen-bedroom-apartment-with-tea-croissant-foreground_120968-361.jpg?w=1800',
        title: 'Modern Studio',
        price: 60,
        location: {
            firstLine: 'Studio 19',
            city: 'Tokyo',
            code: 10001,
            country: 'Japan',
        },
        contact: [ +1123495082908, 'tokyoliving@example.com'],
        isAvailable: true,
    },
    {
        image: 'https://img.freepik.com/free-photo/cozy-cabin-nestled-colorful-autumn-forest_9975-23880.jpg',
        title: 'Rustic Cottage',
        price: 50,
        location: {
            firstLine: 'Cottage 3A',
            city: 'Cotswolds',
            code: 6743,
            country: 'United Kingdom',
        },
        contact: [ +1123495082908, 'countrysideserenity@example.com'],
        isAvailable: true,
    },
    {
        image: 'https://img.freepik.com/premium-photo/luxury-house-with-pool-against-sky_1048944-11769252.jpg?w=1800',
        title: 'Desert Villa',
        price: 250,
        location: {
            firstLine: 'Villa 21',
            city: 'Dubai',
            code: 642398,
            country: 'United Arab Emirates',
        },
        contact: [ +1123495082908, 'luxuryindesert@hotmail.com'],
        isAvailable: false,
    },
    {
        image: 'https://img.freepik.com/free-photo/typical-norwegian-rural-cottage-with-breathtaking-landscape-beautiful-greenery-norway_181624-9584.jpg?t=st=1733318716~exp=1733322316~hmac=17fc9333c831544a41329f2fd130360ccfa435751882461598b035a7a2fb63c6&w=1480',
        title: 'Rainforest Hideaway',
        price: 130,
        location: {
            firstLine: 'Lodge 18',
            city: 'Manaus',
            code: 69000,
            country: 'Brazil',
        },
        contact: [ +1123495082908, 'rainforestlodge@yahoo.com'],
        isAvailable: true,
    }
]

let authorityStatus: any;

isLoggedIn = true;

function showDetails(authorityStatus: boolean | Permissions, element : HTMLDivElement, price: number) {
    if(authorityStatus) {
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '$ per night';
        element.appendChild(priceDisplay);
    }
}

const propertiesContainer = document.querySelector('.properties');

for (let i = 0; i < properties.length; i++ ) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    const image = document.createElement('img');
    image.setAttribute('src', properties[i].image);
    card.appendChild(image);
    propertiesContainer.appendChild(card);
    showDetails(isLoggedIn, card, properties[i].price);
}

const footer = document.querySelector('footer');

let currentLocation: [string, string, number] = ['Oslo', '15:55', -3];
footer.innerHTML = 'Location: ' + currentLocation[0] + ' | Current time: ' + currentLocation[1] + ' | Current temperature: ' + currentLocation[2] + '°C';