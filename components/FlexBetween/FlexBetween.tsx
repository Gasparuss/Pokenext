import { memo } from "react";
import styles from "./flexbetween.module.scss";

type FlexBetweenProps = {
  category: string;
  details: React.ReactNode;
};

export const FlexBetween = memo<FlexBetweenProps>(({ category, details }) => {
  return (
    <div className={styles.flexWrapper}>
      <p>{category}</p>
      <div>{details}</div>
    </div>
  );
});

FlexBetween.displayName = "FlexBetween";
