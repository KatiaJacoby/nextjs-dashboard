import NavBar from 'app/components/NavBar';
import styles from 'app/home.module.css';
import Image from 'next/image'


const Home: React.FC = () => {
  let name: string;
  return (
    <><div className={styles.background}>
      <NavBar /> 
      <main className={styles.main}>
        <h1 className={styles.welcomeText}>Welcome to Katia's Website!! </h1>
        <div className={styles.imagecrop}>
          <Image className={styles.image} src="/customers/myFace.png" alt={'me'}
            width={300}
            height={500} 
          />
        </div>
      </main>
    </div><div className={styles.container}>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.cloud}>
          <p className={styles.description}>
            Hi! I'm Katia, a freshman at UC Berkeley studying Computer Science.
          </p>
          <div className={styles.aboutmephotos}>
            <div className={styles.photoitem}>
              <Image src="/customers/atpiano.png" alt={'me'}
                width={300} 
                height={250} 
              />
              <div className={styles.photolabelbox}>
                <p className={styles.photolabel}>Although I play competitive piano, I love learning fun Christmas duets with my brother every year!</p>
              </div>
            </div>
            <div className={styles.photoitem}>
              <Image src="/customers/tennis.png" alt={'me'}
                width={300}
                height={250} 
              />
              <div className={styles.photolabelbox}>
                <p className={styles.photolabel}>Tennis is my favorite sport! I have been playing since I was 7 years old.</p>
              </div>
            </div>
            <div className={styles.photoitem}>
              <Image src="/customers/hiking.png" alt={'me'}
                width={300}
                height={250} 
              />
              <div className={styles.photolabelbox}>
                <p className={styles.photolabel}>I love going backpacking with my family over the summer!</p>
              </div>
            </div>
            <div className={styles.photoitem}>
              <Image className={styles.rotate} src="/customers/Guy.png" alt={'me'}
                width={300} 
                height={250} />
              <div className={styles.photolabelbox}>
                <p className={styles.photolabel}>I have a cat named Guy</p>
              </div>
            </div>
          </div>
        </div>
      </div></>

  

  );
};


export default Home;


