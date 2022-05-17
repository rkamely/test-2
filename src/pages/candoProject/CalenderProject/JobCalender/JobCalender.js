





import {
    Box,
    Button,
    Dialog,
    Fade,
    Grid,
    IconButton,
    MenuItem,
    Modal,
    Popover,
    Popper,
    Select,
    Typography,
  } from "@material-ui/core";
  import React, { Children, useEffect, useState } from "react";
  import PageTitle from "../../../../components/PageTitle/PageTitle";
  import axios from "axios";
  import { makeStyles } from "@material-ui/styles";
//   import "./ApiaryList.css";
  import XLSX from "xlsx";
  import { Delete, Edit, Edit as EditIcon, MoreVertOutlined, Share } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import MaterialTable, { MTableToolbar } from "material-table";
  import CompanyAddList from "../../../../components/Form/ApiaryList/ApiaryAddList";
  import SearchBar from "material-ui-search-bar";
  import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
  import jsPDF from "jspdf";
  import "jspdf-autotable";
  import "../../../../Iran-Sans-normal";
  import ApiaryAddList from "../../../../components/Form/ApiaryList/ApiaryAddList";
  import ApiaryUpdateList from "../../../../components/Form/ApiaryList/ApiaryUpdateList";
  import Adduser from "../../../../components/Form/User/Adduser";
  import useStyles from "../style"; 
  import {
    BrowserRouter as Router,

    NavLink,
    useRouteMatch,
  } from "react-router-dom"
