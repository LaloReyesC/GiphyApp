export const getGifs = async (category) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=w3C8esdiRldOWkkafMy3IfQDYfNKZMf3&q=${category}&limit=5&offset=0&rating=g&lang=en`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifData = data.map(({ id, title, images: { downsized_medium: { url } } }) => ({
        id,
        title,
        urlImage: url
    }));

    return gifData;
}