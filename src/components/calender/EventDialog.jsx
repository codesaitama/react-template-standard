import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import DatePicker from "react-datepicker";
import DatepickerWrapper from "components/forms/alldatepickers/datepicker.style";

const EventDialog = props => {
  const {
    className,
    modal,
    toggleModal,
    event,
    action,
    eventSubmitHandler,
    eventDeleteHandler
  } = props;
  const [title, setTitle] = useState(event ? event.title : "");
  const [desc, setDesc] = useState(
    event && event.hasOwnProperty("desc") ? event.desc : ""
  );
  const [start, setStart] = useState(event ? event.start : new Date());
  const [end, setEnd] = useState(event ? event.end : new Date());
  const [allDay, setAllDay] = useState(
    event ? (event.allDay ? "yes" : "no") : "no"
  );

  const eventHandler = e => {
    e.preventDefault();
    const data = {
      ...event,
      title,
      desc,
      start,
      end,
      allDay
    };
    eventSubmitHandler(data, action);
  };

  return (
    <div>
      <Modal
        centered
        isOpen={modal}
        toggle={() => toggleModal()}
        className={className}
      >
        <ModalBody>
          <div className="fs-20 bold-text text-center">
            {action === "add" ? "Add" : "Edit"} Event
          </div>
          <form onSubmit={eventHandler}>
            <div className="mb-10">
              <label className="fs-16 demi-bold-text">Title</label>
              <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                type="text"
                className="form-control react-form-input"
                placeholder="Enter Title"
              />
            </div>

            <div className="mb-10">
              <label className="fs-16 demi-bold-text">Start</label>
              <DatepickerWrapper {...props}>
                <DatePicker
                  selected={start}
                  onChange={date => setStart(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  timeCaption="time"
                  className="custom-datepicker"
                  calendarClassName="custom-calender-class"
                />
              </DatepickerWrapper>
            </div>

            <div className="mb-10">
              <label className="fs-16 demi-bold-text">End</label>
              <DatepickerWrapper {...props}>
                <DatePicker
                  selected={end}
                  onChange={date => setEnd(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  timeCaption="time"
                  className="custom-datepicker"
                  calendarClassName="custom-calender-class"
                />
              </DatepickerWrapper>
            </div>

            <div className="mb-10">
              <label className="fs-16 demi-bold-text">desc</label>
              <textarea
                value={desc}
                onChange={e => setDesc(e.target.value)}
                rows={4}
                style={{ resize: "none" }}
                type="text"
                className="form-control react-form-input"
                placeholder="Enter desc"
              />
            </div>
            <div className="alignment-radio">
              <div className="fs-16 demi-bold-text mb-10">All Day</div>
              <div className="pretty p-default p-curve">
                <input
                  type="radio"
                  name="Layout"
                  value="vertical"
                  onChange={() => setAllDay("yes")}
                  checked={allDay === "yes"}
                />
                <div className="state p-primary-o">
                  <label className="fs-16 demi-bold-text">Yes</label>
                </div>
              </div>
              <div className="pretty p-default p-curve">
                <input
                  type="radio"
                  name="Layout"
                  value="horizontal"
                  onChange={() => setAllDay("no")}
                  checked={allDay === "no"}
                />
                <div className="state p-primary-o">
                  <label className="fs-16 demi-bold-text">No</label>
                </div>
              </div>
            </div>
            <div className="flex-x align-center justify-content-end">
              <button
                disabled={title === ""}
                type="submit"
                className="c-btn c-success mt-15 fs-16 demi-bold-text mr-10"
              >
                Submit
              </button>
              {action === "edit" && (
                <button
                  onClick={() => eventDeleteHandler(event)}
                  type="button"
                  className="c-btn c-warning mt-15 fs-16 demi-bold-text"
                >
                  Delete
                </button>
              )}
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default EventDialog;
