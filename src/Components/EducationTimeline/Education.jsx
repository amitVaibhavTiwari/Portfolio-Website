import { FaGraduationCap } from "react-icons/fa6";
import "./Education.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Education = () => {
  return (
    <div className="education-timeline-section">
      <VerticalTimeline className="education-timeline" lineColor={"inherit"}>
        <VerticalTimelineElement
          className="vertical-timeline-element card"
          icon={<FaGraduationCap />}
        >
          <div className="card-content">
            <h4>B.Tech. Computer Science and Engineering</h4>
            <h5>2022-present</h5>

            <h6>Current C.G.P.A: 7.1/10</h6>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element card"
          icon={<FaGraduationCap />}
        >
          <div className="card-content">
            <h4>Intermediate (Class XII)</h4>
            <h5>2021-22</h5>
            <h6>Percentage: 88.4</h6>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element card"
          iconStyle={{ box_shadow: "none" }}
          icon={<FaGraduationCap />}
        >
          <div className="card-content">
            <h4>Highschool (Class X)</h4>
            <h5>2019-20</h5>

            <h6>Percentage: 91.2</h6>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
