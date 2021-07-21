/** @format */

import React from "react";
import { withRouter } from "react-router-dom";
import "./collection-item.styles.scss";

function CollectionItems({ imageUrl, linkUrl, history, match, name }) {
  return (
    <div
      className="collection-item"
      onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div className="image">
        <img src={imageUrl} alt="error" />
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default withRouter(CollectionItems);
