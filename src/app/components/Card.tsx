import cx from "classnames";
import React, { ReactNode } from "react";
import styles from "../../../styles/card.module.css";

type CardProps = {
  children: ReactNode;
  value: string;
};

const Card = ({ children, value }: CardProps) => {
  const classNames = cx([styles.card], {
    [styles.cucumber]: value === "Cucumber",
    [styles.broccoli]: value === "Broccoli",
    [styles.carrot]: value === "Carrot",
    [styles.mushroom]: value === "Mushrooms",
  });

  return <div className={classNames}>{children}</div>;
};

export default Card;
