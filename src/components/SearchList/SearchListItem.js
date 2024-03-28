import React from "react";
import Button from "../UI/Button/Button";
import "./SearchListItem.css";

const SearchListItem = (props) => {
  return (
    // Render SearchListItem
    <li className="search_list_item">
      <img className="search_list_item_img" src={props.data.image_url} alt="hotel"></img>
      <div className="search_list_item_info">
        <h3 className="search_list_item_name search_list_item_info_margin">{props.data.name}</h3>
        <p className="search_list_item_info_margin">{props.data.distance} from center</p>
        <p className="search_list_item_tag search_list_item_info_margin">{props.data.tag}</p>
        <p className="search_list_item_info_margin"><strong>{props.data.description}</strong></p>
        <p className="search_list_item_info_margin">{props.data.type}</p>
        <p className="search_list_item_cancel_status search_list_item_info_margin">{props.data.free_cancel === true ? `Free Cancellation` : ``}</p>
        <p className="search_list_item_cancel_status_detail search_list_item_info_margin">{props.data.free_cancel === true ? `You can cancel later, so lock in this great price today!` : ``}</p>
      </div>
      <div className="search_list_item_rate_price_other">
        <div className="search_list_item_rate">
          <p className="search_list_item_rate_text">{props.data.rate_text}</p>
          <p className="search_list_item_rate_number">{props.data.rate}</p>
        </div>
        <div className="search_list_item_rate_price_other_bottom">
          <p className="search_list_item_price">${props.data.price}</p>
          <p className="tax_fee_info">Includes taxes and fees</p>
          <Button className="btn_check_status">See availability</Button>
        </div>
      </div>
    </li>
  )
};

export default SearchListItem;

