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
            shortname: "EA",
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
  },
  {
    name: "sidebar.qualificationandskill",
    iconClass: "fas fa-users",
    child: [
      {
        listname: "sidebar.setup",
        shortname: "EU",
        iconClass: "fas fa-balance-scale",
        isNew: false,
        child: [
          {
            listname: "sidebar.qualification",
            routepath: "/qualification-setup",
            shortname: "QS",
            isNew: false
          },
          {
            listname: "sidebar.trainingprogram",
            routepath: "/trainingprogram-setup",
            shortname: "TP",
            isNew: false
          }
        ]
      },
      {
        listname: "sidebar.transaction",
        shortname: "EU",
        iconClass: "fas fa-balance-scale",
        isNew: false,
        child: [
          {
            listname: "sidebar.employeeeducation",
            routepath: "/employee-education",
            shortname: "EE",
            isNew: false
          },
          {
            listname: "sidebar.employeetraining",
            routepath: "/employee-training",
            shortname: "ET",
            isNew: false
          }
        ]
      }
    ]
  }
];

export const HorizontalSidebarData = [...sidebarData];
