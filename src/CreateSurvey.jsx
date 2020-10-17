import React from "react";
import "./App.css";
import Header from "./Header";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MultiSelect from "./MultiSelect";
import SingleSelect from "./SingleSelect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

let toBeRendered;
function CreateSurvey() {
  const classes = useStyles();
  const [mode, setMode] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  }

  const handleChange = (event) => {
    event.stopPropagation();
    setMode(event.target.value);
    if(mode === 2) {
      toBeRendered = <MultiSelect />
    }
    if(mode === 1) {
      toBeRendered = <SingleSelect handleOpen={handleOpen} />
    }
    setOpen(false);
  };

  const handleOpen = () => {
    console.log("Opening drop down");
    setOpen(true);
  };

  return (
    <div className="createSurvey">
      <Header />

      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Select Question type</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={mode}
          onChange={handleChange}
          open={open}
          handleOpen={handleOpen}
          onClick = {handleClick}
        >
          <MenuItem value={1}>Multi-select</MenuItem>
          <MenuItem value={2}>Single select</MenuItem>
        </Select>
      </FormControl>

      {toBeRendered}
      {/* <SingleSelect handleOpen={handleOpen} /> */}
    </div>
  );
}

export default CreateSurvey;
