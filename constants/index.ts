import ROUTES from "./routes";

export const sidebarLinks = [
    {
        label: 'Questions',
        route: ROUTES.HOME,
        icon: '/icons/question.svg',
    }, {
        label: 'Community',
        route: ROUTES.COMMUNITY,
        icon: '/icons/users.svg',
    }, {
        label: 'Collections',
        route: ROUTES.COLLECTION,
        icon: '/icons/star.svg',
    }, {
        label: 'Find Jobs',
        route: ROUTES.JOBS,
        icon: '/icons/suitcase.svg',
    }, {
        label: 'Tags',
        route: ROUTES.TAGS,
        icon: '/icons/tag.svg',
    },{
        label: 'Profile',
        route: ROUTES.PROFILES,
        icon: '/icons/user.svg',

    },     {
        label: 'Ask a question',
        route: ROUTES.ASK_QUESTION,
        icon: '/icons/question.svg',
    }
]

export const BADGE_CRITERIA = {
    QUESTION_COUNT: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
    ANSWER_COUNT: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
    QUESTION_UPVOTES: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
    ANSWER_UPVOTES: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
    TOTAL_VIEWS: {
        BRONZE: 1000,
        SILVER: 10000,
        GOLD: 100000,
    },
};