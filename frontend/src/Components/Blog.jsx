
import '../assets/Blog.css'; 
import UserNavbar from "../Components/UserNavbar"
const BlogPage = () => {
  return (
    <div className="contact-container">
    <UserNavbar/>
    <div>
        <div className="fo"><h1>Blogs</h1></div>
      <div className="blog-container">
        <div className="blog-image">
          <img src="https://i.postimg.cc/P5R7DrLh/tips.png" alt="Blog Image" />
        </div>
        <div className="blog-info">
          <h2>Event Planning Tips and Tricks</h2>
          <p>Share expert advice on planning successful parties and events, including tips for selecting venues, creating guest lists, managing budgets, and more.
Provide insights into the latest event planning trends, such as themed parties, interactive entertainment, and sustainable event practices.</p>
        </div>
      </div>
      <div className="blog-container">
        <div className="blog-image">
          <img src="https://i.postimg.cc/qRYGjjf5/behind.avif" alt="Blog Image" />
        </div>
        <div className="blog-info">
          <h2>Behind-the-Scenes Event Stories</h2>
          <p>Offer readers a glimpse into the behind-the-scenes work that goes into organizing memorable events. Share stories of challenges faced, creative solutions found, and unforgettable moments experienced during event planning and execution.</p>
        </div>
      </div>
      <div className="blog-container">
        <div className="blog-image">
          <img src="https://i.postimg.cc/Hs77wTkH/party.jpg" alt="Blog Image" />
        </div>
        <div className="blog-info">
          <h2>Vendor Spotlights</h2>
          <p>Showcase the talents and services of local vendors and event professionals, including caterers, DJs, photographers, florists, and more. Highlight their expertise, specialties, and contributions to successful events.
</p>
        </div>
      </div>
      <div className="blog-container">
        <div className="blog-image">
          <img src="https://i.postimg.cc/ydyWQNS3/ideas.jpg" alt="Blog Image" />
        </div>
        <div className="blog-info">
          <h2>Event Inspiration and Ideas</h2>
          <p>Inspire readers with creative event themes, décor ideas, and entertainment options. Share examples of unique and innovative events from around the world, along with practical tips for adapting and implementing these ideas.</p>
        </div>
      </div>
      <div className="blog-container">
        <div className="blog-image">
          <img src="https://i.postimg.cc/rsh1Hjt4/review.jpg" alt="Blog Image" />
        </div>
        <div className="blog-info">
          <h2>Client Success Stories</h2>
          <p>Feature testimonials and success stories from satisfied clients who have used your event management services. Highlight the challenges they faced, how your team helped overcome them, and the outstanding results achieved.
</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BlogPage;
