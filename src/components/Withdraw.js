import {useForm} from "react-hook-form";
import {object, number} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

import toast, {Toaster} from "react-hot-toast";

import useAuth from "../hooks/useAuth";
import Card from "./common/Card";

function Withdraw() {
  const {token, userdata} = useAuth();

  const withdrawSchema = object({
    withdraw: number().max(userdata.balance).required(),
  });

  const {register, handleSubmit, reset, formState: {errors, isValid, isDirty}} = useForm({
    resolver: yupResolver(withdrawSchema),
    mode: "onChange",
  });

  const processWithdraw = (data) => {
    userdata.balance -= data.withdraw;
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
                <Toaster position="top-left" />
                Balance ${userdata.balance}
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
                    disabled={!isValid && !isDirty}
                  >Withdraw</button>
                </form>
              </>
          )}
      />
  );
}

export default Withdraw;