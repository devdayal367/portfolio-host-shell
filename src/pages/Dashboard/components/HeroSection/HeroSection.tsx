import { Row, Col } from "antd";
import "./HeroSection.scss"; 
import {
  EnvironmentOutlined,
  MailOutlined
} from "@ant-design/icons";
import profilePhoto from "../../../../assets/images/profile-photo2.png";

const HeroSection = (props: any) => {

    const { greeting, name, role, description, location, email } = props.content;
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
                            {greeting}
                        </div>

                        <h1 className="hero-section__name">
                            {name}
                        </h1>

                        <h2 className="hero-section__designation">
                            {role}
                        </h2>

                        <p className="hero-section__description">
                            {description}
                        </p>

                        <div className="hero-section__contact">
                            <span  className="hero-section__contact-item">
                                <EnvironmentOutlined />
                                {location}
                            </span>
                            <span className="hero-section__divider">|</span>
                            <span className="hero-section__contact-item">
                                <MailOutlined />
                                {email}
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