import {
  Box,
  Button,
  Fade,
  FormControl,
  IconButton,
  Modal,
  Popover,
  Popper,
  Select,
  Typography,
} from "@material-ui/core";
import React, { Children, useEffect, useState } from "react";
import PageTitle from "../../../components/PageTitle/PageTitle";
import axios from "axios";
import { makeStyles } from "@material-ui/styles";
import XLSX from "xlsx";
import { Edit, Edit as EditIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";
import MaterialTable, { MTableToolbar } from "material-table";
import CompanyAddList from "../../../components/Form/ApiaryList/ApiaryAddList";
import SearchBar from "material-ui-search-bar";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "../../../Iran-Sans-normal";
import { mdiConsoleNetwork } from "@mdi/js";

function TableofUser() {
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const [downloadOpen, setdownloadOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState();
  const [toolbar, setToolbar] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setdownloadOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const [Company, setCompany] = useState([
    {
      id: "1",
      name: "شاهین رضوانی",
      email: "shahin@gmail.com",
      Beehive: "زنبورستان 1",
      Role: "نقش",
    },
    {
      id: "2",
      name: "شاهین کاظمی",
      email: "shahin@gmail.com",
      Beehive: "زنبورستان 3",
      Role: "نقش",
    },
  ]);
  const useStyles = makeStyles({
    Button: {
      margin: "8px 0px",
      fontFamily: "Shabnam",
      cursor: "pointer",
      width: "5%",
    },
  });
  const classes = useStyles();
  //   useEffect(() => {
  //     axios.get("http://nahoor.af:8080/nahoor/industry/").then((response) => {
  //       setIndustry(response.data);
  //     });
  //   }, []);
  // useEffect(() => {
  //   async function fetchMyAPI() {
  //     let response = await axios.get("http://nahoor.af:8080/nahoor/company/");
  //     setCompany(response.data);
  //   }

  //   fetchMyAPI();
  // }, []);
  console.log(Company);
  const columns = [
    // {
    //   title: "ID",
    //   field: "id",
    //   cellStyle: {
    //     textAlign: "right",
    //   },
    //   headerStyle: {
    //     textAlign: "right",
    //   },
    //   render: (rowData) => {
    //     return <span style={{ display: "flex" }}>{rowData.id}</span>;
    //   },

    // },
    {
      title: "نام شخص",
      field: "name",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },

      render: (rowData) => {
        console.log("rowData", rowData);
        return (
          <Link to={`/app/Beehive/${rowData.id}`} style={{ display: "flex" }}>
            {rowData.name}
          </Link>
        );
      },
    },

    {
      title: " ایمیل/شماره تماس",
      field: "email/call",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return <p className="description">{rowData.email}</p>;
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
      title: "نقش",
      field: "Role",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return <div>{rowData.Role}</div>;
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
                  <Button variant="contained" {...bindTrigger(popupState)}>
                    Open Popover
                  </Button>
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
                      />
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
                        }}
                      >
                        <Edit style={{ marginLeft: "16px" }} />
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
                          justifyContent: "flex-start",
                        }}
                        onClick={() => handleBulkDelete(selectedRows)}
                      >
                        <Edit style={{ marginLeft: "16px" }} />
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
    console.log("searchedVal", searchedVal);
    const filteredRows = Company.map((rows) => {
      return rows;
    }).filter((row) => {
      console.log("row", row.name);
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setCompany(filteredRows);
    console.log("Company", Company);
    console.log("filteredRows", filteredRows);
  };
  // const cancelSearch = () => {
  //   setSearched("");
  //   requestSearch(searched);
  // };
  const handleBulkDelete = () => {
    const updatedData = Company.filter((row) => !selectedRows.includes(row));
    setCompany(updatedData);
  };

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("جزییات زنبورستان", 20, 10);
    doc.autoTable({
      theme: "grid",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: Company,
    });
    doc.setFont("Iran-Sans"); // set custom font
    doc.save("table.pdf");
  };
  const handleSelectChange = (event) => {
    console.log("salam", event.target.value);
    setAge(event.target.value);
  };
  return (
    <div>
      <PageTitle title="زنبورستان " />
      <Link to={`/app/CompanyAddList`}>
        <Button
          className={classes.Button}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          افزودن
        </Button>
      </Link>
      <MaterialTable
        localization={{
          toolbar: {
            searchPlaceholder: "dfsdfsdf",
          },
        }}
        title=""
        style={{ borderRadius: "25px" }}
        data={Company}
        columns={columns}
        onSelectionChange={(rows) => setSelectedRows(rows)}
        localization={{
          body: {
            editRow: { deleteText: "آیا میخواهید این سطر را حذف کنید؟" },
          },
          pagination: {
            labelDisplayedRows: "{from}-{to} از {count}",
            labelRowsSelect: "تعداد ردیف ",
            labelRowsPerPage: "سیبسیب",
            firstAriaLabel: <img src="./assets/12425575071619191957.svg" />,
            firstTooltip: <img src="./assets/12425575071619191957.svg" />,
            previousAriaLabel: "صفحه قبل",
            previousTooltip: "صفحه قبل",
            labelRowsPerPage: <img src="./assets/12425575071619191957.svg" />,
            nextAriaLabel: "صفحه بعد",
            nextTooltip: "صفحه بعد",
            lastAriaLabel: <img src="./assets/12425575071619191957.svg" />,
            lastTooltip: <img src="./assets/12425575071619191957.svg" />,
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
          exportButton: true,

          // searchFieldStyle: {
          //   borderTop: "2px solid  rgb( 240 ,240, 240)",
          //   borderRight: "2px solid  rgb( 240 ,240, 240)",
          //   borderLeft: "2px solid  rgb( 240 ,240, 240)",
          //   borderBottom: "none",
          //   padding: "4px",
          //   borderRadius: "8px",
          // },
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
          search: false,

          // filtering: true,
        }}
        components={{
          Toolbar: (props) => (
            <>
              <div
                style={{
                  direction: "rtl",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px  32px  0px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SearchBar
                    style={{
                      direction: "ltr",
                      border: "1px solid red",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    value={searched}
                    onChange={(searchVal) => requestSearch(searchVal)}
                    // onCancelSearch={() => cancelSearch()}
                  />
                  {/* <MTableToolbar {...props} /> */}
                  <div
                    onClick={handleOpen}
                    style={{
                      backgroundColor: "rgb( 227, 156, 0)",
                      marginRight: "32px",
                      color: "#000",
                      padding: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                    }}
                  >
                    <img src="/assets/Group 182.svg" />
                  </div>

                  <FormControl
                    sx={{ m: 1, minWidth: 120 }}
                    className={classes.inputSelect}
                  >
                    {/* <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel> */}

                    <Select
                      className={classes.inputSelect}
                      variant="outlined"
                      native
                      onChange={handleSelectChange}
                      id="VegetationOfTheArea"
                      name="VegetationOfTheArea"
                    >
                      <option aria-label="VegetationOfTheArea" value="" />
                      <optgroup label="Category 1">
                        <option value={1}>Optijjjkjon 1</option>
                        <option value={2}>fgffghnion 2</option>
                      </optgroup>
                      <optgroup label="Category 2">
                        <option value={3}>jhjjjhhg</option>
                        <option value={4}>;;;jk</option>
                      </optgroup>
                    </Select>
                  </FormControl>
                </div>
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
                  <span>دانلود</span>
                  <img
                    src="/assets/download-arrow-svgrepo-com.svg"
                    style={{ marginRight: "8px" }}
                  />
                </div>
              </div>
              <hr
                style={{
                  borderTop: "1px solid rgb( 240, 240, 240)",
                  height: "2px",
                }}
              />
              {toolbar ? (
                <MTableToolbar {...props}>{console.log(props)}</MTableToolbar>
              ) : null}
            </>
          ),
        }}
        actions={[
          // {
          //   icon: () => <button>Export</button>,
          //   tooltip: "Export to Excel",
          //   onClick: () => downloadExcel(),
          //   // isFreeAction: true,
          // },
          {
            icon: () => (
              <div>
                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <Button variant="contained" {...bindTrigger(popupState)}>
                        Open Popover
                      </Button>
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
                          />
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
                            }}
                          >
                            <Edit style={{ marginLeft: "16px" }} />
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
                              justifyContent: "flex-start",
                            }}
                            onClick={() => handleBulkDelete(selectedRows)}
                          >
                            <Edit style={{ marginLeft: "16px" }} />
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
        ]}
      />
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 1000 }}>
            <CompanyAddList />
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
            sx={{ ...style, width: 1000 }}
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
    </div>
  );
}

export default TableofUser;
