import PropTypes from 'prop-types'
import { useState } from "react";

const emptyString = '';

export const SearchComponent = ({ onAddCategory }) => {

    const [textValue, setTextValue] = useState(emptyString);

    const handleSubmit = (e) => {

        e.preventDefault();

        const inputValue = textValue.trim();

        if (!!inputValue) {
            setTextValue(emptyString);
            onAddCategory(inputValue);
        }

    }

    const handleChange = (e) => setTextValue(e.target.value);

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Buscar</label>
            <input type="text" name='search' id="search" value={textValue} onChange={handleChange} autoFocus required />
            <input type="submit" value="Agregar" />
        </form>
    )
}

SearchComponent.propTypes = {
    onAddCategory: PropTypes.func.isRequired
}