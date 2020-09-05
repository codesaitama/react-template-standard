import React from "react";
import { TaskWidget } from "components/widgets/taskWidget/TaskWidget";
import { taskData } from "util/data/taskData";
import PageviewsChartWidget from "components/widgets/pageviewsChartWidget/PageviewsChartWidget";
import AnalyticsProcessWidgets from "components/widgets/analyticsProcessWidgets/AnalyticsProcessWidgets";
import { MiniLineBackgroundWidget, BottomCardLinechartWidget, BottomCardLinechartSecondWidget, MyBalanceWidget,
  SalePrediction, UserInfoDoughnutWidget, MiniLineChartWidget } from "components/widgets/chartwidgets";

import LatestActivity from "components/widgets/latestactivity/LatestActivity";

import { LinearProgressWidget } from "components/widgets/statisticswidgets";

const Dashboard = ({ sidebarTheme, layoutTheme }) => {

  layoutTheme = {}
  layoutTheme.themeName = 'theme6';

  return (
    <div>
      <div>
        <div className="row ma-0">
          <div className="col-12 col-xl-8 col-lg-12 col-md-12 col-sm-12 ptb-15">
            <PageviewsChartWidget sidebarTheme={sidebarTheme} />
          </div>

          <div className="col-12 col-xl-4 col-lg-12 col-md-12 col-sm-12 ptb-15">
            <AnalyticsProcessWidgets sidebarTheme={sidebarTheme} />
          </div>
        </div>
        <div className="row ma-0">
          <div className="col-12 col-xl-4 col-lg-12 col-md-12 col-sm-12 ptb-15">
            <LatestActivity />
          </div>
          <div className="col-12 col-xl-8 col-lg-12 col-md-12 col-sm-12 ptb-15">
            <div className="row ma-0">
              <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 pl-0 padding-r-0 pb-15">
                <BottomCardLinechartWidget
                  headline="Total Expense"
                  subheader="154.12K"
                  progress="+1.97%"
                />
              </div>

              <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 pr-0 pb-15 padding-l-0 padding-t-15">
                <BottomCardLinechartSecondWidget
                  headline="Total Profit"
                  subheader="194.62K"
                  progress="+1.19%"
                />
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 pt-15 pl-0 padding-r-0 padding-b-15">
                <MiniLineBackgroundWidget
                  headline="Total Expenses"
                  count="$650"
                  barBackground="#FAD79A"
                  barColor="#f6a821"
                  chartData={[56, 18, 30, 61, 92, 35, 59, 57, 71, 96, 20, 30]}
                />
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 pt-15 pr-0 padding-l-0 padding-t-15">
                <MiniLineBackgroundWidget
                  headline="Total Budgets"
                  count="$65k"
                  barBackground="#FDD8CF"
                  barColor="#FA7252"
                  chartData={[78, 30, 10, 20, 40, 55, 39, 78, 81, 76, 20, 31]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row ma-0">
          <div className="col-12 col-xl-4 col-lg-6 col-md-6 col-sm-12 ptb-15">
            <MyBalanceWidget />
          </div>
          <div className="col-12 col-xl-8 col-lg-6 col-md-6 col-sm-12 ptb-15">
            <TaskWidget taskData={taskData} />
          </div>
        </div>
        <div className="row ma-0">
          <div className="col-12 col-xl-6 col-lg-12 col-md-12 col-sm-12 ptb-15">
            <SalePrediction />
          </div>
          <div className="col-12 col-xl-6 col-lg-12 col-md-12 col-sm-12 ptb-15">
            <UserInfoDoughnutWidget />
          </div>
        </div>
        <div className="row ma-0">
          <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
            <LinearProgressWidget
              headline="$5,786"
              subheader="Income"
              progress="30"
              progressColor="#1D2B64"
              info="30% Income increase"
              dark={layoutTheme.themeName === "theme6" ? true : false}
              background={ layoutTheme.themeName === "theme6" ? "rgba(68,70,79,0.5)" : "#fff" }
            />
          </div>

          <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
            <LinearProgressWidget
              headline="$2,000"
              subheader="Expenses"
              progress="50"
              progressColor="#1FA2FF"
              info="50% Expenses increase"
              dark={layoutTheme.themeName === "theme6" ? true : false}
              background={ layoutTheme.themeName === "theme6" ? "rgba(68,70,79,0.5)" : "#fff" }
            />
          </div>

          <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
            <LinearProgressWidget
              headline="$5,333"
              subheader="Spendings"
              progress="45"
              progressColor="#614385"
              info="45% Spendings increase"
              dark={layoutTheme.themeName === "theme6" ? true : false}
              background={ layoutTheme.themeName === "theme6" ? "rgba(68,70,79,0.5)" : "#fff" }
            />
          </div>

          <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
            <LinearProgressWidget
              headline="$32,333"
              subheader="Totals"
              progress="37"
              progressColor="#3D7EAA"
              info="37% Totals increase"
              dark={layoutTheme.themeName === "theme6" ? true : false}
              background={ layoutTheme.themeName === "theme6" ? "rgba(68,70,79,0.5)" : "#fff" }
            />
          </div>
        </div>
        <div className="row ma-0">
          <div className="col-md-6 ptb-15">
            <MiniLineChartWidget
              headline="Company Cost"
              count="$7k"
              barBackground="transparent"
              barColor="#68B3C8"
              typeNames={["Design", "CMS", "QA"]}
              typeCounts={["$2k", "$3k", "$1k"]}
            />
          </div>
          <div className="col-md-6 ptb-15">
            <MiniLineChartWidget
              headline="Budgets"
              count="$7k"
              barBackground="transparent"
              barColor="#5C258D"
              typeNames={["Budget1", "Budget2", "Budget3"]}
              typeCounts={["$2k", "$3k", "$1k"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Dashboard;
