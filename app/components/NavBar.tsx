import Link from 'next/link';
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <Link href="/">Home</Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/experiences">Experiences</Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/projects">Projects</Link>
      </li>
    </ul>
  </nav>
  );
  };

export default NavBar;