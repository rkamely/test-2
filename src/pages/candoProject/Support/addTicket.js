import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  MenuItem,
  OutlinedInput,
  Select,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./Style";

function AddTicket(props) {
  {
    console.log(props.input);
  }
  const [data, setData] = useState();
  const classes = useStyles();
  return (
    <div
      style={{
        padding: "24px 0px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          color: "rgb( 227 ,156, 0)",
          fontSize: "1.2rem",
          fontWeight: 600,
          fontFamily: "Shabnam",
        }}
      >
        {props.title}{" "}
      </div>
      <Divider
        style={{ backgroundColor: "rgb( 244 ,244 ,244)", marginTop: "32px" }}
      />
      <div
        style={{
          width: "50vw",
          padding: "0 48px",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {props.input ? (
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "32px" }}
          >
            <h2
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                fontFamily: "Shabnam",
              }}
            >
              {props.title}
            </h2>
            <Select
              style={{
                backgroundColor: "rgb( 244, 244, 244)",
                width: "24%",
                height: "48px",
                borderRadius: "8px",
                marginRight: "32px",
              }}
              value={data ?? " "}
              onChange={(e) => setData(e.target.value)}
              input={
                <OutlinedInput
                  labelWidth={0}
                  //   classes={{
                  //     notchedOutline: classes.mainChartSelectRoot,
                  //     input: classes.mainChartSelect,
                  //   }}
                />
              }
            >
              <MenuItem value="daily" style={{ width: "100%" }}>
                روزانه
              </MenuItem>
              <MenuItem value="weekly" style={{ width: "100%" }}>
                هفتگی
              </MenuItem>
              <MenuItem value="monthly" style={{ width: "100%" }}>
                ماهیانه
              </MenuItem>
            </Select>
          </div>
        ) : (
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "16px" }}
          >
            <h2
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                fontFamily: "Shabnam",
              }}
            >
              تعداد QR Code درخواستی
            </h2>
            <TextField
              size="small"
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              style={{
                backgroundColor: "rgb( 244, 244, 244)",
                width: "24%",
                borderRadius: "8px",
                marginRight: "32px",
                border: "none",
              }}
            />
          </div>
        )}

        <DialogContent style={{ overflow: "hidden", padding: "0" }}>
          <div style={{ marginTop: "32px" }}>شرح درخواست</div>

          <textarea
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
            style={{
              backgroundColor: "rgb( 244, 244, 244)",
              border: "none",
              width: "100%",
              marginTop: "8px",
              height: "150px",
              borderRadius: "12px",
              marginTop: "20px",
            }}
          >
            At w3schools.com you will learn how to make a website. They offer
            free tutorials in all web development technologies.
          </textarea>
        </DialogContent>
      </div>
      <Divider
        style={{ marginTop: "40px", backgroundColor: "rgb( 244 ,244 ,244)" }}
      />
      <DialogActions className={classes.actionButton}>
        <Button onClick={props.handleClose} className={classes.cancelButton}>
          انصراف
        </Button>
        <Button onClick={props.handleClose} className={classes.addButton}>
          افزودن
        </Button>
      </DialogActions>
    </div>
  );
}

export default AddTicket;
