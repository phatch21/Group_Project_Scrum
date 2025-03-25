import { useState } from "react";

function CreateAccount() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:7182/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to create account");
      }
      const data = await response.json();
      console.log("Account created successfully:", data);
    } catch (err) {
      setError("Error creating account. Please try again.");
      console.error(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        id="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" value={formData.lastName} onChange={handleChange} />
      <br />

      <label htmlFor="email">Email:</label>
      <input id="email" value={formData.email} onChange={handleChange} />
      <br />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={formData.password}
        onChange={handleChange}
      />
      <br />

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
export default CreateAccount;
