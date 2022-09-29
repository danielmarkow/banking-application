import {useContext, useState} from "react";

import {useForm} from "react-hook-form";
import {object, string} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

import Card from "./common/Card";
import {UserContext} from "../context/Context";

const loginSchema = object({
  email: string().email().required(),
  password: string().required(),
});

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);

  const ctx = useContext(UserContext);
  // TODO create login context
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(loginSchema)
  });

  const checkUser = (data) => {
    if (ctx.users.filter((u) => u.email === data.email && u.password === data.password)) {
      setLoggedIn(true);
    } else {
      alert("could not login")
    }
  }

  return (
      <>
        <Card
            bgcolor="warning"
            header="Create Account"
            txtcolor="black"
            body={!loggedIn ? (
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
            ) : (
                <h5>Logged in successfully</h5>
            )}
        />
      </>

  );
}

export default Login;