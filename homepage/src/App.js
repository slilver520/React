// eslint-disable-next-line
import './App.css';
import Header from './Header'
import Slider from './Slider'
import Card from './card'
import { useMediaQuery } from 'react-responsive'
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'styles/styles.css';

function App() {

  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Signin} />
        <Route exact path="/register" component={Signup} />
        <PrivateRoute exact path="/reviews" component={ReviewListPage} />
        <PrivateRoute exact path="/reports" component={ReportListPage} />
        <PrivateRoute exact path="/inquiries" component={InquiryListPage} />
        <PrivateRoute exact path="/bookmarks" component={BookmarkListPage} />
        <Route path="/places/:id" component={PlaceDetailPage} />
        <Route path="/policies" component={PolicyPage} />
    </Router>
  );
}

const Intro = () => {
  return(
    <div className='content_box'>
      <div className='intro_text'>
        <div className='innerWrap'>
          <h3>INTRODUCTION</h3>
          <p className="intro_tit">역동성, 열정</p>
          <p>
            수원화성은 효율을 우선으로 꼽는 이 시대에도 아름다웠기에 살아남을 수 있었다. 그러니 장안문이나 팔달문, 화성행궁 등 여러 건물의 아름다움에 대한 의심은 접어도 좋다. 눈을 돌려 가득 들어오는 조선 건축물의 우아함과 효율이 어느 곳보다 무겁게 남아 있다. 비록 근자에 복원했더라도 기록의 민족답게 문고리 모양 하나까지 적어놓은 덕에 옛 모습과 지금의 차이를 구별하지 못한다. 느긋이 행궁터를 걸어도 좋고, 팔달산 비탈 기슭을 걸어 올라가 산자락의 봄바람을 만끽해도 좋을 만큼 일대는 행락의 여유와 운치를 준다.
          </p>
        </div>
      </div>
      <div className='intro_img'>
        <img src="./pho/introduction.jpg" alt="introduction" />
        <div className='introBox'></div>
      </div>
    </div>
  )
}

export default App;
