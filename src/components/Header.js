import { useLocation } from "react-router-dom";

const Header = ({ onAdd, showAddForm }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>Task Tracker</h1>
      {location.pathname === "/" && (
        <button className="btn" onClick={onAdd}>
          {showAddForm ? "Close" : "Add"}
        </button>
      )}
    </header>
  );
};

export default Header;
