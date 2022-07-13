
import {
  Box,
  Breadcrumbs,
  Button,
  Dialog,
  Fade,
  IconButton,
  MenuItem,
  Modal,
  Popover,
  Popper,
  Select,
  Slide,
  Typography,
} from "@material-ui/core";
import React, { Children, useEffect, useState } from "react";
import PageTitle from "../../../components/PageTitle/PageTitle";
import axios from "axios";
import useStyles from "./styles";
import "./Hive.css";
import XLSX from "xlsx";
import {  Close, Edit, Edit as EditIcon, MoreVertOutlined, NavigateBefore, Share } from "@material-ui/icons";
import { Link ,useParams } from "react-router-dom";
import MaterialTable, { MTableToolbar } from "material-table";
import CompanyAddList from "../../../components/Form/ApiaryList/ApiaryAddList";
import SearchBar from "material-ui-search-bar";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "../../../Iran-Sans-normal";
import ApiaryAddList from "../../../components/Form/ApiaryList/ApiaryAddList";
import { makeStyles } from "@material-ui/styles";
import Title from "../../../components/Typography/Title/Title";
import { useLocation } from 'react-router-dom'
import NutritionStepper from "./Questionnaire/NutritionStepper";
import CureHiveStepper from "./Questionnaire/CureHiveStepper";
import CatchHoneyStepper from "./Questionnaire/CatchHoneyStepper";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
}); 


function  Hive() {
  
  const location = useLocation()
  // window.localStorage.getItem(location.state.rowDatas)
  // const rowDatas= window.localStorage.setItem()
  // console.log("location",location)
  // console.log("rowDatanew",rowDatas)
  const [open, setOpen] = useState(false);
  const[openNutrition,setOpenNutrition]=useState(false);
  const[openCatchHoney,setopenCatchHoney]=useState(false);
  const[openCureHive,setOpenCureHive]=useState(false);
  const [downloadOpen, setdownloadOpen] = useState(false);

  const [selectedRows, setSelectedRows] = useState();

  const [toolbar, setToolbar] = useState(false);
  const[Hive,setHive]=useState("all")
  const [scroll, setScroll] = useState('paper');
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);

    setScroll(scrollType);
  };
  const handleNutrition=()=>{
    setOpenNutrition(true)
  }
  const handleCatchHoney=()=>{
    setopenCatchHoney(true)
  }
  const handleCureHive=()=>{
    setOpenCureHive(true)
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setdownloadOpen(false);
    setOpenNutrition(false)
    setopenCatchHoney(false)
    setOpenCureHive(false)
  };
  
  useEffect(()=>{
    console.log("Hive",Hive)
  },[Hive])

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "scroll",
    width: 430,
    // bgcolor: "background.paper",
    background:" rgb( 244 244 244)",
    borderRadius: "16px",
    boxShadow: 24,
    pt: 4,
    px: 6,
    pb: 4,
  };
  const [Company, setCompany] = useState([
    {
      id: "1",
      name: "کندوی 1",
      HiveType: "نوع کندو",
      RaceQueen: "نژاد ملکه",
      date: "23/09/1400",
      status: 1,
      Job: 1,
      Sick: 1,
      Queen: 1,
    },
    {
      id: "2",
      name: "کندوی 2",
      HiveType: "نوع کندو",
      RaceQueen: "نژاد ملکه",
      date: "23/09/1400",
      status: 0,
      Job: 0,
      Sick: 0,
      Queen: 0,
    },
  ]);
  const[hiveTable,setHiveTable]= useState([])
  // const useStyles = makeStyles({
  //   Button: {
  //     margin: "8px 0px",
  //     fontFamily: "Shabnam",
  //     cursor: "pointer",
  //     width: "5%",
  //   },
  // });
  
  const classes = useStyles();
/////////////////////////////////////////////////////////////////////////////////////////
const Apiary_id= localStorage.getItem("Apiary_id")
console.log("Apiary_id",Apiary_id);
const token = localStorage.getItem("id_token");
console.log("token", token);
useEffect(() => {
  const fetchData = async () => {
    // setLoading(true);
    try {
      const { data: response } = await axios.get(
        `http://185.202.113.165:3000/api/hive/get-by-apiary/${Apiary_id}`,
        {
          headers: {
            token: `${token}`,
          },
        },
      );
      console.log("show response hive", response.data);
      setHiveTable(response.data);
      // setLoading(false);
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.clear("id_token")
        console.log("سرور دچار مشکل شده است یا اعتبار توکن به پایان رسیده است" + "ApiaryList" );
        window.location.reload()
      }else{
      console.log("سرور دچار مشکل شده است یا اعتبار توکن به پایان رسیده است" + "ApiaryList" );
      // history.push("/app/Error")
      // window.location.reload()
     }}

    // setLoading(false);
  };
  fetchData();
}, []);


