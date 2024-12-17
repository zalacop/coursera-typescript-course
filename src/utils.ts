import { LoyaltyUser, Permissions } from "./enums.js";
import Review from "./interfaces.js";

const review = document.querySelector("#review") as HTMLHeadingElement;

export function showReview(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const starDisplay = isLoyalty === LoyaltyUser.GOLD_USER ? ' ⭐️' : '';
    review.innerHTML = value.toString() + ' Review' + makeMultiple(value) + ' | Last reviewed by ' + reviewer + starDisplay;
}

const returningUser = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');

export function populateUser(isReturning: boolean, userName: string ) {
    if (isReturning){
        returningUser.innerHTML = 'again';
    } 
    userNameDisplay.innerHTML = userName;
}

export function showDetails(authorityStatus: boolean | Permissions, element : HTMLDivElement, price: number) {
    if(authorityStatus) {
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '$ per night';
        element.appendChild(priceDisplay);
    }
}

function add(firstValue: number, secondValue: number): number {
    return firstValue + secondValue
}

export function makeMultiple(value: number) : string {
    if(value > 1 || value == 0) {
        return 's';
    } else return '';
}

export function getTopFourReviews(reviews: Review[]) : Review[] {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
    return sortedReviews.slice(0, 4);
}