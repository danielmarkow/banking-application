import {useContext, useState} from "react";

import {useForm} from "react-hook-form";
import {object, string} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

import Card from "./common/Card";
import {UserContext} from "../context/Context";

const createAccountSchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().min(8).required(),
})


function CreateAccount () {
  const [show, setShow] = useState(true);

  const ctx = useContext(UserContext);

  const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
    resolver: yupResolver(createAccountSchema),
    mode: "onChange",
  });

  const createAccount = (data) => {
    // TODO check if user already exists
    ctx.users.push({name: data.name, email: data.email, password: data.password, balance: 100});
    setShow(false);
  };

  const clearForm = () => {
    reset();
    setShow(true);
  }

  return (
      <Card
        bgcolor="primary"
        header="Create Account"
        txtcolor="black"
        body={show ? (
            <form onSubmit={handleSubmit(createAccount)}>
              <label
                  className="form-label"
                  htmlFor="name"
              >Name</label>
              <input
                className="form-control"
                id="name"
                type="input"
                {...register("name")}
              />
              <p>{errors.name?.message}</p>
              <label
                  className="form-label"
                  htmlFor="email"
              >Email</label>
              <input
                  className="form-control"
                  id="email"
                  type="input"
                  {...register("email")}
              />
              <p>{errors.email?.message}</p>
              <label
                  className="form-label"
                  htmlFor="password"
              >Password</label>
              <input
                  className="form-control"
                  id="password"
                  type="password"
                  {...register("password")}
              />
              <p>{errors.password?.message}</p>
              <button
                type="submit"
                className="btn btn-light"
                disabled={!isValid}
              >Create Account</button>
            </form>
        ) : (
            <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another Account</button>
            </>
        )}
      />
  );
}

export default CreateAccount;