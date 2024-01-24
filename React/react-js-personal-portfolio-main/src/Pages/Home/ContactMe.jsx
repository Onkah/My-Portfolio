import "../../App.css";
import axios from 'axios';

export default function ContactMe() {
/*
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/send-email', formData);
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };
  */
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
           Feel free to reach out to me. I'd love to hear from you!
        </p>
      </div>
      <form className="contact--form--container bordered-form" >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
              
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
             
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Select One...</option>
            <option>General Inquiry</option>
            <option>Collaboration Opportunity</option>
            <option>Open Position For You</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
            
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
