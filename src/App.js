import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false); //true일시 로그인됨
  useEffect(() => {
    console.log("login?: ", authenticate);
  }, [authenticate]);
  // 1. 전체상품페이지, 로그인, 상세페이지
  // 1-1 . 네비게이션 바(공통)
  // 2. 전체상품페이지 - 전체상품 볼 수 있음.
  // 3. 로그인버튼 - 로그인 페이지 나옴
  // 4. 상품디테일을 눌렀으나 로그인이 안되있을 경우, 로그인페이지가 먼저나온다.
  // 5. 로그인되어있을 경우 상품 디테일 페이지 볼수 있음.
  // 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
  // 6. 로그아웃이면 상품 디테일페이지를 볼 수 없다. 다시 로그인페이지가 보임.
  // 7. 상품을 검색할 수 있음.
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/Product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
