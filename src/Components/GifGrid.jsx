import { useFetchHook } from '../Hooks/useFetchHook';
import { GifItem } from './';

const GifGrid = ({ category }) => {
    
    const { isLoading, source } = useFetchHook(category);

    return (
        <>
            <h4>{category}</h4>

            {
                isLoading && <h2>Cargando Gifs...</h2>
            }

            <div className="card-grid">
                {
                    source.map(image => (
                        <GifItem key={image.id} {...image} />
                    ))
                }
            </div>
        </>
    )
}

export {
    GifGrid
};