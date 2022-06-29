
function Trip({imgUrl,location,startDate,endDate,description}) {
    return(
        <>
        <div className="img">{imgUrl}</div>
        <div className="location"> {location}<a className="map-link" href="{`${googleMapsUrl}`}"></a></div>
        <div className="date">{startDate},{endDate}</div>
        <div className="description">{description}</div>
        </>
    )
}
export default Trip