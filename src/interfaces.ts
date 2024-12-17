import { LoyaltyUser } from "./enums.js";
import { Price } from "./types.js";

export default interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}

export interface Property {
    image: string;
    title: string;
    price: Price;
    location: {
        firstLine: string;
        city: string;
        code: number | string;
        country: string;
    }
    contact: [ number, string ];
    isAvailable: boolean;
}