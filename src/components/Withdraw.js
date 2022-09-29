import {useContext} from "react";
import {UserContext} from "../context/Context";

function Withdraw() {
  const ctx = useContext(UserContext);

  return (
      <h1>Withdraw<br />
        {JSON.stringify(ctx)}
      </h1>
  );
}

export default Withdraw;