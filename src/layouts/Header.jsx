/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {

  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  const handleOpen = () => {
    setOpen((prev) => !prev);
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  if (screenWidth > 768) {
    return <BigScreen />;
  }
  else {
    return < MobileScreen open={open} handleOpen={handleOpen} />;
  }
};

const BigScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.brand}>
          <img src="/public/logo.svg" alt="logo" />
          <p>CodeAnt AI</p>
        </div>
        <select name="user" id="user" className={styles.dropdown}>
          <option value="utkarsh">Utkarsh</option>
          <option value="shivam">Shivam</option>
        </select>

        <ul className={styles['option-list']}>
          <NavLink
            to="/app/repositories"
            className={({ isActive }) =>
              isActive ? `${styles['list-item']} ${styles.active}` : styles['list-item']
            }
          >
            <i className="fa-solid fa-house"></i>
            Repositories
          </NavLink>

          <NavLink
            to="/app/codereview"
            className={({ isActive }) =>
              isActive ? `${styles['list-item']} ${styles.active}` : styles['list-item']
            }
          >
            <i className="fa-solid fa-code"></i>
            AI Code Review
          </NavLink>

          <NavLink
            to="/app/cloudsecurity"
            className={({ isActive }) =>
              isActive ? `${styles['list-item']} ${styles.active}` : styles['list-item']
            }
          >
            <i className="fa-solid fa-cloud"></i>
            Cloud Security
          </NavLink>

          <NavLink
            to="/app/howtouse"
            className={({ isActive }) =>
              isActive ? `${styles['list-item']} ${styles.active}` : styles['list-item']
            }
          >
            <i className="fa-solid fa-book"></i>
            How to Use
          </NavLink>

          <NavLink
            to="/app/settings"
            className={({ isActive }) =>
              isActive ? `${styles['list-item']} ${styles.active}` : styles['list-item']
            }
          >
            <i className="fa-solid fa-gear"></i>
            Settings
          </NavLink>
        </ul>
      </div>

      <div className={styles.lower}>
        <ul>
          <NavLink
            to="/app/support"
            className={({ isActive }) =>
              isActive ? `${styles['lower-list-item']} ${styles.active}` : styles['lower-list-item']
            }
          >
            <i className="fa-solid fa-phone"></i>
            Support
          </NavLink>

          <NavLink
            to="/app/logout"
            className={({ isActive }) =>
              isActive ? `${styles['lower-list-item']} ${styles.active}` : styles['lower-list-item']
            }
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            Logout
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

const MobileScreen = ({ open, handleOpen }) => {
  return (
    <div className={styles['mobile-container']}>
      <div className={styles['mobile-brand']}>
        <img src="/public/logo.svg" alt="logo" />
        <p>CodeAnt AI</p>
      </div>

      {!open ? (
        <button className={`${styles['hamburger-menu']}`} onClick={handleOpen}>
          <i className="fa-solid fa-bars"></i>
        </button>
      ) : (
        <button className={`${styles['close-menu']}`} onClick={handleOpen}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      )}

      {open && (
        <div className={styles['mobile-navbar']}>
          <select name="user" id="user" className={styles.dropdown}>
            <option value="utkarsh">Utkarsh</option>
            <option value="shivam">Shivam</option>
          </select>
          <ul className={styles['mobile-option-list']}>
            <NavLink
              to="/app/repositories"
              className={({ isActive }) =>
                isActive ? `${styles['list-item']} ${styles.active}` : styles['list-item']
              }
            >
              <i className="fa-solid fa-house"></i>
              Repositories
            </NavLink>

            <NavLink
              to="/app/codereview"
              className={({ isActive }) =>
                isActive ? `${styles['list-item']} ${styles.active}` : styles['list-item']
              }
            >
              <i className="fa-solid fa-code"></i>
              AI Code Review
            </NavLink>

            <NavLink
              to="/app/cloudsecurity"
              className={({ isActive }) =>
                isActive ? `${styles['list-item']} ${styles.active}` : styles['list-item']
              }
            >
              <i className="fa-solid fa-cloud"></i>
              Cloud Security
            </NavLink>

            <NavLink
              to="/app/howtouse"
              className={({ isActive }) =>
                isActive ? `${styles['list-item']} ${styles.active}` : styles['list-item']
              }
            >
              <i className="fa-solid fa-book"></i>
              How to Use
            </NavLink>

            <NavLink
              to="/app/settings"
              className={({ isActive }) =>
                isActive ? `${styles['list-item']} ${styles.active}` : styles['list-item']
              }
            >
              <i className="fa-solid fa-gear"></i>
              Settings
            </NavLink>

            <NavLink
              to="/app/support"
              className={({ isActive }) =>
                isActive ? `${styles['list-item']} ${styles.active}` : styles['list-item']
              }
            >
              <i className="fa-solid fa-phone"></i>
              Support
            </NavLink>

            <NavLink
              to="/app/logout"
              className={({ isActive }) =>
                isActive ? `${styles['list-item']} ${styles.active}` : styles['list-item']
              }
            >
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              Logout
            </NavLink>
          </ul>
          <div/>
        </div>
      )}
    </div>

  );



}
