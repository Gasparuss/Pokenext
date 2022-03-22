import { memo } from "react";
import { ThemeChange } from "../ThemeChange/ThemeChange";
import styles from "./layout.module.scss";

type LayoutProps = {
  readonly children: React.ReactNode;
};

export const Layout = memo<LayoutProps>(({ children }) => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <ThemeChange />
      </nav>
      {children}
    </div>
  );
});

Layout.displayName = "Layout";
