
function FavButton({onClick, source}) {
    return (
        <div>
            <button onClick={onClick} className="fav-button">
                <img src={source} alt="Heart" />
            </button>
        </div>
    )
}

export default FavButton
