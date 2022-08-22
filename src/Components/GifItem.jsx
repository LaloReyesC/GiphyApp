export const GifItem = ({ title, urlImage }) => {
    return (
        <div className="card">
            <img src={urlImage} alt={title} />
            <p>{title}</p>
        </div>
    )
}