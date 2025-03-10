import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { ButtonStyle } from "../../types";
import "./button.css";

type ButtonProps = (ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>) & {
  btnStyle?: ButtonStyle;
  link?: string;
};

const Button = (props: ButtonProps) => {
  return (
    <>
      {props.link ? (
        <a
          {...props}
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className={
            " app-button " +
            (props.btnStyle ?? "primary") +
            " " +
            (props?.className ?? "")
          }
        >
          {props.children}
        </a>
      ) : (
        <button
          {...props}
          className={
            " app-button " +
            (props.btnStyle ?? "primary") +
            " " +
            (props?.className ?? "")
          }
        >
          {props.children}
        </button>
      )}
    </>
  );
};

export default Button;
