import React from "react";
import image from "../../../oneofone1.png";
export default function QualityandRelation() {
  return (
    <div
      className="width-100 quality_and_relations_main_cnt_with_width_100"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="res-1440">
        <div className="quality_and_relation_image_div">
          <img
            src="./images/Logo.png"
            alt=""
            className="logo_on_page_quality_and_relationship_img"
          />
          <img
            className="quality_and_relation_side_belt_WWE_absolute_belt_2"
            src="./images/left_belt.png"
            alt=""
          />
        </div>

        <div className="quality_and_relationship_linker_shifter">
          <span className="quality_and_relationship_linker_shifter_span">
            Quality
          </span>

          <span className="quality_and_relationship_linker_shifter_span">
            Our relation
          </span>
        </div>
        <div className="quality_and_relations_para_content_part">
          <p className="quality_and_relations_para_content_part_p">
            Our focus moved beyond the ring and into unique areas of business
            and leisure which require recognition, awards, and prizes. Wildcat
            Championship Belts now centers around creating awards for any
            occasion, event, or corporation.
          </p>

          <p className="quality_and_relations_para_content_part_p">
            Our company is the premier source for custom, hand-made championship
            belts. Our Pakistani business serves a worldwide client base that is
            unparalleled throughout the industry.
          </p>
        </div>
      </div>
    </div>
  );
}
