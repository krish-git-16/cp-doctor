import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";

import { validateLogin } from "../utils/validation";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ""
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateLogin(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await loginUser(formData);

      localStorage.setItem("token", response.data.token);

      navigate("/connect");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  }

  return (
    <AuthLayout title="Login" subtitle="Welcome back to CP Doctor">
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          error={errors.email}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          error={errors.password}
        />

        <Button text="Login" type="submit" className="w-full mt-2" />
      </form>

      <p className="text-center text-gray-400 mt-6">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500 hover:text-blue-400">
          Register
        </Link>
      </p>
    </AuthLayout>
  );
}

export default Login;