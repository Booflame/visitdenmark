export default function Item({place, index}) {
    return(
        <>
            <div className="item" data-index={index}>
                <img src={place.Files[0]?.Uri} alt={place.Name}/>
                <div className="item-content">
                    <p>{place.Name}</p>
                </div>
            </div>
        </>
    )
}