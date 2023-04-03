import React, { useState } from "react";
import "./index.css";
import {
  TextField,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
  Button,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import styled from "styled-components";

const MuiTelInputStyled = styled(MuiTelInput)`
  & button {
    border-radius:0px;
    height:fit-content;
    width:55px;
    display:flex;
    justify-content:start;
    position:relative;
  }
  & button::after {
    height:24px;
    width:24px;
    border-right:1px solid rgba(0, 0, 0, 0.25);
    content:"▾";
    position absolute;
    right:0px;
    top:50%;
    transform:translatey(-50%);
  }
`;

function Connect() {
  const [phoneValue, setPhoneValue] = React.useState("");
  const [value, setValue] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState({
    name: false,
    email: false,
  });

  const handleSubmit = () => {
    let err = {
      name: false,
      email: false,
    };

    if (value.name.length > 50)
     
    err = {
      ...err,
      name: true,
    };
    
     if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)===true)
     err = {
      ...err,
      email:true,
     }

    
    
    setError(err);
  };

  return (
    <div className="MainDiv6">
      <div className="ConnectMain">
        <div className="ConnectFormMain">
          <span className="ConnectMainTitle">
            Get In Touch With Us To Connect
          </span>
          <span className="ConnectFormLabel">Contact Us </span>

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "350px",
                height: "48px",
                marginBottom: "28px",
              },
            }}
            noValidate
            autoComplete="off"
            id="MyForm"
          >
            <div style={{ marginBottom: "20px" }}>
              <TextField
                error={error.name}
                id="outlined-error-helper-text"
                label="Full name"
                placeholder="lorem ipsum"
                helperText={`${
                  error.name ? "Not more than 50 characters." : ""
                }`}
                onChange={(e) => {
                  setValue({ ...value, name: e.target.value });
                }}
                value={value.name}
              />
              <TextField
                error={error.email}
                id="outlined-error-helper-text"
                label="Email Address"
                placeholder="lorem@gmail.com"
                helperText={`${
                  error.email ? "Please enter a valid email address." : ""
                }`}
                onChange={(e) => {
                  setValue({ ...value, email: e.target.value });
                }}
                value={value.email}
              />
            </div>
            <div>
              <MuiTelInputStyled
                label="Mobile Number"
                defaultCountry="IN"
                value={phoneValue}
                onChange={(newValue) => setPhoneValue(newValue)}
              />
              <FormControl sx={{ m: 1, width: "350px", textAlign: "left" }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  // value={age}
                  label="Country"
                  // onChange={handleChange}
                >
                  <MenuItem value={1}>Mumbai</MenuItem>
                  <MenuItem value={2}>Banglore</MenuItem>
                  <MenuItem value={3}>Surat</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl sx={{ m: 1, width: "350px", textAlign: "left" }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Stages
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  // value={age}
                  label="Stages"
                  // onChange={handleChange}
                >
                  <MenuItem value={1}>
                    I have booked but registration is not done
                  </MenuItem>
                  <MenuItem value={2}>
                    I have booked but registration is not done
                  </MenuItem>
                  <MenuItem value={3}>
                    I have booked but registration is not done
                  </MenuItem>
                </Select>
              </FormControl>
              <TextField
                style={{ visibility: "hidden", marginTop: "-10px" }}
                error={false}
                id="outlined-error-helper-text"
                label="Email Address"
                placeholder="lorem@gmail.com"
                helperText="Please enter a valid email address."
              />
            </div>
            <div>
              <Button
                style={{
                  width: "350px",
                  height: "48px",
                  marginTop: "28px",
                  backgroundColor: "#01244A",
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "25px",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <TextField
                style={{ visibility: "hidden", marginTop: "-10px" }}
                error={false}
                id="outlined-error-helper-text"
                label="Email Address"
                placeholder="lorem@gmail.com"
                helperText="Please enter a valid email address."
              />
            </div>
          </Box>
        </div>
        <img src="./Connect.png" className="ConnectMainImg"></img>
      </div>
    </div>
  );
}

export default Connect;
