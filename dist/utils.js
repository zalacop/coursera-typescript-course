import { LoyaltyUser } from "./enums.js";
const review = document.querySelector("#review");
export function showReview(value, reviewer, isLoyalty) {
    const starDisplay = isLoyalty === LoyaltyUser.GOLD_USER ? ' ⭐️' : '';
    review.innerHTML = value.toString() + ' Review' + makeMultiple(value) + ' | Last reviewed by ' + reviewer + starDisplay;
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
    return firstValue + secondValue;
}
export function makeMultiple(value) {
    if (value > 1 || value == 0) {
        return 's';
    }
    else
        return '';
}
//# sourceMappingURL=utils.js.map