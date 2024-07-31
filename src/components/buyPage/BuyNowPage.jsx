import "./buyNowPage.css";
import FillOut from "./FillOut";
function BuyNowPage() {
  const buyData = [
    {
      logo: `1`,
      step: `Step 1`,
      content: `Scan the QR code and make the payment`,
      logoColor: `step-box bg-light-green`,
    },
    {
      logo: `2`,
      step: `Step 2`,
      content: `In form below Please enter all details Correctly and fill course
                registration form mentioned below`,
      logoColor: `step-box bg-light-pink`,
    },
    {
      logo: `3`,
      step: `Note`,
      content: `After completing Step 2 successfully, you will get the
                confirmation mail within 24 hours.`,
      logoColor: `step-box bg-light-yellow`,
    },
  ];
  return (
    <>
      <div className="container text-center my-5">
        <h1>
          Steps For <span className="payment-text">Payment</span> Process
        </h1>
        <p className="scan-text">
          Please follow the steps to Enroll in the course
        </p>

        <div className="row">
          <div className="col-lg-6 col-md-12">
            {buyData.map((payment, index) => (
              <div className={payment.logoColor} key={index}>
                <div className="step-number">{payment.logo}</div>
                <h4>{payment.step}</h4>
                <p className="process-text">{payment.content}</p>
              </div>
            ))}
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="payment-section">
              <h1>Scan and pay</h1>
              <p>Enter the course amount and Proceed to payment</p>

              <div className="row justify-content-center">
                <div className="col-12">
                  <img
                    src="/assets/payment-scanner.jpeg"
                    alt="QR Code for Payment"
                    className="img-fluid payment-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FillOut />
    </>
  );
}
export default BuyNowPage;
