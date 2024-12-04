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
//# sourceMappingURL=utils.js.map