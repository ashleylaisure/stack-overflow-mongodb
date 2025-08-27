const ROUTES = {
    HOME: '/',
    DASHBOARD: '/dashboard',
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up',
    FORGOT_PASSWORD: '/forgot-password',
    ASK_QUESTION: '/ask-question',
    COLLECTION: '/collections',
    COMMUNITY: '/community',
    TAGS: '/Tags',
    JOBS: '/jobs',
    QUESTION_DETAIL: (id: string) => `/questions/${id}`,
    QUESTION_ANSWER: (questionId: string, answerId:string) => `/questions/${questionId}#answer-${answerId}`,
    TAG: (id: string) => `/Tags/${id}`,
    PROFILES: '/profiles',
    PROFILE: (id: string) => `/profile/${id}`,
    PROFILE_EDIT: (id: string) => `/profile/${id}/edit`,
    SETTINGS: '/settings',
    NOT_FOUND: '/404',
};

export default ROUTES;
