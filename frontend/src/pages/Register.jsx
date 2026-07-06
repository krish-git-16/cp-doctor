import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";

import {
  validateRegister,
  getPasswordStrength
} from "../utils/validation";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const strength = getPasswordStrength(formData.password);

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

    const validationErrors = validateRegister(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await registerUser(formData);

      alert(response.data.message);

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  }

  return (
    <AuthLayout title="Create Account" subtitle="Start your CP journey today">
      <form onSubmit={handleSubmit}>
        <Input
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter username"
          error={errors.username}
        />

        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          error={errors.email}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          error={errors.password}
        />

        {strength.text && (
          <p className={`text-sm mb-4 ${strength.color}`}>
            Password Strength: {strength.text}
          </p>
        )}

        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
          error={errors.confirmPassword}
        />

        <Button text="Create Account" type="submit" className="w-full mt-2" />
      </form>

      <p className="text-center text-gray-400 mt-6">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:text-blue-400">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}

export default Register;