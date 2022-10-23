import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="previewBlock d-flex">
        <div className="previewLeft p-20 d-flex align-center">
          <h1>LOWLOFT</h1>
          <img src="/img/PreviewLeftImg.png" alt="LeftImg" />
          <h3>Современная мебель из натуральных материалов.</h3>
          <div class="previewLeftButton">
            <button className="blackButtonPreview">За покупками</button>
            <button className="whiteButtonPreview">Подробнее</button>
          </div>
        </div>

        <div className="previewRight d-flex">
          <div className="previewRightUp">
            <img
              width="100px"
              src="/img/icon/designBlock.png"
              alt="imgDesign"
            />
            <h3>
              Помощь в подборе мебели и реализаци ваших самых смелых решений от
              мастеров своего дела
            </h3>
            <a href="/123">Читать далее</a>
          </div>
          <a href="/123">
            <div className="previewRightDown d-flex align-center">
              <img src="/img/RightSale.png" alt="RightSaleImg" />
              <div className="priceSale d-flex">
                <h1>
                  Paola wood <br /> Chair
                </h1>
                <span>6500 руб.</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <main>
        <div class="categories">
          <div className="categoriesUp d-flex justify-between">
            <div className="categoriesUpCard">
              <div className="article d-flex justify-between">
                <h1>Диваны</h1>
                <p>24</p>
              </div>
              <div className="photo d-flex justify-between">
                <button>Перейти</button>
                <img width="65%" src="/img/article-photo-1.png" alt="" />
              </div>
            </div>

            <div className="categoriesUpCard">
              <div className="article d-flex justify-between">
                <h1>Хранение</h1>
                <p>12</p>
              </div>
              <div className="photo d-flex justify-between">
                <button>Перейти</button>
                <img width="65%" src="/img/article-photo-6.png" alt="" />
              </div>
            </div>
          </div>

          <div className="categoriesDown d-flex justify-between">
            <div className="categoriesDownCard">
              <div className="article d-flex justify-between">
                <h1>Стулья</h1>
                <p>10</p>
              </div>
              <div className="photo d-flex justify-between">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    width="48"
                  >
                    <path d="m18.8 34.2-.8-.8 9.4-9.4-9.4-9.45.8-.8L29 24Z" />
                  </svg>
                </button>
                <img width="60%" src="/img/article-photo-2.png" alt="" />
              </div>
            </div>

            <div className="categoriesDownCard">
              <div className="article d-flex justify-between">
                <h1>Тумбы</h1>
                <p>21</p>
              </div>
              <div className="photo d-flex justify-between">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    width="48"
                  >
                    <path d="m18.8 34.2-.8-.8 9.4-9.4-9.4-9.45.8-.8L29 24Z" />
                  </svg>
                </button>
                <img width="60%" src="/img/article-photo-3(2).png" alt="" />
              </div>
            </div>

            <div className="categoriesDownCard">
              <div className="article d-flex justify-between">
                <h1>Освещение</h1>
                <p>45</p>
              </div>
              <div className="photo d-flex justify-between">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    width="48"
                  >
                    <path d="m18.8 34.2-.8-.8 9.4-9.4-9.4-9.45.8-.8L29 24Z" />
                  </svg>
                </button>
                <img width="60%" src="/img/article-photo-4.png" alt="" />
              </div>
            </div>

            <div className="categoriesDownCard">
              <div className="article d-flex justify-between">
                <h1>Прочее</h1>
                <p>35</p>
              </div>
              <div className="photo d-flex justify-between">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    width="48"
                  >
                    <path d="m18.8 34.2-.8-.8 9.4-9.4-9.4-9.45.8-.8L29 24Z" />
                  </svg>
                </button>
                <img width="60%" src="/img/article-photo-5.png" alt="other" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
