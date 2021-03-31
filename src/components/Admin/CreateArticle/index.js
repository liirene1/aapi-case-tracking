import React, { Component } from "react";

class CreateArticle extends Component {
  state = {
    changes: {
      date: "",
      headline: "",
      location: "",
      newsLink: "",
      donationLink: "",
      violenceType: ""
    },
    isSubmitting: false,
    isSaving: false,
    isSaved: false,
  };

  handleChange = (fieldName, value) => {
    this.setState({ [fieldName]: value });
  };

  submit = () => {
    //dispatch action to save this to DB
  }

  //TODO: For location, use Google Maps autocomplete
  //TODO: Use MaterialUI or Semantic form 
  render() {
    <form>
      <label> Date Event Occured (if not available, use article date)</label>
      <input onChange={e => this.handleChange("date", e.target.value)}/>
      <label> Headline </label>
      <input />
      <label> Location </label>
      <input />
      <label> News Article Link </label>
      <input />
      <label> GoFundMe or Donation Link </label>
      <input />
      <label> Type of Violence </label>
      <select name="violenceType" id="violenceType">
        <option value="assault">Physical Assault</option>
        <option value="death">Death</option>
      </select>
    </form>
  }
}

export default CreateArticle;
