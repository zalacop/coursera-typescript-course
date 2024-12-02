const reviews = [
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
const review = document.querySelector("#review");
function showReview(value, reviewer, isLoyalty) {
    const starDisplay = isLoyalty ? ' ⭐️' : '';
    review.innerHTML = 'Review total ' + value.toString() + '| Last reviewed by ' + reviewer + starDisplay;
}
showReview(reviews.length, reviews[1].name, reviews[1].loyaltyUser);
const returningUser = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35
};
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUser.innerHTML = 'again';
    }
    userNameDisplay.innerHTML = userName;
}
populateUser(you.isReturning, you.firstName);
export {};
//# sourceMappingURL=index.js.map