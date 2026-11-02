import {
  LayoutDashboard,
  FlaskConical,
  History,
  BookOpen,
  Settings,
  Zap,
  ChevronLeft,
} from "lucide-react";

function Sidebar({ activePage, setActivePage }) {
  const navigation = [
    { name: "Dashboard", icon: LayoutDashboard, page: "dashboard" },
    { name: "API Testing", icon: FlaskConical, page: "testing" },
    { name: "Test History", icon: History, page: "history" },
    { name: "Documentation", icon: BookOpen, page: "documentation" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">
          <Zap size={24} />
        </div>

        <div>
          <h2>APIForge</h2>
          <span>API TESTING PLATFORM</span>
        </div>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-heading">WORKSPACE</p>

        <nav className="sidebar-nav">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.page}
                className={`nav-item ${
                  activePage === item.page ? "active" : ""
                }`}
                onClick={() => setActivePage(item.page)}
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="sidebar-bottom">
        <button className="nav-item">
          <Settings size={19} />
          <span>Settings</span>
        </button>

        <div className="sidebar-user">
          <div className="user-avatar">A</div>

          <div>
            <strong>APIForge User</strong>
            <span>Developer</span>
          </div>

          <ChevronLeft size={17} />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;