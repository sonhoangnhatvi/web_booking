import React from "react";
import './FooterItem.css';

const FooterItem = (footer_item) => {
  return (
    <li>
      <ul className="footer_item_list">
        {/* Render list content for Footer item */}
        {footer_item.data.col_values.map((value) => (
          <li>
            {value}
          </li>
        ))}
      </ul>
    </li>
  )
};

export default FooterItem;
