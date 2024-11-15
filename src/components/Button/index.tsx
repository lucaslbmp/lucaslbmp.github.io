import { ButtonHTMLAttributes } from "react";
import { ButtonStyle } from "../../types";
import "./button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnStyle?: ButtonStyle;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={
        " app-button " +
        (props.btnStyle ?? "primary") +
        (props?.className ?? "")
      }
    >
      {props.children}
    </button>
  );
};

export default Button;
