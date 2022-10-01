import {useContext} from "react";

import {useForm} from "react-hook-form";
import {object, number} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

import toast, {Toaster} from "react-hot-toast";

import Card from "./common/Card";
import {UserContext} from "../context/UserContext";
import {LoginContext} from "../context/LoginContext";

const depositSchema = object({
  deposit: number().min(0.01).required()
})

function Deposit() {
  const ctx = useContext(UserContext);
  const loginCtx = useContext(LoginContext);

  const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
    resolver: yupResolver(depositSchema),
    mode: "onChange",
  });

  const processDeposit = (data) => {
    const userData = ctx.users.filter((user) => user.email === loginCtx.email)[0];
    const newBal = userData.balance + data.deposit;
    const newUserData = [{...userData, balance: newBal}];

    ctx.users = ctx.users.map((user) => newUserData.find(u => u.email === user.email) || user);

    toast.success(`Successfully deposited $${data.deposit}`);
    reset();
  };

  return (
      <Card
          bgcolor="success"
          header="Deposit"
          txtcolor="black"
          body={(
              <>
                <Toaster />
                Balance ${ctx.users.filter((user) => user.email === loginCtx.email)[0]?.balance}
                <form onSubmit={handleSubmit(processDeposit)}>
                  <label
                      className="form-label"
                      htmlFor="deposit"
                  >
                    Deposit Amount
                  </label>
                  <input
                      id="deposit"
                      type="input"
                      className="form-control"
                      placeholder="Deposit Amount"
                      {...register("deposit")}
                  />
                  <p>{errors.deposit?.message}</p>
                  <button
                      type="submit"
                      className="btn btn-light"
                      disabled={!isValid}
                  >Deposit</button>
                </form>
              </>
          )}
      />
  );
}

export default Deposit;