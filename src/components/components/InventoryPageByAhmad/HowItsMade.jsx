/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function HowItsMade() {
  return (
    <div className="width-100 HIMMainDiv">
      <div className="HIMHeadingDiv">
        <p className="HIMHeadingP">How it's Made</p>
      </div>
      <div className="HIMContentCollectionDiv">
        <HIMContent
          w={782}
          h={541}
          num="01"
          img="./images/pngwing1.png"
          text="Wrestling belts, also known as championship belts, are typically made of metal plates that are attached to a leather strap. The plates are often made of zinc, brass, or nickel, and are designed with intricate designs and engravings to represent the championship title they are associated with."
        />

        <HIMContent2
          w={636}
          h={457}
          num="02"
          img="./images/pngwing2.png"
          text="The process of making a wrestling belt typically starts with designing the plates. The design will often include the name of the championship, the logo or symbol associated with the championship, and any other decorative elements that are deemed appropriate. The design is usually drawn up on a computer or sketched by hand."
        />

        <HIMContent
          w={535}
          h={415}
          num="03"
          img="./images/pngwing3.png"
          text="Once the design is finalized, the metal plates are created using a variety of techniques, including casting, stamping, or etching. The plates are then polished and painted to achieve the desired look and color scheme."
        />

        <HIMContent
          w={866}
          h={408}
          num="04"
          img="./images/pngwing4.png"
          text="The leather strap is also an important component of the wrestling belt. It is usually made of high-quality leather and is designed to be comfortable for the wrestler to wear. The leather is cut into the appropriate length and width, and any necessary adjustments are made to ensure a proper fit."
        />

        <HIMContent5
          w={659}
          h={280}
          num="05"
          img="./images/pngwing5.png"
          text="The metal plates are then attached to the leather strap using screws or rivets. The final product is often coated with a protective layer to prevent scratches and damage."
        />
      </div>
    </div>
  );
}

function HIMContent({ num, text, img, w, h }) {
  return (
    <div className="HIMContentDiv">
      <div className="HIMContentTextDiv">
        <p className="HIMContentH">{num}</p>
        <p className="HIMContentP">{text}</p>
      </div>
      <div className="HIMContentImgDiv">
        <img classname="HIMContentImg" src={img} width={w} height={h} />
      </div>
    </div>
  );
}
function HIMContent2({ num, text, img, w, h }) {
  return (
    <div className="HIMContentDiv2">
      <div className="HIMContentTextDiv">
        <p className="HIMContentH2">{num}</p>
        <p className="HIMContentP2">{text}</p>
      </div>
      <div className="HIMContentImgDiv">
        <img classname="HIMContentImg2" src={img} width={w} height={h} />
      </div>
    </div>
  );
}
function HIMContent5({ num, text, img, w, h }) {
  return (
    <div className="HIMContentDiv2">
      <div className="HIMContentTextDiv">
        <p className="HIMContentH2">{num}</p>
        <p className="HIMContentP2">{text}</p>
      </div>
      <div className="HIMContentImgDiv2">
        <img classname="HIMContentImg2" src={img} width={w} height={h} />
      </div>
    </div>
  );
}

export default HowItsMade;
