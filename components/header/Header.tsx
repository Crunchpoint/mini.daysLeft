import React from "react";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>尹정권 임기 카운트다운</h1>
    </header>
  );
}
