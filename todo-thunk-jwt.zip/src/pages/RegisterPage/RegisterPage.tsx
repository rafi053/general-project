import React, { useState } from "react";
import { useSelector } from "react-redux";
import { registerUser } from "../../store/features/user/userSlice";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import { useAppDispatch } from "../../hooks/useDispatchType";
import { Link } from "react-router-dom";
const RegisterPage: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state: RootState) => state.user);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerUser({ name, age: age || 0, email, password })).then(
      (action) => {
        if (registerUser.fulfilled.match(action)) {
          navigate("/todos");
        }
      }
    );
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {status === "loading" && <p className="loading-message">Loading...</p>}
      {status === "failed" && error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age || ""}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="new-password"
        />
        <button type="submit">Register</button>
      </form>
      <p className="switch-auth">
        Don't have an account? <Link to="/Login">Register here</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
