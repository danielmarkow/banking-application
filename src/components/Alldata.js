import {useContext} from "react";
import {UserContext} from "../context/Context";

function Alldata() {
    const ctx = useContext(UserContext);

    return (
        <h1>All Data<br/>
            {JSON.stringify(ctx)}
        </h1>
    );
}

export default Alldata;