import { useState } from "react";

function CreateAccount() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   // Now you can do something with the formData, like sending it to an API or processing it
  // };

  const handleSubmit = () => {
    console.log("test");
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

      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateAccount;
