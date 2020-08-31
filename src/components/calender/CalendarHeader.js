import React from 'react';
import RoyTooltip from "components/common/RoyTooltip";
import moment from 'moment';

  const CalendarHeader = (toolbar) => {
    const goToBack = () => {
      toolbar.date.setMonth(toolbar.date.getMonth() - 1);
      toolbar.onNavigate('prev');
    };
  
    const goToNext = () => {
      toolbar.date.setMonth(toolbar.date.getMonth() + 1);
      toolbar.onNavigate('next');
    };
  
    const goToCurrent = () => {
      const now = new Date();
      toolbar.date.setMonth(now.getMonth());
      toolbar.date.setYear(now.getFullYear());
      toolbar.onNavigate('current');
    };
  
    const label = () => {
      const date = moment(toolbar.date);
      return (
        <span><b>{date.format('MMMM')}</b><span> {date.format('YYYY')}</span></span>
      );
    };

    return (
        <div className="calender-toolbar-container">
             <div className="filter-container">
                 <div className="flex-1 fs-20 bold-text title">
                    <span className="hash fs-20 bold-text"># </span> Big Calender
                 </div>
                <RoyTooltip id={`today`} title={"Today"} placement="bottom">
                    <button id={`today`} className="btn btn-back" onClick={goToCurrent}>
                        <i className="material-icons taskboardicons--text">
                            today
                        </i>
                    </button>
                </RoyTooltip>
                <RoyTooltip id={`month`} title={"Month"} placement="bottom">
                    <button id={`month`} className="btn btn-back" onClick={() => toolbar.onView('month')}>
                        <i className="material-icons taskboardicons--text">
                            view_module
                        </i>
                    </button>
                </RoyTooltip>
                <RoyTooltip id={`week`} title={"Week"} placement="bottom">
                    <button id={`week`} className="btn btn-back" onClick={() => toolbar.onView('week')}>
                        <i className="material-icons taskboardicons--text">
                            view_week
                        </i>
                    </button>
                </RoyTooltip>
                <RoyTooltip id={`workweek`} title={"Work Week"} placement="bottom">
                    <button id={`workweek`} className="btn btn-back" onClick={() => toolbar.onView('work_week')}>
                        <i className="material-icons taskboardicons--text">
                            view_array
                        </i>
                    </button>
                </RoyTooltip>
                <RoyTooltip id={`day`} title={"Day"} placement="bottom">
                    <button id={`day`} className="btn btn-back" onClick={() => toolbar.onView('day')}>
                        <i className="material-icons taskboardicons--text">
                            view_day
                        </i>
                    </button>
                </RoyTooltip>
                <RoyTooltip id={`agenda`} title={"Agenda"} placement="bottom">
                    <button id={`agenda`} className="btn btn-back" onClick={() => toolbar.onView('agenda')}>
                        <i className="material-icons taskboardicons--text">
                            view_agenda
                        </i>
                    </button>
                </RoyTooltip>
            </div>
            <div className="navigation-buttons">
                <div>
                <RoyTooltip id={`previous`} title={"Previous"} placement="bottom">
                    <button id={`previous`} className="btn btn-back" onClick={goToBack}>
                        <i className="fas fa-backward"></i>
                    </button>
                </RoyTooltip>
                </div>
                <div className='label-date'>{label()}</div>
                <div>
                <RoyTooltip id={`next`} title={"Next"} placement="bottom">
                    <button id={`next`} className="btn btn-next" onClick={goToNext}>
                        <i className="fas fa-forward"></i>
                    </button>
                </RoyTooltip>
                </div>
            </div>
        </div >
    );
  };
export default CalendarHeader;