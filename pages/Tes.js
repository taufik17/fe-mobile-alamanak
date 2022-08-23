import React from "react";
import TaskList from "../components/atoms/taskList";

class Form extends React.Component {
  state = {
    taskList: [
      {
        projectName: "",
      },
    ],
  };

  handleChange = (e) => {
    
    if (["projectName"].includes(e.target.name)) {
      let taskList = [...this.state.taskList];
      taskList[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
    let data = { formData: this.state };
    // stateChanger(data);
    console.log(data);
  };

  addNewRow = () => {
    this.setState((prevState) => ({
      taskList: [
        ...prevState.taskList,
        {
          projectName: "",
        },
      ],
    }));
  };

  deteteRow = (index) => {
    this.setState({
      taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let data = { formData: this.state };

    console.log(data);
  };
  clickOnDelete(record) {
    this.setState({
      taskList: this.state.taskList.filter((r) => r !== record),
    });
  }
  render() {
    let { taskList } = this.state; //let { notes, date, description, taskList } = this.state
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <table className="table">
          <tbody>
            <TaskList
              add={this.addNewRow}
              delete={this.clickOnDelete.bind(this)}
              taskList={taskList}
            />
          </tbody>
        </table>
      </form>
    );
  }
}
export default Form;
