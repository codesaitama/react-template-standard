export const sidebarData = [
  {
    type: "heading",
    name: "sidebar.app"
  },

  {
    name: "sidebar.home",
    iconClass: "fas fa-laptop",
    child: [
      {
        listname: "sidebar.dashboard",
        routepath: "/dashboard",
        shortname: "DA",
        isNew: false
      },
      {
        listname: "sidebar.analytics_dashboard",
        routepath: "/analytics",
        shortname: "AN",
        isNew: true
      }
    ]
  },

  {
    name: "sidebar.employee",
    iconClass: "fas fa-users",
    child: [
      {
        listname: "sidebar.transaction",
        shortname: "EU",
        iconClass: "fas fa-balance-scale",
        isNew: false,
        child: [
          {
            listname: "sidebar.employeeinsert",
            routepath: "/insertemployee",
            shortname: "EU",
            isNew: false
          },
          {
            listname: "sidebar.employeemovement",
            routepath: "/employeemovement",
            shortname: "EM",
            isNew: false
          }
        ]
      }
    ]
  }
];

export const HorizontalSidebarData = [];
