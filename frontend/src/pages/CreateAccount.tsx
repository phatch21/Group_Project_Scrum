import { useState } from "react";
import "../Login.css";
import { User } from "../types/User";

function CreateAccount() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profilePic: ""
  });
  const [error, setError] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const addUser = async function (newUser: User): Promise<User> {
        const response = await fetch(
          "https://localhost:7182/Goals/CreateAccount",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to create account");
        }
        const data = await response.json();
        console.log("Account created successfully:", data);
        return data;
      };

      await addUser(formData);
    } catch (err) {
      setError("Error creating account. Please try again.");
      console.error(err);
    }
  };
  return (
    <div className="login-screen">
      <div className="status-bar">
        <div>9:41</div>
        <div>📶 🔋</div>
      </div>

      <form className="login-content" onSubmit={handleSubmit}>
        <h1 className="login-title">Create Account</h1>
        <label className="login-label" htmlFor="firstName">
          First Name:
        </label>
        <input
          id="firstName"
          className="login-input"
          value={formData.firstName}
          onChange={handleChange}
        />
        <br />
        <label className="login-label" htmlFor="lastName">
          Last Name:
        </label>
        <input
          id="lastName"
          className="login-input"
          value={formData.lastName}
          onChange={handleChange}
        />
        <br />
        <label className="login-label" htmlFor="email">
          Email:
        </label>
        <input
          className="login-input"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label className="login-label" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          className="login-input"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="login-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default CreateAccount;

