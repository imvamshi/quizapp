import React, { Suspense } from "react";
import "./App.css";
import RoutingConfig from "./RouterMapping";

class App extends React.Component {
  render() {
    return (
      <RoutingConfig/>
    );
  }
}


//===========================================================
// class App extends React.Component {
//   state = { tasks: [], currentTask: "", username: "", timer: "" };
//   render() {
//     const { tasks } = this.state;
//     return <Router>
//       <Route path="/" component={home}></Route>
//       <Route path="/log" component={log}></Route>
//     </Router>
//   }
// }
// class home extends React.Component {
//   render() {
//     return (
//       <QuizForm/>
//     );
//   }
// }
// class log extends React.Component {
//   render() {
//     return <label>log component</label>
//   }
// }
// React.render( <App/> , document.getElementById('root'))


export default App;



/*
class App extends Tasks {
  state = { tasks: [], currentTask: "", username: "", timer: "" };
  render() {
    const { tasks } = this.state;
    return (
      <div className="App flex">
        <Paper elevation={3} className="container">
          <div className="heading">TO-DO</div>
          <form
            onSubmit={this.handleSubmit}
            className="flex"
            style={{ margin: "15px 0" }}
          >
            
            <TextField
              variant="outlined"
              size="small"
              style={{ width: "80%" }}
              value={this.state.currentTask}
              required={true}
              onChange={this.handleChange}
              placeholder="Add New TO-DO"
            />
            <TextField
              id="outlined-basic"
              label="Name"
              style={{ width: "80%" }}
              variant="outlined"
              value={this.state.username}
              placeholder="Enter your Name"
            />


            <Button
              style={{ height: "40px" }}
              color="primary"
              variant="outlined"
              type="submit"
            >
              Add task
            </Button>
          </form>
          <div>
            {tasks.map((task) => (
              <Paper
                key={task._id}
                className="flex task_container"
              >
                <Checkbox
                  checked={task.completed}
                  onClick={() => this.handleUpdate(task._id)}
                  color="primary"
                />
                <div
                  className={
                    task.completed
                      ? "task line_through"
                      : "task"
                  }
                >
                  {task.task}
                </div>
                <Button
                  onClick={() => this.handleDelete(task._id)}
                  color="secondary"
                >
                  delete
                </Button>
              </Paper>
            ))}
          </div>
        </Paper>
      </div>
    );
  }
}
*/