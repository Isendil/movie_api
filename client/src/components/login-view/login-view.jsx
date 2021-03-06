// import React, { useState } from "react";
// import PropTypes from "prop-types";
// //Routing
// import axios from "axios";
// import { Link } from "react-router-dom";
// //Styling
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";

// export function LoginView(props) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   // const handleSubmit = e => {
//   //   e.preventDefault();
//   //   console.log(username, password);
//   //   axios
//   //     .post("https://terranovas.herokuapp.com/login", {
//   //       UserName: username,
//   //       Password: password
//   //     })
//   //     .then(response => {
//   //       const data = response.data;
//   //       props.onLoggedIn(data);
//   //     })
//   //     .catch(e => {
//   //       console.log("no such user");
//   //       alert("no such user");
//   //     });
//   // };
//   const handleSubmit = e => {
//     e.preventDefault();
//     /* Send a request to the server for authentication */
//     axios
//       .post("https://terranovas.herokuapp.com/login", {
//         UserName: username,
//         Password: password
//       })
//       .then(response => {
//         const data = response.data;
//         props.onLoggedIn(data);
//       })
//       .catch(e => {
//         console.log("no such user");
//       });
//   };

//   return (
//     <Container style={{ width: "22rem" }}>
//       <Form>
//         <Form.Group controlId="formBasicUsername">
//           <Form.Label>Username:</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter Username"
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password:</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button type="button" onClick={handleSubmit}>
//           Login
//         </Button>

//         <Form.Group controlId="newUser">
//           <Form.Text>
//             <Link to={`/register`}>
//               <Button id="registerButton">Sign Up!</Button>
//             </Link>
//             <h6> To access more features! </h6>
//           </Form.Text>
//         </Form.Group>
//       </Form>
//     </Container>
//   );
// }

// LoginView.propTypes = {
//   onLoggedIn: PropTypes.func.isRequired
// };

import React, { useState } from "react";
import PropTypes from "prop-types";
//Routing
import axios from "axios";
import { Link } from "react-router-dom";
//Styling
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(username, password);
    axios
      .post("https://terranovas.herokuapp.com/login", {
        UserName: username,
        Password: password
      })
      .then(response => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch(e => {
        console.log("no such user");
        alert("no such user");
      });
  };

  return (
    <Container style={{ width: "22rem" }}>
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="button" onClick={handleSubmit}>
          Login
        </Button>

        <Form.Group controlId="newUser">
          <Form.Text>
            <Link to={`/register`}>
              <Button id="registerButton">Sign Up!</Button>
            </Link>
            <h6> To access more features! </h6>
          </Form.Text>
        </Form.Group>
      </Form>
    </Container>
  );
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired
};
