import React from "react";
import PageTitle from "components/common/PageTitle";
import {
  MinibarWidgets,
  MiniLineChartWidget,
  SocialAnalyticsWidgets,
  MiniLineBackgroundWidget,
  LargeBarWidget
} from "components/widgets/chartwidgets";
import { people5, people10, cover10, cover9 } from "helper/constant";

const ChartWidgets = () => {
  return (
    <div>
      <PageTitle
        title="sidebar.chartwidgets"
        className="plr-15"
        breadCrumb={[
          {
            name: "sidebar.widgets"
          },
          {
            name: "sidebar.chartwidgets"
          }
        ]}
      />
      <div className="row mlr-0" style={{ marginTop: "-15px" }}>
        <div className="col-xl-4 ptb-15">
          <MiniLineBackgroundWidget
            headline="Total Expenses"
            count="$650"
            barBackground="#FAD79A"
            barColor="#f6a821"
            chartData={[56, 18, 30, 61, 92, 35, 59, 57, 71, 96, 20, 30]}
          />
        </div>

        <div className="col-xl-4 ptb-15">
          <MiniLineBackgroundWidget
            headline="Total Budgets"
            count="$65k"
            barBackground="#FDD8CF"
            barColor="#FA7252"
            chartData={[78, 30, 10, 20, 40, 55, 39, 78, 81, 76, 20, 31]}
          />
        </div>

        <div className="col-xl-4 ptb-15">
          <MiniLineBackgroundWidget
            headline="Total Revenue"
            count="$300k"
            barBackground="#D5EAF0"
            barColor="#68B3C8"
            chartData={[10, 40, 30, 20, 50, 30, 60, 40, 30, 70, 10, 20]}
          />
        </div>

        <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
          <MinibarWidgets
            headline="$ 8610"
            subheader="Total Earnings"
            barColor="#FA7252"
            dark
            background="#424242"
            chartData={[
              530,
              159,
              820,
              821,
              562,
              652,
              359,
              580,
              861,
              586,
              100,
              701
            ]}
          />
        </div>

        <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
          <MinibarWidgets
            headline="$ 5800"
            subheader="Envato Incomes"
            barColor="#6200ea"
          />
        </div>

        <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
          <MinibarWidgets
            headline="$ 1790"
            subheader="Customization Revenue"
            barColor="#f6a821"
            dark
            background="#424242"
            chartData={[50, 19, 20, 81, 52, 65, 39, 58, 81, 56, 10, 71]}
          />
        </div>

        <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
          <MinibarWidgets
            headline="$ 510"
            subheader="Marketing Expenses"
            barColor="rgb(121, 76, 138)"
          />
        </div>

        <div className="col-xl-4 ptb-15">
          <MiniLineChartWidget
            headline="Budgets"
            count="$5k"
            barBackground="transparent"
            barColor="#68B3C8"
            typeNames={["Budget A", "Budget B", "Budget C"]}
            typeCounts={["$2k", "$3k", "$1k"]}
          />
        </div>

        <div className="col-xl-4 ptb-15">
          <MiniLineChartWidget
            headline="Cost"
            count="$6k"
            barBackground="transparent"
            barColor="#E53935"
            typeNames={["Cost A", "Cost B", "Cost C"]}
            typeCounts={["$1.3k", "$3.5k", "$1.2k"]}
            chartData={[50, 19, 20, 81, 52, 65, 39, 58, 81, 56, 10, 71]}
          />
        </div>

        <div className="col-xl-4 ptb-15">
          <MiniLineChartWidget
            headline="Revenue"
            count="$200k"
            barBackground="transparent"
            barColor="#1B89FF"
            typeNames={["Before", "Current", "After"]}
            typeCounts={["$50k", "$30k", "$120k"]}
            chartData={[
              530,
              159,
              820,
              821,
              562,
              652,
              359,
              580,
              861,
              586,
              100,
              701
            ]}
          />
        </div>

        <div className="col-md-6 ptb-15">
          <SocialAnalyticsWidgets
            profile={people5}
            name={"Robert Michel"}
            position={"Team Leader"}
            banner={cover10}
            barBackground="transparent"
            info={"100+ new followers in this week..."}
            barColor="#FA7252"
            backgroundsList={["#007BFF", "#DC3545", "#FD7E14"]}
            hoverbackgroundsList={["#459FFF", "#E25966", "#FD953E"]}
            labels={["followings", "followers", "likes"]}
            chartData={[530, 159, 820]}
          />
        </div>

        <div className="col-md-6 ptb-15">
          <SocialAnalyticsWidgets
            profile={people10}
            name={"Peter England"}
            position={"Shop Keeper"}
            banner={cover9}
            barBackground="transparent"
            info={"100+ likes in this week..."}
            barColor="#FA7252"
            backgroundsList={["#FA7252", "#6200ea", "#f6a821"]}
            hoverbackgroundsList={["#FA8B71", "#7017EB", "#F6AF35"]}
            labels={["followings", "followers", "likes"]}
            chartData={[30, 69, 82]}
          />
        </div>

        <div className="col-md-6 ptb-15">
          <LargeBarWidget
            headline="Daily Progress"
            dataset={[
              {
                label: "Data 1",
                barBackground: "#FAD79A",
                barBorderColor: "#FAD79A",
                hoverBackgroundColor: "#f6a821",
                hoverBorderColor: "#f6a821",
                chartData: [
                  530,
                  159,
                  820,
                  821,
                  562,
                  652,
                  359,
                  580,
                  861,
                  586,
                  200,
                  701
                ]
              },
              {
                label: "Data 2",
                barBackground: "#E8E8E8",
                barBorderColor: "#E8E8E8",
                hoverBackgroundColor: "#68B3C8",
                hoverBorderColor: "#f6a821",
                chartData: [
                  550,
                  169,
                  720,
                  921,
                  462,
                  552,
                  359,
                  680,
                  761,
                  686,
                  300,
                  601
                ]
              }
            ]}
          />
        </div>

        <div className="col-md-6 ptb-15">
          <LargeBarWidget
            headline="Daily Events"
            dataset={[
              {
                label: "Data",
                barBackground: "#FDD8CF",
                barBorderColor: "#FA7252",
                hoverBackgroundColor: "#FA7252",
                chartData: [30, 19, 20, 81, 62, 62, 59, 50, 86, 58, 20, 71]
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartWidgets;
