import {
  Box,
  Button,
  createTheme,
  Dialog,
  Divider,
  Fade,
  Grid,
  IconButton,
  Modal,
  Popover,
  Popper,
  TablePagination,
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
  Close,
  TrainRounded,
  TramRounded,
} from "@material-ui/icons";
import { Link, useHistory, useLocation } from "react-router-dom";
import MaterialTable, { MTableToolbar } from "material-table";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "../../../Iran-Sans-normal";
import ApiaryAddList from "../../../components/Form/ApiaryList/ApiaryAddList";
import ApiaryUpdateList from "../../../components/Form/ApiaryList/ApiaryUpdateList";
import { gql, useQuery } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { getNamedType } from "graphql";
import Loading from "../../../components/Loading/Loading";
import useStyles from "./styles";
import useAuth from "../../hooks/useAuth";
import { axiosInstance } from "../../api/axios";

function ApiaryList() {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openDeleteRow, setOpenDeleteRow] = useState(false);
  const [downloadOpen, setdownloadOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState();
  const [toolbar, setToolbar] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const [status, setStatus] = useState(false);
  const [error, setIserror] = useState(false);
  const [loading, setLoading] = useState(true);
  let location = useLocation();

  const history = useHistory();

  const classes = useStyles();

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);

    setScroll(scrollType);
  };
  const handleClickEdit = (scrollType, id) => () => {
    setOpenEdit(true);
    setScroll(scrollType);
    localStorage.setItem("edit_id", id);
  };
  const handleDeleteOpen = (scrollType) => () => {
    setOpenDelete(true);
    setScroll(scrollType);
  };
  const handleDeleteOpenRow = (scrollType) => () => {
    setOpenDeleteRow(true);
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
    setOpenDeleteRow(false);
    history.push("/app/ApiaryList");
  };



  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "scroll",
    width: 430,
    // bgcolor: "background.paper",
    background: " rgb( 244 244 244)",
    borderRadius: "16px",
    boxShadow: 24,
    paddingLeft: "24px",
    pt: 5,

    pb: 4,
  };
  const [ApiariesList, setApiariesList] = useState([]);
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
      regionVegetation: "mountain",
      apiaryUsage: "other",
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
      regionVegetation: "farm",
      apiaryUsage: "Honey",
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
      regionVegetation: "garden",
      apiaryUsage: "Honey",
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
      regionVegetation: "garden",
      apiaryUsage: "Honey",
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
      regionVegetation: "garden",
      apiaryUsage: "Honey",
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
      regionVegetation: "garden",
      apiaryUsage: "Honey",
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

  const token = localStorage.getItem("id_token");
 
  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const { data: response } = await axiosInstance.get(
          "/apiary/get-for-user",
          {
            headers: {
              token: `${token}`,
            },
          },
        );
 
        setApiariesList(response.data);
        setLoading(false);
      } catch (error) {
        if (error.response?.status === 401) {
          localStorage.clear("id_token");
          console.log(
            "سرور دچار مشکل شده است یا اعتبار توکن به پایان رسیده است" +
              "ApiaryList",
          );
          window.location.reload();
        } else {
          console.log(
            "سرور دچار مشکل شده است یا اعتبار توکن به پایان رسیده است" +
              "ApiaryList",
          );
          history.push("/app/Error");
          window.location.reload();
        }
      }

      // setLoading(false);
    };
    fetchData();
  }, []);



  /////////////////////////////////////////////////////////////////////////////////////////

  // const useStyles = makeStyles({
  //   Button: {
  //     margin: "8px 0px",
  //     fontFamily: "Shabnam",
  //     cursor: "pointer",
  //     width: "5%",
  //   },
  // });

  const columns = [
    {
      title: "زنبورستان",
      field: "name",

      cellStyle: {
        // textAlign:" center !important",

        fontSize: "0.8rem",
        justifyContent: "center",
      },

      headerStyle: {
        textAlign: "right",
        whiteSpace: "nowrap",
        fontSize: "0.8rem",
        color: "rgb( 102, 103, 104)",
        fontWeight: "600",
      },

      render: (rowData) => {

        return (
          <Link
            to={{
              pathname: `/app/ApiaryList/Beehive/${rowData._id}`,
              state: { state: rowData.name },
            }}
            onClick={() => localStorage.setItem("Apiary_id", rowData.name)}
            className="title"
            // style={{ display: "flex" }}
          >
            <p className="title" style={{ transform: "translateX(12px)" }}>
              {rowData.name}
            </p>
          </Link>
        );
      },
    },

    {
      title: " استان",
      field: "province",
      cellStyle: {
        fontSize: "0.8rem",
      },
      headerStyle: {
        textAlign: "right",

        fontSize: "0.8rem",
        color: "rgb( 102, 103, 104)",
        fontWeight: "600",
      },
      render: (rowData) => {
        return <p className="description">{rowData.province}</p>;
      },
    },
    {
      title: " شهر",
      field: "city",
      cellStyle: {
        fontSize: "0.8rem",
      },
      headerStyle: {
        textAlign: "right",

        fontSize: "0.8rem",
        color: "rgb( 102, 103, 104)",
        fontWeight: "600",
      },
      render: (rowData) => {
        return <p className="description">{rowData.city}</p>;
      },
    },
    // {
    //   title: " آب و هوا",
    //   field: "city",
    //   cellStyle: {
    //     fontSize: "0.8rem",
    //   },
    //   headerStyle: {
    //     textAlign: "right",

    //     fontSize: "0.8rem",
    //     color: "rgb( 102, 103, 104)",
    //     fontWeight: "600",
    //   },
    //   render: (rowData) => {
    //     return <p className="description">{rowData.city}</p>;
    //   },
    // },

    // {
    //   title: "پوشش گیاهی منطقه",
    //   field: "regionVegetation",
    //   cellStyle: {
    //     // textAlign:" right !important",

    //     fontSize:"0.8rem",
    //     // justifyContent:"center",
    //   },

    //   headerStyle: {
    //     textAlign: "right",

    //        fontSize:"0.8rem",
    //        color:"rgb( 102, 103, 104)",
    //        fontWeight:"600",

    //   },
    //   render: (rowData) => {
    //     switch (rowData.regionVegetation) {
    //       case 'Garden':
    //         return <p className="description">باغ</p>
    //       case 'Farm':
    //         return <p className="description">مزرعه</p>
    //       case 'Mountain':
    //         return <p className="description">مرتع کوهستانی</p>
    //       case 'Plain':
    //         return <p className="description">دشت</p>
    //         case 'Other':
    //           return <p className="description">سایر</p>
    //       default:
    //         return null
    //     }
    //     // return <p className="description">{rowData.regionVegetation}</p>;
    //   },
    // },
    // {
    //   title: "نوع منطقه",
    //   field: "regionType",
    //   cellStyle: {
    //     textAlign:" center !important",

    //     fontSize:"0.8rem",
    //     justifyContent:"center",
    //   },

    //   headerStyle: {
    //     textAlign: "right",
    //     whiteSpace: "nowrap",
    //        fontSize:"0.8rem",
    //        color:"rgb( 102, 103, 104)",
    //        fontWeight:"600",
    //       // paddingRight:"20px"
    //   },
    //   render: (rowData) => {
    //     switch (rowData.regionType) {
    //       case 'Urban':
    //         return <p className="description">شهری</p>
    //       case 'Village':
    //         return <p className="description">روستایی</p>
    //       default:
    //         return null
    //     }
    //     // return <p className="description">{rowData.apiaryUsage}</p>;
    //   },
    // },
    {
      title: "کاربرد",
      field: "apiaryUsage",
      cellStyle: {
        textAlign: " center !important",
        whiteSpace: "nowrap",
        transform: "translateX(10px)",
        fontSize: "0.8rem",
        justifyContent: "center",
      },

      headerStyle: {
        textAlign: "right",
        whiteSpace: "nowrap",
        fontSize: "0.8rem",
        color: "rgb( 102, 103, 104)",
        fontWeight: "600",
        //  paddingRight:"20px"
      },
      lookup: {
        Queen: "پرورش ملکه",
        Royal: "ژل رویال",
        Honey: "تولید عسل",
        Other: "سایر",
      },

      // render: (rowData) => {
      //   switch (rowData.apiaryUsage) {
      //     case 'Queen':
      //       return <p className="description">پرورش ملکه</p>
      //     case 'Royal':
      //       return <p className="description">ژل رویال</p>
      //     case 'Honey':
      //       return <p className="description">تولید عسل</p>
      //     case 'Other':
      //         return <p className="description">سایر</p>
      //     default:
      //       return null
      //   }
      // },
    },
    {
      title: "تعداد کندو",
      field: "hives.length",
      cellStyle: {
        textAlign: "right",
        fontSize: "0.8rem",
      },
      headerStyle: {
        textAlign: "right",

        fontSize: "0.8rem",
        color: "rgb( 102, 103, 104)",
        fontWeight: "600",
      },
      render: (rowData) => {
        return <p className="description">{rowData?.hives?.length?<div>{rowData?.hives?.length}</div>:<div>بدون کندو</div>}</p>;      },
    },
    {
      title: "وضعیت نامناسب",
      field: "hivesWithBadCondition",
      cellStyle: {
        textAlign: "center !important",
        fontSize: "0.8rem",

        // margin:"0 auto"
      },
      headerStyle: {
        // textAlign: "center !important",
        // whiteSpace: "nowrap",
        color: "rgb( 102, 103, 104)",
        fontWeight: "600",
        fontSize: "0.8rem",
        // paddingRight:"20px"
      },
      render: (rowData) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "-20px",
            }}
          >
            <div className="circleRed">
              {rowData.hivesWithBadCondition ? (
                <div>{rowData.hivesWithBadCondition}</div>
              ) : (
                <div>0</div>
              )}
            </div>
          </div>
        );
        // <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}><div className="circleRed">{rowData.hivesWithBadCondition}</div></div>
      },
    },
    {
      title: "نیازمند بازدید",
      field: "hivesWithVisitRequired",
      cellStyle: {
        textAlign: "right",
        fontSize: "0.8rem",
        padding: "0 30px",
      },
      headerStyle: {
        textAlign: "right",
        // whiteSpace: "nowrap",
        fontSize: "0.8rem",
        color: "rgb( 102, 103, 104)",
        fontWeight: "600", // paddingRight:"20px"
      },
      render: (rowData) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "-20px",
            }}
          >
            <div className="circleYellow">
              {rowData.hivesWithVisitRequired ? (
                <div>{rowData.hivesWithVisitRequired}</div>
              ) : (
                <div>0</div>
              )}
            </div>
          </div>
        );
      },
    },
    {
      title: "وضعیت مناسب",
      field: "hivesWithGoodCondition",
      cellStyle: {
        textAlign: "right",
        fontSize: "0.8rem",
        padding: "0 30px",
      },
      headerStyle: {
        textAlign: "right",
        // whiteSpace: "nowrap",
        fontWeight: "600", // paddingRight:"20px"
        fontSize: "0.8rem",
        // paddingRight:"20px"
      },
      render: (rowData) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "-20px",
            }}
          >
            <div className="circleGreen">
              {rowData.hivesWithGoodCondition ? (
                <div>{rowData.hivesWithGoodCondition}</div>
              ) : (
                <div>0</div>
              )}
            </div>
          </div>
        );
      },
    },

    {
      title: "عملیات",
      field: "thumbnail",
      cellStyle: {
        textAlign: " center !important",
        fontSize: "0.8rem",
        justifyContent: "center",
      },

      headerStyle: {
        textAlign: "center !important",
        whiteSpace: "nowrap",
        fontSize: "0.8rem",
        fontWeight: "600", // paddingRight:"20px"
        paddingRight: "20px",
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
                    <div
                      style={{
                        borderRadius: " 16px",
                        padding: " 16px",
                        textDecoration: "none",
                      }}
                    >
                      <Link
                        to={{
                          pathname: `/app/ApiaryList/${rowData._id}`,
                          state: {
                            modal: true,
                            background: location,
                            id: rowData._id,
                          },
                        }}
                        onClick={handleClickEdit("body", rowData._id)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          cursor: "pointer",
                          color: "#000",
                          textDecoration: "none",
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
                          color: "#000",
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
                          color: "#000",
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
                        onClick={handleDeleteOpenRow()}
                        // onClick={handleDeleteOpen}
                      >
                        <img
                          src="/assets/trash-svgrepo-com-2.svg"
                          style={{ margin: "0 0px 0 24px" }}
                        />
                        حذف
                      </div>
                      <Dialog
                        PaperProps={{
                          style: {
                            borderRadius: 12,
                            width: "24%",
                            overflowY: "hidden",
                          },
                        }}
                        open={openDeleteRow}
                        onClose={handleClose}
                        // scroll={scroll}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                        maxWidth="xl"
                        style={{ background: "rgba(0,0,0,0.6)" }}
                      >
                        <div
                          style={{
                            padding: "48px 16px",
                            textAlign: "center",
                            fontFamily: "Shabnam",
                          }}
                        >
                          <div style={{ fontWeight: "600" }}>
                            آیا میخواهید زنبورستان انتخاب شده را حذف نمایید؟
                          </div>
                          <div
                            style={{
                              marginTop: "32px",
                              display: "flex",
                              justifyContent: "space-around",
                              alignItems: "center",
                            }}
                          >
                            <Button
                              onClick={() => onRowDelete(rowData, popupState)}
                              className={classes.addButton}
                            >
                              بله
                            </Button>
                            <Button
                              onClick={handleClose}
                              className={classes.cancelButton}
                            >
                              خیر
                            </Button>
                          </div>
                        </div>
                      </Dialog>
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
    const regionVegetation = (e) => {
      switch (e) {
        case "Garden":
          return "باغ";
        case "Farm":
          return "مزرعه";
        case "Mountain":
          return "مرتع کوهستانی";
        case "Plain":
          return "دشت";
        case "Other":
          return "سایر";
        default:
          return null;
      }
    };
    const regionType = (e) => {

      switch (e) {
        case "Urban":
          return "شهری";
        case "Village":
          return "روستایی";
        default:
          return null;
      }
    };
    const apiaryUsage = (e) => {
  
      switch (e) {
        case "Queen":
          return "پرورش ملکه";
        case "Royal":
          return "ژل رویال";
        case "Honey":
          return "تولید عسل";
        case "Other":
          return "سایر";
        default:
          return null;
      }
    };

    const newData = ApiariesList.map((row) => {
      // bug
      // delete row.tableData;



      return {
        زنبورستان: row.name,
        " پوشش گیاهی منطقه": regionVegetation(row.regionVegetation),
        "نوع منطقه": regionType(row.regionType),
        استان: row.name,
        شهر: row.name,
        کاربرد: apiaryUsage(row.apiaryUsage),
        "وضعیت نامناسب": row.hivesWithBadCondition,
        "نیازمند بازدید": row.hivesWithGoodCondition,
        "وضعیت مناسب": row.hivesWithVisitRequired,
      };
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

  };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const handleBulkDelete = () => {
    setLoading(true);
    selectedRows.map(async (selectedRow) => {

      const response = await axiosInstance.delete(
        `/apiary/delete-for-user/${selectedRow._id}`,
        {
          headers: {
            token: `${token}`,
          },
        },
      );

 
      const updatedData = ApiariesList.filter(
        (row) => !selectedRows.includes(row),
      );
      setApiariesList(updatedData);
      setLoading(false);
      setOpenDelete(false);

      // const newApiary=ApiariesList.filter((item)=>{
      //       return item.id !== selectedRow._id
      // })
      // setApiariesList(newApiary)
    });
    // const response = await axios.delete(`http://188.121.121.225/api/user/${selectedRows[0].id}`)
    // console.log("selectedRows",selectedRows._id);
  };

  const onRowDelete = async (rowData, popupState) => {
    setLoading(true);
    const response = await axiosInstance.delete(
      `/apiary/delete-for-user/${rowData._id}`,
      {
        headers: {
          token: `${token}`,
        },
      },
    );
    const updatedData = ApiariesList.filter((row) => ![rowData].includes(row));
    setApiariesList(updatedData);
    setLoading(false);
    setOpenDeleteRow(false);
    popupState.close();
    // window.location.reload()
  };

  async function loadFont(src, name, style, weight) {
    const fontBytes = await fetch(src).then((res) => res.arrayBuffer());

    var filename = src.split("\\").pop().split("/").pop();
    var base64String = btoa(
      String.fromCharCode.apply(null, new Uint8Array(fontBytes)),
    );

    var callAddFont = function () {
      this.addFileToVFS(filename, base64String);
      this.addFont(filename, name, style, weight);
    };
    jsPDF.API.events.push(["addFonts", callAddFont]);
  }

  const downloadPdf = async () => {
    const doc = new jsPDF();
    doc.autoTable({
      theme: "grid",
      // columns: cols,
      // body: body,
      headStyles: { font: "Iran-Sans", fontStyle: "normal", halign: "right" },

   
  })
   doc.save("table.pdf");
  }

  if (status) {
    return <ApiaryList />;
  } else {
    console.log("status is false");
  }
  return (
    <>
      {loading ? (
        <div className={classes.Loading}>
          {" "}
          <Loading color="orange" />
        </div>
      ) : (
        <div className={classes.container}>
          <h2 style={{ color: "rgb(227, 156, 0)", fontSize: "1.2rem" }}>
            زنبورستان
          </h2>

          <MaterialTable
            localization={{
              toolbar: {
                searchPlaceholder: "زنبورستان",
              },
            }}
            title=""
            style={{ borderRadius: "25px", marginTop: "32px" }}
            data={ApiariesList}
            columns={columns}
            components={{
              Toolbar: (props) => (
                <>
                  {selectedRows?.length == 0 ||
                  selectedRows?.length == undefined ? (
                    <>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "8px 0px",
                        }}
                      >
                        <div style={{ width: "100%" }}>
                          <MTableToolbar {...props} />
                        </div>
                        <Grid style={{ paddingLeft: "32px" }}>
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
                              boxShadow: "0px 3px 6px 0px rgba(0,0,0,0.16)",

                              // marginLeft: "32px",
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "Shabnam",
                                fontSize: "1rem",
                              }}
                            >
                              دانلود
                            </span>
                            <img
                              src="/assets/download-arrow-svgrepo-com.svg"
                              style={{ marginRight: "8px" }}
                            />
                          </div>
                        </Grid>
                      </div>
                      <Divider style={{ background: "rgb( 244 244 244)" }} />
                    </>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        background: "#fff4df",
                      }}
                    >
                      <div>
                        <MTableToolbar {...props} />
                      </div>

                      <div style={{ marginLeft: "16px" }}>
                        <PopupState
                          variant="popover"
                          popupId="demo-popup-popover"
                        >
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
                                  style={{
                                    borderRadius: " 16px",
                                    padding: " 16px",
                                  }}
                                >
                                  {/* <Link
                                to={`/app/ApiaryList/${selectedRows}`}
                                onClick={handleClickEdit("body")}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  cursor: "pointer",
                                }}
                              >
                                <Edit style={{ marginLeft: "16px" }} />
                               s ویرایش
                              </Link>
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
                                      cursor: "pointer",
                                    }}
                                  >
                                    <Share style={{ marginLeft: "16px" }} />
                                    اشتراک گذاری
                                  </div>
                                  <hr
                                    style={{
                                      borderTop:
                                        "1px solid rgb( 240, 240, 240)",
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
                                      borderTop:
                                        "1px solid rgb( 240, 240, 240)",
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
                                    onClick={handleDeleteOpen()}
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
                    </div>
                  )}
                </>
              ),
              Pagination: (props) => (
                <>
                  {/* <div>salam</div> */}
                  <TablePagination
                    {...props}
                    labelRowsPerPage={
                      <div style={{ border: "2px solid red" }}>sdcs</div>
                    }
                    labelDisplayedRows={(row) => (
                      <div style={{ border: "2px solid red" }}>dcsd</div>
                    )}
                    showLastButton={true}
                    SelectProps={{
                      style: {
                        fontSize: 14,
                        border: "2px soldi red",
                      },
                    }}
                  />
                </>
              ),
            }}
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
                searchPlaceholder: "جستجو ",
                addRemoveColumns: "اضافه یا حذف کردن ستون‌ها",
                showColumnsTitle: "اضافه یا حذف کردن ستون‌ها",
              },

              header: {
                actions: "عملیات",
              },

              body: {
                emptyDataSourceMessage: "موردی جهت نمایش وجود ندارد.",
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
             
                  setToolbar(true);
                },
              }),
              search: true,
              searchFieldAlignment: "left",
              toolbarButtonAlignment: "left",

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
              // {
              //   icon: () => (
              //     <div>
              //       <PopupState variant="popover" popupId="demo-popup-popover">
              //         {(popupState) => (
              //           <div>
              //             <MoreVertOutlined
              //               variant="contained"
              //               {...bindTrigger(popupState)}
              //               style={{ cursor: "pointer" }}
              //             />

              //             <Popover
              //               {...bindPopover(popupState)}
              //               anchorOrigin={{
              //                 vertical: "bottom",
              //                 horizontal: "center",
              //               }}
              //               transformOrigin={{
              //                 vertical: "top",
              //                 horizontal: "center",
              //               }}
              //             >
              //               <div
              //                 style={{
              //                   borderRadius: " 16px",
              //                   padding: " 16px",
              //                 }}
              //               >
              //                 <div
              //                   style={{
              //                     display: "flex",
              //                     alignItems: "center",
              //                     justifyContent: "flex-start",
              //                     cursor: "pointer",
              //                   }}
              //                 >
              //                   <Share style={{ marginLeft: "16px" }} />
              //                   اشتراک گذاری
              //                 </div>
              //                 <hr
              //                   style={{
              //                     borderTop: "1px solid rgb( 240, 240, 240)",
              //                     height: "2px",
              //                   }}
              //                 />
              //                 <div
              //                   style={{
              //                     display: "flex",
              //                     alignItems: "center",
              //                     justifyContent: "flex-start",
              //                     cursor: "pointer",
              //                   }}
              //                 >
              //                   <img
              //                     src="/assets/move-svgrepo-com.svg"
              //                     style={{ margin: "0 0px 0 24px" }}
              //                   />
              //                   انتقال
              //                 </div>
              //                 <hr
              //                   style={{
              //                     borderTop: "1px solid rgb( 240, 240, 240)",
              //                     height: "2px",
              //                   }}
              //                 />
              //                 <div
              //                   style={{
              //                     display: "flex",
              //                     alignItems: "center",
              //                     color: "red",
              //                     justifyContent: "flex-start",
              //                     cursor: "pointer",
              //                   }}
              //                   onClick={() => handleBulkDelete(selectedRows)}
              //                 >
              //                   <img
              //                     src="/assets/trash-svgrepo-com-2.svg"
              //                     style={{ margin: "0 8px 0 16px" }}
              //                     alt=""
              //                   />
              //                   حذف
              //                 </div>
              //               </div>
              //             </Popover>
              //           </div>
              //         )}
              //       </PopupState>
              //     </div>
              //   ),

              //   // isFreeAction: true,
              // },

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
                        boxShadow: "0px 3px 6px 0px rgba(0,0,0,0.16)",
                      }}
                      src="/assets/Group 182.svg"
                    />
                  </div>
                ),
                tooltip: "اضافه کردن زنبورستان",

                isFreeAction: true,
              },

              // {
              //   icon: () => (
              //     <div
              //       onClick={downloadFile}
              //       style={{
              //         backgroundColor: "black",
              //         cursor: "pointer",
              //         color: "white",
              //         display: "flex",
              //         alignItems: "center",
              //         justifyContent: "center",
              //         borderRadius: "8px",
              //         padding: "8px",
              //         boxShadow:"0px 3px 6px 0px rgba(0,0,0,0.16)"
              //         // marginLeft: "32px",
              //       }}
              //     >
              //       <span style={{ fontFamily: "Shabnam", fontSize: "1rem" }}>
              //         دانلود
              //       </span>
              //       <img
              //         src="/assets/download-arrow-svgrepo-com.svg"
              //         style={{ marginRight: "8px" }}
              //       />
              //     </div>
              //   ),
              //   tooltip: "دانلود",
              //   isFreeAction: true,
              // },
            ]}
          />

          <div>
            <Dialog
              PaperProps={{
                style: { borderRadius: 12, width: "60%", overflowY: "hidden" },
              }}
              open={open}
              onClose={handleClose}
              scroll={scroll}
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
              maxWidth="xl"
            >
              <ApiaryAddList
                setStatus={setStatus}
                status={status}
                ApiariesList={ApiariesList}
                setApiariesList={setApiariesList}
                onClose={handleClose}
         
              />
            </Dialog>
          </div>

          <div>
            <Dialog
              PaperProps={{
                style: { borderRadius: 12, width: "60%", overflowY: "hidden" },
              }}
              open={openEdit}
              onClose={handleClose}
              scroll={scroll}
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
              maxWidth="xl"
            >
              <ApiaryUpdateList
                ApiariesList={ApiariesList}
                setApiariesList={setApiariesList}
                setStatus={setStatus}
                onClose={handleClose}
              />
            </Dialog>
          </div>

          <Dialog
            PaperProps={{
              style: { borderRadius: 12, width: "24%", overflowY: "hidden" },
            }}
            open={openDelete}
            onClose={handleClose}
            // scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            maxWidth="xl"
            style={{ background: "rgba(0,0,0,0.6)" }}
          >
            <div
              style={{
                padding: "48px 16px",
                textAlign: "center",
                fontFamily: "Shabnam",
              }}
            >
              <div style={{ fontWeight: "600" }}>
                آیا میخواهید زنبورستان انتخاب شده را حذف نمایید؟
              </div>
              <div
                style={{
                  marginTop: "32px",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={() => handleBulkDelete(selectedRows)}
                  className={classes.addButton}
                >
                  بله
                </Button>
                <Button onClick={handleClose} className={classes.cancelButton}>
                  خیر
                </Button>
              </div>
            </div>
          </Dialog>

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
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <div
                  onClick={handleClose}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    cursor: "pointer",
                  }}
                >
                  <Close />
                </div>
                <div onClick={downloadPdf} className="downloadPdf">
                  <img
                    src="/assets/pdf-svgrepo-com (1).svg"
                    width="100px"
                    height="100px"
                  />
                </div>
                <div onClick={downloadExcel} className="downloadPdf">
                  <img
                    src="/assets/excel-svgrepo-com.svg"
                    width="100px"
                    height="100px"
                  />
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      )}
    </>
  );
}

export default ApiaryList;
