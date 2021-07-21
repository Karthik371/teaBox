/** @format */

import React, { Component, Fragment } from "react";
import { Link } from "react-scroll";
import { AiFillCaretDown } from "react-icons/ai";
import CollectionItems from "../../components/collection-item/collection-item.component";
import "./loose-leaf.styles.scss";

export class LooseLeaf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flavours: [
        {
          id: 1,
          name: "Madheswar",
          linkUrl: "/products",
          imageUrl: "/images/loose-leaf/manorama.png",
        },
        {
          id: 2,
          name: "Manorma",
          linkUrl: "/products",
          imageUrl: "/images/loose-leaf/madheshwar.png",
        },
        {
          id: 3,
          name: "Lava",
          linkUrl: "/products",
          imageUrl: "/images/loose-leaf/lava.png",
        },
      ],
    };
  }
  render() {
    return (
      <Fragment>
        <div className="img-container">
          <div className="looseleafimg">
            <img
              src="https://images.pexels.com/photos/2582819/pexels-photo-2582819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="freahest tea leafs"
            />
          </div>
          <div className="landing-content">
            <h1>Loose Leaf</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, dolorem mollitia. Nemo ut incidunt ipsum temporibus
              iure fugiat rem atque neque voluptate asperiores, magnam eaque
              fuga cum doloribus dignissimos nisi?
            </p>
          </div>
        </div>
        <div className="explore">
          <h3>Explore</h3>
          <Link to="anchor" spy={true}>
            <AiFillCaretDown className="down-icon" />
          </Link>
        </div>
        <div className="text-img-container">
          <div className="text">
            <h1>choose from our gourmet flavors</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, dolorem mollitia. Nemo ut incidunt ipsum temporibus
              iure fugiat rem atque neque voluptate asperiores, magnam eaque
              fuga cum doloribus dignissimos nisi?Nemo ut incidunt ipsum
              temporibus iure fugiat rem atque neque voluptate asperiores,
              magnam eaque fuga cum doloribus dignissimos nisi?
            </p>
          </div>
          <div className="side-img" id="anchor">
            <img
              src="./images/loose-leaf/gourmet_flavour.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
        <div className="collection-preview">
          {this.state.flavours.map(({ id, ...otherProps }) => (
            <CollectionItems key={id} {...otherProps} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default LooseLeaf;
