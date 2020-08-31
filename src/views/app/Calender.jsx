import React, { useState, useEffect } from "react";
import PageTitle from "components/common/PageTitle";
import { connect } from "react-redux";
import {
  Calendar as BigCalendar,
  // DateLocalizer,
  momentLocalizer,
  // globalizeLocalizer,
  // move,
  Views
  // Navigate,
  // components,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";
import CalendarHeader from "components/calender/CalendarHeader";
import CalenderWrapper from "components/calender/calender.style";
import dummyEvents from "components/calender/events";
import EventDialog from "./../../components/calender/EventDialog";

const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(BigCalendar);
let allViews = Object.keys(Views).map(k => Views[k]);

const Calender = props => {
  const [modal, setModal] = useState(false);
  const [action, setAction] = useState("add");
  const [modalEvent, setmodalEvent] = useState(null);
  const [events, setEvents] = useState(dummyEvents);

  useEffect(() => {
    if (!modal) {
      setmodalEvent(null);
    }
  }, [modal]);

  useEffect(() => {
    if (modalEvent) {
      setModal(true);
    }
  }, [modalEvent]);

  const updateEvent = data => {
    const allEvents = [...events];
    let index = allEvents.findIndex(event => event.id === data.id);
    allEvents.splice(index, 1, data);
    setEvents([...allEvents]);
  };

  const moveEvent = ({ event, start, end }) => {
    const data = {
      ...event,
      start,
      end
    };
    updateEvent(data);
  };

  const resizeEvent = ({ event, start, end }) => {
    const data = {
      ...event,
      start,
      end
    };
    updateEvent(data);
  };

  // const handleNavigate = (e) => {
  //     console.log('handleNavigate', e)
  // }

  const eventSubmitHandler = (data, action) => {
    if (action === "add") {
      setEvents(pre => [...pre, data]);
    } else if (action === "edit") {
      updateEvent(data);
    }
    setModal(false);
  };

  const eventDeleteHandler = data => {
    const allEvents = [...events];
    let index = allEvents.findIndex(event => event.id === data.id);
    allEvents.splice(index, 1);
    setEvents([...allEvents]);
    setModal(false);
  };

  return (
    <CalenderWrapper {...props} className="calender-app">
      <PageTitle
        title="sidebar.calender"
        className="plr-15"
        breadCrumb={[
          {
            name: "sidebar.app"
          },
          {
            name: "sidebar.calender"
          }
        ]}
      />
      <div className="roe-card-style mt-15 mb-30 mlr-15 mobile-spacing-class no-box-container">
        <div
          className="roe-card-body pb-15 plr-0"
          style={{ backgroundColor: "white", borderRadius: "6px" }}
        >
          <DragAndDropCalendar
            className="flex flex-1 container"
            selectable
            localizer={localizer}
            events={events}
            onEventDrop={moveEvent}
            resizable
            onEventResize={resizeEvent}
            defaultView={Views.MONTH}
            defaultDate={new Date(2019, 3, 1)}
            startAccessor="start"
            endAccessor="end"
            views={allViews}
            step={60}
            showMultiDayTimes
            components={{
              toolbar: CalendarHeader
            }}
            // onNavigate={handleNavigate}
            onSelectEvent={event => {
              setAction("edit");
              setmodalEvent(event);
            }}
            onSelectSlot={slotInfo => {
              setAction("add");
              setmodalEvent(slotInfo);
            }}
          />
        </div>
      </div>
      {modal && (
        <EventDialog
          {...props}
          modal={modal}
          toggleModal={() => setModal(!modal)}
          event={modalEvent}
          action={action}
          eventSubmitHandler={eventSubmitHandler}
          eventDeleteHandler={eventDeleteHandler}
        />
      )}
    </CalenderWrapper>
  );
};

const mapStateToProps = state => {
  return {
    ...state.themeChanger,
    themeSetting: {
      toolbarDisplayValue: state.themeSetting.toolbarDisplayValue,
      footerDisplayValue: state.themeSetting.footerDisplayValue
    }
  };
};

export default connect(
  mapStateToProps,
  null
)(Calender);
