import { forwardRef } from "react";
import "./styles.css";

export const Button = forwardRef((props, ref) => {
  const { label, ...restProps } = props;
  return (
    <button className="btn" ref={ref} {...restProps}>
      {label}
    </button>
  );
});
