import { Outlet } from "react-router";
import { Header } from './Header'
import styles from './AppLayout.module.css'

export const AppLayout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
    </div>
  );
};