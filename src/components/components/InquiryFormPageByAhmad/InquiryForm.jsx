import React from "react";

function InquiryForm() {
  return (
    <div className="width-100">
      <div className="res-1440-in header">
        <h1 className="hTopInven">
          Foreignerbelts
          <br />
          <span className="hTopInvenSpan">originals</span>
        </h1>
        <hr />
      </div>
      <div className="IFMainCard">
        <div className="IFFormInputs">
          <h1 className="IFHeading">Inquiry Form</h1>
          <div className="IFMainForm">
            <div className="IFDoubleInputs">
              <div className="IFSingleInputHalf">
                <InputField placeholder={"First Name*"} />
              </div>
              <div className="IFSingleInputHalf">
                <InputField placeholder={"Last Name*"} />
              </div>
            </div>
            <div className="IFSingleInputHalf">
              <InputField placeholder={"Email"} />
            </div>
            <div className="IFDoubleInputs">
              <div className="IFSingleInputHalf">
                <InputField placeholder={"Phone No."} />
              </div>
              <div className="IFSingleInputHalf">
                <InputField placeholder={"Company Name"} />
              </div>
            </div>
            <div className="IFSingleInputFull">
              <InputField placeholder={"Address"} />
            </div>
            <div className="IFSingleInputFull">
              <InputField placeholder={"Order Details"} />
            </div>
            <div className="IFSingleInputFull">
              <p className="IFPlaceholder">Custom Message</p>
              <textarea
                name=""
                id=""
                className="IFInputField_1"
                rows="1"
              ></textarea>
            </div>
          </div>
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
      <div className="btn_send_i_call res-1440-in">
        <div>
          <button className="send_inquiry_btn_send_INQUIRY MAIN_BTN">
            Send Inquiry
          </button>
          <button className="call_inquiry_btn_CALL_US MAIN_BTN">Call Us</button>
        </div>
      </div>
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

function InputField({ placeholder }) {
  return (
    <div className="IFInputFieldView">
      <p className="IFPlaceholder">{placeholder}</p>
      <input className="IFInputField" />
    </div>
  );
}

export default InquiryForm;
