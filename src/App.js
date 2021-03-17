import React, { Component } from "react";
import TableHeader from "./components/TableHeader/TableHeader.js";
import SearchForm from "./components/SearchForm/SearchForm.js";
import TableBody from "./components/TableBody/TableBody.js";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees,
    occupation: "",
    original: employees,
  };

  //sort by id
  sortByID = () => {
    let employees = this.state.employees.sort((a, b) => (a.id > b.id ? 1 : -1));
    this.setState({ employees });
  };
  //sort by first name
  sortByFirstName = () => {
    let employees = this.state.employees.sort((a, b) =>
      a.firstName > b.firstName ? 1 : -1
    );
    this.setState({ employees });
  };
  //sort by last name
  sortByLastName = () => {
    let employees = this.state.employees.sort((a, b) =>
      a.lastName > b.lastName ? 1 : -1
    );
    this.setState({ employees });
  };
  //filter employees by occupation
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    const newOccupation = this.state.original.filter((employee) => {
      return employee.occupation.toLowerCase().includes(value.toLowerCase());
    });
    this.setState({ employees: newOccupation });
  };

  render() {
    return (
      <div>
        <SearchForm
          location={this.state.occupation}
          handleInputChange={this.handleInputChange}
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table table-sm table-striped table-bordered">
                <TableHeader
                  employee={employees}
                  sortID={this.sortID}
                  sortFirstName={this.sortFirstName}
                  sortLastName={this.sortLastName}
                />
                <tbody>
                  {this.state.employees.map((employee) => (
                    <TableBody employee={employee} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
