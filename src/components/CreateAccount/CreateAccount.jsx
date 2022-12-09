import React from "react";

import { HiArrowNarrowRight } from "react-icons/hi";
import "./CreateAccount.scss";

const CreateAccount = () => {
  return (
    <>
      <div className="create-account-container col-l-18 col-m-12">
        <div className="create-account-container__inner">
          <p className="vspace-xs f-bold">DON'T LOSE YOUR WISHLIST</p>
          <span className="vspace xs f-regular">
            Join the adiClub today and receive a 15% discount voucher for your
            first order. Or log in to save the item(s) so they won't be lost.
          </span>
          <button className="btn btn-register f-bold flex-center vspace-xs">
            REGISTER
            <div className="icon">
              <HiArrowNarrowRight />
            </div>
          </button>
          <div className="vspace-xs">
            <span className="f-regular">Already an adiClub member?</span>
            <button className="btn btn-login f-bold">LOG IN</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
