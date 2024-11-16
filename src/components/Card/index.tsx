import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import "./card.css";

type CardProps = PropsWithChildren<ComponentPropsWithoutRef<"div">>;

const Card = (props: CardProps) => {
  return <div className={"card " + props.className}>{props.children}</div>;
};

export default Card;
