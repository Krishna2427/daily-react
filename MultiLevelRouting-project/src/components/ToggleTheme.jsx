const ToggleTheme = ({ isdark, toggleTheme }) => (
  <button onClick={toggleTheme}>
    Switch to {isdark ? "Light" : "Dark"} Mode
  </button>
);

export default ToggleTheme;
