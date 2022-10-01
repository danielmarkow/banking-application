import {useContext, useState} from "react";

import {useForm} from "react-hook-form";
import {object, string} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

import toast, {Toaster} from "react-hot-toast";

import Card from "./common/Card";
import {UserContext} from "../context/UserContext";
import {LoginContext} from "../context/LoginContext";

const loginSchema = object({
  email: string().email().required(),
  password: string().required(),
});

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);

  const ctx = useContext(UserContext);
  const loginCtx = useContext(LoginContext)

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(loginSchema)
  });

  const checkUser = (data) => {
    const userExists = ctx.users
        .filter((u) =>
            u.email === data.email && u.password === data.password
        ).length !== 0

    if (userExists) {
      setLoggedIn(true);
      loginCtx.email = data.email;
      console.log("logged in as ", loginCtx.email);
    } else {
      toast.error("Could not login!")
    }
  }

  return (
      <>
        <Card
            bgcolor="warning"
            header="Login"
            txtcolor="black"
            body={!loggedIn ? (
                <>
                  <Toaster />
                  <form onSubmit={handleSubmit(checkUser)}>
                    <label
                        htmlFor="email"
                        className="form-label"
                    >
                      Email:
                    </label>
                    <input
                        className="form-control"
                        id="email"
                        type="input"
                        {...register("email")}
                    />
                    <p>{errors.email?.message}</p>
                    <label
                        htmlFor="password"
                        className="form-label"
                    >
                      Password:
                    </label>
                    <input
                        className="form-control"
                        id="password"
                        type="password"
                        {...register("password")}
                    />
                    <p>{errors.password?.message}</p>
                    <br />
                    <button
                        type="submit"
                        className="btn btn-light"
                    >Submit</button>
                  </form>
                </>
            ) : (
                <h5>Logged in successfully</h5>
            )}
        />
      </>

  );
}

export default Login;