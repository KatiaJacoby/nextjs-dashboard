import NavBar from 'app/components/NavBar';
import styles from './experiences.module.css';
import getDevs from '../lib/getDevs';

const Experiences: React.FC = () => {
  return (
    <div>
      <NavBar />
      <main className = {styles.container}>
        <p className = {styles.title}>My Experiences!</p>
        <section className={styles.experiences}>
        <div className={styles.boxes}>
        {getDevs()}
        </div>
      </section>
      </main>
    </div>
  );
};

export default Experiences;

