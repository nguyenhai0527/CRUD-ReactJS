import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let history = useNavigate();

  const handleEdit = (id, name, age, email) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("Email", email);
    localStorage.setItem("Id", id);
  };

  const handleDelete = (id) => {
    var index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);
    Employees.splice(index, 1);
    history("/");
  };

  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((items) => {
                  return (
                    <tr>
                      <td>{items.name}</td>
                      <td>{items.age}</td>
                      <td>{items.email}</td>
                      <td>
                        <Link to={`/edit`}>
                          <Button
                            onClick={() =>
                              handleEdit(
                                items.id,
                                items.name,
                                items.age,
                                items.email
                              )
                            }
                          >
                            EDIT
                          </Button>
                        </Link>
                        &nbsp;
                        <Button onClick={() => handleDelete(items.id)}>
                          DELETE
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : "No Data"}
          </tbody>
        </Table>
        <br />
        <Link className="d-grid gap-2" to={"/create"}>
          <Button size="lg">CREATE</Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Home;
