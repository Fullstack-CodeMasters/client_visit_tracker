import React, {useState} from "react";
import './login.css';



const Login = props => {

    const { userRoles, handleUserRoleChange } = props;
    const [userRole, setUserRole] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        //do Validation for user entered values
        handleUserRoleChange(userRole);
    };

    return (
        <React.Fragment>
            <div className="container bg-theme-color">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12 login-box bg-white">
                            <h3 className="text-center text-info">Login</h3>
                            <div className="form-group">
                                <label htmlFor="username" className="text-info">Username:</label><br/>
                                <select className="form-control" id="username" onChange={(e) => setUserRole(e.target.value)}>
                                    <option key="default">Select one</option>
                                    {userRoles.map ((userRole) => (
                                        <option key={userRole.id}>{userRole.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="text-info">Password:</label><br/>
                                <input type="password" name="password" id="password" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="remember-me" className="text-info"><span>Remember me</span>
                                    <span><input id="remember-me" name="remember-me"
                                                 type="checkbox"/></span></label><br/>
                                <button name="submit"
                                        className="btn btn-info btn-md"
                                        onClick={handleSubmit}
                                >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login