import "./ChartBar.css";

const ChartBar = ({ label, value, max, total }) => {
  let height = (value / max) * 100 + "%";
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: height }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
