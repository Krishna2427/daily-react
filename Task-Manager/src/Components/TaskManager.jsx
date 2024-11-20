import { Component } from "react";
import PropTypes from "prop-types";

class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskName: "",
      assignee: "",
      progress: 0,
      isEditing: false,
      currentTaskId: null,
      predefinedTasks: [
        "Finished Project report",
        "Prepare for presentation",
        "Update resume",
        "Clean the workspace",
        "Read a book",
      ],
      showList: false,
      role: "",
      validationsErrors: {},
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this);
    this.handleUpdateTask = this.handleUpdateTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleSelectTask = this.handleSelectTask.bind(this);
  }

  static propTypes = {
    initialTasks: PropTypes.array,
  };

  validateInputs() {
    const { taskName, assignee, role } = this.state;
    const errors = {};

    if (!taskName) errors.taskName = "Task name is required";
    if (!assignee) errors.assignee = "Assignee is required";
    if (!role) errors.role = "Please select a role (Back-End or Front-End Developer)";

    this.setState({ validationsErrors: errors });
    return Object.keys(errors).length === 0;
  }

  handleInputChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      this.setState({ role: checked ? name : "" });
    } else if (name === "progress") {
      this.setState({ [name]: Number(value) });
    } else {
      this.setState({ [name]: value });
    }
  }

  handleSelectTask(e) {
    const { value } = e.target;
    this.setState({ taskName: value });
  }

  handleAddTask() {
    if (!this.validateInputs()) return;

    const { tasks, taskName, assignee, progress, role } = this.state;
    const newTask = {
      id: Date.now(),
      name: taskName,
      assignee,
      progress,
      roles: {
        [role]: true,
      },
    };

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
      taskName: "",
      assignee: "",
      progress: 0,
      showList: true,
      role: "",
      validationsErrors: {},
    }));
  }

  handleEditTask(id) {
    const taskToEdit = this.state.tasks.find((task) => task.id === id);
    this.setState({
      taskName: taskToEdit.name,
      assignee: taskToEdit.assignee,
      progress: taskToEdit.progress,
      isEditing: true,
      currentTaskId: id,
      role: Object.keys(taskToEdit.roles).find((key) => taskToEdit.roles[key]),
    });
  }

  handleUpdateTask() {
    if (!this.validateInputs()) return;

    const { tasks, taskName, currentTaskId, assignee, progress, role } = this.state;
    const updatedTasks = tasks.map((task) =>
      task.id === currentTaskId
        ? {
            ...task,
            name: taskName,
            assignee,
            progress,
            roles: {
              [role]: true,
            },
          }
        : task
    );

    this.setState({
      tasks: updatedTasks,
      taskName: "",
      assignee: "",
      progress: 0,
      isEditing: false,
      currentTaskId: null,
      role: "",
      validationsErrors: {},
    });
  }

  handleDeleteTask(id) {
    const filteredTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: filteredTasks });
  }

  render() {
    const {
      tasks,
      taskName,
      assignee,
      progress,
      isEditing,
      predefinedTasks,
      showList,
      role,
      validationsErrors,
    } = this.state;

    return (
      <div className="p-5">
        <h1>Task Manager</h1>
        <div className="bg-gray-200 p-6">
          <select
            onChange={this.handleSelectTask}
            value={taskName}
            className="border rounded-md p-2 mr-2"
          >
            <option value="">Select a task</option>
            {predefinedTasks.map((task, index) => (
              <option key={index} value={task}>
                {task}
              </option>
            ))}
          </select>
          {validationsErrors.taskName && (
            <p className="text-red-500">{validationsErrors.taskName}</p>
          )}
          <input
            type="text"
            name="assignee"
            placeholder="Assignee name"
            value={assignee}
            className="border rounded-md p-2 mr-2"
            onChange={this.handleInputChange}
            required
          />
          {validationsErrors.assignee && (
            <p className="text-red-500">{validationsErrors.assignee}</p>
          )}

          <div>
            <label className="mr-2">
              <input
                type="checkbox"
                name="backEndDeveloper"
                checked={role === "backEndDeveloper"}
                onChange={this.handleInputChange}
                className="mr-1"
              />
              Back-End Developer
            </label>
            <label>
              <input
                type="checkbox"
                name="frontEndDeveloper"
                checked={role === "frontEndDeveloper"}
                onChange={this.handleInputChange}
                className="mr-1"
              />
              Front-End Developer
            </label>
            <input
              type="range"
              name="progress"
              value={progress}
              onChange={this.handleInputChange}
              min="0"
              max="100"
              className="border rounded-md mt-2 ms-3 appearance-none bg-blue-200"
              required
            />
          </div>
          {validationsErrors.role && (
            <p className="text-red-500">{validationsErrors.role}</p>
          )}
          {isEditing ? (
            <button
              className="bg-blue-500 text-white p-2 rounded-md"
              onClick={this.handleUpdateTask}
            >
              Update Task
            </button>
          ) : (
            <button
              className="bg-green-500 text-white p-2 rounded-md"
              onClick={this.handleAddTask}
            >
              Add Task
            </button>
          )}
        </div>

        {showList && (
          <div className="overflow-x-auto mt-7">
            <table className="min-w-full table-auto bg-white rounded-lg shadow-md">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="px-4 py-2">Task</th>
                  <th className="px-4 py-2">Employee</th>
                  <th className="px-4 py-2">Progress</th>
                  <th className="px-4 py-2">Role</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id} className="bg-blue-50">
                    <td className="border px-4 py-2">{task.name}</td>
                    <td className="border px-4 py-2">{task.assignee}</td>
                    <td className="border px-4 py-2">{task.progress}%</td>
                    <td className="border px-4 py-2">
                      {task.roles.backEndDeveloper ? "Back-End Developer " : ""}
                      {task.roles.frontEndDeveloper ? "Front-End Developer" : ""}
                    </td>
                    <td className="border px-4 py-2">
                      <button
                        className="bg-yellow-500 text-white p-2 rounded-md mr-2"
                        onClick={() => this.handleEditTask(task.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white p-2 rounded-md"
                        onClick={() => this.handleDeleteTask(task.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}
export default TaskManager;