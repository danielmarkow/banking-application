import {useContext} from "react";
import {UserContext} from "../context/Context";

function Balance() {
  const ctx = useContext(UserContext);

  return (
    <h1>Balance<br/>
      {JSON.stringify(ctx)}
    </h1>
  );
}

export default Balance;