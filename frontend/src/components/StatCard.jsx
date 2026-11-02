function StatCard({ title, value, change, icon: Icon, color }) {
  return (
    <div className="stat-card">

      <div className="stat-card-top">
        <span className="stat-title">{title}</span>

        <div className={`stat-icon ${color}`}>
          <Icon size={21} />
        </div>
      </div>

      <h2 className="stat-value">{value}</h2>

      <div className="stat-card-footer">
        <span className="stat-change">{change}</span>
        <span className="stat-period">vs last month</span>
      </div>

    </div>
  );
}

export default StatCard;