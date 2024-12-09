import { LoyaltyUser } from "./enums.js";
const review = document.querySelector("#review");
export function showReview(value, reviewer, isLoyalty) {
    const starDisplay = isLoyalty === LoyaltyUser.GOLD_USER ? ' ⭐️' : '';
    review.innerHTML = 'Review total ' + value.toString() + ' | Last reviewed by ' + reviewer + starDisplay;
}
const returningUser = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
export function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUser.innerHTML = 'again';
    }
    userNameDisplay.innerHTML = userName;
}
export function showDetails(authorityStatus, element, price) {
    if (authorityStatus) {
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '$ per night';
        element.appendChild(priceDisplay);
    }
}
function add(firstValue, secondValue) {
    let result;
    if (typeof firstValue === 'number' && typeof secondValue === 'number') {
        result = firstValue + secondValue;
    }
    if (typeof firstValue === 'string' && typeof secondValue === 'string') {
        result = firstValue + ' ' + secondValue;
    }
    if (typeof firstValue === 'number' && typeof secondValue === 'string') {
        console.log('Cannot preform this addition');
    }
    if (typeof firstValue === 'string' && typeof secondValue === 'number') {
        console.log('Cannot preform this addition');
    }
}
const combinedReviews = add(6, 3);
const firstAndLastName = add('Mulan', 'Fa');
//# sourceMappingURL=utils.js.map