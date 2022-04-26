// import React from 'react'
// import { Calendar } from '@fullcalendar/core';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import listPlugin from '@fullcalendar/list';
// function CalenderProject() {
//     let calendar = new Calendar(calendarEl, {
//         plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
//         initialView: 'dayGridMonth',
//         headerToolbar: {
//           left: 'prev,next today',
//           center: 'title',
//           right: 'dayGridMonth,timeGridWeek,listWeek'
//         }
//       });
// }

// export default CalenderProject

import React from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import allLocales from "@fullcalendar/core/locales-all";
import "./CalenderProject.css";

import FilterCalender from "./FilterCalender";
import moment from "moment";
import AddJob from "../../../components/Form/AddJob/AddJob";
export default class CalenderProject extends React.Component {
  constructor() {
    super();
    this.calenderRef = React.createRef(null);
  }
  state = {
    weekendsVisible: true,
    currentEvents: [],
  };

  onEventAdded = (event) => {
    let calenderApi = this.calenderRef.current.getApi();
    calenderApi.addEvent(event);
    console.log("event",event);
  };

  async handleEventAdd(data) {
    //axios.post("url",data.event)
  }
  async handleDateSet(data) {
    // const response = await axios.get("url",moment(date.start).toString()+"&end="+moment(date.end).toString())
    // this.setState(response.data)
  }
  render() {
    return (
      <div className="demo-app">
{/* <AddJob onEventAdded={event=>this.onEventAdded(event)} /> */}
        {/* {this.renderSidebar()} */}
        <div className="demo-app-main">
          <FullCalendar
            ref={this.calenderRef} 
            initialView="dayGridMonth"
            locales={allLocales}
            locale="fa"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            columnHeader={false}
           
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            events={this.events}
            eventAdd={(event) => this.handleEventAdd(event)}
            datesSet={(date) => this.handleDateSet(date)}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
            //css class
            color
            eventColor="red"
          />
        </div>

        <div
          className="demo-app-left"
          style={{ marginRight: "16px", borderRadius: "16px" }}
        >
          <FilterCalender />
        </div>



        
     {/* <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="md"
      >
             <AddJob onClick={handleClose}/>
      </Dialog> */}


      </div>



    );
  }

  //   renderSidebar() {
  //     return (
  //       <div className='demo-app-sidebar'>
  //         <div className='demo-app-sidebar-section'>
  //           <h2>Instructions</h2>
  //           <ul>
  //             <li>Select dates and you will be prompted to create a new event</li>
  //             <li>Drag, drop, and resize events</li>
  //             <li>Click an event to delete it</li>
  //           </ul>
  //         </div>
  //         <div className='demo-app-sidebar-section'>
  //           <label>
  //             <input
  //               type='checkbox'
  //               checked={this.state.weekendsVisible}
  //               onChange={this.handleWeekendsToggle}
  //             ></input>
  //             toggle weekends
  //           </label>
  //         </div>
  //         <div className='demo-app-sidebar-section'>
  //           <h2>All Events ({this.state.currentEvents.length})</h2>
  //           <ul >
  //             {this.state.currentEvents.map(renderSidebarEvent)}
  //           </ul>
  //         </div>
  //       </div>
  //     )
  //   }

  // handleWeekendsToggle = () => {
  //   this.setState({
  //     weekendsVisible: !this.state.weekendsVisible,
  //   });
  // };

  handleDateSelect = (selectInfo) => {
    //add line in table
    let title = prompt("لطفا نام ایونت خود را انتخاب کنید");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
    console.log("calendarApi", calendarApi);
  };

  handleEventClick = (clickInfo) => {
    if (
      window.confirm(
        `آیا شما میخواهید این ایونت را حذف کنید؟ '${clickInfo.event.title}'`,
      )
    ) {
      clickInfo.event.remove();
    }
    // alert(clickInfo)
  };

  handleEvents = (events) => {
    this.setState({
      currentEvents: events,
    });
  };
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

// function renderSidebarEvent(event) {
//   console.log(event);
//   return (
//     <li key={event.id}>
//       <b>
//         {formatDate(event.start, {
//           year: "numeric",
//           month: "short",
//           day: "numeric",
//         })}
//       </b>
//       <i>{event.title}</i>
//     </li>
//   );
// }
