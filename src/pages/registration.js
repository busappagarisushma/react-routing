import React from "react";
export default function Registration() {
  return (
    <div>
      <h2>Registration Form</h2>
      <form action="register" method="post">
        <label>UserName:</label> <br />
        <input type="text" name="username"></input>
        <br />
        <br />
        <label>Email:</label> <br />
        <input type="email" name="email"></input>
        <br />
        <br />
        <label>Password:</label> <br />
        <input type="password" name="password"></input>
        <br /> <br />
        <label>Gender: </label> <br />
        Male <input type="radio" name="gender" value="male"></input>
        Female <input type="radio" name="gender" value="female"></input>
        other
        <input type="radio" name="gender" value="other"></input>
        <br />
        <br />
        <label>Role:</label>
        <br />
        Admin <input type="radio" name="role" value="admin"></input>
        Customer <input type="radio" name="role" value="Customer"></input>
        <br />
        <br />
        <label>Address:</label>
        <br />
        <textarea name="address"></textarea>
        <br />
        <br />
        <input type="submit" value="SUBMIT"></input>
      </form>
    </div>
  );
}
