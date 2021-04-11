import React, { useState } from "react";

import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { connect } from "react-redux";
import { Input, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { addArticle } from "../../../actions";
import "./index.scss";
import { GOOGLE_API_KEY } from "../../../keys";

const CreateArticle = ({ articles, onAddArticle }) => {
  const [date, setDate] = useState("");
  const [headline, setHeadline] = useState("");
  const [location, setLocation] = useState("");
  const [newsLink, setNewsLink] = useState("");
  const [donationLink, setDonationLink] = useState("");
  const [violenceType, setViolenceType] = useState("assault");

  const handleSubmit = () => {
    console.log("submit", location.label);
    onAddArticle({ date, headline, location: location.label, newsLink, donationLink, violenceType});
  }

  return (
    <form className="create-form">
      <InputLabel> Date Event Occured (if not available, use article date)*</InputLabel>
      <Input fullWidth required type="date" onChange={e => setDate(e.target.value)}/>

      <InputLabel> Headline* </InputLabel>
      <Input fullWidth required onChange={e => setHeadline(e.target.value)}/>

      <InputLabel> Location* </InputLabel>
      <GooglePlacesAutocomplete
        apiKey={GOOGLE_API_KEY}
        selectProps={{
          onChange: setLocation,
        }}
      />

      <InputLabel> News Article Link* </InputLabel>
      <Input fullWidth required onChange={e => setNewsLink(e.target.value)}/>

      <InputLabel> GoFundMe or Donation Link </InputLabel>
      <Input fullWidth onChange={e => setDonationLink(e.target.value)}/>

      <InputLabel> Type of Violence* </InputLabel>
      <Select
        required
        fullWidth
        name="violenceType"
        id="violenceType"
        defaultValue="assault"
        onChange={e => setViolenceType(e.target.value)}
      >
        <MenuItem value="assault">Physical Assault</MenuItem>
        <MenuItem value="death">Death</MenuItem>
      </Select>

      <Button
        className="submit-btn"
        color="primary"
        variant="outlined"
        onClick={() => handleSubmit()}
      >
        Submit
      </Button>
    </form>
  )
}

//TODO: remove mapStateToProps
const mapStateToProps = state => {
  console.log("state", state);
  return { articles: state.articles};
}

const mapDispatchToProps = (dispatch) => ({
  onAddArticle: newArticle => dispatch(addArticle(newArticle))
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
