import { Bounce } from "react-awesome-reveal";
import "./Logo.scss";
const Logo = () => {
  return (
    <section className="noSelect">
      <Bounce triggerOnce={true}>
        <div className="content">
          <h2>Amit</h2>
          <h2>Amit</h2>
        </div>
      </Bounce>
    </section>
  );
};

export default Logo;
