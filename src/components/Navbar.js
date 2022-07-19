import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  const search = (e) => {
    if (e.key === "Enter") {
      // 입력한 검색어를 읽어와서
      let keyword = e.target.value;
      console.log("keyword", keyword);
      // url을 바꿔준다.
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div className="login-btn" onClick={(e) => goToLogin(e)}>
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
          </div>
        )}
      </div>
      <div className="nav-logo">
        <img
          width={200}
          src="http://www.hm.com/entrance/assets/bundle/img/HM-Share-Image.jpg"
        />
      </div>
      <div className="menu">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className="search-right">
          <span>
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            className="line"
            type="text"
            onKeyPress={search}
            placeholder="제품선택"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
