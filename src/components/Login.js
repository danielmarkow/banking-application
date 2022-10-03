import {useForm} from "react-hook-form";
import {object, string} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

import Card from "./common/Card";
import useAuth from "../hooks/useAuth";

const loginSchema = object({
  email: string().email().required(),
  password: string().required(),
});

function Login() {
  const {token, onLogin} = useAuth();

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit = (data) => {
    // TODO toaster message on failure
    onLogin(data)
  }
  return (
      <>
        <Card
            bgcolor="warning"
            header="Login"
            txtcolor="black"
            body={!token ? (
                <>
                  <form onSubmit={handleSubmit(onSubmit)}>
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