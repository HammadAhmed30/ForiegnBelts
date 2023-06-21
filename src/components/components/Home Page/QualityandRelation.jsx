import React, { useState } from "react";

export default function QualityandRelation() {
  const [paraNumber, setParaNumber] = useState(1);

  return (
    <div
      className="width-100 quality_and_relations_main_cnt_with_width_100"
      style={{ backgroundColor: `black` }}
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

        <div className="btn_quality_and_relation_div">
          <button
            className={`btn_quality_and_relation ${paraNumber === 1 ? "bold" : ""}`}
            onClick={() => {
              setParaNumber(1);
            }}
          >
            Our Relations
          </button>
          <button
            className={`btn_quality_and_relation ${paraNumber === 2 ? "bold" : ""}`}
            style={{marginLeft:"20px"}}
            onClick={() => {
              setParaNumber(2);
            }}
          >
            Quality
          </button>
        </div>

        <div className="quality_and_relations_para_content_part">
          <p
            className={`quality_and_relations_para_content_part_p ${
              paraNumber === 1 ? "active_para_1" : "non_active_para_1"
            }`}
          >
            Our focus moved beyond the ring and into unique areas of business
            and leisure which require recognition, awards, and prizes. Wildcat
            Championship Belts now centers around creating awards for any
            occasion, event, or corporation.
          </p>

          <p
            className={`quality_and_relations_para_content_part_p ${
              paraNumber === 2 ? "active_para_2" : "non_active_para_2"
            }`}
          >
            Our company is the premier source for custom, hand-made championship
            belts. Our Pakistani business serves a worldwide client base that is
            unparalleled throughout the industry.
          </p>
        </div>
      </div>
    </div>
  );
}
