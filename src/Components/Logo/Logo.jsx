import { Fade } from "react-awesome-reveal";
import "./Logo.scss";
const Logo = () => {
  return (
    <section className="noSelect">
      <Fade triggerOnce={true}>
        <div className="content">
          <h2>Amit</h2>
          <h2>Amit</h2>
        </div>
      </Fade>
    </section>
  );
};

export default Logo;
