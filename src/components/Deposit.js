import {useContext} from "react";

import {useForm} from "react-hook-form";
import {object, number} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

import Card from "./common/Card";
import {UserContext} from "../context/Context";

const depositSchema = object({
  deposit: number().min(0.01).required()
})

function Deposit() {
  const ctx = useContext(UserContext);
  // TODO create login context
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(depositSchema)
  });

  const processDeposit = (data) => {
    ctx.users[0].balance += data.deposit;
  };

  return (
      <Card
          bgcolor="success"
          header="Deposit"
          txtcolor="black"
          body={(
              <>
                Balance ${ctx.users[0].balance}
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
                  >Deposit</button>
                </form>
              </>
          )}
      />
  );
}

export default Deposit;