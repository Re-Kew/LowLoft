import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center">
        <div className="padding-20">
          <ul className="headerLeft d-flex justify-between">
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="ProductsPage">Товары</a>
            </li>
            <li>
              <a href="">Помощь</a>
            </li>
          </ul>
        </div>
        <div className="logo">
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
      <content>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ProductsPage" element={<ProductsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </content>

      <footer className="">
        <img width="108px" src="/img/icon/logo.png" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
