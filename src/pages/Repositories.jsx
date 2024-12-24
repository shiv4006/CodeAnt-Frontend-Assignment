import data from '../../public/apisdata/repo.json'
import { RepoCard } from '../layouts/RepoCard';
import styles from './Repositories.module.css'

export const Repositories = () => {
  return (
    <div className={styles.container}>
      <div className={styles['upper-section']}>
        <div className={styles.left}>
          <p className={styles.heading}>Repositories</p>
          <p className={styles['sub-heading']}>7 total repositories</p>
          <div className={styles.search}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search Repositories" />
          </div>
        </div>

        <div className={styles.right}>
          <button>
            <i className="fa-solid fa-arrows-rotate"></i>
            Refresh All
          </button>

          <button className={styles['add-repo']}>
            <i className="fa-solid fa-plus"></i>
            Add Repository
          </button>
        </div>
      </div>

      <ul style={{ width: "100%" }}>
        {
          data.map((curr) => {
            return <RepoCard key={curr.id} curr={curr} />
          })
        }
      </ul>
    </div>
  );
}