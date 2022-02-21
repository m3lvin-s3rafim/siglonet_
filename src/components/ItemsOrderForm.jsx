import { Fragment } from "react";

import { BsFillCalendarCheckFill } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiHash } from "react-icons/bi";
import { ImSigma } from "react-icons/im";

const ItemsOrderForm = () => {
  return (
    <Fragment>
      <div className="inventory-container">
        <div className="inventory-container-items">
          <span className="items-date">Date created</span>
          <span className="items-value pt-2">DD/MM/YYYY</span>
        </div>

        <span className="items-date">
          <BsFillCalendarCheckFill size={20} />
        </span>
      </div>

      <div className="inventory-container">
        <div className="inventory-container-items">
          <span className="items-date">Received from</span>
          <span className="items-value pt-2">Main hub</span>
        </div>

        <span className="items-date">
          <MdOutlineLocationOn size={20} />
        </span>
      </div>

      <div className="inventory-container">
        <div className="inventory-container-items">
          <span className="items-date">Order note no.</span>
          <span className="items-value pt-2">01292</span>
        </div>

        <span className="items-date">
          <BiHash size={20} />
        </span>
      </div>

      <div className="inventory-container">
        <div className="inventory-container-items">
          <span className="items-date">Quantity</span>
          <span className="items-value pt-2">4</span>
        </div>

        <span className="items-date">
          <ImSigma size={20} />
        </span>
      </div>
    </Fragment>
  );
};

export default ItemsOrderForm;
