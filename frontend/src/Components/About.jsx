import "../assets/About.css"
import UserNavbar from "../Components/UserNavbar"
import wedding from "../Images/wedding.jpg"


const About = () => {
  return (
    <>
    <div className="about-bck">
    <UserNavbar/>
    <div className="image-container">
            <img src="https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg" alt="Dinner Party" className="about-image" />
            <img src={wedding} alt="Event Image 4" className="about-image" />
            {/* Add more images as needed */}
            <img src="https://www.bookmyballoons.in/wp-content/uploads/2020/10/Butterfly-Theme-Birthday-Party-Supplies.jpg" alt="Dinner Party" className="about-image" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE0Q4qsVnRPGFC2e3P5YZ2ER1neA6mLGP81Q&usqp=CAU" alt="Dinner Party" className="about-image" />


          </div>
          <div className="about-body">
          <div className="container">
      <header className="about-header">
        <h1>FEISTA FLEET</h1>
        <p>Your Premier Party Event Management Experts</p>
      </header>

      <section className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Welcome to FEISTA FLEET, where we understand that every event is a unique celebration of special moments.
            Whether you're planning a birthday bash, corporate gathering, wedding extravaganza, or any other festive occasion,
            we are here to turn your vision into an unforgettable reality.
          </p>

          {/* Add more content as needed */}
        </div>
      </section>

      <section className="why-choose-section">
        <div className="container">
          <h2>Why Choose FEISTA FLEET?</h2><br></br>
          <div className="why-choose-content">
            <p>Unmatched Expertise</p>
            <p>Passion for Creativity</p>
            <p>Seamless Execution</p>
            <p>Client-Centric Approach</p>
            <p>Proven Track Record</p>
          </div>
        </div>
      </section>
      </div>
      </div>
      </div>
    </>
  )
}

export default About