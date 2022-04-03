import { Grid, IconButton, Table } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import axios from "axios";
import { mdiCogSyncOutline } from "@mdi/js";

import {
  Delete,
  Delete as DeleteIcon,
  Edit as EditIcon,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
/////////////////////////////////////////////////////////////////////////

function IndustryList() {
  const [Industry, setIndustry] = useState();

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get("http://nahoor.af:8080/nahoor/industry/");
      setIndustry(response.data);
    }
    fetchMyAPI();
  }, []);

  const DeleteItems = (id) => {
    let foundItem = -1;
    Industry.forEach((element) => {
      if (element.id === id) {
        foundItem = element.id;
      }
    });
    console.log(foundItem);
    setIndustry([
      ...Industry.slice(0, foundItem),
      ...Industry.slice(foundItem + 1),
    ]);
  };

  const transform = () => {
    return Industry?.map((i, index) => {
      return [
        <Link
          to={`/app/industryList/${i.id}`}
          style={{ cursor: "pointer", textDecoration: "none", color: "black" }}
        >
          {i.name}
        </Link>,
        <a href={i.cover_image}>
          <img src={i.cover_image} alt={i.cover_image} width="80px" />
        </a>,

        <IconButton onClick={(e) => DeleteItems(i.id)}>
          <DeleteIcon />
        </IconButton>,

        <Link to={`/app/industryList/${i.id}`}>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Link>,
      ];
    });
  };
  return (
    <div>
      <PageTitle title="نام صنعت" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="نام صنعت"
            data={transform(IndustryList)}
            columns={["نام صنعت", "عکس", "حذف", "ویرایش"]}
            options={{     selection: true,
          filtering: true ,
              filterType: "checkbox",
              onSearchChange: (searchText) => {
                const barbod = Industry.filter((bardia) => {
            
                    console.log("bardia",bardia)
               
                  
                });
                console.log("barbod", barbod);
              },
              searchPlaceholder: "جستجو",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default IndustryList;
