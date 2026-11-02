import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCard from "./components/StatCard";
import ApiTesting from "./components/ApiTesting";

import {
  FlaskConical,
  CheckCircle2,
  XCircle,
  Activity,
  ArrowUpRight,
  Clock,
  MoreHorizontal,
} from "lucide-react";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-content">
        <Topbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {activePage === "testing" ? (
          <ApiTesting />
        ) : (
          <div className="dashboard-content">

            <section className="welcome-section">
              <div>
                <p className="welcome-label">WORKSPACE OVERVIEW</p>
                <h1>Welcome back, Developer 👋</h1>
                <p className="welcome-description">
                  Here's what's happening with your APIs today.
                </p>
              </div>

              <button
                className="primary-button"
                onClick={() => setActivePage("testing")}
              >
                <FlaskConical size={18} />
                Run New Test
              </button>
            </section>

            <section className="stats-grid">
              <StatCard
                title="Total API Tests"
                value="1,284"
                change="+12.5%"
                icon={FlaskConical}
                color="purple"
              />

              <StatCard
                title="Passed Tests"
                value="1,156"
                change="+8.2%"
                icon={CheckCircle2}
                color="green"
              />

              <StatCard
                title="Failed Tests"
                value="128"
                change="-3.4%"
                icon={XCircle}
                color="red"
              />

              <StatCard
                title="Success Rate"
                value="89.8%"
                change="+5.6%"
                icon={Activity}
                color="cyan"
              />
            </section>

            <section className="dashboard-grid">

              <div className="dashboard-panel activity-panel">
                <div className="panel-header">
                  <div>
                    <h2>Testing Activity</h2>
                    <p>API execution overview</p>
                  </div>

                  <button className="period-button">
                    Last 7 days
                    <MoreHorizontal size={18} />
                  </button>
                </div>

                <div className="chart-placeholder">
                  <div className="chart-bars">
                    {[45, 70, 55, 85, 65, 95, 75].map(
                      (height, index) => (
                        <div className="chart-column" key={index}>
                          <div
                            className="chart-bar"
                            style={{ height: `${height}%` }}
                          ></div>

                          <span>
                            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="chart-legend">
                  <span>
                    <i className="legend-dot purple-dot"></i>
                    API Tests
                  </span>

                  <span>
                    <i className="legend-dot cyan-dot"></i>
                    Successful
                  </span>
                </div>
              </div>

              <div className="dashboard-panel performance-panel">
                <div className="panel-header">
                  <div>
                    <h2>Performance</h2>
                    <p>Overall test performance</p>
                  </div>

                  <Activity size={20} />
                </div>

                <div className="performance-score">
                  <div className="score-circle">
                    <strong>89.8%</strong>
                    <span>Success</span>
                  </div>
                </div>

                <div className="performance-details">
                  <div>
                    <span>Passed</span>
                    <strong className="success-text">1,156</strong>
                  </div>

                  <div>
                    <span>Failed</span>
                    <strong className="failure-text">128</strong>
                  </div>
                </div>
              </div>

            </section>

            <section className="dashboard-panel recent-panel">
              <div className="panel-header">
                <div>
                  <h2>Recent API Tests</h2>
                  <p>Latest API testing activity</p>
                </div>

                <button
                  className="view-all-button"
                  onClick={() => setActivePage("history")}
                >
                  View all
                  <ArrowUpRight size={16} />
                </button>
              </div>

              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>API NAME</th>
                      <th>METHOD</th>
                      <th>STATUS</th>
                      <th>RESPONSE TIME</th>
                      <th>LAST RUN</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Health Check API</td>
                      <td><span className="method get">GET</span></td>
                      <td><span className="status-badge passed">● Passed</span></td>
                      <td><Clock size={14} /> 45 ms</td>
                      <td>Just now</td>
                    </tr>

                    <tr>
                      <td>Sample Test API</td>
                      <td><span className="method get">GET</span></td>
                      <td><span className="status-badge passed">● Passed</span></td>
                      <td><Clock size={14} /> 62 ms</td>
                      <td>5 minutes ago</td>
                    </tr>

                    <tr>
                      <td>User Authentication API</td>
                      <td><span className="method post">POST</span></td>
                      <td><span className="status-badge failed">● Failed</span></td>
                      <td><Clock size={14} /> 120 ms</td>
                      <td>20 minutes ago</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <footer className="dashboard-footer">
              <span>© 2026 APIForge. Built for better API testing.</span>
              <span>Powered by Spring Boot & React</span>
            </footer>

          </div>
        )}
      </main>
    </div>
  );
}

export default App;