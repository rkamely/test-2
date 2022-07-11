import MaterialTable from "material-table";
import React from "react";
import { DoneRounded, MinimizeRounded, VisibilityRounded } from "@material-ui/icons";
function TableDiagram() {
  const rowBackgroundColors = {
    0: "yellow", // just for example, remove it if you don't need
    1: "rgb( 255 ,242, 212)",
  };
  return (
    <MaterialTable
      columns={[
        {
          title: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transform:"translateX(-12px)"
              }}
            >
              <p style={{ padding: "0" }}>تاریخ</p>
            </div>
          ),
          field: "date",
          headerStyle: {
            backgroundColor: "rgb( 255 ,242, 212)",
            color: "#000",
            fontSize:"0.6rem",
            fontWeight:"600",
            textAlign:"center !important"
          },
          cellStyle: {
            textAlign: "center",
            fontSize:"0.6rem",
            
        },
        },
        {
          title: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transform:"translateX(-12px)"
                            }}
            >
              <p style={{ padding: "0", margin: "0" }}>بازدید</p>
              <div>
                <img src="/assets/view-svgrepo-com.svg" width="20px" />
              </div>
            </div>
          ),
          field: "visit",
          // cellStyle: {
          //   backgroundColor: "red",
          //   color: "#FFF",
          // },

          headerStyle: {
            backgroundColor: "rgb( 255 ,242, 212)",
            color: "#000",
            fontSize:"0.6rem",
            fontWeight:"600",
            textAlign:"center !important", 
            
          },
          cellStyle: {
            textAlign: "center",
            
        },
          render: (row) => (
            <div >
              {row.visit ?<img src="/assets/check-svgrepo-com (2).svg" width="16px" style={{margin: "0 10px"}}/>:<img src="/assets/minus-svgrepo-com.svg" width="16px" style={{margin: "0 10px"}}/>}
            </div>
          ),
        },
        {
          title: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transform:"translateX(-12px)"
              }}
            >
              <p style={{ padding: "0", margin: "0" }}>تغذیه</p>
              <div>
                <img src="/assets/flower-svgrepo-com.svg" />
              </div>
            </div>
          ),
          field: "Nutrition",
          // cellStyle: {
          //   backgroundColor: "red",
          //   color: "#FFF",
          // },

          headerStyle: {
            backgroundColor: "rgb( 255 ,242, 212)",
            color: "#000",
            fontSize:"0.6rem",
            fontWeight:"600"
          },
          render: (row) => (
            <div>
              {row.Nutrition ?<img src="/assets/check-svgrepo-com (2).svg" width="16px"/>:<img src="/assets/minus-svgrepo-com.svg" width="16px" style={{margin: "0 10px"}}/>}
            </div>
          ),
        },
        {
          title: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap",
                transform:"translateX(-12px)"
              }}
            >
              <p style={{ padding: "0", margin: "0" }}>صدای کندو</p>
              <div>
                <img src="/assets/flower-svgrepo-com.svg" />
              </div>
            </div>
          ),
          field: " soundOfHive",
          // cellStyle: {
          //   backgroundColor: "red",
          //   color: "#FFF",
          // },

          headerStyle: {
            backgroundColor: "rgb( 255 ,242, 212)",
            color: "#000",
            fontSize:"0.6rem",
            fontWeight:"600"
          },
          render: (row) => (
            <div >
              {row.soundOfHive ?<img src="/assets/Group 11029.svg" />:<img src="/assets/minus-svgrepo-com.svg" width="16px" style={{margin: "0 20px"}}/>}
            </div>
          ),
        },
        {
          title: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center", whiteSpace: "nowrap",  transform:"translateX(-12px)"
              }}
            >
              <p style={{ padding: "0", margin: "0" }}>درب</p>
              <div>
                <img src="/assets/flower-svgrepo-com.svg" />
              </div>
            </div>
          ),
          field: "door",
          // cellStyle: {
          //   backgroundColor: "red",
          //   color: "#FFF",
          // },

          headerStyle: {
            backgroundColor: "rgb( 255 ,242, 212)",
            color: "#000",
            fontSize:"0.6rem",
            fontWeight:"600"
          },
          render: (row) => (
            <div >
              {row.door ?<img src="/assets/check-svgrepo-com (2).svg" width="16px"/>:<img src="/assets/minus-svgrepo-com.svg" width="16px" style={{margin: "0 10px"}} />}
            </div>
          ),
        },
        {
          title: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center", whiteSpace: "nowrap",
                transform:"translateX(-12px)"
              }}
            >
              <p style={{ padding: "0", margin: "0" }}>تصویر</p>
              <div>
                <img src="/assets/picture-svgrepo-com (1).svg" width="16px"/>
              </div>
            </div>
          ),
          field: "picture",
          // cellStyle: {
          //   backgroundColor: "red",
          //   color: "#FFF",
          // },

          headerStyle: {
            backgroundColor: "rgb( 255 ,242, 212)",
            color: "#000",
            fontSize:"0.6rem",
            fontWeight:"600"
          },
          render: (row) => (
            <div >
              {row.picture ?<img src="/assets/Group 11030.svg" />:<img src="/assets/minus-svgrepo-com.svg" width="16px" style={{margin: "0 10px"}}  />}
            </div>
          ),
        },
        {
          title: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transform:"translateX(-12px)"
              }}
            >
              <p style={{ padding: "0", margin: "0" }}>یادداشت صوتی</p>

            </div>
          ),
          field: "voiceNotes",
          cellStyle: {
            // backgroundColor: "red",
            // color: "#FFF",
          },

          headerStyle: {
            backgroundColor: "rgb( 255 ,242, 212)",
            color: "#000",
            fontSize:"0.6rem",
            fontWeight:"600"
          },
          render: (row) => (
            <div >
              {row.voiceNotes ?<img src="/assets/Group 11029.svg" />:<img src="/assets/check-svgrepo-com (2).svg" width="16px" style={{margin: "0 10px"}}/>}
            </div>
          ),
        },
        {
          title: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transform:"translateX(-12px)"
              }}
            >
              <p style={{ padding: "0", margin: "0" }}>یادداشت متنی</p>

            </div>
          ),
          field: "textNotes",
          // cellStyle: {
          //   backgroundColor: "red",
          //   color: "#FFF",
          // },

          headerStyle: {
            backgroundColor: "rgb( 255 ,242, 212)",
            color: "#000",
            fontSize:"0.6rem",
            fontWeight:"600"
          },
          render: (row) => (
            <div >
              {row.textNotes ?<img src="/assets/note-svgrepo-com.svg" />:<img src="/assets/check-svgrepo-com (2).svg" width="16px" style={{margin: "0 10px"}}/>}
            </div>
          ),
        },
      ]}
      data={[
        {
          date: "1400/01/11",
          visit: 1,
          Nutrition: 0,
          soundOfHive: 0,
          door: 1,
          picture: 0,
          voiceNotes: 1,
          textNotes: 1,
          
        },
        {
          date: "1400/01/12",
          visit: 0,
          Nutrition: 0,
          soundOfHive: 0,
          door: 1,
          picture: 1,
          voiceNotes: 0,
          textNotes: 0,
          priority: 1,
        },
      ]}
      options={{
        headerStyle: {
          backgroundColor: "#01579b",
          color: "#FFF",
          fontSize:"0.6rem",
          fontWeight:"600"
        },
        toolbar: false,
        paging: false,
        rowStyle: (rowData) => {
          console.log(rowData);
          return {
            fontFamily: "Mulish-Regular",
            backgroundColor: rowBackgroundColors[rowData.priority] ?? "#fff",
          };
        },
      }}
    />
  );
}

export default TableDiagram;
