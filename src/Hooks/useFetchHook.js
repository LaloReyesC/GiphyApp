import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/getGifs";

const useFetchHook = (category) => {
    const [source, setSource] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getGifsData = async () => {
        const gifs = await getGifs(category);

        setSource(gifs);
        setIsLoading(false);
    }

    useEffect(() => {
        getGifsData();
    }, []);

    return {
        source,
        isLoading
    };
}

useFetchHook.propTypes = {
    category: PropTypes.string.isRequired
}

useFetchHook.defaultProps = {
    category: 'giphy'
}

export {
    useFetchHook
};