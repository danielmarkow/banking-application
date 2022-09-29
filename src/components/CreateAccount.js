import {useContext} from "react";
import {UserContext} from "../context/Context";

function CreateAccount() {
  const ctx = useContext(UserContext);
  return (
      <h1>Create Account<br/>
        {JSON.stringify(ctx)}
      </h1>
  );
}

export default CreateAccount;