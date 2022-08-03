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
import {
  Close,
  Edit,
  Edit as EditIcon,
  MoreVertOutlined,
  NavigateBefore,
  Share,
} from "@material-ui/icons";
import { Link, useParams, useHistory } from "react-router-dom";
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
import { useLocation } from "react-router-dom";
import NutritionStepper from "./Questionnaire/NutritionStepper";
import CureHiveStepper from "./Questionnaire/CureHiveStepper";
import CatchHoneyStepper from "./Questionnaire/CatchHoneyStepper";
import Loading from "../../../components/Loading/Loading";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Hive() {
  const history = useHistory();

  const location = useLocation();
  // window.localStorage.getItem(location.state.rowDatas)
  // const rowDatas= window.localStorage.setItem()
  // console.log("location",location)
  // console.log("rowDatanew",rowDatas)
  const [openNutrition, setOpenNutrition] = useState(false);
  const [openCatchHoney, setopenCatchHoney] = useState(false);
  const [openCureHive, setOpenCureHive] = useState(false);
  const [downloadOpen, setdownloadOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [openDeleteRow, setOpenDeleteRow] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  let { id } = useParams();
  localStorage.setItem("Apiaries_id", id);
  const [selectedRows, setSelectedRows] = useState();

  const [toolbar, setToolbar] = useState(false);
  const [Hive, setHive] = useState("all");
  const [scroll, setScroll] = useState("paper");
  const handleClickOpen = (scrollType) => () => {
    // setOpen(true);

    setScroll(scrollType);
  };
  const handleNutrition = (popupState) => {
    setOpenNutrition(true);
    popupState.close();
  };
  const handleCatchHoney = (popupState) => {
    setopenCatchHoney(true);
    popupState.close();
  };
  const handleCureHive = (popupState) => {
    setOpenCureHive(true);
    popupState.close();
  };

  const handleDeleteOpen = (scrollType) => () => {
    setOpenDelete(true);
    setScroll(scrollType);
  };
  const handleDeleteOpenRow = (scrollType) => () => {
    setOpenDeleteRow(true);
    setScroll(scrollType);
  };
  const handleClose = () => {
    setdownloadOpen(false);
    setOpenNutrition(false);
    setopenCatchHoney(false);
    setOpenCureHive(false);
    setOpenDeleteRow(false);
    setOpenDelete(false);
  };

  useEffect(() => {
    console.log("Hive", Hive);
  }, [Hive]);

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
    pt: 4,
    px: 6,
    pb: 4,
  };
  const [Company, setCompany] = useState([
    {
      _id: "1",
      title: "کندوی 1",
      type: "نوع کندو",
      queenType: "نژاد ملکه",
      dateCreated: "23/09/1400",
      active: 1,
      isCheckListDone: 1,
      isHiveSick: 1,
      hasQueen: 1,
    },
    {
      _id: "2",
      title: "کندوی 2",
      type: "نوع کندو",
      queenType: "نژاد ملکه",
      dateCreated: "23/09/1400",
      active: 0,
      isCheckListDone: 0,
      isHiveSick: 0,
      hasQueen: 0,
    },
  ]);
  const [hiveTable, setHiveTable] = useState([]);
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
  const Apiary_id = localStorage.getItem("Apiary_id");
  console.log("Apiary_id", Apiary_id);
  const token = localStorage.getItem("id_token");
  console.log("token", token);

  useEffect(() => {
    const fetchData = async (index) => {
      console.log("salam id", index);
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `http://185.202.113.165:3000/api/hive/get-by-apiary/${id}`,
          {
            headers: {
              token: `${token}`,
            },
          },
        );
        console.log("show response hive", response.data);
        setHiveTable(response.data);
        // const dataOfHive = {
        //   title: `${response?.data?.title}`,
        //   dateCreated: `${response.data?.dateCreated}`,
        //   location: `${response.data?.location}`,
        //   queenType: `${response.data?.location}`,
        //   type: `${response.data?.type}`,
        // };

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
          // history.push("/app/Error")
          // window.location.reload()
        }
      }

      // setLoading(false);
    };
    fetchData();
  }, []);

  ////////////////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////////////////////////////////////
  const [filter, setFilter] = useState([]);
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
          // history.push("/app/Error")
          window.location.reload();
        }
      }

      // setLoading(false);
    };
    fetchData();
  }, []);

  ////////////////////////////////////////////////
  console.log(Company);
  const columns = [
    {
      title: "نام کندو",
      field: "title",
      cellStyle: {
        textAlign: " center !important",
        transform: "translateX(10px)",
        fontSize: "0.8rem",
        justifyContent: "center",
      },

      headerStyle: {
        textAlign: "right",
        whiteSpace: "nowrap",
        fontSize: "0.8rem",
        color: "rgb( 102, 103, 104)",
      },

      render: (rowData) => {
        console.log("rowData", rowData);

        return (
          <Link
            to={`/app/ApiaryList/Beehive/${id}/${rowData._id}`}
            style={{
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
            }}
            className="description"
            onClick={() => {
              localStorage.setItem("Hive_name", rowData.title);
              localStorage.setItem("dataOfHive",JSON.stringify(rowData));  

            }}
          >
            {rowData.title}
          </Link>
        );
      },
    },

    {
      title: " نوع کندو",
      field: "type",
      cellStyle: {
        textAlign: " right !important",

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
      render: (rowData) => {
        switch (rowData.type) {
          case "Langestrot":
            return <p className="description">لانگستروت</p>;
          case "Dadanet":
            return <p className="description">دادانت</p>;
          case "Aquarium":
            return <p className="description">آکواریومی</p>;
          case "Other":
            return <p className="description">سایر</p>;
          default:
            return null;
        }
      },
    },

    {
      title: " نژاد ملکه",
      field: "queenType",
      cellStyle: {
        textAlign: " center !important",

        fontSize: "0.8rem",
        justifyContent: "center",
      },

      headerStyle: {
        textAlign: "right",
        whiteSpace: "nowrap",
        fontSize: "0.8rem",
        colot: "slateGrey",
      },
      render: (rowData) => {
        switch (rowData.queenType) {
          case "Native":
            return <p className="description">بومی</p>;
          case "Karnika":
            return <p className="description">کارنیکا</p>;
          case "Italian":
            return <p className="description">ایتالیایی</p>;
          case "Caucasian":
            return <p className="description">قفقازی</p>;
          case "Other":
            return <p className="description">سایر</p>;
          default:
            return null;
        }
      },
    },
    {
      title: "تاریخ ایجاد",
      field: "dateCreated",
      cellStyle: {
        textAlign: " center !important",

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
        return <p className="description">{rowData.dateCreated}</p>;
      },
    },
    {
      title: "وضعیت برد",
      field: "active",
      cellStyle: {
        textAlign: " center !important",

        fontSize: "0.8rem",
        justifyContent: "center",
        // paddingRight:"8px"
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
          <div className={rowData.active ? "statusActive" : "statusDeactive"}>
            {rowData.active ? "فعال" : "غیرفعال"}
          </div>
        );
      },
    },
    {
      title: "کار",
      field: "isCheckListDone",
      cellStyle: {
        textAlign: " left !important",
        transform: "translateX(12px)",
        fontSize: "0.8rem",
        // justifyContent:"flex-end",
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
          <div>
            {rowData.isCheckListDone ? (
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
      field: "isHiveSick",
      cellStyle: {
        textAlign: " center !important",
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
        // paddingRight:"20px"
      },
      render: (rowData) => {
        return (
          <div className={rowData.isHiveSick ? "sickActive" : "sickDeactive"}>
            {rowData.isHiveSick ? (
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
      field: "hasQueen",
      cellStyle: {
        textAlign: " center !important",
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
        // paddingRight:"20px"
      },
      render: (rowData) => {
        return (
          <div className={rowData.hasQueen ? "jobActive" : "jobDeactive"}>
            {rowData.hasQueen ? (
              <img src="/assets/Component 24 – 5.svg" />
            ) : (
              <img src="/assets/Component 24 – 6.svg" />
            )}
          </div>
        );
      },
    },
    {
      title: "عملیات",
      field: "action",
      cellStyle: {
        textAlign: " center !important",
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
        // paddingRight:"20px"
      },
      render: (rowData) => {
        return (
          // <Link to={`/app/CompanyList/${rowData.id}`}>
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
                    <div style={{ borderRadius: " 16px", padding: " 16px" }}>
                      <div
                        onClick={() => handleCureHive(popupState)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          cursor: "pointer",
                        }}
                      >
                        <img
                          src="/assets/medicine-svgrepo-com.svg"
                          style={{ margin: "0 0px 0 24px" }}
                        />
                        درمان
                      </div>
                      <hr
                        style={{
                          borderTop: "1px solid rgb( 240, 240, 240)",
                          height: "2px",
                        }}
                      />
                      <div
                        onClick={() => handleNutrition(popupState)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          cursor: "pointer",
                        }}
                      >
                        <img
                          src="/assets/flower-svgrepo-com.svg"
                          style={{ margin: "0 0px 0 24px" }}
                        />
                        تغذیه
                      </div>
                      <hr
                        style={{
                          borderTop: "1px solid rgb( 240, 240, 240)",
                          height: "2px",
                        }}
                      />
                      <div
                        onClick={() => handleCatchHoney(popupState)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          cursor: "pointer",
                        }}
                      >
                        <img
                          src="/assets/honey-svgrepo-com.svg"
                          style={{ margin: "0 0px 0 24px" }}
                        />
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
                          cursor: "pointer",
                        }}
                      >
                        <img
                          src="/assets/move-svgrepo-com.svg"
                          style={{ margin: "0 0px 0 24px" }}
                        />
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
                          cursor: "pointer",
                        }}
                      >
                        <img
                          src="/assets/noun-migration-2781863.svg"
                          style={{ margin: "0 0px 0 24px" }}
                        />
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
                        onClick={handleDeleteOpenRow()}
                      >
                        <img
                          src="/assets/trash-svgrepo-com-2.svg"
                          style={{ margin: "0 8px 0 16px" }}
                        />
                        حذف
                      </div>
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
                          آیا میخواهید کندو انتخاب شده را حذف نمایید؟
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
    const type = (e) => {
      console.log("eeeee", e);
      switch (e) {
        case "Langestrot":
          return "لانگستروت";
        case "Dadanet":
          return "دادانت";
        case "Aquarium":
          return "آکواریومی";
        case "Other":
          return "سایر";
        default:
          return null;
      }
    };
    const queenType = (e) => {
      console.log("eeeee", e);
      switch (e) {
        case "Native":
          return "بومی";
        case "Karnika":
          return "کارنیکا";
        case "Italian":
          return "ایتالیایی";
        case "Caucasian":
          return "قفقازی";
        case "Other":
          return "سایر";
        default:
          return null;
      }
    };

    const newData = hiveTable.map((row) => {
      // bug
      // delete row.tableData;
      console.log("row", row);
      console.log("name", row.name);

      console.log("regionType", row.regionType);
      console.log("123413412342", type(row.type));
      console.log("123413412342", queenType(row.queenType));
      return {
        "نام کندو": row.title,
        " نوع کندو": type(row.type),
        "نژاد ملکه": queenType(row.queenType),
        "تاریخ ایجاد": row.dateCreated,
        "وضعیت برد": row.active,
        کار: row.isCheckListDone,
        بیماری: row.isHiveSick,
        ملکه: row.hasQueen,
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
    XLSX.writeFile(workBook, "لیست کندوها.xlsx");
  };

  const [searched, setSearched] = useState();
  ////////////////////////////////////////////////////////////////////
  const changeApiary = async (index) => {
    console.log("salam id", index);
    setLoading(true);
    try {
      const { data: response } = await axios.get(
        `http://185.202.113.165:3000/api/hive/get-by-apiary/${index}`,
        {
          headers: {
            token: `${token}`,
          },
        },
      );
      console.log("show response hive", response.data);
      setHiveTable(response.data);
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
        // history.push("/app/Error")
        // window.location.reload()
      }
    }
  };

  ///////////////////////////////////////////////////////////////////////////////
  const requestSearch = (searchedVal) => {
    const filteredRows = hiveTable
      .map((rows) => {
        return rows.name;
        // console.log("rows.title",rows)
      })
      .filter((row) => {
        return row.toLowerCase().includes(searchedVal.toLowerCase());
      });
    setHiveTable(filteredRows);
    console.log("hiveTable", hiveTable);
    console.log("filteredRows", filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };
  const handleBulkDelete = async () => {
    if (window.confirm("آیا از حدف این مورد اطمینان دارید؟")) {
      // const response = await axios.delete(`https://sdfsdf/${selectedRows[0].id}`)
      console.log("selectedRows", selectedRows[0].id);

      const updatedData = hiveTable.filter(
        (row) => !selectedRows.includes(row),
      );
      setHiveTable(updatedData);
    }
  };

  const onRowDelete = async (rowData) => {
    if (window.confirm("آیا از حدف این مورد اطمینان دارید؟")) {
      // const response = await axios.delete(`https://sdfsdf/${rowData.id}`)
      console.log("rowData", rowData.id);
      const updatedData = hiveTable.filter((row) => ![rowData].includes(row));
      setHiveTable(updatedData);
    }
  };

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("جزییات زنبورستان", 20, 10);
    doc.autoTable({
      theme: "grid",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: hiveTable,
    });
    doc.setFont("Iran-Sans"); // set custom font
    doc.save("table.pdf");
  };
  const add = () => {
    return console.log("click");
  };

  localStorage.setItem("apiaryIdClick", id);
  console.log("id ro bebin ", id);
  const breadcrumbs = [
    <Link
      to="/app/ApiaryList"
      key="1"
      style={{ textDecoration: "none", cursor: "pointer" }}
    >
      {/* <Title key="2" title="زنبورستان"/> */}
      <p
        style={{
          color: "rgb(227, 156, 0)",
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
      >
        زنبورستان
      </p>
    </Link>,

    <p
      style={{
        color: "rgb(227, 156, 0)",
        fontWeight: "bold",
        fontSize: "1.2rem",
      }}
    >
      {Apiary_id}
    </p>,
  ];

  return (
    <>
      {loading ? (
        <div className={classes.Loading}>
          {" "}
          <Loading color="orange" />
        </div>
      ) : (
        <div className={classes.container}>
          <Breadcrumbs
            separator={
              <NavigateBefore
                fontSize="large"
                style={{ color: "rgb(227, 156, 0)" }}
              />
            }
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
            style={{ borderRadius: "25px", marginTop: "16px" }}
            data={hiveTable}
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
                searchPlaceholder: "جستجو ",
                addRemoveColumns:"اضافه یا حذف کردن ستون‌ها",
                showColumnsTitle:"اضافه یا حذف کردن ستون‌ها",
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
                  <Select
                    labelId="demo-simple-select-label"
                    variant="outlined"
                    Id="demo-simple-select"
                    placeholder="زنبورستان "
                    style={{ width: "auto" }}
                    defaultValue={Apiary_id}
                    //  defaultValue={Hive}
                    className={classes.inputSelect}
                    onChange={(e) => setHive(e.target.value)}
                  >
                    {filter.map((el) => [
                      <MenuItem
                        onClick={() => changeApiary(el._id)}
                        value={el.name}
                      >
                        <Link
                          to={`/app/ApiaryList/Beehive/${el._id}`}
                          style={{
                            color: "#000",
                            textDecoration: "none",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            localStorage.setItem("Apiary_id", el.name)
                          }
                        >
                          {el.name}
                        </Link>
                      </MenuItem>,
                    ])}
                  </Select>
                ),
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
                              <div
                                onClick={() => handleCureHive(popupState)}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  cursor: "pointer",
                                }}
                              >
                                <img
                                  src="/assets/medicine-svgrepo-com.svg"
                                  style={{ margin: "0 0px 0 24px" }}
                                />
                                درمان
                              </div>
                              <hr
                                style={{
                                  borderTop: "1px solid rgb( 240, 240, 240)",
                                  height: "2px",
                                }}
                              />
                              <div
                                onClick={() => handleNutrition(popupState)}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  cursor: "pointer",
                                }}
                              >
                                <img
                                  src="/assets/flower-svgrepo-com.svg"
                                  style={{ margin: "0 0px 0 24px" }}
                                />
                                تغذیه
                              </div>
                              <hr
                                style={{
                                  borderTop: "1px solid rgb( 240, 240, 240)",
                                  height: "2px",
                                }}
                              />
                              <div
                                onClick={() => handleCatchHoney(popupState)}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  cursor: "pointer",
                                }}
                              >
                                <img
                                  src="/assets/honey-svgrepo-com.svg"
                                  style={{ margin: "0 0px 0 24px" }}
                                />
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
                                  cursor: "pointer",
                                }}
                              >
                                <img
                                  src="/assets/move-svgrepo-com.svg"
                                  style={{ margin: "0 0px 0 24px" }}
                                />
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
                                  cursor: "pointer",
                                }}
                              >
                                <img
                                  src="/assets/noun-migration-2781863.svg"
                                  style={{ margin: "0 0px 0 24px" }}
                                />
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
                                // onClick={() => handleBulkDelete(selectedRows)}
                                onClick={handleDeleteOpen()}
                              >
                                <img
                                  src="/assets/trash-svgrepo-com-2.svg"
                                  style={{ margin: "0 8px 0 16px" }}
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

              // {
              //   icon: () => (
              //     <div onClick={handleClickOpen("body")}>
              //       <img
              //         style={{
              //           backgroundColor: "rgb( 227, 156, 0)",

              //           color: "#000",
              //           padding: "8px",
              //           display: "flex",
              //           alignItems: "center",
              //           justifyContent: "center",
              //           borderRadius: "8px",
              //           boxShadow: "0px 3px 6px 0px rgba(0,0,0,0.16)",
              //         }}
              //         src="/assets/Group 182.svg"
              //       />
              //     </div>
              //   ),

              //   onClick: () => add(),
              //   isFreeAction: true,
              // },
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
                      boxShadow: "0px 3px 6px 0px rgba(0,0,0,0.16)",

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
                آیا میخواهید کندو انتخاب شده را حذف نمایید؟
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
            <Dialog
              open={openNutrition}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              {/* <WebHiveSubmit  onClose={handleClose} /> */}
              <NutritionStepper onClose={handleClose} />
            </Dialog>
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
              <CatchHoneyStepper onClose={handleClose} />
            </Dialog>
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
              <CureHiveStepper onClose={handleClose} />
            </Dialog>
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
                  position: "relative",
                  overflow: "hidden",
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
                <div onClick={downloadExcel} className="downloadExcel">
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

export default Hive;
