
function Star() {
    return(
        <img 
                        src= "https://www.flaticon.com/free-icons/star" 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
    )
}

export default Star