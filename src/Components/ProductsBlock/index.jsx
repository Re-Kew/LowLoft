import React from "react";

import styles from "./ProductsBlock.module.scss";

const ProductsBlock = () => {
  return (
      <div className={styles.categoriesBlock}>
        <div className={styles.categoriesDownCard}>
          <div className={styles.photo}>
            <button className={styles.photoButton}>
              <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
                <path d="m20 33.625-1.417-1.292q-4.208-3.833-6.958-6.604T7.25 20.812Q5.625 18.667 5 16.917t-.625-3.5q0-3.417 2.292-5.709 2.291-2.291 5.708-2.291 2.25 0 4.208 1.125Q18.542 7.667 20 9.792q1.625-2.167 3.521-3.271t4.146-1.104q3.375 0 5.666 2.291 2.292 2.292 2.292 5.709 0 1.75-.625 3.5t-2.25 3.895q-1.625 2.146-4.375 4.917t-6.958 6.604ZM20 31q4.083-3.75 6.708-6.396t4.167-4.625q1.542-1.979 2.146-3.521.604-1.541.604-3.041 0-2.584-1.708-4.292-1.709-1.708-4.25-1.708-2.084 0-3.813 1.208t-2.979 3.583h-1.75q-1.25-2.333-2.979-3.562-1.729-1.229-3.813-1.229-2.541 0-4.25 1.708-1.708 1.708-1.708 4.292 0 1.541.604 3.083.604 1.542 2.146 3.521 1.542 1.979 4.187 4.625Q15.958 27.292 20 31Zm0-11.833Z" />
              </svg>
            </button>
            <img width="60%" src="/img/article-photo-2.png" alt="" />
          </div>
          <div className={styles.article}>
            <h1>Стулья</h1>
            <button>
              <svg
                className={styles.add}
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                width="40"
              >
                <path d="M19 27.833h2V21h6.833v-2H21v-6.833h-2V19h-6.833v2H19ZM8.5 34q-1 0-1.75-.75T6 31.5v-23q0-1 .75-1.75T8.5 6h23q1 0 1.75.75T34 8.5v23q0 1-.75 1.75T31.5 34Zm0-2h23q.167 0 .333-.167.167-.166.167-.333v-23q0-.167-.167-.333Q31.667 8 31.5 8h-23q-.167 0-.333.167Q8 8.333 8 8.5v23q0 .167.167.333.166.167.333.167ZM8 8v24V8Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.categoriesDownCard}>
          <div className={styles.photo}>
            <button className={styles.photoButton}>
              <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
                <path d="m20 33.625-1.417-1.292q-4.208-3.833-6.958-6.604T7.25 20.812Q5.625 18.667 5 16.917t-.625-3.5q0-3.417 2.292-5.709 2.291-2.291 5.708-2.291 2.25 0 4.208 1.125Q18.542 7.667 20 9.792q1.625-2.167 3.521-3.271t4.146-1.104q3.375 0 5.666 2.291 2.292 2.292 2.292 5.709 0 1.75-.625 3.5t-2.25 3.895q-1.625 2.146-4.375 4.917t-6.958 6.604ZM20 31q4.083-3.75 6.708-6.396t4.167-4.625q1.542-1.979 2.146-3.521.604-1.541.604-3.041 0-2.584-1.708-4.292-1.709-1.708-4.25-1.708-2.084 0-3.813 1.208t-2.979 3.583h-1.75q-1.25-2.333-2.979-3.562-1.729-1.229-3.813-1.229-2.541 0-4.25 1.708-1.708 1.708-1.708 4.292 0 1.541.604 3.083.604 1.542 2.146 3.521 1.542 1.979 4.187 4.625Q15.958 27.292 20 31Zm0-11.833Z" />
              </svg>
            </button>
            <img width="60%" src="/img/article-photo-2.png" alt="" />
          </div>
          <div className={styles.article}>
            <h1>Стулья</h1>
            <button>
              <svg
                className={styles.add}
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                width="40"
              >
                <path d="M19 27.833h2V21h6.833v-2H21v-6.833h-2V19h-6.833v2H19ZM8.5 34q-1 0-1.75-.75T6 31.5v-23q0-1 .75-1.75T8.5 6h23q1 0 1.75.75T34 8.5v23q0 1-.75 1.75T31.5 34Zm0-2h23q.167 0 .333-.167.167-.166.167-.333v-23q0-.167-.167-.333Q31.667 8 31.5 8h-23q-.167 0-.333.167Q8 8.333 8 8.5v23q0 .167.167.333.166.167.333.167ZM8 8v24V8Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.categoriesDownCard}>
          <div className={styles.photo}>
            <button className={styles.photoButton}>
              <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
                <path d="m20 33.625-1.417-1.292q-4.208-3.833-6.958-6.604T7.25 20.812Q5.625 18.667 5 16.917t-.625-3.5q0-3.417 2.292-5.709 2.291-2.291 5.708-2.291 2.25 0 4.208 1.125Q18.542 7.667 20 9.792q1.625-2.167 3.521-3.271t4.146-1.104q3.375 0 5.666 2.291 2.292 2.292 2.292 5.709 0 1.75-.625 3.5t-2.25 3.895q-1.625 2.146-4.375 4.917t-6.958 6.604ZM20 31q4.083-3.75 6.708-6.396t4.167-4.625q1.542-1.979 2.146-3.521.604-1.541.604-3.041 0-2.584-1.708-4.292-1.709-1.708-4.25-1.708-2.084 0-3.813 1.208t-2.979 3.583h-1.75q-1.25-2.333-2.979-3.562-1.729-1.229-3.813-1.229-2.541 0-4.25 1.708-1.708 1.708-1.708 4.292 0 1.541.604 3.083.604 1.542 2.146 3.521 1.542 1.979 4.187 4.625Q15.958 27.292 20 31Zm0-11.833Z" />
              </svg>
            </button>
            <img width="60%" src="/img/article-photo-2.png" alt="" />
          </div>
          <div className={styles.article}>
            <h1>Стулья</h1>
            <button>
              <svg
                className={styles.add}
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                width="40"
              >
                <path d="M19 27.833h2V21h6.833v-2H21v-6.833h-2V19h-6.833v2H19ZM8.5 34q-1 0-1.75-.75T6 31.5v-23q0-1 .75-1.75T8.5 6h23q1 0 1.75.75T34 8.5v23q0 1-.75 1.75T31.5 34Zm0-2h23q.167 0 .333-.167.167-.166.167-.333v-23q0-.167-.167-.333Q31.667 8 31.5 8h-23q-.167 0-.333.167Q8 8.333 8 8.5v23q0 .167.167.333.166.167.333.167ZM8 8v24V8Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.categoriesDownCard}>
          <div className={styles.photo}>
            <button className={styles.photoButton}>
              <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
                <path d="m20 33.625-1.417-1.292q-4.208-3.833-6.958-6.604T7.25 20.812Q5.625 18.667 5 16.917t-.625-3.5q0-3.417 2.292-5.709 2.291-2.291 5.708-2.291 2.25 0 4.208 1.125Q18.542 7.667 20 9.792q1.625-2.167 3.521-3.271t4.146-1.104q3.375 0 5.666 2.291 2.292 2.292 2.292 5.709 0 1.75-.625 3.5t-2.25 3.895q-1.625 2.146-4.375 4.917t-6.958 6.604ZM20 31q4.083-3.75 6.708-6.396t4.167-4.625q1.542-1.979 2.146-3.521.604-1.541.604-3.041 0-2.584-1.708-4.292-1.709-1.708-4.25-1.708-2.084 0-3.813 1.208t-2.979 3.583h-1.75q-1.25-2.333-2.979-3.562-1.729-1.229-3.813-1.229-2.541 0-4.25 1.708-1.708 1.708-1.708 4.292 0 1.541.604 3.083.604 1.542 2.146 3.521 1.542 1.979 4.187 4.625Q15.958 27.292 20 31Zm0-11.833Z" />
              </svg>
            </button>
            <img width="60%" src="/img/article-photo-2.png" alt="" />
          </div>
          <div className={styles.article}>
            <h1>Стулья</h1>
            <button>
              <svg
                className={styles.add}
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                width="40"
              >
                <path d="M19 27.833h2V21h6.833v-2H21v-6.833h-2V19h-6.833v2H19ZM8.5 34q-1 0-1.75-.75T6 31.5v-23q0-1 .75-1.75T8.5 6h23q1 0 1.75.75T34 8.5v23q0 1-.75 1.75T31.5 34Zm0-2h23q.167 0 .333-.167.167-.166.167-.333v-23q0-.167-.167-.333Q31.667 8 31.5 8h-23q-.167 0-.333.167Q8 8.333 8 8.5v23q0 .167.167.333.166.167.333.167ZM8 8v24V8Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.categoriesDownCard}>
          <div className={styles.photo}>
            <button className={styles.photoButton}>
              <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
                <path d="m20 33.625-1.417-1.292q-4.208-3.833-6.958-6.604T7.25 20.812Q5.625 18.667 5 16.917t-.625-3.5q0-3.417 2.292-5.709 2.291-2.291 5.708-2.291 2.25 0 4.208 1.125Q18.542 7.667 20 9.792q1.625-2.167 3.521-3.271t4.146-1.104q3.375 0 5.666 2.291 2.292 2.292 2.292 5.709 0 1.75-.625 3.5t-2.25 3.895q-1.625 2.146-4.375 4.917t-6.958 6.604ZM20 31q4.083-3.75 6.708-6.396t4.167-4.625q1.542-1.979 2.146-3.521.604-1.541.604-3.041 0-2.584-1.708-4.292-1.709-1.708-4.25-1.708-2.084 0-3.813 1.208t-2.979 3.583h-1.75q-1.25-2.333-2.979-3.562-1.729-1.229-3.813-1.229-2.541 0-4.25 1.708-1.708 1.708-1.708 4.292 0 1.541.604 3.083.604 1.542 2.146 3.521 1.542 1.979 4.187 4.625Q15.958 27.292 20 31Zm0-11.833Z" />
              </svg>
            </button>
            <img width="60%" src="/img/article-photo-2.png" alt="" />
          </div>
          <div className={styles.article}>
            <h1>Стулья</h1>
            <button>
              <svg
                className={styles.add}
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                width="40"
              >
                <path d="M19 27.833h2V21h6.833v-2H21v-6.833h-2V19h-6.833v2H19ZM8.5 34q-1 0-1.75-.75T6 31.5v-23q0-1 .75-1.75T8.5 6h23q1 0 1.75.75T34 8.5v23q0 1-.75 1.75T31.5 34Zm0-2h23q.167 0 .333-.167.167-.166.167-.333v-23q0-.167-.167-.333Q31.667 8 31.5 8h-23q-.167 0-.333.167Q8 8.333 8 8.5v23q0 .167.167.333.166.167.333.167ZM8 8v24V8Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.categoriesDownCard}>
          <div className={styles.photo}>
            <button className={styles.photoButton}>
              <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
                <path d="m20 33.625-1.417-1.292q-4.208-3.833-6.958-6.604T7.25 20.812Q5.625 18.667 5 16.917t-.625-3.5q0-3.417 2.292-5.709 2.291-2.291 5.708-2.291 2.25 0 4.208 1.125Q18.542 7.667 20 9.792q1.625-2.167 3.521-3.271t4.146-1.104q3.375 0 5.666 2.291 2.292 2.292 2.292 5.709 0 1.75-.625 3.5t-2.25 3.895q-1.625 2.146-4.375 4.917t-6.958 6.604ZM20 31q4.083-3.75 6.708-6.396t4.167-4.625q1.542-1.979 2.146-3.521.604-1.541.604-3.041 0-2.584-1.708-4.292-1.709-1.708-4.25-1.708-2.084 0-3.813 1.208t-2.979 3.583h-1.75q-1.25-2.333-2.979-3.562-1.729-1.229-3.813-1.229-2.541 0-4.25 1.708-1.708 1.708-1.708 4.292 0 1.541.604 3.083.604 1.542 2.146 3.521 1.542 1.979 4.187 4.625Q15.958 27.292 20 31Zm0-11.833Z" />
              </svg>
            </button>
            <img width="60%" src="/img/article-photo-2.png" alt="" />
          </div>
          <div className={styles.article}>
            <h1>Стулья</h1>
            <button>
              <svg
                className={styles.add}
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                width="40"
              >
                <path d="M19 27.833h2V21h6.833v-2H21v-6.833h-2V19h-6.833v2H19ZM8.5 34q-1 0-1.75-.75T6 31.5v-23q0-1 .75-1.75T8.5 6h23q1 0 1.75.75T34 8.5v23q0 1-.75 1.75T31.5 34Zm0-2h23q.167 0 .333-.167.167-.166.167-.333v-23q0-.167-.167-.333Q31.667 8 31.5 8h-23q-.167 0-.333.167Q8 8.333 8 8.5v23q0 .167.167.333.166.167.333.167ZM8 8v24V8Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.categoriesDownCard}>
          <div className={styles.photo}>
            <button className={styles.photoButton}>
              <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
                <path d="m20 33.625-1.417-1.292q-4.208-3.833-6.958-6.604T7.25 20.812Q5.625 18.667 5 16.917t-.625-3.5q0-3.417 2.292-5.709 2.291-2.291 5.708-2.291 2.25 0 4.208 1.125Q18.542 7.667 20 9.792q1.625-2.167 3.521-3.271t4.146-1.104q3.375 0 5.666 2.291 2.292 2.292 2.292 5.709 0 1.75-.625 3.5t-2.25 3.895q-1.625 2.146-4.375 4.917t-6.958 6.604ZM20 31q4.083-3.75 6.708-6.396t4.167-4.625q1.542-1.979 2.146-3.521.604-1.541.604-3.041 0-2.584-1.708-4.292-1.709-1.708-4.25-1.708-2.084 0-3.813 1.208t-2.979 3.583h-1.75q-1.25-2.333-2.979-3.562-1.729-1.229-3.813-1.229-2.541 0-4.25 1.708-1.708 1.708-1.708 4.292 0 1.541.604 3.083.604 1.542 2.146 3.521 1.542 1.979 4.187 4.625Q15.958 27.292 20 31Zm0-11.833Z" />
              </svg>
            </button>
            <img width="60%" src="/img/article-photo-2.png" alt="" />
          </div>
          <div className={styles.article}>
            <h1>Стулья</h1>
            <button>
              <svg
                className={styles.add}
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                width="40"
              >
                <path d="M19 27.833h2V21h6.833v-2H21v-6.833h-2V19h-6.833v2H19ZM8.5 34q-1 0-1.75-.75T6 31.5v-23q0-1 .75-1.75T8.5 6h23q1 0 1.75.75T34 8.5v23q0 1-.75 1.75T31.5 34Zm0-2h23q.167 0 .333-.167.167-.166.167-.333v-23q0-.167-.167-.333Q31.667 8 31.5 8h-23q-.167 0-.333.167Q8 8.333 8 8.5v23q0 .167.167.333.166.167.333.167ZM8 8v24V8Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.categoriesDownCard}>
          <div className={styles.photo}>
            <button className={styles.photoButton}>
              <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
                <path d="m20 33.625-1.417-1.292q-4.208-3.833-6.958-6.604T7.25 20.812Q5.625 18.667 5 16.917t-.625-3.5q0-3.417 2.292-5.709 2.291-2.291 5.708-2.291 2.25 0 4.208 1.125Q18.542 7.667 20 9.792q1.625-2.167 3.521-3.271t4.146-1.104q3.375 0 5.666 2.291 2.292 2.292 2.292 5.709 0 1.75-.625 3.5t-2.25 3.895q-1.625 2.146-4.375 4.917t-6.958 6.604ZM20 31q4.083-3.75 6.708-6.396t4.167-4.625q1.542-1.979 2.146-3.521.604-1.541.604-3.041 0-2.584-1.708-4.292-1.709-1.708-4.25-1.708-2.084 0-3.813 1.208t-2.979 3.583h-1.75q-1.25-2.333-2.979-3.562-1.729-1.229-3.813-1.229-2.541 0-4.25 1.708-1.708 1.708-1.708 4.292 0 1.541.604 3.083.604 1.542 2.146 3.521 1.542 1.979 4.187 4.625Q15.958 27.292 20 31Zm0-11.833Z" />
              </svg>
            </button>
            <img width="60%" src="/img/article-photo-2.png" alt="" />
          </div>
          <div className={styles.article}>
            <h1>Стулья</h1>
            <button>
              <svg
                className={styles.add}
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                width="40"
              >
                <path d="M19 27.833h2V21h6.833v-2H21v-6.833h-2V19h-6.833v2H19ZM8.5 34q-1 0-1.75-.75T6 31.5v-23q0-1 .75-1.75T8.5 6h23q1 0 1.75.75T34 8.5v23q0 1-.75 1.75T31.5 34Zm0-2h23q.167 0 .333-.167.167-.166.167-.333v-23q0-.167-.167-.333Q31.667 8 31.5 8h-23q-.167 0-.333.167Q8 8.333 8 8.5v23q0 .167.167.333.166.167.333.167ZM8 8v24V8Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
  );
};

export default ProductsBlock;