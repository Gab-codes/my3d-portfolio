import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Temidayo Gabriel",
          from_email: form.email,
          to_email: "dayotoru@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setIsLoading(false);
      toast.success("Thank you for your message 😃");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      toast.error("Error sending message 😢");
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col sm:mb-40 lg:mb-0">
        <img
          src="/assets/terminal.png"
          alt="terminal-background"
          className="absolute inset-0 w-full min-h-screen h-[100vh] sm:h-[120vh] xl:h-[105vh]"
        />
        <div className="contact-container top-7 lg:top-10">
          <h3 className="head-text">Contact Me</h3>
          <p className="text-base text-white-600 mt-3">
            Whether you&apos;re looking to build a new website, imporve your
            existing platform, or bring a unique project to life, I'm here to
            help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-5 md:space-y-2 lg:space-y-5"
          >
            <label className="space-y-2 md:space-y-1 lg:space-y-2">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
                aria-label="Full name"
              />
            </label>

            <label className="space-y-2 md:space-y-1 lg:space-y-2">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
                aria-label="email"
              />
            </label>

            <label className="space-y-2 md:space-y-1 lg:space-y-2">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
                aria-label="message"
              />
            </label>

            <button className="field-btn" type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}

              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
