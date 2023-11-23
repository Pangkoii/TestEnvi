import useFetch from "../../Hooks/useFetch";
import ManagerView from "../Manager/Manager.jsx";
import ReceptionistView from "../Receptionist/Receptionist.jsx";
import KitchenView from "../Kitchen/Kitchen.jsx";
import WaiterView from "../Waiter/Waiter.jsx";

const E_Topbar = () => {
    const {data, loading, error } = useFetch("/qr/652e409cfa3fb596510b429a")
    console.log(data)
    if (loading) {
        return<div> Loading... </div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (!data) {
        return <div>No Data Available</div>
    }

    const userJob = data.role;
    let renderComponent;

    switch(userJob) {
        case 'Manager':
            renderComponent = <ManagerView />;
            break;
        case 'Waiter':
            renderComponent = <WaiterView />;
            break;
        case 'Kitchen':
            renderComponent = <KitchenView />;
            break;
        case 'Receptionist':
            renderComponent = <ReceptionistView />;
            break;
    }

    return(
            <div>
                {renderComponent}
            </div>
    );
};

export default E_Topbar;