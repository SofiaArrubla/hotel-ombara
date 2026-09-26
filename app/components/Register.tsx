export default function Register() {
  return (
    <section id="register" className="ombara-register-section">
      <div className="ombara-register-img">
        <img src="/assets/version-2/image(2).jpg" alt="Register" />
      </div>
      <div className="ombara-register-form-pane">
        <h2 className="section-title mb-4">Begin Your Journey</h2>
        <p className="ombara-register-desc">
          Join the exclusive Ombara community and embrace a lifestyle defined by luxury, wellness, and breathtaking coastal beauty.
        </p>

        <form action="/contact-submit" method="POST" className="ombara-register-form">
          <div>
            <label htmlFor="reg-name">Full Name</label>
            <input id="reg-name" name="name" type="text" placeholder="Enter your name" required />
          </div>
          <div>
            <label htmlFor="reg-email">Email Address</label>
            <input id="reg-email" name="email" type="email" placeholder="Enter your email address" required />
          </div>
          <div>
            <label htmlFor="reg-phone">Phone Number</label>
            <div className="ombara-phone-wrap">
              <select name="countryCode" aria-label="Country Code">
                <option value="+1">+1</option>
                <option value="+60" selected>+60</option>
                <option value="+62">+62</option>
              </select>
              <input id="reg-phone" name="phone" type="tel" placeholder="Enter your phone number" required />
            </div>
          </div>
          <div>
            <label htmlFor="reg-country">Country</label>
            <select id="reg-country" name="country">
              <option>United States</option>
              <option selected>Malaysia</option>
              <option>Indonesia</option>
              <option>Singapore</option>
            </select>
          </div>
          <label className="ombara-checkbox">
            <input type="checkbox" required />
            <span>I agree to the <span className="accent">Policies and Terms</span></span>
          </label>
          <button type="submit" className="ombara-submit">Register Now</button>
        </form>
      </div>
    </section>
  );
}