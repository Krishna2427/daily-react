import React, { Component } from "react";

class DailyTask extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      name: "",
      assignmentStatus: "",
      selectedSkill: "", 
      batchNumber: "",
      progress: 0,
      predefinedTasks: [
        "Finished Project report",
        "Prepare for presentation",
        "Partially completed",
        "Not started",
      ],
      isEditing: false,
      currentTaskId: null,
      validationErrors: {},
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleUpdateTask = this.handleUpdateTask.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
  }

  validateInputs() {
    const { name, batchNumber, assignmentStatus } = this.state;
    const errors = {};

    if (!name) errors.name = "Task name is required";
    if (!batchNumber) errors.batchNumber = "Batch number is required";
    if (!assignmentStatus) errors.assignmentStatus = "Assignment status is required";

    this.setState({ validationErrors: errors });
    return Object.keys(errors).length === 0;
  }

  handleInputChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === "radio") {
      this.setState({ selectedSkill: value });
    } else {
      this.setState({ [name]: value });
    }
  }

  handleAddTask() {
    if (!this.validateInputs()) return;

    const { tasks, name, assignmentStatus, selectedSkill, batchNumber, progress } = this.state;
    const newTask = {
      id: Date.now(),
      name,
      assignmentStatus,
      selectedSkill,
      batchNumber,
      progress,
    };

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
      name: "",
      assignmentStatus: "",
      selectedSkill: "",
      batchNumber: "",
      progress: 0,
      validationErrors: {},
    }));
  }

  handleEditTask(id) {
    const taskToEdit = this.state.tasks.find((task) => task.id === id);
    this.setState({
      name: taskToEdit.name,
      assignmentStatus: taskToEdit.assignmentStatus,
      selectedSkill: taskToEdit.selectedSkill,
      batchNumber: taskToEdit.batchNumber,
      progress: taskToEdit.progress,
      isEditing: true,
      currentTaskId: id,
    });
  }

  handleUpdateTask() {
    if (!this.validateInputs()) return;

    const { tasks, name, assignmentStatus, selectedSkill, batchNumber, progress, currentTaskId } = this.state;
    const updatedTasks = tasks.map((task) =>
      task.id === currentTaskId
        ? { id: currentTaskId, name, assignmentStatus, selectedSkill, batchNumber, progress }
        : task
    );

    this.setState({
      tasks: updatedTasks,
      name: "",
      assignmentStatus: "",
      selectedSkill: "",
      batchNumber: "",
      progress: 0,
      isEditing: false,
      currentTaskId: null,
      validationErrors: {},
    });
  }

  handleDeleteTask(id) {
    const filteredTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: filteredTasks });
  }

  render() {
    const {
      tasks,
      name,
      assignmentStatus,
      selectedSkill,
      batchNumber,
      progress,
      predefinedTasks,
      isEditing,
      validationErrors,
    } = this.state;

    return (
      <div className="p-5 text-center">
        <h1 className="text-orange-500 ">Daily Task Manager</h1>
        <div className="bg-gray-200  p-6 text">
          <input
            type="text"
            name="name"
            placeholder="Task Name"
            value={name}
            onChange={this.handleInputChange}
            className="border rounded-md p-2 mr-2"
          />
          {validationErrors.name && <p className="text-red-500">{validationErrors.name}</p>}

          <select
            name="assignmentStatus"
            value={assignmentStatus}
            onChange={this.handleInputChange}
            className="border rounded-md p-2 mr-2"
          >
            <option value="">Select Assignment Status</option>
            {predefinedTasks.map((status, index) => (
              <option key={index} value={status}>
                {status}
              </option>
            ))}
          </select>
          {validationErrors.assignmentStatus && (
            <p className="text-red-500">{validationErrors.assignmentStatus}</p>
          )}

          <div>
            <label className="mr-2">
              <input
                type="radio"
                name="selectedSkill"
                value="ui"
                checked={selectedSkill === "ui"}
                onChange={this.handleInputChange}
                className="mr-1"
              />
              UI
            </label>
            <label className="mr-2">
              <input
                type="radio"
                name="selectedSkill"
                value="java"
                checked={selectedSkill === "java"}
                onChange={this.handleInputChange}
                className="mr-1"
              />
              Java
            </label>
            <label>
              <input
                type="radio"
                name="selectedSkill"
                value="python"
                checked={selectedSkill === "python"}
                onChange={this.handleInputChange}
                className="mr-1"
              />
              Python
            </label>
          </div>

          <input
            type="text"
            name="batchNumber"
            placeholder="Batch Number"
            value={batchNumber}
            onChange={this.handleInputChange}
            className="border rounded-md p-2 mt-2 mr-2"
          />
          {validationErrors.batchNumber && <p className="text-red-500">{validationErrors.batchNumber}</p>}

          <input
            type="range"
            name="progress"
            value={progress}
            onChange={this.handleInputChange}
            min="0"
            max="100"
            className="border rounded-md mt-2"
          />
          <p>Progress: {progress}%</p>

          {isEditing ? (
            <button onClick={this.handleUpdateTask} className="bg-blue-500 text-white p-2 rounded-md mt-3">
              Update Task
            </button>
          ) : (
            <button onClick={this.handleAddTask} className="bg-green-500 text-white p-2 rounded-md mt-3">
              Add Task
            </button>
          )}
           <button className="bg-orange-500 text-white p-2 rounded-md mt-3 ms-5">
             Show Data
            </button>
        </div>

        <div className="mt-6">
          {tasks.length > 0 && (
            <table className="min-w-full table-auto bg-white rounded-lg shadow-md">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="px-4 py-2">Task Name</th>
                  <th className="px-4 py-2">Assignment Status</th>
                  <th className="px-4 py-2">Skill</th>
                  <th className="px-4 py-2">Batch Number</th>
                  <th className="px-4 py-2">Progress</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id} className="bg-blue-50">
                    <td className="border px-4 py-2">{task.name}</td>
                    <td className="border px-4 py-2">{task.assignmentStatus}</td>
                    <td className="border px-4 py-2">{task.selectedSkill}</td>
                    <td className="border px-4 py-2">{task.batchNumber}</td>
                    <td className="border px-4 py-2">{task.progress}%</td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() => this.handleEditTask(task.id)}
                        className="bg-yellow-500 text-white p-2 rounded-md mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => this.handleDeleteTask(task.id)}
                        className="bg-red-500 text-white p-2 rounded-md"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  }
}
export default DailyTask;
