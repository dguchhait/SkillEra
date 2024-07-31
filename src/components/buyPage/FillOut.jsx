import React from "react";
import "./fillOut.css";

function FillOut() {
  return (
    <div className="container mb-5">
      <div className="row justify-content-center align-items-center ">
        <div className="col-md-6">
          <div className="card shadow-lg p-4">
            <h3 className="card-title text-center">Registration Form</h3>
            <p className="card-text text-center">
              Please fill this form only after successfully making the payment
            </p>
            <p className="card-text text-center">
              Please fill all the details correctly in order to ensure a smooth
              onboarding. Wait for 24 hours for the access, after submitting the
              form. Thank you!
            </p>
            <div className="text-center">
              <a
                href="https://forms.gle/jDHj5aADEicnpdZv9"
                className="btn btn-primary btn-lg"
              >
                Start now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FillOut;
