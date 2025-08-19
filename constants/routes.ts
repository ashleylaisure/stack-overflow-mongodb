const ROUTES = {
    HOME: '/',
    DASHBOARD: '/dashboard',
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up',
    FORGOT_PASSWORD: '/forgot-password',
    ASK_QUESTION: '/ask-question',
    COLLECTION: '/collection',
    COMMUNITY: '/community',
    TAGS: '/tags',
    JOBS: '/jobs',
    QUESTION_DETAIL: (id: string) => `/questions/${id}`,
    TAG: (id: string) => `/tags/${id}`,
    PROFILE: (id: string) => `/profile/${id}`,
    EDIT_PROFILE: (id: string) => `/profile/${id}/edit`,
    SETTINGS: '/settings',
    NOT_FOUND: '/404',
};

export default ROUTES;
