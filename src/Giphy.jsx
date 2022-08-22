import { useState } from "react";
import { GifGrid, SearchComponent } from "./Components";

export const Giphy = () => {

    const [categories, setCategories] = useState(["One piece", "Supernatural"]);

    const onAddCategory = (newCategory) => {
        if (!categories.includes(newCategory)) {
            setCategories([newCategory, ...categories]);
        }
    }

    return (
        <>
            <h2>
                Giphy
            </h2>

            <SearchComponent onAddCategory={onAddCategory} />

            {
                categories.map(category =>
                    <GifGrid
                        key={category}
                        category={category} />)
            }
        </>
    );
};