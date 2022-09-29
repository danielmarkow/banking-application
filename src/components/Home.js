import {useContext} from "react";
import {UserContext} from "../context/Context";

function Home() {
  const ctx = useContext(UserContext);

  return (
      <h1>Bad Bank Home<br/>
        {JSON.stringify(ctx)}
      </h1>
  );
}

export default Home;