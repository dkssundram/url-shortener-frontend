import { useState } from "react";
import { signupUser } from "../services/authService";

function Signup (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async(e) => {
        e.preventDefault();
        try {
            await signupUser({email, password});
            alert("Signup Successful");
            window.location.href = "/login";
        } catch(err){
            alert("Signup Failed");
        }
    }
    return (
    <div className="container">
      <div className="card">
        <h2>Signup</h2>

        <form onSubmit={handleSignup}>
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="button" type="submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}
export default Signup;