import React from "react";

import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
  return (
    <div className={styles.NotFound}>
       <img
       className={styles.BorderPepe}
        width="150px"
        src="/img/404.png"
        alt="pepe"
      />
      <h1>Ничего не найдено</h1>
    </div>
  );
};

export default NotFoundBlock;
