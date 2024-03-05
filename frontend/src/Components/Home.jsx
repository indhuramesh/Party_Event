import "../assets/Home.css"
import mainvideo from "../Images/video1.mp4"
import terms from "../Images/terms.png"
import faq from "../Images/faq.png"
import UserNavbar from "../Components/UserNavbar"
function Home() {
  
  return (
    <>
      <UserNavbar/>
    <div className="homebody">
      <div>
            <h1 className="homeHead">"Turning Dreams into Unforgettable Moments: Your Premier Partner in Seamless Event Management"</h1>
      

  <video autoPlay loop muted playsInline>
        <source src={mainvideo} type="video/mp4" />
      </video>
     </div>
      <>
      <footer className="footer">
        
        <div className="row">
          <div className="column">
            
            <h1>Quick Links</h1>
            <ul className="list">
            <li>
              <a href="/Home">
              <i className="fa fa-angle-double-right" />
                Home
              </a>
            </li>
            <li>
              <a href={terms}>
                <i className="fa fa-angle-double-right" />
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href={faq}>
                <i className="fa fa-angle-double-right" />
                FAQ
              </a>
            </li>
            </ul>
          </div>
          
          <div className="column">
            <h1>Quick Links</h1>
            <ul className="list">
            <li>
              <a href="mailto:
              indhu131003@gmail.com">
                <i className="fa fa-angle-double-right" />
                Contact us
              </a>
            </li>
            <li>
              <a href="/Services">
                <i className="fa fa-angle-double-right" />
                Get Started
              </a>
            </li>
            <li>
              <a href="/Feedback">
                <i className="fa fa-angle-double-right" />
                Feed back
              </a>
            </li>
            </ul>
          </div>
          <div className="column">
            <h1>Website Links</h1>
            <ul className="list">
            <li>
              <a href="https://www.instagram.com/elegantevent_planners/?hl=en">
                <i className="fa fa-angle-double-right" />
                Chennai Event Planners
              </a>
            </li>
            <li>
              <a href="https://www.jdeventsandentertainments.com/birthday">
                <i className="fa fa-angle-double-right" />
               JD Events
              </a>
            </li>
            
            </ul>
          </div>
          
        </div>
        <div className="footercenter">
         
          <p>
            ©2024 [fiestaFleet] All right Reversed.
            <a
              className="list"
              href="/"
              target="_blank"
            >
              fiestafleet
            </a>
          </p>
        </div>
      </footer>
</> 
      </div>
    </>
  );
}

export default Home;