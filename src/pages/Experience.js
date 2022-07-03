import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="0000 - 0000"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Christled baptist,high school, FCT,Abuja 
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 class='nnn'>
            Yabatech, Lagos state
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            progamming&product design
          </h4>

          <p> web design and Development</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2021"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Rivasault - VI
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          progamming&product design
          </h4>
          <p>Web design and Development.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014 - present"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            ITEX payment-VI
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Lagos state
          </h4>
          <p>
          software troubleshooting,training,and deployment
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
