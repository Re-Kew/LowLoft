function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center">
        <div className="padding-20">
          <ul className="headerLeft d-flex justify-between">
            <li>Главная</li>
            <li>Категории</li>
            <li>Помощь</li>
          </ul>
        </div>
        <div className="headerMiddle logo">
          <h1>LOWLOFT</h1>
        </div>
        <div className="max-w-header padding-20 align-center">
          <ul className="headerRight d-flex">
            <li className="d-flex align-center">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 7H20M4 7V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V7M4 7L6 3H18L20 7M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span>1205 руб.</span>
            </li>
            <li>
              <img
                width={25}
                height={25}
                src="/img/icon/user.svg"
                alt="login"
              />
            </li>
          </ul>
        </div>
      </header>
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
            <a href="#">Читать далее</a>
          </div>
          <div className="previewRightDown d-flex align-center">
            <img src="/img/RightSale.png" alt="RightSaleImg" />
            <div className="priceSale d-flex">
              <h1>
                Paola wood <br /> Chair
              </h1>
              <span>6500 руб.</span>
            </div>
          </div>
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
      <footer className="">
        <img width="108px" src="/img/icon/logo.png" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
