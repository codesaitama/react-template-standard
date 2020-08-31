import React, { useState } from "react";
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    Button,
    CardTitle,
    CardText,
    Row,
    Col
} from "reactstrap";
import classnames from "classnames";

const Example = () => {
    const [activeTab, setActiveTab] = useState("1");

    const toggle = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };
    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames(
                            { active: activeTab === "1" },
                            "doc-title"
                        )}
                        onClick={() => {
                            toggle("1");
                        }}
                    >
                        Tab1
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames(
                            { active: activeTab === "2" },
                            "doc-title"
                        )}
                        onClick={() => {
                            toggle("2");
                        }}
                    >
                        Moar Tabs
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <div className="doc-title mt-10">
                                Tab 1 Contents
                            </div>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row className="mt-10">
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                </CardText>
                                <Button className="c-primary">Go somewhere</Button>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                </CardText>
                                <Button className="c-secondary">Go somewhere</Button>
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
};
export default Example;
