import NavBar from 'app/components/NavBar';
import styles from './projects.module.css';
import getDevs2 from '../lib/getDevs2';
const Projects: React.FC = () => {
  return (
    <div>
    <NavBar />
    <main className = {styles.container}>
      <p className = {styles.title}>My Projects!</p>
      <section className={styles.projects}>
      <div className={styles.boxes}>
      {getDevs2()}
      </div>
    </section>
    </main>
  </div>
  );
};

export default Projects;

