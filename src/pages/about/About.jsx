import './about.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'


const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium architecto esse iusto dolorem at minus!
    </Header>
    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Principal" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat architecto in dolore quis repudiandae laudantium officiis delectus, illum quo quibusdam, eius aliquam nobis corrupti exercitationem labore quidem iure magnam quisquam repellendus expedita quaerat dolorem. Officia dicta aspernatur eum rerum quos?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero tempore molestiae blanditiis similique pariatur beatae! Maxime sapiente laudantium ratione nihil modi consequuntur, repellat quas harum.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, a doloremque! Harum!</p>
        </div>
      </div>
    </section>

    <section className="about__vision">
      <div className="container about__vision-container">   
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat architecto in dolore quis repudiandae laudantium officiis delectus, illum quo quibusdam, eius aliquam nobis corrupti exercitationem labore quidem iure magnam quisquam repellendus expedita quaerat dolorem. Officia dicta aspernatur eum rerum quos?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero tempore molestiae blanditiis similique pariatur beatae! Maxime sapiente laudantium ratione nihil modi consequuntur, repellat quas harum.</p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Principal" />
        </div>
      </div>
    </section>


    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Principal" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat architecto in dolore quis repudiandae laudantium officiis delectus, illum quo quibusdam, eius aliquam nobis corrupti exercitationem labore quidem iure magnam quisquam repellendus expedita quaerat dolorem. Officia dicta aspernatur eum rerum quos?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero tempore molestiae blanditiis similique pariatur beatae! Maxime sapiente laudantium ratione nihil modi consequuntur, repellat quas harum.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, a doloremque! Harum!</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About