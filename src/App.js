import logo from './logo.png';
import './App.css';
import {useState} from "react";

function App() {
  const [isHovering, setIsHovering] = useState(false);
  const modal = {
    titles: [
      '소소식탁',
      '소소테스트',
      '소보로'
    ],
    links: [
      'https://github.com/sosotable/ssossotable',
      'https://github.com/sosotable/ssossotest',
      'https://github.com/sosotable/sovoro'
    ]
  }
  const [ title, setTitle ] = useState('')
  const [ link, setLink ] = useState('')
  const handleMouseOver = (opt) => {
    btnOpenPopup(opt)
    setTitle(modal.titles[opt])
    setLink(modal.links[opt])
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const btnOpenPopup = (opt) => {
    const body = document.querySelector('body');
    const modal = document.querySelector('.modal');
    modal.classList.toggle('show');
    if (modal.classList.contains('show')) {
      body.style.overflow = 'hidden';
    }
    else {
      setTitle('')
    }
  }
  const modalControl = (event) => {
    const body = document.querySelector('body');
    const modal = document.querySelector('.modal');
    if (event.target === modal) {
      modal.classList.toggle('show');
      if (!modal.classList.contains('show')) {
        body.style.overflow = 'auto';
      }
    }
  };
  let count = 0
  document.addEventListener("wheel", (e) => {
    // MARK: 아래로 움직임
    if (e.deltaY > 0) {
      count += 1
      if(count > 15) return
      if(count > 5 && count <= 10) {
        document.querySelector('.link').style.display = 'none'
        document.querySelector('.project-info').style.display = 'block'
      }
      else if(count > 10) {
        document.querySelector('.project-info').style.display = 'none'
        document.querySelector('.people-info').style.display = 'block'
      }
    }
    // MARK: 위로 움직임
    else {
      count -= 1
      if(count < 0) return;
      if(count > 0 && count <= 5) {
        document.querySelector('.link').style.display = 'block'
        document.querySelector('.project-info').style.display = 'none'
      }
      else if(count < 10) {
        document.querySelector('.project-info').style.display = 'block'
        document.querySelector('.people-info').style.display = 'none'
      }
    }
  });
  return (
      <div className="App">
        <header className="App-header">

          <a className="link" href="https://github.com/sosotable">
            <div className="box">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </a>
          <div className="project-info">
            <div><h2><a href="https://github.com/sosotable" target='_blank'>소소식탁</a> 은</h2></div>
            <div className="content">기술이 아닌 사람을 위한,<br/>소소한 행복을 줄 수 있는 무언가를<br/> 만들어 내기 위해 노력하고 있습니다.</div>
          </div>
          <div className="people-info">
            <div><h2>프로젝트 목록</h2></div>
            <ul className="content">

              <li
                  onClick={btnOpenPopup}
                  className={isHovering ? "btn-open-popup" : ""}
                  onMouseOver={() => handleMouseOver(0)}
                  onMouseOut={handleMouseOut}
              >소소식탁</li>
              <li
                  onClick={btnOpenPopup}
                  className={isHovering ? "btn-open-popup" : ""}
                  onMouseOver={() => handleMouseOver(1)}
                  onMouseOut={handleMouseOut}
              >소소테스트</li>
              <li
                  onClick={btnOpenPopup}
                  className={isHovering ? "btn-open-popup" : ""}
                  onMouseOver={() => handleMouseOver(2)}
                  onMouseOut={handleMouseOut}
              >소보로</li>
            </ul>
          </div>
          <div className="modal" onClick={modalControl}>
            <div className="modal_body"><a href={link} target='_blank'>{title}</a></div>
          </div>
        </header>

      </div>
  );
}

export default App;
