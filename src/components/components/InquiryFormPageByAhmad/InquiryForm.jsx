import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import { commerce } from "../../../lib/commerce";
import Spinner from "../Spinner/Spinner";
import emailjs from "@emailjs/browser";

function InquiryForm() {
  const { cata, prodId } = useParams();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      limit: 100,
    });
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
    document.title = "Send Inquiry | Foreignerbelts";
  }, []);

  const particular_data = products.find((prod) => prod.id === prodId);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n9i16gw",
        "template_kxz7b0h",
        form.current,
        "ai3_AiJBh3BiKcylW"
      )
      .then(
        (result) => {
          alert("Inqiury Sent Successfully");
        },
        (error) => {
          alert("Error");
        }
      );
  };

  return (
    <div className="width-100">
      {loading && <Spinner />}
      <div className="res-1440-in header">
        <h1 className="hTopInven">
          Foreignerbelts
          <br />
          <span className="hTopInvenSpan">originals</span>
        </h1>
        <hr />
      </div>
      {particular_data && (
        <div className="IFMainCard">
          <div className="IFFormInputs">
            <h1 className="IFHeading">Inquiry Form</h1>
            <form ref={form} onSubmit={sendEmail} className="IFMainForm">
              <div className="IFDoubleInputs">
                <div className="IFSingleInputHalf">
                  <div className="IFInputFieldView">
                    <p className="IFPlaceholder">First Name*</p>
                    <input className="IFInputField" name="f_name" required />
                  </div>
                </div>
                <div className="IFSingleInputHalf">
                  <div className="IFInputFieldView">
                    <p className="IFPlaceholder">Last Name*</p>
                    <input className="IFInputField" name="l_name" required />
                  </div>
                </div>
              </div>
              <div className="IFSingleInputHalf">
                <div className="IFInputFieldView">
                  <p className="IFPlaceholder">Email</p>
                  <input
                    className="IFInputField"
                    type="email"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="IFDoubleInputs">
                <div className="IFSingleInputHalf">
                  <div className="IFInputFieldView">
                    <p className="IFPlaceholder">Phone No.</p>
                    <input
                      className="IFInputField"
                      type="number"
                      name="p_number"
                      required
                    />
                  </div>
                </div>
                <div className="IFSingleInputHalf">
                  <div className="IFInputFieldView">
                    <p className="IFPlaceholder">Company Name</p>
                    <input className="IFInputField" name="c_name" />
                  </div>
                </div>
              </div>
              <div className="IFSingleInputFull">
                <div className="IFInputFieldView">
                  <p className="IFPlaceholder">Address</p>
                  <input className="IFInputField" name="address" required />
                </div>
              </div>
              <div className="IFSingleInputFull">
                <div className="IFInputFieldView">
                  <p className="IFPlaceholder">Order Details</p>
                  <input className="IFInputField" name="details" required />
                </div>
              </div>
              <div style={{ display: "none" }} className="displayNone">
                <input
                  type="text"
                  name="p_link"
                  onChange={(e) => {
                    e.target.value = `https://foreignerbelts.com/${cata}/${prodId}`;
                  }}
                  value={`https://foreignerbelts.com/${cata}/${prodId}`}
                />
              </div>
              <div style={{ display: "none" }} className="displayNone">
                <input
                  type="text"
                  onChange={(e) => {
                    e.target.value = "particular_data.name";
                  }}
                  name="p_name"
                  value={particular_data.name}
                />
              </div>
              <div className="IFSingleInputFull">
                <p className="IFPlaceholder">Custom Message</p>
                <textarea
                  name="c_msg"
                  id=""
                  className="IFInputField_1"
                  rows="1"
                ></textarea>
              </div>
              <button
                type="submit"
                style={{ marginTop: "1.5em" }}
                className="send_inquiry_btn_send_INQUIRY MAIN_BTN"
              >
                Send Inquiry
              </button>
            </form>
          </div>
          <div className="IFHowThingsWork-HTW">
            <h2 className="IFHTWHeading">How things work?</h2>
            <div className="IFStepView">
              <Step
                stepNumber={1}
                stepText={"You give us details of the products you want."}
              />
              <Step
                stepNumber={2}
                stepText={
                  "Our team will respond with price quotations & quality promises."
                }
              />
              <Step
                stepNumber={3}
                stepText={
                  "We’ll work on the project with by taking time in the mind & quality we always assure."
                }
              />
              <Step
                stepNumber={4}
                stepText={
                  "Goods will be delivered in time promised. & payment will be cleared."
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Step({ stepNumber, stepText }) {
  return (
    <div className="StepMain">
      <h1 className="StepHeading">Step {stepNumber}</h1>
      <p className="StepText">{stepText}</p>
    </div>
  );
}

export default InquiryForm;
