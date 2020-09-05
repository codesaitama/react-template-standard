//  APP
import { Dashboard, Analytics, ECommerce, EmployeeInsert } from "views/app/index";

const dashboardRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/e-commerce", component: ECommerce },
  { path: "/analytics", component: Analytics },
  { path: "/insertemployee", component: EmployeeInsert }
];

export default dashboardRoutes;
