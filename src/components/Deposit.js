import {useForm} from "react-hook-form";
import {object, number} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

import toast, {Toaster} from "react-hot-toast";

import useAuth from "../hooks/useAuth";
import Card from "./common/Card";

const depositSchema = object({
  deposit: number().min(0.01).required()
})

function Deposit() {
  const {userdata} = useAuth();

  const {register, handleSubmit, reset, formState: {errors, isValid, isDirty}} = useForm({
    resolver: yupResolver(depositSchema),
    mode: "onChange",
  });

  const processDeposit = (data) => {
    userdata.balance += data.deposit;
    toast.success(`$${data.deposit} successfully deposited!`);
    reset();
  };

  return (
      <Card
          bgcolor="success"
          header="Deposit"
          txtcolor="black"
          body={(
              <>
                <Toaster position="top-left" />
                Balance ${userdata.balance}
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
                      disabled={!isValid && !isDirty}
                  >Deposit</button>
                </form>
              </>
          )}
      />
  );
}

export default Deposit;