import ROUTES from "./routes";

export const sidebarLinks = [
    {
        label: 'Dashboard',
        route: ROUTES.DASHBOARD,
        icon: '/icons/home.svg',
    }, {
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
    }, {
        label: 'Profiles',
        route: ROUTES.PROFILES,
        icon: '/icons/user.svg',
    }, {
        label: 'Ask a question',
        route: ROUTES.ASK_QUESTION,
        icon: '/icons/question.svg',
    }
]