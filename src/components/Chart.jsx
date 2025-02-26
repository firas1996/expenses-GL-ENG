import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ data }) => {
  const chartData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jui", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const expense of data) {
    chartData[expense.date.getMonth()].value += expense.price;
  }
  const vals = chartData.map((el) => el.value);
  const max = Math.max(...vals);
  const total = vals.reduce((sum, item) => sum + item);
  return (
    <div className="chart">
      {chartData.map((item) => {
        return (
          <ChartBar
            key={item.label}
            label={item.label}
            value={item.value}
            max={max}
            total={total}
          />
        );
      })}
    </div>
  );
};

export default Chart;
