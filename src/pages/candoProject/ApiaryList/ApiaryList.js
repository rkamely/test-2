import {
  Box,
  Button,
  createTheme,
  Dialog,
  Fade,
  IconButton,
  Modal,
  Popover,
  Popper,
} from "@material-ui/core";
import React, { Children, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import "./ApiaryList.css";
import XLSX from "xlsx";
import {
  Delete,
  Edit,
  Edit as EditIcon,
  Info,
  MoreVertOutlined,
  Share,
  TrainRounded,
  TramRounded,
} from "@material-ui/icons";
import { Link,useHistory } from "react-router-dom";
import MaterialTable, { MTableToolbar } from "material-table";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "../../../Iran-Sans-normal";
import ApiaryAddList from "../../../components/Form/ApiaryList/ApiaryAddList";
import ApiaryUpdateList from "../../../components/Form/ApiaryList/ApiaryUpdateList";
import { gql, useQuery } from "@apollo/client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { getNamedType } from "graphql";
import Loading from "../../../components/Loading/Loading";
import useStyles from "./styles";



function ApiaryList() {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [downloadOpen, setdownloadOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState();
  const [toolbar, setToolbar] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const [errorMessage,setErrMessage] = useState()
  const [error,setIserror] = useState(false)
  const [ loading , setLoading]=useState(true)
  const history= useHistory()

  const classes = useStyles();

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);

    setScroll(scrollType);
  };
  const handleClickEdit = (scrollType,id) => () => {
    setOpenEdit(true);
    setScroll(scrollType);
    localStorage.setItem("edit_id",id)

  };  
  const handleDeleteOpen = (scrollType) => () => {
    setOpenDelete(true);
    setScroll(scrollType);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleEditOpen = () => {
    setOpenEdit(true);
  };
  // const handleDeleteOpen = () => {
  //   setOpenDelete(true);
  // };
  const handleClose = () => {
    setOpen(false);
    setdownloadOpen(false);
    setOpenEdit(false);
    setOpenDelete(false);
  };

  console.log("salam  refs");
  const refresh=(refs)=>{
    if(refs){
      console.log("true refs");
  
    }else {
      console.log("false refs");
    }
    
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "scroll",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "16px",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
const [ ApiariesList,setApiariesList]=useState([])
  const [Apiary, setApiary] = useState([
    {
      _id: "0",
      name: "زنبورستان 1",
      // State: "تهران",
      // city: "تهران",
      Hives: "1",
      hivesWithBadCondition: "1",
      hivesWithGoodCondition: "5",
      hivesWithVisitRequired: "5",
      regionVegetation:"mountain",
      apiaryUsage:"other",
      regionType: "village",
    },
    {
      _id: "1",
      name: "زنبورستان2",
      // State: "تهران",
      // city: "تهران",
      apiaryUsage: "عسل",
      Hives: "2",
      hivesWithBadCondition: "5",
      hivesWithGoodCondition: "5",
      hivesWithVisitRequired: "5",
      regionVegetation:"farm",
      apiaryUsage:"Honey",
      regionType: "Village",
    },
    {
      _id: "2",
      name: "زنبورستان3",
      // State: "اصفهان",
      // city: "گلپایگان",
      apiaryUsage: "افزایش جمعیت",
      Hives: "12",
      hivesWithBadCondition: "1",
      hivesWithGoodCondition: "5",
      hivesWithVisitRequired: "5",
      regionVegetation:"garden",
      apiaryUsage:"Honey",
      regionType: "Village",
    },
    {
      _id: "3",
      name: "زنبورستان4",
      // State: "گلستان",
      // city: "گرگان",
      apiaryUsage: "عسل",
      Hives: "22",
      hivesWithBadCondition: "5",
      hivesWithGoodCondition: "5",
      hivesWithVisitRequired: "5",
      regionVegetation:"garden",
      apiaryUsage:"Honey",
      regionType: "Village",
    },
    {
      _id: "4",
      name: "زنبورستان5",
      // State: "گیلان",
      // city: "رشت",
      apiaryUsage: "افزایش جمعیت",
      Hives: "32",
      hivesWithBadCondition: "1",
      hivesWithGoodCondition: "5",
      hivesWithVisitRequired: "5",
      regionVegetation:"garden",
      apiaryUsage:"Honey",
      regionType: "Village",
    },
    {
      _id: "5",
      name: "زنبورستان6",
      // State: "مازندران",
      // city: "انزلی",
      apiaryUsage: "عسل",
      Hives: "12",
      hivesWithBadCondition: "5",
      hivesWithGoodCondition: "5",
      hivesWithVisitRequired: "5",
      regionVegetation:"garden",
      apiaryUsage:"Honey",
      regionType: "Village",
    },
  ]);


  // useEffect(() => {
  //   axios.get("")
  //     .then(res => {
  //       setApiary(res.data.data)
  //     })
  //     .catch(error=>{
  //       setErrMessage(["Cannot load user data"])
  //       setIserror(true)
  //     })
  // }, [])

   /////////////////////////////////////////////////////////////////////////////////////////
  
   const token = localStorage.getItem("id_token")
   console.log("token",token);
   useEffect(() => {
     const fetchData = async () =>{
       // setLoading(true);
       try {
         const {data: response} = await axios.get("http://185.202.113.165:3000/api/apiary/get-for-user",{
           headers: {
             'token': `${token}` 
           },
         })
         console.log( "show response" , response.data);
         setApiariesList(response.data)

         setLoading(false)
       } catch (error) {
        if (error.response?.status === 401) {
          localStorage.clear("id_token")
        }
         console.error("سرور دچار مشکل شده است"+"ApiaryList");
         setErrMessage("  با عرض پوزش سرور دچار مشکل شده است")
         setIserror(true)

        //  history.push("/app/Error")
        //  window.location.reload()

       }
       // setLoading(false);
     }
     fetchData();
   }, []);

   console.log("ApiariesList247",ApiariesList);

 
   /////////////////////////////////////////////////////////////////////////////////////////

  // const useStyles = makeStyles({
  //   Button: {
  //     margin: "8px 0px",
  //     fontFamily: "Shabnam",
  //     cursor: "pointer",
  //     width: "5%",
  //   },
  // });


  console.log(ApiariesList);
  const columns = [
    {
      title: "زنبورستان",
      field: "name",

      cellStyle: {
        // textAlign: "center !important",
        whiteSpace: "nowrap",
        fontSize:"0.8rem",
      },
      headerStyle: {
        textAlign: "center !importamt",
        whiteSpace: "nowrap",

        fontSize:"0.8rem",
        colot:"slateGrey",
        paddingRight:"40px"
      },

      render: (rowData) => {
        console.log("rowData", rowData);
        const str = rowData.name.split(' ').join('-') 
        console.log();
        return (
          <Link
            to={{
              pathname: `/app/ApiaryList/Beehive/${str}`,
              state: { state:rowData.name },
            }}
            className="title"
            // style={{ display: "flex" }}
          >
            <p className="title">{rowData.name}</p>
          </Link>
        );
      },
    },

    // {
    //   title: " استان",
    //   field: "State",
    //   cellStyle: {
    //     textAlign: "right",
    //   },
    //   headerStyle: {
    //     textAlign: "right",
    //   },
    //   render: (rowData) => {
    //     return <p className="description">{rowData.State}</p>;
    //   },
    // },
    // {
    //   title: " شهر",
    //   field: "city",
    //   cellStyle: {
    //     textAlign: "right",
    //   },
    //   headerStyle: {
    //     textAlign: "right",
    //   },
    //   render: (rowData) => {
    //     return <p className="description">{rowData.city}</p>;
    //   },
    // },
    // {
    //   title: "تعداد کندو",
    //   field: "Hives",
    //   cellStyle: {
    //     textAlign: "right",
    //   },
    //   headerStyle: {
    //     textAlign: "right",
    //   },
    //   render: (rowData) => {
    //     return <p className="description">{rowData.Hives}</p>;
    //   },
    // },
    {
      title: "پوشش گیاهی",
      field: "regionVegetation",
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
           paddingRight:"40px"
      },

      render: (rowData) => {
        switch (rowData.regionVegetation) {
          case 'Garden':
            return <p className="description">باغ</p>
          case 'Farm':
            return <p className="description">مزرعه</p>
          case 'Mountain':
            return <p className="description">مرتع کوهستانی</p>
          case 'Plain':
            return <p className="description">دشت</p>
            case 'Other':
              return <p className="description">سایر</p>
          default:
            return null
        }
        // return <p className="description">{rowData.regionVegetation}</p>;
      },
    },
    {
      title: "نوع منطقه",
      field: "regionType",
      cellStyle: {
        textAlign: "center",
        fontSize:"0.8rem",
        justifyContent:"center",
        // padding:"0 28px"
      },
      headerStyle: {


        whiteSpace: "nowrap",
        fontSize:"0.8rem",
        colot:"slateGrey",
        paddingRight:"40px"
      },
      render: (rowData) => {
        switch (rowData.regionType) {
          case 'Urban':
            return <p className="description">شهری</p>
          case 'Village':
            return <p className="description">روستایی</p>
          default:
            return null
        }
        // return <p className="description">{rowData.apiaryUsage}</p>;
      },
    },
    {
      title: "کاربرد",
      field: "apiaryUsage",
      cellStyle: {
        textAlign: "right",
        whiteSpace: "nowrap",
        fontSize:"0.8rem",

      },
      headerStyle: {
        textAlign: "right",
         whiteSpace: "nowrap",
         fontSize:"0.8rem",
         colot:"slateGrey",
         paddingRight:"40px"
      },
      render: (rowData) => {
        switch (rowData.apiaryUsage) {
          case 'Queen':
            return <p className="description">پرورش ملکه</p>
          case 'Royal':
            return <p className="description">ژل رویال</p>
          case 'Honey':
            return <p className="description">تولید عسل</p>
          case 'Other':
              return <p className="description">سایر</p>
          default:
            return null
        }
      },
    },
    {
      title: "وضعیت نامناسب",
      field: "hivesWithBadCondition",
      cellStyle: {
        textAlign: "right",
        fontSize:"0.8rem",
        padding:"0 46px"
      },
      headerStyle: {
        textAlign: "right",
        whiteSpace: "nowrap",
        colot:"slateGrey",
        fontSize:"0.8rem",
      },
      render: (rowData) => {
        return <div className="circleRed">{rowData.hivesWithBadCondition}</div>;
      },
    },
    {
      title: "نیازمند بازدید",
      field: "hivesWithVisitRequired",
      cellStyle: {
        textAlign: "right",
        fontSize:"0.8rem",
        padding:"0 40px"
      },
      headerStyle: {
        textAlign: "right",
        whiteSpace: "nowrap",
        fontSize:"0.8rem",
        colot:"slateGrey"
      },
      render: (rowData) => {
        return <p className="circleYellow">{rowData.hivesWithVisitRequired}</p>;
      },
    },
    {
      title: "وضعیت مناسب",
      field: "hivesWithGoodCondition",
      cellStyle: {
        textAlign: "right",
        fontSize:"0.8rem",
        padding:"0 46px"
      },
      headerStyle: {
        textAlign: "right",
        whiteSpace: "nowrap",
        colot:"slateGrey",
        fontSize:"0.8rem",
      },
      render: (rowData) => {
        return <p className="circleGreen">{rowData.hivesWithGoodCondition}</p>;
      },
    },

    {
      title: "عملیات",
      field: "thumbnail",
      cellStyle: {
        textAlign: "right",
        fontSize:"0.8rem",
      },
      headerStyle: {
        textAlign: "right",
        whiteSpace: "nowrap",
        colot:"slateGrey",
        fontSize:"0.8rem",
        paddingRight:"40px"
      },
      render: (rowData) => {
        return (
          // <Link to={`/app/ApiaryList/${rowData.id}`}>
          <div>
          <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <MoreVertOutlined 
                    variant="contained"
                    {...bindTrigger(popupState)}
                    style={{ cursor: "pointer" }}
                    

                  />

            
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
                      <div style={{ borderRadius: " 16px", padding: " 16px",textDecoration:"none"}}>
                        <Link
                          to={`/app/ApiaryList/${rowData._id}`}
                          onClick={handleClickEdit("body",rowData._id)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            cursor: "pointer",
                            color:"#000" ,
                            textDecoration:"none",
                            color:"#000"
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
                            cursor: "pointer",
                            color:"#000"
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
                            cursor: "pointer",
                            color:"#000"
                          }}
                        >
                          <img
                            src="/assets/move-svgrepo-com.svg"
                            style={{ margin: "0 0px 0 24px" }}
                          />
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
                            color: "red",
                            justifyContent: "flex-start",
                            cursor: "pointer",
                          }}

                          onClick={() => onRowDelete(rowData,popupState)}
                          // onClick={handleDeleteOpen}
                        >
                          <img
                            src="/assets/trash-svgrepo-com-2.svg"
                            style={{ margin: "0 0px 0 24px" }}
                          />
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
    const newData = Apiary.map((row) => {
      // bug
      // delete row.tableData;
      console.log("row", row.tableData);
      return row;
    });
    const workSheet = XLSX.utils.json_to_sheet(newData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "Apiary");
    //Buffer
    let buf = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });
    //Binary string
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
    //Download
    XLSX.writeFile(workBook, "لیست زنبورستان.xlsx");
  };

  const [searched, setSearched] = useState();

  const requestSearch = (searchedVal) => {
    const filteredRows = Apiary.map((rows) => {
      return rows.name;
      // console.log("rows.title",rows)
    }).filter((row) => {
      return row.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setApiary(filteredRows);
    console.log("Apiary", Apiary);
    console.log("filteredRows", filteredRows);
  };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const handleBulkDelete = () => {
    
    if(window.confirm("آیا از حدف این مورد اطمینان دارید؟")){
      setLoading(true)
      selectedRows.map(async(selectedRow)=>{
        console.log("selectedRow",selectedRow._id);
      const response = await axios.delete(`http://185.202.113.165:3000/api/apiary/delete-for-user/${selectedRow._id}`,{
        headers: {
          'token': `${token}` 
        },
      },)

      console.log("response delete",response);
      const updatedData = ApiariesList.filter((row) => !selectedRows.includes(row));
      setApiariesList(updatedData);
      setLoading(false)

      // const newApiary=ApiariesList.filter((item)=>{
      //       return item.id !== selectedRow._id
      // })
      // setApiariesList(newApiary)
      })
      // const response = await axios.delete(`http://188.121.121.225/api/user/${selectedRows[0].id}`)
    // console.log("selectedRows",selectedRows._id);

  }};

  const onRowDelete = async(rowData,popupState) => {

    if(window.confirm("آیا از حدف این مورد اطمینان دارید؟")){
      setLoading(true)
      console.log(rowData._id);
      const response = await axios.delete(`http://185.202.113.165:3000/api/apiary/delete-for-user/${rowData._id}`,{
        headers: {
          'token': `${token}` 
        },
        
      },)
      console.log("response delete2",response);
      const updatedData = ApiariesList.filter((row) => ![rowData].includes(row));
      setApiariesList(updatedData);
      setLoading(false)
      // console.log("rowData23123", rowData);

    popupState.close();
    // window.location.reload()
  }



};
  
  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("جزییات زنبورستان", 20, 10);
    console.log("doc", doc.text);
    doc.autoTable({
      theme: "grid",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: Apiary,
    });
    console.log("Apiary", Apiary);
    console.log("columns", columns);
    // doc.addFileToVFS("Shabnam-normal.ttf", font);
    doc.addFont("Shabnam-normal.ttf", "Shabnam", "normal");
    doc.setFont("font");
    // doc.setFont("Shabnam"); // set custom font
    doc.save("table.pdf");
  };

  // const Status = localStorage.getItem("Status")
  // if(Status){
  //   return <ApiaryList/>
  // }
  // const { loading, error, data } = useQuery(GET_APIARIES)
  // if (loading) return 'صفحه در حال لود شدن است'
  // if (error) return `Error! ${error.message}`

  return (
    <>
    
    {loading?
          <div className={classes.Loading}> <Loading color="orange" /></div>: 
    <div>
      <h2 style={{ color: "rgb(227, 156, 0)",fontSize:"1.2rem"}}>زنبورستان</h2>

      <MaterialTable
        localization={{
          toolbar: {
            searchPlaceholder: "زنبورستان",
          },
        }}
        title=""
        style={{ borderRadius: "25px",marginTop:"32px" }}
        data={ApiariesList}
        columns={columns}
        onSelectionChange={(rows) => setSelectedRows(rows)}
        localization={{
          body: {
            editRow: { deleteText: "آیا میخواهید این سطر را حذف کنید؟" },
          },

          pagination: {
            labelDisplayedRows: "{from}-{to} از {count}",
            labelRowsSelect: "تعداد ردیف",
            labelRowsPerPage: "۱",
            firstAriaLabel: "اولین صقحه",
            previousAriaLabel: "صفحه قبل",
            nextAriaLabel: "صفحه بعد",
            lastAriaLabel: "اخرین صفحه",
          },

          toolbar: {
            nRowsSelected: "{0} مورد انتخاب شد",
            searchPlaceholder: "جستجو زنبورستان",
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
            // checked: Apiary?.includes(rowData.value) ? true: false,
            onClick: () => {
              console.log("clicked asdasda");
              setToolbar(true);
            },
          }),
          search: true,
          searchFieldAlignment: "left",
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
            icon: () => (
              <div>
                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <MoreVertOutlined
                        variant="contained"
                        {...bindTrigger(popupState)}
                        style={{ cursor: "pointer" }}

                      />

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
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              cursor: "pointer",
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
                              cursor: "pointer",
                            }}
                          >
                            <img
                              src="/assets/move-svgrepo-com.svg"
                              style={{ margin: "0 0px 0 24px" }}
                            />
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
                              color: "red",
                              justifyContent: "flex-start",
                              cursor: "pointer",
                            }}
                            onClick={() => handleBulkDelete(selectedRows)}
                          >
                            <img
                              src="/assets/trash-svgrepo-com-2.svg"
                              style={{ margin: "0 8px 0 16px" }}
                              alt=""
                            />
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
              <div onClick={handleClickOpen("body")}>
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
            tooltip: "اضافه کردن زنبورستان",

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
                <span style={{ fontFamily: "Shabnam", fontSize: "1rem" }}>
                  دانلود
                </span>
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
            style: { borderRadius: 12,
               width: "80%",

              },
          }}
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          maxWidth="xl"
        >
          <ApiaryAddList  ApiariesList={ApiariesList} setApiariesList={setApiariesList} onClose={handleClose} refresh={(e)=>refresh(e)}/>
        </Dialog>
      </div>

      <div>
        <Dialog
          PaperProps={{
            style: { borderRadius: 12, width: "70%" },
          }}
          open={openEdit}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          maxWidth="xl"
        >
          <ApiaryUpdateList ApiariesList={ApiariesList} setApiariesList={setApiariesList} onClose={handleClose}/>
        </Dialog>
      </div>

      <div>
        <Modal
          open={openDelete}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box
            sx={{ ...style, width: 1000 }}
            className="downloadFile"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button onClick={() => handleBulkDelete(selectedRows)}>Delete</button>
          </Box>
        </Modal>
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
              width: {
                xs: "350px",
                sm: "500px",
              },

            }}
            className="downloadFile"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div onClick={downloadExcel} className="downloadExcel">
              <img src="/assets/excel-svgrepo-com.svg" />
            </div>
            <div onClick={downloadPdf} className="downloadPdf">
              <img src="/assets/pdf-svgrepo-com (1).svg" />
            </div>
          </Box>
        </Modal>
      </div>
    </div>}
   
    </>
  );
}

export default ApiaryList;
