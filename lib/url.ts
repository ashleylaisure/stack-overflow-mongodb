import qs from 'query-string'

interface UrlQueryParams {
    params: string;
    key: string;
    value: string;
}

interface RemoveUrlQueryParams {
    params: string;
    keysToRemove: string[];
}

// URL State Managemnt using query-string library 
// update URL query parameters with a new value
export const formUrlQuery = ({params, key, value}: UrlQueryParams) => {
    const queryString = qs.parse(params);

    // taking the current query string, updating it with a new key and vlaue
    // which we're appending to the query string
    queryString[key] = value;

    // and then appending it onto the URL and forming a new URL
    return qs.stringifyUrl({
        url: window.location.pathname,
        query: queryString,
    });
}

export const removeKeysFromUrlQuery = ({params, keysToRemove}: RemoveUrlQueryParams) => {
    const queryString = qs.parse(params);

    keysToRemove.forEach(key => {
        delete queryString[key];
    });

    return qs.stringifyUrl({
        url: window.location.pathname,
        query: queryString,
        },
        {skipNull: true}
    );
}