import AddJob from "../../../../components/Form/JobUser/AddJob";
  function  JobCalender() {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [downloadOpen, setdownloadOpen] = useState(false);
  
    const [selectedRows, setSelectedRows] = useState();
  
    const [toolbar, setToolbar] = useState(false);
    const [scroll, setScroll] = useState('paper');
    const[Hive,setHive]=useState("all")
    const[State,setState]=useState("all")
    const[Priority,setPriority]=useState("all")
    const handleClickOpen = (scrollType) => () => {
      setOpenEdit(true);
      setScroll(scrollType);
      setOpen(true)
    };
    useEffect(()=>{
      console.log("Hive",Hive)
    },[Hive])
    useEffect(()=>{
      console.log("State",State)
    },[State])
    useEffect(()=>{
      console.log("Priority",Priority)
    },[Priority])

    const handleOpen = () => {
      setOpen(true);
    };
    const handleEditOpen = () => {
      setOpenEdit(true);
    };
    const handleClose = () => {
      setOpen(false);
      setdownloadOpen(false);
      setOpenEdit(false)
    };
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      overflow:'scroll',
      width: 400,
      bgcolor: "background.paper",
      borderRadius:"16px",
      boxShadow: 24,
      pt: 2,
      px: 4,
      pb: 3,
    };
  
    const [Company, setCompany] = useState([
      {
        id: "0",
        Priority: "الویت",
        title: "عنوان کار",
        Beehive: "زنبورستان ۱",
        Hive: "کندوی ۱",
        StartDate: "1400/09/23",
        EndDate: "1400/09/23",
        State: "0",
        Action: "عملیات",
      },
      {
        id: "1",
        Priority: "الویت",
        title: "عنوان کار",
        Beehive: "زنبورستان ۲",
        Hive: "کندوی ۲",
        StartDate: "1400/09/23",
        EndDate: "1400/09/23",
        State: "1",
        Action: "عملیات",
      },

    ]);
  

    
    const classes = useStyles();
  
    console.log(Company);
    const columns = [
  
      {
        title: "الویت",
        field: "Priority",
        validate: (rowDate) => {
          if (rowDate.Priority === undefined || rowDate.Priority === "") {
            return "این فیلد ضروری است";
          } else if (rowDate.Priority.length < 2) {
            return "نام شما حداقل باید دارای دو کاراکتر باشد";
          }
          return true;
        },
        cellStyle: {
          textAlign: "right",
        },
        headerStyle: {
          textAlign: "right",
        },
  
        render: (rowData) => {
          console.log("rowData", rowData);
          return (
            <Link to={`/app/Beehive/${rowData.id}`} className="title" style={{ display: "flex"}}>
              <p className="title">{rowData.Priority}</p>
            </Link>
          );
        },
      },
  
      {
        title: "عنوان",
        field: "title",
        cellStyle: {
          textAlign: "right",
        },
        headerStyle: {
          textAlign: "right",
        },
        render: (rowData) => {
          return <p className="description">{rowData.title}</p>;
        },
      },

      {
        title: "زنبورستان",
        field: "Beehive",
        cellStyle: {
          textAlign: "right",
        },
        headerStyle: {
          textAlign: "right",
        },
        render: (rowData) => {
          return <p className="description">{rowData.Beehive}</p>;
        },
      },
      {
        title: " کندو",
        field: "Hive",
        cellStyle: {
          textAlign: "right",
        },
        headerStyle: {
          textAlign: "right",
        },
        render: (rowData) => {
          return <p className="description">{rowData.Hive}</p>;
        },
      },
      {
        title: "از تاریخ",
        field: "StartDate",
        cellStyle: {
          textAlign: "right",
        },
        headerStyle: {
          textAlign: "right",
        },
        render: (rowData) => {
          return <div>{rowData.StartDate}</div>;
        },
      },
      {
        title: "تا تاریخ",
        field: "EndDate",
        cellStyle: {
          textAlign: "right",
        },
        headerStyle: {
          textAlign: "right",
        },
        render: (rowData) => {
          return <p>{rowData.EndDate}</p>;
        },
      },
      {
        title: "وضعیت ",
        field: "State",
        cellStyle: {
          textAlign: "right",
        },
        headerStyle: {
          textAlign: "right",
        },
        render: (rowData) => {
          return (
            <div className={rowData.State ? "jobActive" : "jobDeactive"}>
              {rowData.State ? (              
                <img src="/assets/check-svgrepo-com (2).png" />
              ) : (
                <img src="/assets/Group 11034.png" />
              )}
            </div>
          );
        },
      },

      {
        title: "عملیات",
        field: "thumbnail",
        cellStyle: {
          textAlign: "right",
        },
        headerStyle: {
          textAlign: "right",
        },
        render: (rowData) => {
          return (
            // <Link to={`/app/CompanyList/${rowData.id}`}>
            <div>
              <PopupState variant="popover" popupId="demo-popup-popover">
                {(popupState) => (
                  <div>
                    <MoreVertOutlined variant="contained" {...bindTrigger(popupState)} style={{cursor:"pointer"}}/>
  
                   
                    <Popover
                          {...bindPopover(popupState)}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                          }}
                        >
                          <div
                            style={{ borderRadius: " 16px", padding: " 16px" }}
                          >
                            <Link
                             onClick={handleClickOpen('body')}
                              style={{
                            
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                cursor:"pointer"
                              }}
                            >
                              <Edit style={{ marginLeft: "16px" }} />
                              ویرایش
                            </Link>
                            <hr
                              style={{
                                borderTop: "1px solid rgb( 240, 240, 240)",
                                height: "2px",
                                
                              }}
                            />
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                cursor:"pointer"
  
                              }}
                            >
                              <Share style={{ marginLeft: "16px" }} />
                              اشتراک گذاری
                            </div>
                            <hr
                              style={{
                                borderTop: "1px solid rgb( 240, 240, 240)",
                                height: "2px",
                              }}
                            />
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                cursor:"pointer"
  
                          
                              }}
                            >
                              <img src="/assets/move-svgrepo-com.svg" style={{ margin: "0 0px 0 24px"}} />
                              انتقال
                            </div>
                            <hr
                              style={{
                                borderTop: "1px solid rgb( 240, 240, 240)",
                                height: "2px",
                              }}
                            />
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                color:"red",
                                justifyContent: "flex-start",
                                cursor:"pointer"
  
                              }}
                              onClick={() => onRowDelete(rowData)}
                            >
                              <img src="/assets/trash-svgrepo-com-2.svg" style={{ margin: "0 0px 0 24px" }} />
                              حذف
                            </div>
                          </div>
                    </Popover>
                  </div>
                )}
              </PopupState>
            </div>
          );
        },
      },
    ];
  
    //downloadExcel
    const downloadFile = () => {
      setdownloadOpen(true);
    };
    const downloadExcel = () => {
      const newData = Company.map((row) => {
        delete row.tableData;
        return row;
      });
      const workSheet = XLSX.utils.json_to_sheet(newData);
      const workBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workBook, workSheet, "students");
      //Buffer
      let buf = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });
      //Binary string
      XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
      //Download
      XLSX.writeFile(workBook, "StudentsData.xlsx");
    };
    const [searched, setSearched] = useState();
  
    const requestSearch = (searchedVal) => {
      const filteredRows = Company.map((rows) => {
        return rows.name;
        // console.log("rows.title",rows)
      }).filter((row) => {
        return row.toLowerCase().includes(searchedVal.toLowerCase());
      });
      setCompany(filteredRows);
      console.log("Company", Company);
      console.log("filteredRows", filteredRows);
    };
    const cancelSearch = () => {
      setSearched("");
      requestSearch(searched);
    };
    const handleBulkDelete = () => {
      console.log(selectedRows);
      const updatedData = Company.filter((row) => !selectedRows.includes(row));
      setCompany(updatedData);
    };
  
    const onRowDelete=(rowData) =>{
      const updatedData=Company.filter((row)=>![rowData].includes(row))
      setCompany(updatedData);
    }
  
    const downloadPdf = () => {
      const doc = new jsPDF();
      doc.text("جزییات زنبورستان", 20, 10);
      doc.autoTable({
        theme: "grid",
        columns: columns.map((col) => ({ ...col, dataKey: col.field })),
        body: Company,
      });
      doc.setFont('Iran-Sans'); // set custom font
      doc.save("table.pdf");
    };
    const add = () => {
      return console.log("click");
    };

    return (
      <div>
  

        <MaterialTable
          localization={{
            toolbar: {
              searchPlaceholder: "dfsdfsdf",
            },
          }}
          title=""
          style={{ borderRadius: "25px",minWidth:"1000px" }}
          data={Company}
          columns={columns}
          onSelectionChange={(rows) => setSelectedRows(rows)}
          localization={{
            body: {
              editRow: { deleteText: "آیا میخواهید این سطر را حذف کنید؟" },
            },
            pagination: {
              labelDisplayedRows: "{from}-{to} از {count}",
              labelRowsSelect: 'تعداد ردیف',
              labelRowsPerPage: '۱',
              firstAriaLabel: 'اولین صقحه',
       
              previousAriaLabel: 'صفحه قبل',
       
              nextAriaLabel: 'صفحه بعد',
              lastAriaLabel: 'اخرین صفحه',
            },
            toolbar: {
              nRowsSelected: "{0} مورد انتخاب شد",
              searchPlaceholder: "جستجو کن",
            },
            header: {
              actions: "عملیات",
            },
            body: {
              emptyDataSourceMessage: "موردی جهت نمایش وجود ندارد.",
              filterRow: {
                filterTooltip: "فیلتر",
              },
            },
          }}
          options={{
            columnsButton: true,
            actionsColumnIndex: -1,
            addRowPosition: "last",
            rowStyle: {
              fontWeight: 600,
              textAlign: "right",
            },
            headerStyle: {
              fontWeight: 600,
              color: "rgb( 102, 103 ,104)",
            },
            selection: true,
            selectionProps: (rowData) => ({
              // checked: Company?.includes(rowData.value) ? true: false,
              onClick: () => {
                console.log("clicked asdasda");
                setToolbar(true);
              },
            }),
            search: true,
            searchFieldAlignment:"left",
            searchFieldStyle: {
              borderTop: "2px solid  rgb( 240 ,240, 240)",
              borderRight: "2px solid  rgb( 240 ,240, 240)",
              borderLeft: "2px solid  rgb( 240 ,240, 240)",
              borderBottom: "none",
              padding: "4px",
              borderRadius: "8px",
     
            },
            // filtering: true,
          }}
  
  
        
  
  
  
          components={{
            // Toolbar: (props) => (
            //   <>
            //     <div
            //       style={{
            //         direction: "rtl",
            //         display: "flex",
            //         justifyContent: "space-between",
            //         alignItems: "center",
            //         padding: "16px  32px  0px",
            //       }}
            //     >
            //       <div
            //         style={{
            //           display: "flex",
            //           alignItems: "center",
            //           justifyContent: "center",
            //         }}
            //       >
            //         <SearchBar
            //           style={{
            //             direction: "ltr",
            //             border: "1px solid red",
            //             width: "100%",
            //             borderRadius: "8px",
            //           }}
            //           value={searched}
            //           onChange={(searchVal) => requestSearch(searchVal)}
            //           onCancelSearch={() => cancelSearch()}
            //         />
            //         {/* <MTableToolbar {...props} /> */}
            //         <div
            //           onClick={handleOpen}
            //           style={{
            //             backgroundColor: "rgb( 227, 156, 0)",
            //             marginRight: "32px",
            //             color: "#000",
            //             padding: "8px",
            //             display: "flex",
            //             alignItems: "center",
            //             justifyContent: "center",
            //             borderRadius: "8px",
            //           }}
            //         >
            //           <img src="/assets/Group 182.svg" />
            //         </div>
            //       </div>
            //       <div
            //         onClick={downloadFile}
            //         style={{
            //           backgroundColor: "black",
            //           cursor: "pointer",
            //           color: "white",
            //           display: "flex",
            //           alignItems: "center",
            //           justifyContent: "center",
            //           borderRadius: "8px",
            //           padding: "8px",
            //           // marginLeft: "32px",
            //         }}
            //       >
            //         <span>دانلود</span>
            //         <img
            //           src="/assets/download-arrow-svgrepo-com.svg"
            //           style={{ marginRight: "8px" }}
            //         />
            //       </div>
            //     </div>
            //     <hr
            //       style={{
            //         borderTop: "1px solid rgb( 240, 240, 240)",
            //         height: "2px",
            //       }}
            //     />
            //     {toolbar ? (
            //       <MTableToolbar {...props}>{console.log(props)}</MTableToolbar>
            //     ) : null}
            //   </>
            // ),
          }}
          actions={[
            {
              icon: () => <Select
                 labelId="demo-simple-select-label"
                 variant="outlined"
                 className={classes.inputSelect}
                 Id='demo-simple-select'
                 style={{width:100}}
                 value={Hive}
                 className={classes.inputSelect}
                 onChange={(e)=>setHive(e.target.value)}>
                   <MenuItem value={"all"}><em>All</em></MenuItem>
                   <MenuItem value={2019}>2019</MenuItem>
                   <MenuItem value={2020}>2020</MenuItem>
                   <MenuItem value={2021}>2021</MenuItem>
              </Select>,
  
              tooltip: "دانلود",
              isFreeAction: true,
            },
            {
              icon: () => <Select
                 labelId="demo-simple-select-label"
                 variant="outlined"
                 className={classes.inputSelect}
                 Id='demo-simple-select'
                 style={{width:100}}
                 value={State}
                 className={classes.inputSelect}
                 onChange={(e)=>setState(e.target.value)}>
                   <MenuItem value={"all"}><em>All</em></MenuItem>
                   <MenuItem value={2019}>2019</MenuItem>
                   <MenuItem value={2020}>2020</MenuItem>
                   <MenuItem value={2021}>2021</MenuItem>
              </Select>,
  
              tooltip: "دانلود",
              isFreeAction: true,
            },
            {
              icon: () => <Select
                 labelId="demo-simple-select-label"
                 variant="outlined"
                 className={classes.inputSelect}
                 Id='demo-simple-select'
                 style={{width:100}}
                 value={Priority}
                 className={classes.inputSelect}
                 onChange={(e)=>setPriority(e.target.value)}>
                   <MenuItem value={"all"}><em>All</em></MenuItem>
                   <MenuItem value={2019}>2019</MenuItem>
                   <MenuItem value={2020}>2020</MenuItem>
                   <MenuItem value={2021}>2021</MenuItem>
              </Select>,
  
              tooltip: "دانلود",
              isFreeAction: true,
            },
            {
              icon: () => (
                
  
  
                
                <div>
                  <PopupState variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                      <div>
                    <MoreVertOutlined variant="contained" {...bindTrigger(popupState)} style={{cursor:"pointer"}}/>
  
                        
                        <Popover
                      
  
                          {...bindPopover(popupState)}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                          }}
                        >
                          <div
                            style={{ borderRadius: " 16px", padding: " 16px" }}
                          >
                            <Link
                             onClick={handleClickOpen('body')}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                cursor:"pointer"
                              }}
                            >
                              <Edit style={{ marginLeft: "16px" }} />
                              ویرایش
                            </Link>
                            <hr
                              style={{
                                borderTop: "1px solid rgb( 240, 240, 240)",
                                height: "2px",
                                
                              }}
                            />
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                cursor:"pointer"
  
                              }}
                            >
                              <Share style={{ marginLeft: "16px" }} />
                              اشتراک گذاری
                            </div>
                            <hr
                              style={{
                                borderTop: "1px solid rgb( 240, 240, 240)",
                                height: "2px",
                              }}
                            />
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                cursor:"pointer"
  
                          
                              }}
                            >
                              <img src="/assets/move-svgrepo-com.svg" style={{ margin: "0 0px 0 24px"}} />
                              انتقال
                            </div>
                            <hr
                              style={{
                                borderTop: "1px solid rgb( 240, 240, 240)",
                                height: "2px",
                              }}
                            />
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                color:"red",
                                justifyContent: "flex-start",
                                cursor:"pointer"
  
                              }}
                              onClick={() => handleBulkDelete(selectedRows)}
                            >
                              <img src="/assets/trash-svgrepo-com-2.svg" style={{ margin: "0 8px 0 16px" }} />
                              حذف
                            </div>
                          </div>
                        </Popover>
                      </div>
                    )}
                  </PopupState>
                </div>
              ),
  
              // isFreeAction: true,
            },
  
            {
              icon: () => (
                <div   onClick={handleClickOpen('body')}
                >
                  <img
                    style={{
                      backgroundColor: "rgb( 227, 156, 0)",
                      
                      color: "#000",
                      padding: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                    }}
                    src="/assets/Group 182.svg"
                  />
                </div>
              ),
              tooltip: "اضافه کردن کار",
              
              isFreeAction: true,
            },
            {
              icon: () => (
                <div
                  onClick={downloadFile}
                  style={{
                    backgroundColor: "black",
                    cursor: "pointer",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                    padding: "8px",
                    // marginLeft: "32px",
                  }}
                >
                  <span style={{fontFamily:"Shabnam",fontSize:"1rem"}}>دانلود</span>
                  <img
                    src="/assets/download-arrow-svgrepo-com.svg"
                    style={{ marginRight: "8px" }}
                  />
                </div>
              ),
              tooltip: "دانلود",
              isFreeAction: true,
            },
  
          ]}
        />
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
            maxWidth="md"

          >
              <AddJob />
          </Dialog>
        </div>
  
  
        <div>
        <Dialog
        open={openEdit}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="md"
      >
             <AddJob onClick={handleClose}/>
       </Dialog>
        </div>
  
        
        <div>
          <Modal
            open={downloadOpen}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 1000 }} className="downloadFile" style={{ display: "flex" ,alignItems: "center",justifyContent: "center"}}>
              <div onClick={downloadExcel} className="downloadExcel" ><img src="/assets/excel-svgrepo-com.svg"/></div>
              <div onClick={downloadPdf} className="downloadPdf" ><img src="/assets/pdf-svgrepo-com (1).svg"/></div>
            </Box>
          </Modal>
        </div>
      </div>
    );
  }
  
  export default JobCalender;
  