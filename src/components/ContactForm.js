import React from 'react';

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send');

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <div className="container mt-5">
      <div className="container p-4 pb-0">
        <section>
          <div className="row">
            {/* Left Container */}
            <div className="col-md-6">
              <div className="container text-left">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact Us</h6>
                <p><i className="fas fa-envelope mr-3"></i> earthlyeats@gmail.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>
            </div>

            {/* Right Container */}
            <div className="col-md-6">
              <div className="row justify-content-end">
                <div className="col-md-9">
                  <h2 className="mb-3">Feedback</h2>
                  <form onSubmit={onSubmit}>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="name">
                        Name
                      </label>
                      <input className="form-control" type="text" id="name" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="email">
                        Email
                      </label>
                      <input className="form-control" type="email" id="email" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="message">
                        Message
                      </label>
                      <textarea className="form-control" id="message" required />
                    </div>
                    <button className="btn btn-danger" type="submit">
                      {formStatus}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactForm;
