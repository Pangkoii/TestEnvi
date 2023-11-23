import useFetch from "../../Hooks/useFetch.js"
import './postQueue.css'
import Topbar from "../Topbar/Topbar.jsx";

// const dataTable = () = > {

//     const { data, loading, error, refetch } = useFetch()
    
// }

const PostQueue = () => {

    const {data, loading, error } = useFetch("/tables/653a090c7d7237e608c3d04c/654c7cd0f2c05033c1231a90");
    const runningBill = data.reduce((acc, item) => acc + parseFloat(item.itemPrice), 0);
        
    return (

        <div>
            <Topbar/>
            <div>
            <h2>Order List</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : data && data.length > 0 ? (
                <span className="centerContainer">
                <table className="dataTable">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Item Status</th>
                            <th>Item Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item._id}>
                                <td>{item.itemName}</td>
                                <td>{item.itemStatus}</td>
                                <td>{item.itemPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <span className="LowerTable">

                    <button className="OrderAgain"
                    //onClick={handleOrderAgain}
                    >
                        Order Again</button>
                Current Running Bill: ${runningBill.toFixed(2)}
                </span>
                </span>
                    
            ) : (
                <p>No data available.</p>
            )}
        </div>
    </div>
    );
};

export default PostQueue;