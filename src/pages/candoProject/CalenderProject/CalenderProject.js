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
import AddJob from "../../../components/Form/JobUser/AddJob";
import { Dialog } from "@material-ui/core";
import axios from "axios";
// import moment from "moment";
import moment from "jalali-moment";
import { axiosInstance } from "../../api/axios";
export default class CalenderProject extends React.Component {
  constructor() {
    super();
    this.calenderRef = React.createRef(null);
  }
  state = {
    weekendsVisible: true,
    currentEvents: [],
    open:true,
    events:[
      { title: 'event 1', start: '2022-06-11' , end:"2022-06-18" },
      { title: 'event 2', date: '2022-06-13' }
    ],
    days:[]

  };

  
  handleClose = () => {
    this.setState({
      open:false
    });
  };
  
  onEventAdded = async(event) => {


    const token = localStorage.getItem("id_token")
    console.log("data.event bar",event);
    const title= event.title
    // const fromDate =event.fromDate
    const fromDate = moment(event.fromDate).locale('fa').format('YYYY/MM/DD')
    console.log(fromDate);
    const toDate = moment(event.toDate).locale('fa').format('YYYY/MM/DD')
    const fromTime = event.fromTime
    const toTime = event.toTime
    const category = event.category
    const priority = event.priority
    const user = event.user._id
    console.log("user",user);
    await axiosInstance.post("/event",{
      "title": `${title}` ,
      "fromDate": `${fromDate}`,
      "toDate": `${toDate}`,
      "fromTime": `${fromTime}`,
      "toTime": `${toTime}`,
      "category": `${category}`,
      "priority":`${priority}`,
      "user":{"_id":`${user}`}
    },{
      headers: {
        'token': `${token}` 
      },
    },).then((response)=>{console.log("response1",response)})





    console.log("onEventAdded",event);
    let calenderApi = this.calenderRef.current.getApi();
    console.log("calenderApi",calenderApi);

    calenderApi.addEvent({
      start:moment(event.fromDate).toDate(),
      end:moment(event.toDate).toDate(),
      fromTime:event.fromTime,
      toTime:event.toTime,
      title:event.title,


    });
    console.log("event", event);
  };

  async handleEventAdd(data) {
    console.log("handleEventAdd",data);
  // const token = localStorage.getItem("id_token")
  //   console.log("data.event bar",data.event);
  //  await axios.post("http://185.202.113.165:3000/api/event",data.event,{
  //     headers: {
  //       'token': `${token}` 
  //     },
  //   },).then((response)=>{console.log("response1",response)})

  }
   async handleDateSet(data) {
    const token = localStorage.getItem("id_token")
    console.log("handleDateSet",data);
    const response = await axiosInstance.post("/event/GetForMonth?start="+moment(data.start).toISOString()+"&end"+moment(data.end).toISOString(),{
      "date":"1401/03/01"
  },{
      headers: {
        'token': `${token}` 
      },
    },).then((respon)=>{   
      console.log("respon.data.data",respon.data.data); 
      this.setState({
       events:respon.data.data
    });})
    console.log("response.data",response);


  }
   

  //     /////////////////////////////////////////////////////////////////////////////////////////
  
  //     const token = localStorage.getItem("id_token")
  //  console.log(token);
  //     useEffect(() => {
  //       const fetchData = async () =>{
  //         // setLoading(true);
  //         try {
  //           const {data: response} = await axios.post("http://185.202.113.165:3000/api/event/GetForMonth",{ "date":"1401/03/01"},{
  //             headers: {
  //               'token': `${token}` 
  //             },
  //           },);
  //           console.log( "show response" , response.data);
  //           // setApiariesList(response.data )
  //           // setLoading(false)
  //         } catch (error) {
  //         //  if (error.response?.status === 401) {
  //         //    localStorage.clear("id_token")
  //         //  }
  //          console.error("سرور دچار مشکل شده است"+"ApiaryList");
  //         //  setErrMessage("  با عرض پوزش سرور دچار مشکل شده است")
  //         //  setIserror(true)
  //         //  history.push("/app/Error")
  //         //  window.location.reload()
  //         }
  //         // setLoading(false);
  //       }
  //       fetchData();
  //     }, []);
   

  //     /////////////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <div className="demo-app">
        {/* <AddJob  onEventAdded={event=>this.onEventAdded(event)} /> */}
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
            timeZone="iran/Tehran"
            events={function(info, successCallback, failureCallback) {
              const token = localStorage.getItem("id_token")
              moment.locale('en'); // default locale is en
              const m = moment('1989/1/24', 'YYYY/M/D');
              m.locale('fa'); // change locale for this moment instance
              m.format('YYYY/M/D');
              console.log("m",m);
                            return axiosInstance.post('/event/GetForMonth',{ "date":"1401/05/01"},{
                            headers: {
                              'token': `${token}` 
                            },
              },).then((respone)=>
                 respone.data.data.map((el)=>{
                  console.log("el,el",el);
                   console.log("Sdfsdfs",new Date("1400-12-04"));
                   const day="2022-06-14"
                  return {
                    start:day,
                    end:"2022-06-20",
                    title:el.title
                  }
              })
              )

            }}
            eventAdd={(event) => this.handleEventAdd(event)}
            datesSet={(event) => this.handleDateSet(event)}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            // eventsSet={this.handleEvents} 
            
            
            // called after events are initialized/added/changed/removed
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

        <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        scroll={this.props.scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="md"
      >
             <AddJob handleClose={this.props.handleClose}  onEventAdded={event=>this.onEventAdded(event)}/>
      </Dialog>
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

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible,
    });
  };

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
    console.log("handleEvents",events);
    this.setState({
      currentEvents: events,
    });
  };
}


function renderEventContent(eventInfo) {
  console.log("eventInfo",eventInfo);
  
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
