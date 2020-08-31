export const sidebarData = [
  {
    type: "heading",
    name: "sidebar.app"
  },
  {
    name: "sidebar.dashboards",
    iconClass: "fas fa-chalkboard",
    child: [
      {
        listname: "sidebar.dashboard",
        routepath: "/dashboard",
        shortname: "DA"
      },
      {
        listname: "sidebar.analytics_dashboard",
        routepath: "/analytics",
        shortname: "AN",
        isNew: true
      },
      {
        listname: "sidebar.ecommerce_dashboard",
        routepath: "/e-commerce",
        shortname: "EC",
        isNew: true
      }
    ]
  },
  {
    name: "sidebar.calender",
    routepath: "/calender",
    iconClass: "far fa-calendar"
  },
  {
    name: "sidebar.filemanager",
    routepath: "/filemanager",
    iconClass: "far fa-folder-open"
  },
  {
    name: "sidebar.scrumboard",
    routepath: "/scrumboard",
    iconClass: "fas fa-clipboard-list"
  },
  {
    name: "sidebar.chat",
    routepath: "/chat",
    iconClass: "far fa-comment-alt"
  },
  {
    name: "sidebar.contact",
    routepath: "/contact",
    iconClass: "fas fa-users"
  },
  {
    name: "sidebar.todos",
    routepath: "/todos",
    iconClass: "fas fa-list-ol",
    isNew: true
  },
  {
    type: "heading",
    name: "sidebar.style&userinterface"
  },
  {
    name: "sidebar.colors",
    routepath: "/colors",
    iconClass: "fas fa-palette"
  },
  {
    name: "sidebar.icons",
    routepath: "/icons",
    iconClass: "fas fa-info-circle"
  },
  {
    name: "sidebar.typography",
    routepath: "/typography",
    iconClass: "fas fa-font"
  },
  {
    name: "sidebar.forms",
    iconClass: "fab fa-wpforms",
    child: [
      {
        listname: "sidebar.regularforms",
        routepath: "/regularform",
        shortname: "RE"
      },
      {
        listname: "sidebar.datepicker",
        routepath: "/datepicker",
        shortname: "DA"
      },
      {
        listname: "sidebar.validationforms",
        routepath: "/validationforms",
        shortname: "VA"
      },
      {
        listname: "sidebar.select",
        routepath: "/select",
        shortname: "SE"
      },
      {
        listname: "sidebar.selectcontrols",
        routepath: "/selectcontrols",
        shortname: "SE"
      }
    ]
  },
  {
    type: "heading",
    name: "sidebar.editors"
  },
  {
    name: "sidebar.quilleditor",
    routepath: "/quill-editor",
    iconClass: "fas fa-newspaper"
  },
  {
    name: "sidebar.roeeditor",
    routepath: "/roe-custom-editor",
    iconClass: "fas fa-newspaper"
  },
  {
    name: "sidebar.foreditor",
    routepath: "/for-editor",
    iconClass: "fas fa-newspaper"
  },
  {
    name: "sidebar.wysiwygeditor",
    routepath: "/wysiwyg-editor",
    iconClass: "fas fa-newspaper"
  },
  {
    type: "heading",
    name: "sidebar.pages"
  },
  {
    name: "sidebar.userprofile",
    routepath: "/profile",
    iconClass: "far fa-user"
  },
  {
    name: "sidebar.login",
    routepath: "/login",
    iconClass: "fas fa-sign-in-alt"
  },
  {
    name: "sidebar.register",
    routepath: "/register",
    iconClass: "far fa-registered"
  },
  {
    name: "sidebar.forgotpassword",
    routepath: "/forgotPassword",
    iconClass: "fas fa-unlock-alt"
  },
  {
    name: "sidebar.lockscreen",
    routepath: "/lockscreen",
    iconClass: "fas fa-user-lock"
  },
  {
    name: "sidebar.error",
    iconClass: "fas fa-exclamation-triangle",
    child: [
      {
        listname: "sidebar.400",
        routepath: "/error400",
        shortname: "400"
      },
      {
        listname: "sidebar.500",
        routepath: "/error500",
        shortname: "500"
      }
    ]
  },
  {
    name: "sidebar.pricing",
    iconClass: "fas fa-dollar-sign",
    child: [
      {
        listname: "sidebar.style1",
        routepath: "/pricing/style1",
        shortname: "ST"
      },
      {
        listname: "sidebar.style2",
        routepath: "/pricing/style2",
        shortname: "ST"
      }
    ]
  },
  {
    type: "heading",
    name: "sidebar.uicomponents"
  },
  {
    name: "sidebar.reactstrapcomponents",
    iconClass: "fab fa-react",
    child: [
      {
        listname: "sidebar.alerts",
        routepath: "/alerts",
        shortname: "AL"
      },
      {
        listname: "sidebar.badges",
        routepath: "/badge",
        shortname: "BA"
      },
      {
        listname: "sidebar.breadcrumbs",
        routepath: "/breadcrumbs",
        shortname: "BR"
      },
      {
        listname: "sidebar.buttons",
        routepath: "/buttons",
        shortname: "BU"
      },
      {
        listname: "sidebar.buttondropdown",
        routepath: "/button-dropdown",
        shortname: "BU"
      },
      {
        listname: "sidebar.buttongroup",
        routepath: "/button-group",
        shortname: "BU"
      },
      {
        listname: "sidebar.card",
        routepath: "/card",
        shortname: "CA"
      },
      {
        listname: "sidebar.carousel",
        routepath: "/carousel",
        shortname: "CA"
      },
      {
        listname: "sidebar.collapse",
        routepath: "/collapse",
        shortname: "CO"
      },
      {
        listname: "sidebar.dropdowns",
        routepath: "/dropdowns",
        shortname: "DR"
      },
      {
        listname: "sidebar.fade",
        routepath: "/fade",
        shortname: "FA"
      },
      {
        listname: "sidebar.form",
        routepath: "/form",
        shortname: "FO"
      },
      {
        listname: "sidebar.inputgroup",
        routepath: "/input-group",
        shortname: "IN"
      },
      {
        listname: "sidebar.jumbotron",
        routepath: "/jumbotron",
        shortname: "JU"
      },
      {
        listname: "sidebar.listgroup",
        routepath: "/listgroup",
        shortname: "LI"
      },
      {
        listname: "sidebar.media",
        routepath: "/media",
        shortname: "ME"
      },
      {
        listname: "sidebar.modals",
        routepath: "/modals",
        shortname: "MO"
      },
      {
        listname: "sidebar.navbar",
        routepath: "/navbar",
        shortname: "NA"
      },
      {
        listname: "sidebar.nav",
        routepath: "/navs",
        shortname: "NA"
      },
      {
        listname: "sidebar.pagination",
        routepath: "/pagination",
        shortname: "PA"
      },
      {
        listname: "sidebar.popovers",
        routepath: "/popovers",
        shortname: "PO"
      },
      {
        listname: "sidebar.progress",
        routepath: "/progress",
        shortname: "PR"
      },
      {
        listname: "sidebar.tables",
        routepath: "/tables",
        shortname: "TA"
      },
      {
        listname: "sidebar.tabs",
        routepath: "/tabs",
        shortname: "TA"
      },
      {
        listname: "sidebar.tooltips",
        routepath: "/tooltips",
        shortname: "TO"
      }
    ]
  },
  {
    name: "sidebar.custombuttons",
    routepath: "/custom-buttons",
    iconClass: "fab fa-btc"
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
    name: "sidebar.notifications",
    routepath: "/notifications",
    iconClass: "far fa-bell"
  },
  // {
  //     name: "sidebar.widgets",
  //     iconClass: "fas fa-chart-pie",
  //     routepath: "/widgets"
  // },
  {
    name: "sidebar.widgets",
    iconClass: "fas fa-chart-pie",
    child: [
      {
        listname: "sidebar.chartwidgets",
        routepath: "/chart-widgets",
        shortname: "CH"
      },
      {
        listname: "sidebar.socialwidgets",
        routepath: "/social-widgets",
        shortname: "SO"
      },
      {
        listname: "sidebar.blogwidgets",
        routepath: "/blog-widgets",
        shortname: "BL"
      },
      {
        listname: "sidebar.statisticswidgets",
        routepath: "/statistic-widgets",
        shortname: "ST"
      }
    ]
  },
  {
    name: "sidebar.charts",
    iconClass: "fas fa-chart-line",
    routepath: "/charts"
  },
  {
    type: "heading",
    name: "sidebar.others"
  },
  {
    name: "sidebar.tables",
    iconClass: "fas fa-table",
    child: [
      {
        listname: "sidebar.regulartabels",
        routepath: "/regulartabels",
        shortname: "RE"
      },
      {
        listname: "sidebar.reacttables",
        routepath: "/reacttables",
        shortname: "RE"
      }
    ]
  },
  {
    name: "sidebar.maps",
    iconClass: "fas fa-map-marker-alt",
    child: [
      {
        listname: "sidebar.googlemaps",
        routepath: "/google-maps",
        shortname: "GO"
      },
      {
        listname: "sidebar.tracking-vehicle",
        routepath: "/tracking-vehicle",
        shortname: "TR"
      }
    ]
  },
  {
    name: "sidebar.gauges",
    iconClass: "fas fa-toolbox",
    routepath: "/gauges"
  },
  {
    type: "heading",
    name: "sidebar.menuexamples"
  },
  {
    name: "sidebar.single",
    iconClass: "fab fa-stripe-s",
    routepath: "/single"
  },
  {
    name: "sidebar.onelevel",
    iconClass: "fas fa-expand",
    child: [
      {
        listname: "sidebar.example",
        routepath: "/ex",
        shortname: "Ex"
      }
    ]
  },
  {
    name: "sidebar.secondlevel",
    iconClass: "fas fa-expand",
    child: [
      {
        listname: "sidebar.example",
        iconClass: "fas fa-plus",
        child: [
          {
            listname: "sidebar.example1",
            routepath: "/ex1",
            shortname: "Ex"
          },
          {
            listname: "sidebar.example2",
            routepath: "/ex2",
            shortname: "Ex"
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
