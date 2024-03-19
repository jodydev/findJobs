import { useState } from 'react';

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="nav">
      <div className="navigation">
        <ul>
          <NavItem
            index={0}
            isActive={activeIndex === 0}
            onClick={handleClick}
            icon="fa-solid fa-home"
          />
          <NavItem
            index={1}
            isActive={activeIndex === 1}
            onClick={handleClick}
            icon="fa-solid fa-user"
          />
          <NavItem
            index={2}
            isActive={activeIndex === 2}
            onClick={handleClick}
            icon="fa-solid fa-comments"
          />
          <NavItem
            index={3}
            isActive={activeIndex === 3}
            onClick={handleClick}
            icon="fa-solid fa-gear"
          />
        
          <div className="indicator">
            <span></span>
          </div>
        </ul>
      </div>
    </div>
  );
}

function NavItem({ index, isActive, onClick, icon }) {
  const handleClick = () => {
    if (!isActive) {
      onClick(index);
    }
  };

  return (
    <li className={`list ${isActive ? 'active' : ''}`} onClick={handleClick}>
      <a href="#">
        <span className="icon">
          <i className={`fas ${icon}`}></i>
        </span>
      </a>
    </li>
  );
}

export default Navbar;
