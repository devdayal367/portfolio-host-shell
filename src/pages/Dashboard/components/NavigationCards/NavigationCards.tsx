import { Row, Col, Card } from "antd";
import {
  BriefcaseBusiness,
  Folder,
  Mail,
  FileText,
  Code2,
  ArrowRight
} from "lucide-react";

import "./NavigationCards.scss";

const NavigationCards = ({ cards }: any) => {

    const getIcon = (title: string) => {
        switch (title) {
            case "Experience":
                return <BriefcaseBusiness size={28} />;
            case "Expertise":
                return <Code2 size={28} />;
            case "Projects":
                return <Folder size={28} />;
            case "Contact":
                return <Mail size={28} />;
            case "Resume":
                return <FileText size={28} />;
            default:
                return null;
        }
    };

    return (
        <div className="navigation-cards">

            <Row gutter={[16, 16]}>

                {cards.slice(0, 3).map((card: any) => (
                    <Col xs={24} md={8} key={card.title}>
                        <Card className="navigation-card">

                            <Row gutter={16}>

                                <Col flex="100px">
                                    <div className="navigation-card__icon">
                                        {getIcon(card.title)}
                                    </div>
                                </Col>

                                <Col flex="auto">

                                    <div className="navigation-card__title">
                                        {card.title}
                                    </div>

                                    <div className="navigation-card__description">
                                        {card.description}
                                    </div>

                                </Col>

                            </Row>

                            <div className="navigation-card__arrow">
                                <ArrowRight size={28} />
                            </div>

                        </Card>
                    </Col>
                ))}

            </Row>

            <Row
                justify="center"
                gutter={[16, 16]}
                style={{ marginTop: "16px" }}
            >

                {cards.slice(3).map((card: any) => (
                    <Col xs={24} md={8} key={card.title}>
                        <Card className="navigation-card">

                            <Row gutter={16}>

                                <Col flex="100px">
                                    <div className="navigation-card__icon">
                                        {getIcon(card.title)}
                                    </div>
                                </Col>

                                <Col flex="auto">

                                    <div className="navigation-card__title">
                                        {card.title}
                                    </div>

                                    <div className="navigation-card__description">
                                        {card.description}
                                    </div>

                                </Col>

                            </Row>

                            <div className="navigation-card__arrow">
                                <ArrowRight size={28} />
                            </div>

                        </Card>
                    </Col>
                ))}

            </Row>

        </div>
    );

};
export default NavigationCards;
