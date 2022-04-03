import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import axios from "axios";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import MaterialTable, { MTableToolbar } from "material-table";
import XLSX from "xlsx";
import { Box, Button, IconButton, Modal } from "@material-ui/core";
import { Edit as EditIcon } from "@material-ui/icons";
import jsPDF from "jspdf";
import "jspdf-autotable";

function CategoryList() {
  const [Category, setCategory] = useState();
  const [open, setOpen] = useState(false);
  const [downloadOpen, setdownloadOpen] = useState(false);
  //   useEffect(() => {
  //     axios.get("http://nahoor.af:8080/nahoor/industry/").then((response) => {
  //       setIndustry(response.data);
  //     });
  //   }, []);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get("http://nahoor.af:8080/nahoor/category/");
      setCategory(response.data);
    }
    fetchMyAPI();
  }, []);

  const useStyles = makeStyles({
    Button: {
      margin: "8px 0px",
      fontFamily: "Shabnam",
      cursor: "pointer",
      width: "5%",
    },
  });
  const handleClose = () => {
    setOpen(false);
    setdownloadOpen(false);
  };
    
  const handleOpen = () => {
    setOpen(true);
  };

  const classes = useStyles();

  const columns = [
    {
      title: "ID",
      field: "id",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return <span style={{ display: "flex" }}>{rowData.id}</span>;
      },
    },
    {
      title: "نام زیر صنایع",
      field: "name",
      validate: (rowDate) => {
        if (rowDate.name === undefined || rowDate.name === "") {
          return "این فیلد ضروری است";
        } else if (rowDate.name.length < 2) {
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
        return <span style={{ display: "flex" }}>{rowData.name}</span>;
      },
    },
    {
      title: "آیکون",
      field: "icon",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return (
          <a href={rowData.icon_image} target="_blank">
            <img src={rowData.icon_image} width="60px" />
          </a>
        );
      },
    },
    {
      title: "تامنیل اصلی",
      field: "thumbnail",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return (
          <a href={rowData.thumbnail_image} target="_blank">
            <img src={rowData.thumbnail_image} width="80px" />
          </a>
        );
      },
    },
    {
      title: "ویرایش",
      field: "thumbnail",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return (
          <Link to={`/app/categoryList/${rowData.id}`}>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Link>
        );
      },
    },
  ];

  const add = () => {
    return console.log("click");
  };
  //downloadExcel
  const downloadFile = () => {
    setdownloadOpen(true);
  };
  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("جزییات زنبورستان", 20, 10);
    doc.autoTable({
      theme: "grid",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: Category,
    });
    doc.setFont("Iran-Sans"); // set custom font
    doc.save("table.pdf");
  };
  const downloadExcel = () => {
    const newData = Category.map((row) => {
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
  return (
    <div>
      <PageTitle title="نام زیر صنایع" />
      <Link to={`/app/categoryAddList`}>
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
        inputProps={{
          underline: {
            "&&&:before": {
              borderBottom: "none",
            },
            "&&:after": {
              borderBottom: "none",
            },
          },
        }}
        title=""
        data={Category}
        columns={columns}
        // onSelectionChange={(e)=>}
        localization={{
          body: {
            editRow: { deleteText: "آیا میخواهید این سطر را حذف کنید؟" },
          },
          toolbar: {
            exportTitle: "دانلود",
            exportAriaLabel: "دانلود",
            exportName: "hkg,n",
          },
        }}
        icons={{ Search: () => <img src="/assets/Component 24 – 6.svg" /> }}
        editable={{
          //Delete row
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const index = selectedRow.tableData.id;
              const updatedRows = [...Category];
              updatedRows.splice(index, 1);
              setTimeout(() => {
                setCategory(updatedRows);
                resolve();
              }, 2000);
            }),
        }}
        options={{
          exportFileName: "دانلود",
          actionsColumnIndex: -1,
          addRowPosition: "last",
          print: true,
          selection: "true",
          toolbarButtonAlignment: "right",
          searchFieldAlignment: "left",
          searchFieldStyle: {
            border: "1px solid rgb( 240 , 240 , 240)",
            borderRadius: "8px",
          },
          // filtering: true,
        }}
        actions={[
          {
            tooltip: "Remove All Selected Users",
            icon: () => <img src="/assets/Group 182.svg" />,

            onClick: (evt, data) =>
              alert("You want to delete " + data.length + " rows"),
          },
          {
            icon: () => (
              <div onClick={handleOpen}>
                <img
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
                  src="/assets/Group 182.svg"
                />
              </div>
            ),
            tooltip: "Export to Excel",
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
                  // marginLeft: "32px",
                }}
              >
                <span>دانلود</span>
                <img
                  src="/assets/download-arrow-svgrepo-com.svg"
                  style={{ marginRight: "8px" }}
                />
              </div>
            ),
            tooltip: "سیبسی",
            isFreeAction: true,
          },
        ]}
      />
      <div>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 1000 }}>salam</Box>
          </Modal>
        </div>
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

export default CategoryList;