////////////////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////////////////////////////////////
const[ filter,setFilter]=useState([])
  console.log("token", token);
  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://185.202.113.165:3000/api/apiary/get-for-user",
          {
            headers: {
              token: `${token}`,
            },
          },
        );
        console.log("show response", response.data);
        setFilter(response.data);
      } catch (error) {
        if (error.response?.status === 401) {
          localStorage.clear("id_token")
          console.log("سرور دچار مشکل شده است یا اعتبار توکن به پایان رسیده است" + "ApiaryList" );
          window.location.reload()
        }else{
        console.log("سرور دچار مشکل شده است یا اعتبار توکن به پایان رسیده است" + "ApiaryList" );
        // history.push("/app/Error")
        window.location.reload()
       }}

      // setLoading(false);
    };
    fetchData();
  }, []);


  ////////////////////////////////////////////////
  console.log(Company);
  const columns = [

    {
      title: "نام کندو",
      field: "name",
      cellStyle: {
        textAlign:" center !important",
        transform:"translateX(10px)",
        fontSize:"0.8rem",
        justifyContent:"center",
      },

      headerStyle: {
        textAlign: "right",
        whiteSpace: "nowrap",
           fontSize:"0.8rem",
           color:"rgb( 102, 103, 104)",
           
      },

      render: (rowData) => {
        console.log("rowData", rowData);
        return (
          <Link
            to={`/app/ApiaryList/Beehive/Hive/${rowData.name.split(' ').join('-')}`}   
            style={{ textDecoration:"none" ,color:"black",cursor:"pointer"}}
            className="description"

          >
            {rowData.name}
          </Link>
        );
      },
    },

    {
      title: " نوع کندو",
      field: "HiveType",
      cellStyle: {
        textAlign:" right !important",

        fontSize:"0.8rem",
        justifyContent:"center",
      },

      headerStyle: {
        textAlign: "right",
        whiteSpace: "nowrap",
           fontSize:"0.8rem",
           color:"rgb( 102, 103, 104)",
           fontWeight:"600",
          //  paddingRight:"20px"
      },
      render: (rowData) => {
        return <p className="description">{rowData.HiveType}</p>;
      },
    },
    {
      title: " نژاد ملکه",
      field: "RaceQueen",
      cellStyle: {
        textAlign:" center !important",

        fontSize:"0.8rem",
        justifyContent:"center",
      },

      headerStyle: {
        textAlign: "right",
        whiteSpace: "nowrap",
           fontSize:"0.8rem",
           colot:"slateGrey",
      },
      render: (rowData) => {
        return <p className="description">{rowData.RaceQueen}</p>;
      },
    },
    {
      title: "تاریخ ایجاد",
      field: "date",
      cellStyle: {
        textAlign:" center !important",

        fontSize:"0.8rem",
        justifyContent:"center",
      },

      headerStyle: {
        textAlign: "right",
        whiteSpace: "nowrap",
           fontSize:"0.8rem",
           color:"rgb( 102, 103, 104)",
           fontWeight:"600", 
      },
      render: (rowData) => {
        return <p className="description">{rowData.date}</p>;
      },
    },
    {
      title: "وضعیت برد",
      field: "status",
      cellStyle: {
        textAlign:" center !important",
        fontSize:"0.8rem",
        justifyContent:"center",
        paddingRight:"16px"
      },

      headerStyle: {
        textAlign: "right",
        whiteSpace: "nowrap",
           fontSize:"0.8rem",
           color:"rgb( 102, 103, 104)",
           fontWeight:"600", 
           paddingRight:"16px"
           
      },
      render: (rowData) => {
        return (
          <div className={rowData.status ? "statusActive" : "statusDeactive"}>
            {rowData.status ? "فعال" : "غیرفعال"}
          </div>
        );
      },
    },
    {
      title: "کار",
      field: "Job",
      cellStyle: {
        textAlign:" left !important",
        transform:"translateX(12px)",
        fontSize:"0.8rem",
        // justifyContent:"flex-end",
      },

      headerStyle: {
        textAlign: "right",
        whiteSpace: "nowrap",
           fontSize:"0.8rem",
           color:"rgb( 102, 103, 104)",
           fontWeight:"600", 

      },
      render: (rowData) => {
        return (
          <div className={rowData.Job ? "jobActive" : "jobDeactive"}>
            {rowData.Job ? (
              <img src="/assets/checklist-svgrepo-com-1.svg" />
            ) : (
              <img src="/assets/checklist-svgrepo-com.svg" />
            )}
          </div>
        );
      },
    },
    {
      title: "بیماری",
      field: "Sick",
      cellStyle: {
        textAlign:" center !important",
        transform:"translateX(10px)",
        fontSize:"0.8rem",
        justifyContent:"center",
      },

      headerStyle: {
        textAlign: "right",
        whiteSpace: "nowrap",
           fontSize:"0.8rem",
           color:"rgb( 102, 103, 104)",
           fontWeight:"600", 
          // paddingRight:"20px"
      },
      render: (rowData) => {
        return (
          <div className={rowData.Job ? "sickActive" : "sickDeactive"}>
            {rowData.Job ? (
              <img src="/assets/sickness-svgrepo-com-1.svg" />
            ) : (
              <img src="/assets/sickness-svgrepo-com-2.svg" />
            )}
          </div>
        );
      },
    },
    {
      title: "ملکه",
      field: "Queen",
      cellStyle: {
        textAlign:" center !important",
        transform:"translateX(10px)",
        fontSize:"0.8rem",
        justifyContent:"center",
      },

      headerStyle: {
        textAlign: "right",
        whiteSpace: "nowrap",
           fontSize:"0.8rem",
           color:"rgb( 102, 103, 104)",
           fontWeight:"600", 
          // paddingRight:"20px"
      },
      render: (rowData) => {
        return (
          <div className={rowData.Job ? "jobActive" : "jobDeactive"}>
            {rowData.Job ? (
              <img src="/assets/Component 24 – 6.svg" />
            ) : (
              <img src="/assets/Component 24 – 5.svg" />
            )}
          </div>
        );
      },
    },
    {
      title: "عملیات",
      field: "action",
      cellStyle: {
        textAlign:" center !important",
        transform:"translateX(10px)",
        fontSize:"0.8rem",
        justifyContent:"center",
      },

      headerStyle: {
        textAlign: "right",
        whiteSpace: "nowrap",
           fontSize:"0.8rem",
           color:"rgb( 102, 103, 104)",
           fontWeight:"600", 
          // paddingRight:"20px"
      },
      render: (rowData) => {
        return (
          // <Link to={`/app/CompanyList/${rowData.id}`}>
          <div>
            <PopupState variant="popover" popupId="demo-popup-popover" style={{cursor:"pointer"}}>
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
                    <div style={{ borderRadius: " 16px", padding: " 16px" }}>
                      {/* <div
                      
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Edit style={{ marginLeft: "16px" }} />
                        ویرایش
                      </div>
                      <hr
                        style={{
                          borderTop: "1px solid rgb( 240, 240, 240)",
                          height: "2px",
                        }}
                      /> */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Edit style={{ marginLeft: "16px" }} />
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
  const handleBulkDelete = async() => {
    if(window.confirm("آیا از حدف این مورد اطمینان دارید؟")){
      // const response = await axios.delete(`https://sdfsdf/${selectedRows[0].id}`)
      console.log("selectedRows",selectedRows[0].id)
   
    const updatedData = Company.filter((row) => !selectedRows.includes(row));
    setCompany(updatedData);
  }};

  const onRowDelete= async(rowData) => {
    if(window.confirm("آیا از حدف این مورد اطمینان دارید؟")){
      // const response = await axios.delete(`https://sdfsdf/${rowData.id}`)
      console.log("rowData",rowData.id)
    const updatedData=Company.filter((row)=>![rowData].includes(row))
    setCompany(updatedData);
  }};

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


  let { id } = useParams();
  localStorage.setItem("apiaryIdClick",id)
  console.log("id ro bebin " , id);
  const breadcrumbs = [

    <Link
      to="/app/ApiaryList"
      key="1"
      style={{textDecoration:"none",cursor:"pointer"}}
    >
          {/* <Title key="2" title="زنبورستان"/> */}
          <p style={{color:"rgb(227, 156, 0)" ,fontWeight:"bold",fontSize:"1.2rem"}}>زنبورستان</p>


    </Link>,


       <p style={{color:"rgb(227, 156, 0)" ,fontWeight:"bold",fontSize:"1.2rem"}}>{id}</p>

  ];
  return (
    
    <div className={classes.container}>
      <Breadcrumbs 
        separator={<NavigateBefore fontSize="large" style={{color:"rgb(227, 156, 0)"}} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <MaterialTable
        localization={{
          toolbar: {
            searchPlaceholder: "dfsdfsdf",
          },
        }}
        title=""
        style={{ borderRadius: "25px",marginTop:"16px" }}
        data={hiveTable}
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
            searchPlaceholder: "جستجو ",
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

        actions={[
          {

            icon: () => <Select
               labelId="demo-simple-select-label"
               variant="outlined"
               Id='demo-simple-select'
               style={{width:150}}
               value={Hive}
               className={classes.inputSelect}
               onChange={(e)=>setHive(e.target.value)}>
                 {filter.map((el)=>([
                     <Link to={`/app/ApiaryList/Beehive/${el.name.split(' ').join('-')}`} style={{color:"#000",textDecoration:"none",cursor: "pointer"}}><MenuItem  value={el.name} >{el.name}</MenuItem></Link>
                 ]))}

            </Select>,

            isFreeAction: true,
          },            
          // console.log("rowData", rowData);
          // const str = rowData.name.split(' ').join('-') 
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
                           <div
                           onClick={handleCureHive}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              cursor:"pointer"

                        
                            }}
                          >
                            <img src="/assets/medicine-svgrepo-com.svg" style={{ margin: "0 0px 0 24px"}} />
                            درمان
                          </div>
                          <hr
                            style={{
                              borderTop: "1px solid rgb( 240, 240, 240)",
                              height: "2px",
                            }}
                          />
                          <div
                          onClick={handleNutrition}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              cursor:"pointer"

                        
                            }}
                          >
                            <img src="/assets/flower-svgrepo-com.svg" style={{ margin: "0 0px 0 24px"}} />
                            تغذیه
                          </div>
                          <hr
                            style={{
                              borderTop: "1px solid rgb( 240, 240, 240)",
                              height: "2px",
                            }}
                          />
                          <div
                          onClick={handleCatchHoney}  
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              cursor:"pointer"

                        
                            }}
                          >
                            <img src="/assets/honey-svgrepo-com.svg" style={{ margin: "0 0px 0 24px"}} />
                            برداشت عسل
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
                            طبق عسل
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
                            <img src="/assets/noun-migration-2781863.svg" style={{ margin: "0 0px 0 24px"}} />
                             کوچ
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
              <div onClick={handleClickOpen('body')}>
                <img
                  style={{
                    backgroundColor: "rgb( 227, 156, 0)",
                    
                    color: "#000",
                    padding: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                    boxShadow:"0px 3px 6px 0px rgba(0,0,0,0.16)"

                  }}
                  src="/assets/Group 182.svg"
                />
              </div>
            ),
        
            onClick: () => add(),
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
                  boxShadow:"0px 3px 6px 0px rgba(0,0,0,0.16)"

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
          PaperProps={{
            style: { borderRadius: 12,width:"70%" }
          }}
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="xl"
        >
            <ApiaryAddList />
        </Dialog>
      </div>




      <div>       
      <Dialog 
          
        open={openNutrition}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <WebHiveSubmit  onClose={handleClose} /> */}
        <NutritionStepper onClose={handleClose}/>
        </Dialog > 
       </div>



       <div>
          <Dialog 
              
            open={openCatchHoney}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            {/* <WebHiveSubmit  onClose={handleClose} /> */}
            <CatchHoneyStepper onClose={handleClose}/>
            </Dialog > 
        </div>


        <div>
          <Dialog 
              
            open={openCureHive}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            {/* <WebHiveSubmit  onClose={handleClose} /> */}
            <CureHiveStepper onClose={handleClose}/>
            </Dialog > 
        </div>






      <div>
        <Modal
          open={downloadOpen}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box
            sx={{
              ...style,


            }}
            className="downloadFile"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position:"relative",
              overflow: "hidden"
            }}
          >
            <div  onClick={handleClose} style={{position:"absolute",top:"10px",right:"10px",cursor:"pointer"}}><Close/></div>
            <div onClick={downloadPdf} className="downloadPdf">
              <img src="/assets/pdf-svgrepo-com (1).svg" width="100px" height="100px"/>
            </div>
            <div onClick={downloadExcel} className="downloadExcel">
              <img src="/assets/excel-svgrepo-com.svg" width="100px"  height="100px"/>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Hive;
