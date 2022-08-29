import React from "react";
import FormVideoLink from "../atoms/formvideolink";

class Form extends React.Component {
  state = {
    linkVideo: [
      {
        videoLink: "",
      },
    ],
  };

  handleChange = (e) => {
    
    if (["videoLink"].includes(e.target.name)) {
      let linkVideo = [...this.state.linkVideo];
      linkVideo[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
    let data = { formData: this.state };
    // stateChanger(data);
    console.log(data);
  };

  addNewRow = () => {
    this.setState((prevState) => ({
      linkVideo: [
        ...prevState.linkVideo,
        {
          videoLink: "",
        },
      ],
    }));
  };

  deteteRow = (index) => {
    this.setState({
      linkVideo: this.state.linkVideo.filter((s, sindex) => index !== sindex),
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let data = { formData: this.state };

    console.log(data);
  };
  clickOnDelete(record) {
    this.setState({
      linkVideo: this.state.linkVideo.filter((r) => r !== record),
    });
  }
  render() {
    let { linkVideo } = this.state; //let { notes, date, description, linkVideo } = this.state
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <table className="table">
          <tbody>
            <FormVideoLink
              add={this.addNewRow}
              delete={this.clickOnDelete.bind(this)}
              linkVideo={linkVideo}
            />
          </tbody>
        </table>
      </form>
    );
  }
}
export default Form;
