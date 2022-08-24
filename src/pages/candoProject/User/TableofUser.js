import { Box, Dialog, Modal, Popover } from "@material-ui/core";
import React, { useEffect, useState } from "react";
// import "./ApiaryList.css";
import XLSX from "xlsx";
import { Close, Edit, MoreVertOutlined, Share } from "@material-ui/icons";
import { Link, useHistory, useLocation } from "react-router-dom";
import MaterialTable from "material-table";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "../../../Iran-Sans-normal";
import Adduser from "../../../components/Form/User/Adduser";
import useStyles from "./styles";
import EditUser from "../../../components/Form/User/EditUser";
import Loading from "../../../components/Loading/Loading";
import SearchBar from "material-ui-search-bar";
import { axiosInstance } from "../../api/axios";

function TableofUser() {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [downloadOpen, setdownloadOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState();
  const [scroll, setScroll] = useState("paper");
  const [loading, setLoading] = useState(true);
  const [toolbar, setToolbar] = useState(false);
  let location = useLocation();
  let background = location.state && location.state.background;

  const [Hive, setHive] = useState("all");

  const handleClickOpen = (scrollType, id) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClickEdit = (scrollType, id) => () => {
    setOpenEdit(true);
    // console.log("iddd",id);
    localStorage.setItem("editUser_id", id);
    setScroll(scrollType);
  };
  useEffect(() => {
    console.log("Hive", Hive);
  }, [Hive]);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
    setdownloadOpen(false);
    setOpenEdit(false);
    history.push("/app/user");
  };
  const classes = useStyles();

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
  const [userList, setUserList] = useState([]);
  const [Company, setCompany] = useState([
    {
      id: "1",
      firstname: "شاهین",
      lastname: "رضوانی",
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

  //  /////////////////////////////////////////////////////////////////////////////////////////

  const token = localStorage.getItem("id_token");
  console.log("token", token);
  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const { data: response } = await axiosInstance.get("/user", {
          headers: {
            token: `${token}`,
          },
        });
        console.log("show response", response.data);
        setUserList(response.data);
        setRows(response.data);
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

  console.log("setUserList123123", userList);

  //  /////////////////////////////////////////////////////////////////////////////////////////

  console.log(Company);
  const columns = [
    {
      title: "نام کاربر",
      field: "firstname",
      cellStyle: {
        textAlign: " center !important",

        fontSize: "0.8rem",
        justifyContent: "center",
      },

      headerStyle: {
        textAlign: "right",
        whiteSpace: "nowrap",
        fontSize: "0.8rem",
        color: "slateGrey",
      },

      render: (rowData) => {
        switch (rowData.firstname) {
          case null:
            return <p className="description">بدون نام</p>;
          case undefined:
            return <p className="description">بدون نام</p>;
          default:
            return (
              <Link
                // to={`/app/user/${rowData.id}`}
                className="title"
                // style={{ display: "flex" }}
              >
                <p className="description">
                  {rowData.firstname + " " + rowData.lastname}
                </p>
              </Link>
            );
        }
      },
    },

    {
      title: "ایمیل",
      field: "email",

      cellStyle: {
        textAlign: " center !important",

        fontSize: "0.8rem",
        justifyContent: "center",
      },

      headerStyle: {
        textAlign: "right",
        whiteSpace: "nowrap",
        fontSize: "0.8rem",
        color: "slateGrey",
      },
      render: (rowData) => {
        switch (rowData.email) {
          case null:
            return <p className="description">بدون ایمیل</p>;
          case undefined:
            return <p className="description">بدون ایمیل</p>;
          default:
            return <p className="description">{rowData.email}</p>;
        }
      },
    },
    {
      title: "تلفن",
      field: "mobile",
      cellStyle: {
        textAlign: " center !important",

        fontSize: "0.8rem",
        justifyContent: "center",
      },

      headerStyle: {
        textAlign: "right",
        whiteSpace: "nowrap",
        fontSize: "0.8rem",
        color: "slateGrey",
      },
      render: (rowData) => {
        switch (rowData.mobile) {
          case null:
            return <p className="description">بدون تلفن</p>;
          case undefined:
            return <p className="description">بدون تلفن</p>;
          default:
            return <p className="description">{rowData.mobile}</p>;
        }
      },
    },
    {
      title: "زنبورستان",
      field: "apiary",
      cellStyle: {
        textAlign: " center !important",

        fontSize: "0.8rem",
        justifyContent: "center",
      },

      headerStyle: {
        textAlign: "right",
        whiteSpace: "nowrap",
        fontSize: "0.8rem",
        color: "slateGrey",
      },
      render: (rowData) => {
        const apiary = rowData.apiary;
        switch (apiary) {
          case null:
            return <p className="description">بدون زنبورستان</p>;
          case undefined:
            return <p className="description">بدون زنبورستان</p>;

          default:
            console.log("apiary", apiary);
            return apiary.map((element) => {
              console.log("element", element);
              return <p className="description">{element.name}</p>;
            });
        }

        // rowData.apiary.map((row)=>{
        //   console.log("rowwwwwww",row);
        //   return <div>slam</div>
        // })
      },
    },

    {
      title: "نقش",
      field: " isStaff",

      cellStyle: {
        textAlign: " center !important",

        fontSize: "0.8rem",
        justifyContent: "center",
      },

      headerStyle: {
        textAlign: "right",
        whiteSpace: "nowrap",
        fontSize: "0.8rem",
        color: "slateGrey",
      },

      render: (rowData) => {
        switch (rowData.isStaff) {
          case true:
            return <p className="description">مدیر زنبورستان</p>;
          case false:
            return <p className="description">کارگر</p>;
          case null:
            return <p className="description">کارگر</p>;
          default:
            return <p className="description">کارگر</p>;
        }
      },
      // customFilterAndSearch: (term, rowData) => rowData.isStaff.indexOf(term) != -1,
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
        textAlign: "right",
        whiteSpace: "nowrap",
        fontSize: "0.8rem",
        color: "slateGrey",
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
                      <Link
                        to={{
                          pathname: `./user/${rowData._id}`,
                          // state: { state:rowData.name },
                          state: { background: location },
                        }}
                        // onClick={handleClickEdit("body",rowData._id)}

                        onClick={handleClickEdit("body", rowData._id)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          cursor: "pointer",
                          textDecoration: "none",
                          color: "#000",
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
                        onClick={() => onRowDelete(rowData, popupState)}
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
    const newData = userList.map((row) => {
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
  ////////////////////////////////////////////////////////////////////////////
  const [searched, setSearched] = useState("");

  const [rows, setRows] = useState([]);
  const requestSearch = (searchedVal) => {
    console.log("searchedVal", searchedVal);
    // console.log("searchedVal",userList);
    const filteredRows = userList?.filter((row) => {
      console.log("123123123", row);
      return {
        mobile: row?.mobile?.toLowerCase()?.includes(searchedVal.toLowerCase()),
      };
    });
    setRows(filteredRows);
  };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };
  ////////////////////////////////////////////////////////////////////////////

  const handleBulkDelete = () => {
    if (window.confirm("آیا از حدف این مورد اطمینان دارید؟")) {
      selectedRows.map(async (selectedRow) => {
        console.log("selectedRow", selectedRow._id);
        await axiosInstance.delete(`/user/${selectedRow._id}`, {
          headers: {
            token: `${token}`,
          },
        });
        window.location.reload();
      });
    }
  };

  const onRowDelete = async (rowData, popupState) => {
    if (window.confirm("آیا از حدف این مورد اطمینان دارید؟")) {
      console.log(rowData._id);
      await axiosInstance.delete(`/user/${rowData._id}`, {
        headers: {
          token: `${token}`,
        },
      });

      // console.log("rowData23123", rowData);
      // const updatedData = Apiary.filter((row) => ![rowData].includes(row));
      // setApiary(updatedData);
      popupState.close();
      window.location.reload();
    }
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
    await loadFont("../../../Iran-Sans.ttf", "Iran-Sans", "normal", 500);

    const cols = columns.map((col) => ({ ...col, dataKey: col.field }));

    const body = userList;

    const doc = new jsPDF();
    doc.autoTable({
      theme: "grid",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: body,
      headStyles: { font: "Iran-Sans", fontStyle: "normal", halign: "right" },
      bodyStyles: { font: "Iran-Sans", fontStyle: "normal", halign: "right" },
    });

    console.log(doc.getFontList());

    doc.save("table.pdf");
  };

  const add = () => {
    return console.log("click");
  };
  return (
    <div className={classes.container}>
      {loading ? (
        <div className={classes.Loading}>
          {" "}
          <Loading color="orange" />
        </div>
      ) : (
        <div>
          <h2 style={{ color: "rgb(227, 156, 0)" }}>کاربران</h2>

          {/* 
       <SearchBar 
       value={searched}
       onChange={(searchVal=>requestSearch(searchVal))}
       onCancelSearch={()=>cancelSearch()}
       /> */}

          <MaterialTable
            localization={{
              toolbar: {
                searchPlaceholder: "dfsdfsdf",
              },
            }}
            title=""
            style={{ borderRadius: "25px" }}
            data={rows}
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

                addRemoveColumns: "اضافه یا حذف کردن ستون‌ها",
                showColumnsTitle: "اضافه یا حذف کردن ستون‌ها",
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
            components={
              {
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
              }
            }
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
                              style={{
                                borderRadius: " 16px",
                                padding: " 16px",
                              }}
                            >
                              {/* <Link
                                onClick={handleClickEdit('body')} 
                               style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                cursor: "pointer",
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
                tooltip: "اضافه کردن کاربر",

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
                style: { borderRadius: 12, width: "60%" },
              }}
              open={open}
              onClose={handleClose}
              scroll={scroll}
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
              maxWidth="xl"
            >
              <Adduser
                setUserList={setUserList}
                userList={userList}
                onClose={handleClose}
              />
            </Dialog>
          </div>

          <div>
            <Dialog
              PaperProps={{
                style: { borderRadius: 12, width: "60%" },
              }}
              open={openEdit}
              onClose={handleClose}
              scroll={scroll}
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
              maxWidth="xl"
            >
              <EditUser
                setUserList={setUserList}
                userList={userList}
                onClose={handleClose}
              />
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
    </div>
  );
}

export default TableofUser;
