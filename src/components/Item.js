export default function Item({place, index}) {
    return(
        <>
            <div className="item" data-index={index}>
                <p>{place.Name}</p>
                <p>{place.Category.Name}</p>
            </div>
        </>
    )
}