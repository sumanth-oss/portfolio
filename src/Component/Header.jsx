import { useContext } from "react";
import "../Styles/Header.scss";
import Sidebar from "./Sidebar";
import { ThemeContext } from "../themeContext";

const Header = () => {
  const { themeColor, setThemeColor } = useContext(ThemeContext);

  const tabsItems = [
    { name: "Home", link: "#Home" },
    { name: "About", link: "#About" },
    { name: "Projects", link: "#Projects" },
    { name: "Contact", link: "#links" },
  ];

  const themeButtons = [
    { value: "skyblue", color: "var(--blue-primary)" },
    { value: "green", color: "var(--green-primary)" },
    { value: "orange", color: "var(--orange-primary)" },
    { value: "red", color: "var(--red-primary)" },
  ];
  const filteredThemeButtons = () => {
    return themeButtons.filter((item) => {
      return themeColor !== item.value;
    });
  };

  const newArr = filteredThemeButtons();

  const toggleTheme = (color) => {
    setThemeColor(color);
  };

  return (
    <header className="Header2">
      <div className="logo">
        <svg
          id="wing Layer_1"
          width="40"
          height="40"
          fill="none"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 122.88 122.88"
        >
          <title>s-alphabet</title>
          <path
            d="M21.47,0h81.58a19.79,19.79,0,0,1,14,5.82l.32.35a19.79,19.79,0,0,1,5.5,13.66v83.22a19.91,19.91,0,0,1-19.83,19.83H19.83A19.91,19.91,0,0,1,0,103.05V21.47A21.56,21.56,0,0,1,21.47,0ZM38.14,89.06l2.47-14.59a60.91,60.91,0,0,0,14.64,2A83.27,83.27,0,0,0,65.73,76V70.6l-8-.71Q47,68.91,43,64.72t-4-12.43c0-7.54,1.63-13.7,4.9-16.53s8.83-4.24,16.67-4.24a93.8,93.8,0,0,1,21.23,2.21L79.53,47.88a86.56,86.56,0,0,0-13.18-1.33A68.51,68.51,0,0,0,58,47v5.3l6.36.62q11.6,1.16,16,5.53T84.74,70.6A31.68,31.68,0,0,1,83.24,81a16.13,16.13,0,0,1-3.58,5.84,13.71,13.71,0,0,1-5.88,3,35.45,35.45,0,0,1-6.68,1.28c-1.91.14-4.46.22-7.65.22a92.94,92.94,0,0,1-21.31-2.3Zm64.91-78.95H21.47A11.37,11.37,0,0,0,10.11,21.47v81.58a9.77,9.77,0,0,0,9.72,9.72h83.22a9.73,9.73,0,0,0,9.72-9.72V19.83a9.73,9.73,0,0,0-2.62-6.64l-.24-.22a9.69,9.69,0,0,0-6.86-2.86Z"
            fill="#D9D9D9"
          />
        </svg>
        <div className="themeBtn">
          <button>Theme</button>
          {newArr.map((item, index) => {
            if (themeColor === item.value) return;
            return (
              <p
                key={index}
                style={{ backgroundColor: item.color }}
                onClick={() => toggleTheme(item.value)}
              ></p>
            );
          })}
        </div>
      </div>
      <div className="navigations">
        {tabsItems.map((val, ind) => {
          return (
            <a href={val.link} aria-label={val.name} key={ind}>
              {val.name}
            </a>
          );
        })}
        <a
          href="https://drive.google.com/uc?export=download&id=1imw_cfsmxbmX6YtZXOAszb3hm5XZUXp2"
          download="Sumanth_S_Resume.pdf"
          aria-label="download sumanth s resume"
          className="resume"
        >
          Download Resume
        </a>
      </div>
      <Sidebar toggleTheme={toggleTheme} themeButtons={newArr} />
    </header>
  );
};

export default Header;
