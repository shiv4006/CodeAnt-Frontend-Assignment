import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './LogIn.module.css';
import { useState } from 'react';

export const LogIn = () => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(true);

  const handleClick = () => {
    navigate('/app/repositories');
  };

  const handlFlagChange = () => {
    setFlag(!flag);
  }

  return (
    <div onClick={handleClick} className={styles.container}>
      <div className={styles.left}>
        <img src="/public/image.png" alt="details" />
      </div>

      <div className={styles.right}>
        <div className={styles.box}>
          <div className={styles.heading}>
            <img src="/public/logo.svg" alt="logo" />
            <p>CodeAnt AI</p>
          </div>

          <h3>Welcome to CodeAnt AI</h3>

          <div className={styles.buttons}>
            <button
              onClick={handlFlagChange}
              className={`${styles.saas} ${flag ? styles.active : ''}`}
            >
              SAAS
            </button>

            <button
              onClick={handlFlagChange}
              className={`${styles.self} ${!flag ? styles.active : ''}`}
            >
              Self Hosted
            </button>
          </div>

          <hr />
          
          {flag ? saas() : selfHosted()}


        </div>

        <p className={styles.tc}>By signing up you agree to the <b>Privacy Policy</b></p>
      </div>

    </div>
  );
};

const saas = () => {
  return (
    <ul className={styles['list']}>
      <NavLink className={styles['list-item']}>
        <img src="/public/github.svg" alt="" />
        Sign in with Github
      </NavLink>

      <NavLink className={styles['list-item']}>
        <img src="/public/bitbucket.svg" alt="" />
        Sign in with Bitbucket
      </NavLink>

      <NavLink className={styles['list-item']}>
        <img src="/public/azure.svg" alt="" />
        Sign in with Azure Devops
      </NavLink>

      <NavLink className={styles['list-item']}>
        <img src="/public/gitlab.svg" alt="" />
        Sign in with GitLab
      </NavLink>
    </ul>
  );
};

const selfHosted = () => {
  return (
    <ul className={styles['list']}> 
      <NavLink className={styles['list-item']}>
        <img src="/public/gitlab.svg" alt="" />
        Self Hosted GitLab
      </NavLink>

      <NavLink className={styles['list-item']}>
        <img src="/public/sso.svg" alt="" />
        Sign in with SSO
      </NavLink>
    </ul>
  );

};