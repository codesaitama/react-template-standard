import React from "react";
import {
  CountChart,
  MarketStatistics,
  ProfitCard,
  MetricsWidget,
  PerformanceWidget,
  ProfileWidget,
  WeatherWidget,
  IncomeTable,
  CurrentStatisctics,
  TaskTracker,
  StockInfo
} from "components/widgets/analyticsdashboard";
import { IncomeData } from "util/data/analyticsDashboard";
import { TaskData } from "util/data/analyticsDashboard";
import { MinibarWidgets } from "components/widgets/chartwidgets";
import { LinearProgressWidget } from "components/widgets/statisticswidgets";

const Analytics = () => {
  return (
    <div>
      <div className="row ma-0">
        <div className="col-md-6 ptb-15">
          <CountChart
            icon="fas fa-chart-pie"
            title="Bandwidth Usage"
            subtitle="January 2020"
            displayText="50 GB"
            bgColor="#707cd2"
            chartType="line"
          />
        </div>
        <div className="col-md-6 ptb-15">
          <CountChart
            icon="fas fa-chart-pie"
            title="Bandwidth Usage"
            subtitle="January 2020"
            displayText="50 GB"
            bgColor="#ef4b4d"
          />
        </div>
      </div>
      <div className="row ma-0">
        <div className="col-md-4 ptb-15">
          <MetricsWidget
            cardTitle="Website Audience Metrics"
            count1="523,200"
            metric1="Page Views"
            count2="989,564"
            metric2="Bounce Rate"
            stackCount="39,554"
          />
          <div className="pt-30">
            <PerformanceWidget
              title="Total Performance"
              progress1="50"
              progressTitle1="Active User"
              progressCount1="1400"
              progress2="70"
              progressTitle2="Interactive User"
              progressCount2="3788"
            />
          </div>
          <div className="pt-30">
            <WeatherWidget
              weatherType="Stormy Evening"
              region="Moscow, Russia"
              currentTemperature={28}
              pastTime1="Yesterday"
              pastTemperature1="25"
              pastTime2="Tommorow"
              pastTemperature2="30"
            />
          </div>
          <div className="pt-30">
            <CurrentStatisctics
              block1={{
                title: "Monthly Profit",
                amount: "543",
                direction: "down",
                percent: "30%",
                color: "#77A361"
              }}
              block2={{
                title: "Monthly Visitor",
                amount: "865",
                direction: "up",
                percent: "56%",
                color: "#cd6889"
              }}
            />
          </div>
          <div className="pt-30">
            <MinibarWidgets
              headline="$ 510"
              subheader="Marketing Expenses"
              barColor="rgb(121, 76, 138)"
            />
          </div>
          <div className="pt-30">
            <LinearProgressWidget
              headline="Orders"
              subheader="Increase"
              progress="40"
              progressColor="#f6a821"
              info="40% Sales increase"
              background="#fff"
            />
          </div>
        </div>
        <div className="col-md-8 ptb-15">
          <div className="row">
            <div className="col-md-6">
              <MarketStatistics
                title="Sales Statistics"
                progressTitle1="Dashboard"
                progressCount1={70}
                progressTitle2="Charts"
                progressCount2={82}
              />
              <div className="pt-30">
                <ProfitCard
                  title1="Member Profit"
                  subTitle1="Weekly Profit"
                  profit1="+457.56"
                  title2="Total Profit"
                  subTitle2="Weekly Order"
                  profit2="+700.89"
                />
              </div>
            </div>
            <div className="col-md-6 profile-widget-res">
              <ProfileWidget
                name="Jonathan Mathew"
                designation="Developer"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                postCount={1854}
                followCount={1854}
                likeCount={1854}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 pt-30">
              <IncomeTable data={IncomeData} title="Most Recent Earnings" />
            </div>
            <div className="col-md-12 pt-30">
              <StockInfo
                section1={{
                  title: "Newly Listed",
                  amount: "43,126",
                  description: "20K in last 45 days.",
                  direction: "up",
                  percent: "18"
                }}
                section2={{
                  title: "Sold",
                  amount: "18,693",
                  description: "5.6K in last 45 days.",
                  direction: "down",
                  percent: "9"
                }}
              />
            </div>
            <div className="col-md-12 pt-30">
              <TaskTracker data={TaskData} title="Task Tracker" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
