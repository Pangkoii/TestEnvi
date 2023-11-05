import "./propertyList.css";

const PropertyList = () => {
    const {data, loading, error } = useFetch("/hotels/countByType");

    const images =[
        //Imagine 5 static image links here
    ];
}

return (
    <div className="pList">
        {loading ? (
            "loading"
        ) : (
            <>
            {data &&
            Image.map((img, i) => (
                <div className="pListItem">
                    <img 
                    src={img}
                    alt=""
                    className="pListImg"
                    />
                    <div className="pListTitles">
                            <h1>{data[i].type}</h1>
                            <h2>{data[i].count} {data[i].type}</h2>
                    </div>
                </div>
            ))}
            </>
        )}
    </div>
)

export default PropertyList;