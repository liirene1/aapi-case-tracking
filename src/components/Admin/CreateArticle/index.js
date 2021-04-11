import React, { Component } from "react";
import Geocode from "react-geocode";
import { connect } from "react-redux";
import { Input, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { addArticle } from "../../../actions";
import "./index.scss";
import { GOOGLE_API_KEY } from "../../../keys";

class CreateArticle extends Component {
  state = {
    date: "",
    headline: "",
    location: "",
    newsLink: "",
    donationLink: "",
    violenceType: "assault",
    isSubmitting: false,
    isSaving: false,
    isSaved: false,
  };

  componentDidMount() {
    Geocode.setApiKey(GOOGLE_API_KEY);

    Geocode.fromAddress("San Francisco").then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        return { lat, lng };
      },
      (error) => {
        console.error(error);
      }
    );
  }

  async getGeoPosition() {
    Geocode.fromAddress(this.state.location).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        return { lat, lng };
      },
      (error) => {
        console.error(error);
      }
    );
  }

  handleChange = (fieldName, value) => {
    console.log("change", fieldName, value)
    this.setState({ [fieldName]: value });
  };

  handleSubmit = () => {
    console.log("submit");
    const {date, headline, location, newsLink, donationLink, violenceType} = this.state;
    //const { lat, lng } = await this.getGeoPosition();
    //if lat, lng - dispatch action to save this to DB
    //else display error "Can not save, please try again"
    this.props.onAddArticle({ date, headline, location, newsLink, donationLink, violenceType});
  }

  //TODO: For location, use Google Maps autocomplete
  render() {
    return (
      <form className="create-form">
        <InputLabel> Date Event Occured (if not available, use article date)*</InputLabel>
        <Input fullWidth required type="date" onChange={e => this.handleChange("date", e.target.value)}/>
        <InputLabel> Headline* </InputLabel>
        <Input fullWidth required onChange={e => this.handleChange("headline", e.target.value)}/>
        <InputLabel> Location* </InputLabel>
        <Input fullWidth required onChange={e => this.handleChange("location", e.target.value)}/>
        <InputLabel> News Article Link* </InputLabel>
        <Input fullWidth required onChange={e => this.handleChange("newLink", e.target.value)}/>
        <InputLabel> GoFundMe or Donation Link </InputLabel>
        <Input fullWidth onChange={e => this.handleChange("donationLink", e.target.value)}/>
        <InputLabel> Type of Violence* </InputLabel>
        <Select
          required
          fullWidth
          name="violenceType"
          id="violenceType"
          defaultValue="assault"
          onChange={e => this.handleChange("violenceType", e.target.value)}
        >
          <MenuItem value="assault">Physical Assault</MenuItem>
          <MenuItem value="death">Death</MenuItem>
        </Select>
        <Button
          className="submit-btn"
          color="primary"
          variant="outlined"
          onClick={() => this.handleSubmit()}
        >
          Submit
        </Button>
      </form>
    )
  }
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
