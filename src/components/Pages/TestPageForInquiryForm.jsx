import React,  { useEffect } from "react";
import InquiryForm from "../components/InquiryFormPageByAhmad/InquiryForm";
import "../../styles/TestPageForInquiryForm.css";

function TestPageForInquiryForm() {
  useEffect(()=>{
    document.title="Send Inquiry | Foreignerbelts"
  })
  return (
    <div>
      <InquiryForm />
    </div>
  );
}

export default TestPageForInquiryForm;
