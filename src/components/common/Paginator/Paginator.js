import React, { useState } from "react";
import styles from "./Paginator.module.css";
import s from './../Button/Button.module.css'

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.pagination}>
      <div className={styles.pageNumbers}>
      {portionNumber > 1 && (
        <button className={s.button}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          Previous
        </button>
      )}
        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((p) => {
            return (
              <span
                  key={p}
                className={ currentPage === p ? styles.selectedPage : undefined }
                onClick={(e) => {
                  onPageChanged(p);
                }}
              >
              {p}
              </span>
            );
          })}

        {portionCount > portionNumber && (
          <button className={s.button}
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Paginator;
