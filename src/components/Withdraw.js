import {useContext} from "react";

import {useForm} from "react-hook-form";
import {object, number} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

import Card from "./common/Card";
import {UserContext} from "../context/Context";


function Withdraw() {
  const ctx = useContext(UserContext);

  const withdrawSchema = object({
    withdraw: number().max(ctx.users[0].balance).required(),
  });

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(withdrawSchema)
  });

  const processWithdraw = (data) => {
    ctx.users[0].balance -= data.withdraw;
  };

  return (
      <Card
          bgcolor="info"
          header="Withdraw"
          txtcolor="black"
          body={(
              <>
                Balance ${ctx.users[0].balance}
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
                  >Withdraw</button>
                </form>
              </>
          )}
      />
  );
}

export default Withdraw;