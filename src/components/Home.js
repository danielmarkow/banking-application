import {useContext} from "react";

import Card from "./common/Card";

import {LoginContext} from "../context/LoginContext";

function Home() {
  const loginCtx = useContext(LoginContext);

  return (
    <Card
        txtcolor="black"
        header="Bank Landing Page"
        title="Welcome to the Bank"
        text="You can use this bank"
        body={(<img src="bank.png" className="img-fluid" alt="responsive"/>)}

    />
  );
}

export default Home;