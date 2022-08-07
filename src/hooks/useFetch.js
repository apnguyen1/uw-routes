import {useEffect, useState} from "react";

export const useFetch = (url) => {
    const [loading, setLoading] = useState(false)
    const [state, setState] = useState(null);
    const [serverError, setServerError] = useState(null);

    useEffect( () => {
        setLoading(true);

        const fetchData = async() => {
            try {
                const res = await fetch(url);
                const json = await res.json();

                setState(json);
                setLoading(false);
            } catch (error) {
                setServerError(error);
                setLoading(false);
            }
        };

        void fetchData();

    },[url]);


    return {loading, state, serverError};
}

