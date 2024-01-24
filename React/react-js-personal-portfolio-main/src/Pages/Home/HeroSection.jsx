

export default function HeroSection() {
  const sectionStyle = {
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(./img/background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };


  return (
    <section id="heroSection" className="hero--section" >
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Onkabetse</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Junior Software </span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
             I'm a passionate Junior Software Developer with a love for coding and problem-solving. My journey involves crafting innovative solutions and bringing ideas to life through the power of technology.
            <br />
            Let's build something amazing together!
          </p>
        </div>
        <a href="./Onkabetse Mankgelo -CapaCiTi CV.pdf" target="_blank" download><button className="btn btn-primary"  >Download Resume</button></a>
      </div>
      <div className="hero--section--img">
        <img src="./img/onkah.png" alt="Hero Section" 
        height={100} 
        width={100}
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(./img/background.jpg)' }} 
        />
      </div>
    </section>
  );
}
