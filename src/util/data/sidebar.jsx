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
        child:[
          {
            listname: "sidebar.employeeinsert",
            routepath: "/insertemployee",
            shortname: "EU",
            isNew: false,
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

export const HorizontalSidebarData = [
  {
    name: "sidebar.app",
    iconClass: "fas fa-chalkboard-teacher",
    child: [
      {
        name: "sidebar.dashboard",
        routepath: "/dashboard"
      },
      {
        name: "sidebar.contact",
        routepath: "/contact"
      },
      {
        name: "sidebar.chat",
        routepath: "/chat"
      },
      {
        name: "sidebar.calender",
        routepath: "/calender"
      },
      {
        name: "sidebar.scrumboard",
        routepath: "/scrumboard"
      }
    ]
  },
  {
    name: "sidebar.widgets",
    iconClass: "fas fa-chart-pie",
    child: [
      {
        name: "sidebar.chartwidgets",
        routepath: "/chart-widgets"
      },
      {
        name: "sidebar.socialwidgets",
        routepath: "/social-widgets"
      },
      {
        name: "sidebar.blogwidgets",
        routepath: "/blog-widgets"
      },
      {
        name: "sidebar.statisticswidgets",
        routepath: "/statistic-widgets"
      }
    ]
  },
  {
    name: "sidebar.pages",
    iconClass: "far fa-file-alt",
    child: [
      {
        name: "sidebar.userpages",
        child: [
          {
            name: "sidebar.userprofile",
            routepath: "/profile"
          },
          {
            name: "sidebar.login",
            routepath: "/login"
          },
          {
            name: "sidebar.register",
            routepath: "/register"
          },
          {
            name: "sidebar.forgotpassword",
            routepath: "/forgotpassword"
          },
          {
            name: "sidebar.lockscreen",
            routepath: "/lockscreen"
          }
        ]
      },
      {
        name: "sidebar.errorpages",
        child: [
          {
            name: "sidebar.400",
            routepath: "/error400"
          },
          {
            name: "sidebar.500",
            routepath: "/error500"
          }
        ]
      },
      {
        name: "sidebar.pricingpages",
        child: [
          {
            name: "sidebar.style1",
            routepath: "/pricing/style1"
          },
          {
            name: "sidebar.style2",
            routepath: "/pricing/style2"
          }
        ]
      },
      {
        name: "sidebar.style&userinterface",
        child: [
          {
            name: "sidebar.colors",
            routepath: "/colors"
          },
          {
            name: "sidebar.icons",
            routepath: "/icons"
          },
          {
            name: "sidebar.typography",
            routepath: "/typography"
          },
          {
            name: "sidebar.themes",
            routepath: "/themes"
          }
        ]
      }
    ]
  },
  {
    name: "sidebar.uicomponents",
    iconClass: "fab fa-react",
    child: [
      {
        name: "sidebar.basicelement1",
        child: [
          {
            name: "sidebar.alerts",
            routepath: "/alerts"
          },
          {
            name: "sidebar.badges",
            routepath: "/badge"
          },
          {
            name: "sidebar.breadcrumbs",
            routepath: "/breadcrumbs"
          },
          {
            name: "sidebar.buttons",
            routepath: "/buttons"
          },
          {
            name: "sidebar.buttondropdown",
            routepath: "/button-dropdown"
          },
          {
            name: "sidebar.buttongroup",
            routepath: "/button-group"
          },
          {
            name: "sidebar.popovers",
            routepath: "/popovers"
          },
          {
            name: "sidebar.progress",
            routepath: "/progress"
          }
        ]
      },
      {
        name: "sidebar.basicelement2",
        child: [
          {
            name: "sidebar.card",
            routepath: "/card"
          },
          {
            name: "sidebar.form",
            routepath: "/form"
          },
          {
            name: "sidebar.inputgroup",
            routepath: "/input-group"
          },
          {
            name: "sidebar.dropdowns",
            routepath: "/dropdowns"
          },
          {
            name: "sidebar.fade",
            routepath: "/fade"
          },
          {
            name: "sidebar.navbar",
            routepath: "/navbar"
          },
          {
            name: "sidebar.nav",
            routepath: "/navs"
          }
        ]
      },
      {
        name: "sidebar.advanceelement",
        child: [
          {
            name: "sidebar.collapse",
            routepath: "/collapse"
          },
          {
            name: "sidebar.carousel",
            routepath: "/carousel"
          },
          {
            name: "sidebar.pagination",
            routepath: "/pagination"
          },
          {
            name: "sidebar.notifications",
            routepath: "/notifications",
            iconClass: "far fa-bell"
          },
          {
            name: "sidebar.gridsystem",
            routepath: "/gridsystem",
            iconClass: "fas fa-th-large"
          },
          {
            name: "sidebar.sweetalert",
            routepath: "/alert",
            iconClass: "fas fa-exclamation"
          },
          {
            name: "sidebar.custombuttons",
            routepath: "/custom-buttons",
            iconClass: "fab fa-btc"
          }
        ]
      },
      {
        name: "sidebar.others",
        child: [
          {
            name: "sidebar.jumbotron",
            routepath: "/jumbotron"
          },
          {
            name: "sidebar.listgroup",
            routepath: "/listgroup"
          },
          {
            name: "sidebar.media",
            routepath: "/media"
          },
          {
            name: "sidebar.modals",
            routepath: "/modals"
          },
          {
            name: "sidebar.tables",
            routepath: "/tables"
          },
          {
            name: "sidebar.tabs",
            routepath: "/tabs"
          },
          {
            name: "sidebar.tooltips",
            routepath: "/tooltips"
          }
        ]
      }
    ]
  },
  {
    name: "sidebar.others",
    child: [
      {
        name: "sidebar.tables",
        child: [
          {
            name: "sidebar.regulartabels",
            routepath: "/regulartabels"
          },
          {
            name: "sidebar.reacttables",
            routepath: "/reacttables"
          }
        ]
      },
      {
        name: "sidebar.forms",
        child: [
          {
            name: "sidebar.regularforms",
            routepath: "/regularform"
          },
          {
            name: "sidebar.datepicker",
            routepath: "/datepicker"
          },
          {
            name: "sidebar.validationforms",
            routepath: "/validationforms"
          },
          {
            name: "sidebar.select",
            routepath: "/select"
          },
          {
            name: "sidebar.selectcontrols",
            routepath: "/selectcontrols"
          }
        ]
      },
      {
        name: "sidebar.maps",
        child: [
          {
            name: "sidebar.googlemaps",
            routepath: "/google-maps"
          },
          {
            name: "sidebar.tracking-vehicle",
            routepath: "/tracking-vehicle"
          }
        ]
      },
      {
        name: "sidebar.others",
        child: [
          {
            name: "sidebar.charts",
            routepath: "/charts"
          },
          {
            name: "sidebar.gauges",
            routepath: "/gauges"
          },
          {
            name: "sidebar.quilleditor",
            routepath: "/quill-editor"
          },
          {
            name: "sidebar.roeeditor",
            routepath: "/roe-custom-editor"
          },
          {
            name: "sidebar.foreditor",
            routepath: "/for-editor"
          },
          {
            name: "sidebar.wysiwygeditor",
            routepath: "/wysiwyg-editor"
          }
        ]
      }
    ]
  }
];
