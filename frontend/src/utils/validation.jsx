export function validateLogin(formData) {
  const errors = {};

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Please enter a valid email";
  }

  if (!formData.password.trim()) {
    errors.password = "Password is required";
  }

  return errors;
}

export function validateRegister(formData) {
  const errors = {};

  if (!formData.username.trim()) {
    errors.username = "Username is required";
  } else if (formData.username.length < 3) {
    errors.username = "Username must be at least 3 characters";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Please enter a valid email";
  }

  if (!formData.password.trim()) {
    errors.password = "Password is required";
  } else if (formData.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!formData.confirmPassword.trim()) {
    errors.confirmPassword = "Please confirm your password";
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
}

export function getPasswordStrength(password) {
  if (!password) {
    return {
      text: "",
      color: ""
    };
  }

  if (password.length < 6) {
    return {
      text: "Weak",
      color: "text-red-400"
    };
  }

  if (password.length < 10) {
    return {
      text: "Medium",
      color: "text-yellow-400"
    };
  }

  return {
    text: "Strong",
    color: "text-green-400"
  };
}