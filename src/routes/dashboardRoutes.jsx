//  APP
import {
  Dashboard,
  Analytics,
  ECommerce,
  EmployeeInsert,
  QualificationSetup,
  TrainingProgramSetup,
  EmployeeEducationTrans
} from "views/app/index";

const dashboardRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/e-commerce", component: ECommerce },
  { path: "/analytics", component: Analytics },
  { path: "/insertemployee", component: EmployeeInsert },
  { path: "/qualification-setup", component: QualificationSetup },
  { path: "/trainingprogram-setup", component: TrainingProgramSetup },
  { path: "/employee-education", component: EmployeeEducationTrans }
];
//

export default dashboardRoutes;
