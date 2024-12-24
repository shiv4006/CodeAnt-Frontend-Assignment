import { useRouteError } from "react-router"
import styles from './Error.module.css'

export const Error = () => {
  const error = useRouteError();
  if (error.status === 400) {
    <div className={styles.container}>
      <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" alt="" />
    </div>
  }

  return (
    <div className={styles.container}>
      <div>
        <h3>Oops!</h3>
        <h4>Something wrong from ourside, we will correct is soon....</h4>
      </div>
    </div>
  );
}