import React, { useContext } from "react";
import { FormContext } from "./Form";

export default (props) => {
  const ctx = useContext(FormContext);
  return (
    <div>
      Email:
      <input
        type="email"
        value={ctx.email}
        onChange={(ev) => ctx.setEmail(ev.target.value)}
      />
      <br />
      Password:
      <input
        type="password"
        value={ctx.password}
        onChange={(ev) => ctx.setPassword(ev.target.value)}
      />
    </div>
  );
};
