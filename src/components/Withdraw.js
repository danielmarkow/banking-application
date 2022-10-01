import {useContext} from "react";

import {useForm} from "react-hook-form";
import {object, number} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

import toast, {Toaster} from "react-hot-toast";

import Card from "./common/Card";
import {UserContext} from "../context/UserContext";
import {LoginContext} from "../context/LoginContext";

function Withdraw() {
  const ctx = useContext(UserContext);
  const loginCtx = useContext(LoginContext);

  const withdrawSchema = object({
    withdraw: number().max(ctx.users[0].balance).required(),
  });

  const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
    resolver: yupResolver(withdrawSchema),
    mode: "onChange",
  });

  const processWithdraw = (data) => {
    const userData = ctx.users.filter((user) => user.email === loginCtx.email)[0];
    const newBal = userData.balance - data.withdraw;
    const newUserData = [{...userData, balance: newBal}];

    ctx.users = ctx.users.map((user) => newUserData.find(u => u.email === user.email) || user);

    toast.success(`$${data.withdraw} successfully withdrawn!`);
    reset();
  };

  return (
      <Card
          bgcolor="info"
          header="Withdraw"
          txtcolor="black"
          body={(
              <>
                <Toaster />
                Balance ${ctx.users.filter((user) => user.email === loginCtx.email)[0]?.balance}
                <form onSubmit={handleSubmit(processWithdraw)}>
                  <label
                      htmlFor="withdraw"
                      className="form-label"
                  >Withdraw Amount</label>
                  <input
                      id="withdraw"
                      type="input"
                      className="form-control"
                      placeholder="Withdraw Amount"
                      {...register("withdraw")}
                  />
                  <p>{errors.withdraw?.message}</p>
                  <br />
                  <button
                    type="submit"
                    className="btn btn-light"
                    disabled={!isValid}
                  >Withdraw</button>
                </form>
              </>
          )}
      />
  );
}

export default Withdraw;