// src/App.jsx
import React from "react";
import Schedule from "./components/Schedule";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <h1>FPT University Academic Portal</h1>
        </div>
        <div className="header-right">
          <div className="app-links">
            <a href="#">
              <img src="https://fap.fpt.edu.vn/images/app-store.png" alt="App Store"/>
            </a>
            <a href="#">
              <img src="https://fap.fpt.edu.vn/images/play-store.png" alt="Google Play"/>
            </a>
          </div>
          <a href="#">Hỗ trợ kỹ thuật FAP</a>
        </div>
      </header>

      <nav className="nav-bar">
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">View Schedule</a>
        </div>
        <div className="user-info">
          <span>AnhDTSE180446</span>
          <span>CAMPUS: FPTU-HCM</span>
        </div>
      </nav>

      <main className="main-content">
        <Schedule />
      </main>
      
      <footer>
        <p>
          Sinh viên có nhu cầu cần hỗ trợ các thủ tục, dịch vụ vui lòng liên hệ Trung tâm Dịch vụ Sinh viên tại Phòng 202, điện thoại: xxx-xxxxxxx, email: sschcm@fe.edu.vn
        </p>
        <p>© Powered by FPT University | CMS | Library | books24x7</p>
      </footer>
    </div>
  );
};

export default App;