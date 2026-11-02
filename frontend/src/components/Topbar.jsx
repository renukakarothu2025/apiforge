import {
  Search,
  Bell,
  Sun,
  Moon,
  ChevronDown,
} from "lucide-react";

function Topbar({ darkMode, setDarkMode }) {
  return (
    <header className="topbar">

      <div className="topbar-search">
        <Search size={19} />
        <input
          type="text"
          placeholder="Search APIs, tests, documentation..."
        />
        <span className="search-shortcut">⌘ K</span>
      </div>

      <div className="topbar-actions">

        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          title="Toggle theme"
        >
          {darkMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>

        <button className="notification-button">
          <Bell size={19} />
          <span className="notification-dot"></span>
        </button>

        <div className="topbar-profile">
          <div className="profile-avatar">A</div>

          <div className="profile-info">
            <strong>Developer</strong>
            <span>APIForge User</span>
          </div>

          <ChevronDown size={16} />
        </div>

      </div>

    </header>
  );
}

export default Topbar;