//  APP
import {
  Dashboard,
  Analytics,
  ECommerce,
  EmployeeInsert,
  QualificationSetup,
  TrainingProgramSetup
} from "views/app/index";

const dashboardRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/e-commerce", component: ECommerce },
  { path: "/analytics", component: Analytics },
  { path: "/insertemployee", component: EmployeeInsert },
  { path: "/qualification-setup", component: EmployeeInsert },
  { path: "/trainingprogram-setup", component: EmployeeInsert }
];

export default dashboardRoutes;
