import React from "react";
import "../styles/TreeTrimming.scss";
import Footer from "./Footer";

export default class TreeTrimming extends React.Component {
    render() {
        return (
          <div className="tree-trimming-container">
            <h1>Tree Trimming</h1>
            <div className="tree-trimming-description">
              <img src="/images/ever.jpg" alt=""/>
              <div className="tree-trimming-image-description">
                <h3>Tree Trimming</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eligendi quas architecto ipsum voluptatem assumenda fugiat porro cumque officia! Consequuntur illo debitis alias saepe expedita itaque tempore, dolore dicta temporibus?</p>
              </div>
            </div>
            <div className="tree-trimming-image-description-bottom">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum hic neque sunt totam id omnis non magni voluptatibus impedit incidunt in sint provident modi, mollitia amet minima laboriosam nobis laudantium ducimus aspernatur. Earum suscipit natus ipsa pariatur obcaecati enim.</p>
            </div>
            <Footer />
          </div>
          
         
      
        )
      }
      }
