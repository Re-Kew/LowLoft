import React from "react";

import styles from "./SearchBlock.module.scss";

const Search = () => {
  return (
    <div className={styles.Search}>
      <div className={styles.leftBlock}>
        <h1>Фильтры</h1>
      </div>
<div className={styles.rightBlock}>   
         <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40"
        width="40"
        fill="#adadad"
      >
        <path d="M32.708 34.083 22.125 23.458q-1.25 1.125-2.896 1.688-1.646.562-3.354.562-4.208 0-7.125-2.896-2.917-2.895-2.917-7.062t2.896-7.062q2.896-2.896 7.063-2.896 4.208 0 7.104 2.896 2.896 2.895 2.896 7.062 0 1.75-.604 3.396-.605 1.646-1.646 2.937l10.625 10.542ZM15.833 23.708q3.334 0 5.646-2.312 2.313-2.313 2.313-5.646 0-3.333-2.313-5.646-2.312-2.312-5.646-2.312-3.375 0-5.687 2.312-2.313 2.313-2.313 5.646 0 3.333 2.334 5.646 2.333 2.312 5.666 2.312Z" />
      </svg>
      <input placeholder="Поиск..." />
   </div> 
    </div>
  );
};

export default Search;
