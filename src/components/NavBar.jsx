import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <nav className={style.navbar}>
        <div className={style.logo}>
          <h2>KYN</h2>
        </div>
        <ul className={style["navbar-items"]}>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Skills</a>
          </li>
          <li>
            <a>Education</a>
          </li>
          <li>
            <a>Certificates</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
