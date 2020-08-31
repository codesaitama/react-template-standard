//  APP
import {
  Chat,
  Dashboard,
  Contact,
  Scrumboard,
  Calender,
  FileManager,
  Todos,
  Analytics,
  ECommerce
} from "views/app/index";
import Board from "components/scrumboard/Board";

// STYLE & USER INTERFACE

import {
  Colors,
  Icon,
  Typography,
  Themes
} from "views/style&userinterface/index";

import {
  Datepicker,
  RegularForm,
  ValidationForm,
  Select,
  SelectControls
} from "views/style&userinterface/forms/index";

//  PAGES

import { UserProfile } from "views/pages/index";

// Example

import Example from "views/example/Example";

// UI COMPONENTS

import {
  Alerts,
  Buttons,
  GridSystem,
  Charts,
  Notifications
} from "views/uicomponents/index";

// Widgets

import {
  SocialWidgets,
  ChartWidgets,
  BlogWidgets,
  StatisticsWidgets
} from "views/uicomponents/widgets/index";

// OTHERS

import {
  Guages,
  ReactTables,
  RegularTables,
  GoogleMaps,
  VehicleTracking
} from "views/others/index";

import {
  Wysiwyg,
  RoeCustomEditor,
  Quill,
  ForEditor
} from "views/editors/index";

// React Strap Component Route

import NavsPage from "views/reactStrapComponent/NavsPage";
import NavbarPage from "views/reactStrapComponent/NavbarPage";
import BreadcrumbsPage from "views/reactStrapComponent/BreadcrumbsPage";
import ButtonsPage from "views/reactStrapComponent/ButtonsPage";
import ButtonGroupPage from "views/reactStrapComponent/ButtonGroupPage";
import ButtonDropdownPage from "views/reactStrapComponent/ButtonDropdownPage";
import DropdownsPage from "views/reactStrapComponent/DropdownsPage";
import FadePage from "views/reactStrapComponent/FadePage";
import FormPage from "views/reactStrapComponent/FormPage";
import InputGroupPage from "views/reactStrapComponent/InputGroupPage";
import PopoversPage from "views/reactStrapComponent/PopoversPage";
import ProgressPage from "views/reactStrapComponent/ProgressPage";
import TooltipsPage from "views/reactStrapComponent/TooltipsPage";
import BadgePage from "views/reactStrapComponent/BadgePage";
import MediaPage from "views/reactStrapComponent/MediaPage";
import ModalsPage from "views/reactStrapComponent/ModalsPage";
import CardPage from "views/reactStrapComponent/CardPage";
import TablesPage from "views/reactStrapComponent/TablesPage";
import PaginationPage from "views/reactStrapComponent/PaginationPage";
import TabsPage from "views/reactStrapComponent/TabsPage";
import JumbotronPage from "views/reactStrapComponent/JumbotronPage";
import AlertsPage from "views/reactStrapComponent/AlertsPage";
import CollapsePage from "views/reactStrapComponent/CollapsePage";
import CarouselPage from "views/reactStrapComponent/CarouselPage";
import ListGroupPage from "views/reactStrapComponent/ListGroupPage";
import SpinnersPage from "views/reactStrapComponent/SpinnersPage";

const dashboardRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/e-commerce", component: ECommerce },
  { path: "/analytics", component: Analytics },
  { path: "/chat", component: Chat },
  { path: "/contact", component: Contact },
  { path: "/todos", component: Todos },
  { path: "/scrumboard", component: Scrumboard },
  { path: "/filemanager", component: FileManager },
  { path: "/calender", component: Calender },
  { path: "/scrumboard/board/:id", component: Board },
  { path: "/charts", component: Charts },
  { path: "/gauges", component: Guages },
  // page route
  { path: "/profile", component: UserProfile },
  // Form Route
  { path: "/datepicker", component: Datepicker },
  { path: "/regularform", component: RegularForm },
  { path: "/validationforms", component: ValidationForm },
  { path: "/select", component: Select },
  { path: "/selectcontrols", component: SelectControls },
  // Tables Route
  { path: "/reacttables", component: ReactTables },
  { path: "/regulartabels", component: RegularTables },
  // Components Route
  { path: "/alert", component: Alerts },
  { path: "/custom-buttons", component: Buttons },
  { path: "/gridsystem", component: GridSystem },
  { path: "/icons", component: Icon },
  { path: "/notifications", component: Notifications },
  { path: "/typography", component: Typography },

  // Widgets
  { path: "/social-widgets", component: SocialWidgets },
  { path: "/chart-widgets", component: ChartWidgets },
  { path: "/blog-widgets", component: BlogWidgets },
  { path: "/statistic-widgets", component: StatisticsWidgets },

  // ReactStrap Components

  { path: "/breadcrumbs", component: BreadcrumbsPage },
  { path: "/buttons", component: ButtonsPage },
  { path: "/button-group", component: ButtonGroupPage },
  { path: "/button-dropdown", component: ButtonDropdownPage },
  { path: "/dropdowns", component: DropdownsPage },
  { path: "/fade", component: FadePage },
  { path: "/form", component: FormPage },
  { path: "/input-group", component: InputGroupPage },
  { path: "/popovers", component: PopoversPage },
  { path: "/progress", component: ProgressPage },
  { path: "/tooltips", component: TooltipsPage },
  { path: "/badge", component: BadgePage },
  { path: "/card", component: CardPage },
  { path: "/tables", component: TablesPage },
  { path: "/modals", component: ModalsPage },
  { path: "/navs", component: NavsPage },
  { path: "/navbar", component: NavbarPage },
  { path: "/media", component: MediaPage },
  { path: "/pagination", component: PaginationPage },
  { path: "/tabs", component: TabsPage },
  { path: "/alerts", component: AlertsPage },
  { path: "/jumbotron", component: JumbotronPage },
  { path: "/collapse", component: CollapsePage },
  { path: "/carousel", component: CarouselPage },
  { path: "/listgroup", component: ListGroupPage },
  { path: "/spinners", component: SpinnersPage },

  // Maps

  { path: "/google-maps", component: GoogleMaps },
  { path: "/tracking-vehicle", component: VehicleTracking },

  // Style & User Interface

  { path: "/colors", component: Colors },
  { path: "/themes", component: Themes },

  // Editors
  { path: "/wysiwyg-editor", component: Wysiwyg },
  { path: "/roe-custom-editor", component: RoeCustomEditor },
  { path: "/quill-editor", component: Quill },
  { path: "/for-editor", component: ForEditor },

  // Example

  { path: "/single", component: Example },
  { path: "/ex", component: Example },
  { path: "/ex1", component: Example },
  { path: "/ex2", component: Example }
];

export default dashboardRoutes;
