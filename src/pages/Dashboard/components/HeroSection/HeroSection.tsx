import { Row, Col } from "antd";
import "./HeroSection.scss"; 
import {
  EnvironmentOutlined,
  MailOutlined
} from "@ant-design/icons";
import profilePhoto from "../../../../assets/images/profile-photo2.png";

const HeroSection = () => {
    return (
        <div className="hero-section">

            <Row
                align="middle"
                gutter={[48, 48]}
                className="hero-section__row"
            >

                <Col xs={24} lg={16}>

                    <div className="hero-section__left">

                        <div className="hero-section__intro">
                            Hi, I'm
                        </div>

                        <h1 className="hero-section__name">
                            Dayal Dev
                        </h1>

                        <h2 className="hero-section__designation">
                            Frontend Engineer
                        </h2>

                        <p className="hero-section__description">
                            I build modern, scalable web applications and continuously learn new technologies.
                        </p>

                        <div className="hero-section__contact">
                            <span  className="hero-section__contact-item">
                                <EnvironmentOutlined />
                                Bangalore, India
                            </span>
                            <span className="hero-section__divider">|</span>
                            <span className="hero-section__contact-item">
                                <MailOutlined />
                                dayaldev378@gmail.com
                            </span>
                        </div>

                    </div>

                </Col>

                <Col xs={24} lg={8}>

                    <div className="hero-section__right">
                        {/* <div className="hero-section__photo-wrapper">

                            <div className="hero-section__photo-bg" />

                            <img
                                src={profilePhoto}
                                alt="Image"
                                className="hero-section__photo"
                            />

                        </div> */}
                        <div className="hero-section__photo-wrapper">

                            <div className="hero-section__photo-bg">

                                <img
                                    src={profilePhoto}
                                    alt="Dayal"
                                    className="hero-section__photo"
                                />

                            </div>

                        </div>
                    </div>

                </Col>

            </Row>

        </div>
    );
};
export default HeroSection;