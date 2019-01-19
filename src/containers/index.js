import React, { Component } from "react";
import { connect } from "react-redux";
import * as index from "../actions/index";
import { bindActionCreators } from "redux";

class TaskList extends Component {
    constructor() {
        super();

        this.state = {
            ID: 0,
            Name: '',
            Address: '',
            Mobile: ''
        }
        this.onEditStudents = this.onEditStudents.bind(this);
    }

    onEditStudents(item) {
        console.log(item);
        this.setState({
            ID: item.ID,
            Name: item.Name,
            Address: item.Address,
            Mobile: item.Mobile
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <span>Task</span>
                            </div>
                            <div className="panel-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Address</th>
                                            <th>Mobile</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.students.map((item) => { return (<tr key={item.ID}><td>{item.ID}</td><td>{item.Name}</td><td>{item.Address}</td><td>{item.Mobile}</td><td><button type="button" onClick={() => this.onEditStudents(item)}>Edit</button></td><td><button type="button" onClick={() => this.props.DELETE_STUDENT(item)}>Delete</button></td></tr>) })}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-primary">
                            <div className="panel-body">
                                <table className="table">
                                    <body>
                                        <tr>
                                            <td>Name</td>
                                            <td>
                                                <input type="text" onChange={e => this.setState({ Name: e.target.value })} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td>
                                                <input type="text" onChange={e => this.setState({ Address: e.target.value })} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Mobile</td>
                                            <td>
                                                <input type="text" onChange={e => this.setState({ Mobile: e.target.value })} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <button type="button" onClick={() => { this.props.INSERT_STUDENT(this.state) }}>Add</button>
                                            </td>
                                            <td>
                                                <button type="button" onClick={() => { this.props.UPDATE_STUDENT(this.state) }}>Update</button>
                                            </td>
                                        </tr>

                                    </body>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        students: state.students

    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ INSERT_STUDENT: index.ADD_STUDENTS, UPDATE_STUDENT: index.MODIFY_STUDENTS, DELETE_STUDENT: index.REMOVE_STUDENTS }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);