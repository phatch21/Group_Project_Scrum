function Settings() {
  return (
    <>
      <h1>Settings</h1>

      <form>
        <label htmlFor="notifications">Notifications:</label>
        <br />
        <select id="notifications" name="notifications">
          <option value="enabled">Enabled</option>
          <option value="disabled">Disabled</option>
        </select>
        <br />
        <br />

        <label>
          <input type="checkbox" name="darkmode" />
          Enable Dark Mode
        </label>
        <br />
        <br />

        <button type="submit">Save Settings</button>
      </form>
    </>
  );
}

export default Settings;
