import React from "react";
import PageTitle from "components/common/PageTitle";
import {
    MiniWidget,
    LinearProgressWidget,
    RoundProgressWidget,
    HorizontalPerformanceWidget
} from "components/widgets/statisticswidgets";

const StatisticsWidgets = () => {
    return (
        <div>
            <PageTitle
                title="sidebar.statisticswidgets"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.widgets"
                    },
                    {
                        name: "sidebar.statisticswidgets"
                    }
                ]}
            />
            <div className="row mlr-0" style={{marginTop: '-15px'}}>
                <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
                    <LinearProgressWidget
                        headline="Sales"
                        subheader="Sales increase"
                        progress="70"
                        progressColor="#6200ea"
                        info="70% Sales increase"
                    // dark
                    // background="#424242"
                    />
                </div>

                <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
                    <LinearProgressWidget
                        headline="Orders"
                        subheader="Increase"
                        progress="40"
                        progressColor="#f6a821"
                        info="40% Sales increase"
                        dark
                        background="#424242"
                    />
                </div>

                <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
                    <LinearProgressWidget
                        headline="Cost"
                        subheader="Cost reduce"
                        progress="25"
                        progressColor="rgb(121, 76, 138)"
                        info="25% Cost reduce"
                    />
                </div>

                <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
                    <LinearProgressWidget
                        headline="Revenue"
                        subheader="Revenue increase"
                        progress="45"
                        progressColor="#FA7252"
                        info="45% Sales increase"
                    />
                </div>

                <div className="col-12 ptb-15">
                    <HorizontalPerformanceWidget />
                </div>

                <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
                    <MiniWidget
                        iconName="fas fa-envelope"
                        iconColor="#6200ea"
                        background="white"
                        className="demo"
                        headline="80"
                        subheader="MAILS"
                    />
                </div>

                <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
                    <MiniWidget
                        iconName="fas fa-ticket-alt"
                        iconColor="#00c853"
                        background="white"
                        className="demo"
                        headline="200"
                        subheader="TICKETS"
                        rightIcon
                    />
                </div>

                <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
                    <MiniWidget
                        iconName="fas fa-shopping-cart"
                        iconColor="#ffa000"
                        background="white"
                        className="demo"
                        headline="101"
                        subheader="ORDER"
                    />
                </div>

                <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
                    <MiniWidget
                        iconName="fas fa-comment-alt"
                        iconColor="#2196f3"
                        background="white"
                        className="demo"
                        headline="42"
                        subheader="COMMENTS"
                        rightIcon
                    />
                </div>

                <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
                    <MiniWidget
                        iconName="fas fa-comment-alt"
                        iconColor="#white"
                        background="#424242"
                        className="demo"
                        headline="42"
                        dark={true}
                        subheader="COMMENTS"
                        rightIcon
                    />
                </div>

                <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
                    <MiniWidget
                        iconName="fas fa-tasks"
                        iconColor="#white"
                        background="#424242"
                        className="demo"
                        headline="42"
                        dark={true}
                        subheader="TASKS"
                    />
                </div>

                <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
                    <MiniWidget
                        iconName="fas fa-users"
                        iconColor="#white"
                        background="#424242"
                        className="demo"
                        headline="42"
                        dark={true}
                        subheader="USERS"
                    />
                </div>

                <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
                    <MiniWidget
                        iconName="fas fa-bookmark"
                        iconColor="#white"
                        background="#424242"
                        className="demo"
                        headline="10"
                        dark={true}
                        subheader="BOOKMARK"
                        rightIcon
                    />
                </div>
                <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 ptb-15">
                    <RoundProgressWidget
                        headline="Revenue"
                        subheader="Revenue increase"
                        progress="75"
                        progressColor="#FA7252"
                        info="75% Sales increase"
                    />
                </div>

                <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 ptb-15">
                    <RoundProgressWidget
                        headline="Orders"
                        subheader="Increase"
                        progress="40"
                        progressColor="#f6a821"
                        info="40% Sales increase"
                        dark
                        background="#424242"
                    />
                </div>

                <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 ptb-15">
                    <RoundProgressWidget
                        headline="Sales"
                        subheader="Sales increase"
                        progress="70"
                        progressColor="#6200ea"
                        info="70% Sales increase"
                    />
                </div>

                <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 ptb-15">
                    <RoundProgressWidget
                        headline="Cost"
                        subheader="Cost reduce"
                        progress="25"
                        progressColor="rgb(121, 76, 138)"
                        info="25% Cost reduce"
                    />
                </div>
            </div>
        </div>
    );
};

export default StatisticsWidgets;
