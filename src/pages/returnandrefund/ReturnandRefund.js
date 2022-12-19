import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/nav/NavBar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./returnandrefund.css";

const ReturnandRefund = () => {
  return (
    <div>
      <Sidebar />
      <NavBar />
      <div className="return">
        <h4 className="return-h4">Return and Refund Policy</h4>
        <p>
          If you’re dissatisfied with the products delivered, please register a
          complaint via customer helpline 9802092510 or email at
          info@kinkhel.com within 24 hours for perishable items and 7 days for
          non-perishable and Home & Furnishing items. Product’s original
          packaging/ box should not be tampered with/the cover should not be
          torn/ the labelling and price tags should remain as it was before. The
          Vat Bill should be presented at the time of return. Our customer
          support team will get in touch with you to resolve this issue. You can
          also return the products which you are dissatisfied with, at the time
          of delivery and we will get the refund initiated for you. If the
          complaint registers after allocated time frame then we won’t be able
          to cater to your service. For cash on delivery, allow us 4-5 working
          days to be deposited in bank account. For online bank transactions the
          refunds will be credited/rolled back to your original mode of payment,
          i.e. within 7 -10working days and allow us 24 -48 hours for esewa/IME
          payments and other wallets to be credited in respective accounts.
        </p>
        
      </div>
      <Footer/>
    </div>
  );
};

export default ReturnandRefund;
