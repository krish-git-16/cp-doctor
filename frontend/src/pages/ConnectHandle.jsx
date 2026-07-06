import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { syncHandle } from "../services/api";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";

function ConnectHandle() {
  const navigate = useNavigate();

  const [handle, setHandle] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!handle.trim()) {
      setError("Codeforces handle is required.");
      return;
    }

    setError("");

    try {
      const response = await syncHandle(handle);

      localStorage.setItem("cfHandle", handle);

      alert(response.data.message);

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to Sync Handle");
    }
  }

  return (
    <AuthLayout
      title="Connect Codeforces"
      subtitle="Enter your Codeforces handle to sync your data."
    >
      <form onSubmit={handleSubmit}>
        <Input
          label="Codeforces Handle"
          name="handle"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          placeholder="e.g. tourist"
          error={error}
        />

        <Button text="Sync Account" type="submit" className="w-full mt-2" />
      </form>
    </AuthLayout>
  );
}

export default ConnectHandle;