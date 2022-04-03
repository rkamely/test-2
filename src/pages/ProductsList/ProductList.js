import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import axios from "axios";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import MaterialTable, { MTableToolbar } from "material-table";
import XLSX from "xlsx";
import { Button, IconButton } from "@material-ui/core";
import { Edit as EditIcon } from "@material-ui/icons";
import "./Product.css";

function ProductList() {
  //   useEffect(() => {
  //     axios.get("http://nahoor.af:8080/nahoor/industry/").then((response) => {
  //       setIndustry(response.data);
  //     });
  //   }, []);
  const [Product, setProduct] = useState();

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get("http://nahoor.af:8080/nahoor/product/");
      setProduct(response.data);
    }
    fetchMyAPI();
  }, []);
  console.log(Product);
  const useStyles = makeStyles({
    Button: {
      margin: "8px 0px",
      fontFamily: "Shabnam",
      cursor: "pointer",
      width: "5%",
    },
  });

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
      title: "نام محصولات",
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
          <a href={rowData.place_holder_image} target="_blank">
            <img src={rowData.place_holder_image} width="60px" />
          </a>
        );
      },
    },
    {
      title: "توضیحات",
      field: "thumbnail",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return <p className="description">{rowData.desc}</p>;
      },
    },
    {
      title: "ریال",
      field: "thumbnail",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return <p>{rowData.price_irt}</p>;
      },
    },
    {
      title: "اففانی",
      field: "thumbnail",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return <p>{rowData.price_aff}</p>;
      },
    },
    {
      title: "امتیاز",
      field: "thumbnail",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return <p>{rowData.rating}</p>;
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
          <Link to={`/app/products/${rowData.id}`}>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Link>
        );
      },
    },
  ];

  //downloadExcel

  const downloadExcel = () => {
    const newData = Product.map((row) => {
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
  return (
    <div>
      <PageTitle title="نام محصولات " />
      <Link to={`/app/ProductAddList`}>
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
        title="لیست محصولات"
        data={Product}
        columns={columns}
        localization={{
          body: {
            editRow: { deleteText: "آیا میخواهید این سطر را حذف کنید؟" },
          },
        }}
        editable={{
          //add row
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              const updatedRows = [
                ...Product,
                { id: Math.floor(Math.random() * 100), ...newRow },
              ];
              setTimeout(() => {
                setProduct(updatedRows);
                resolve();
              }, 2000);
            }),

          //Delete row
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const index = selectedRow.tableData.id;
              const updatedRows = [...Product];
              updatedRows.splice(index, 1);
              setTimeout(() => {
                setProduct(updatedRows);
                resolve();
              }, 2000);
            }),
        }}
        options={{
          actionsColumnIndex: -1,
          addRowPosition: "last",
          print: true,
          selection: true,
          searchFieldStyle: {
            borderTop: "2px solid #6b006d",
            borderRight: "2px solid #6b006d",
            borderLeft: "2px solid #6b006d",
          },
          // filtering: true,
        }}
        actions={[
          {
            icon: () => <button>Export</button>,
            tooltip: "Export to Excel",
            onClick: () => downloadExcel(),
            isFreeAction: true,
          },
        ]}
      />
    </div>
  );
}

export default ProductList;
