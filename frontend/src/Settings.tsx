import { useNavigate } from "react-router-dom";
import "./styles/Settings.css";

function Settings() {
  const navigate = useNavigate();

  return (
    <div className="settings-screen">
      <h1 className="settings-title">Settings</h1>

      <button
        className="settings-button logout"
        onClick={() => navigate("/Login")}
        type="button"
      >
        Log Out
      </button>
    </div>
  );
}

export default Settings;
