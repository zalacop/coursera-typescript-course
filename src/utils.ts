const review = document.querySelector("#review") as HTMLHeadingElement;

export function showReview(value: number, reviewer: string, isLoyalty: boolean) {
    const starDisplay = isLoyalty ? ' ⭐️' : '';
    review.innerHTML = 'Review total ' + value.toString() + ' | Last reviewed by ' + reviewer + starDisplay;
}

const returningUser = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');

export function populateUser(isReturning: boolean, userName: string ) {
    if (isReturning){
        returningUser.innerHTML = 'again';
    } 
    userNameDisplay.innerHTML = userName;
}

