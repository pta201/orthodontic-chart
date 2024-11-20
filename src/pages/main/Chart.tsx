import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  cooperate: number;
  incooperate: number;
}

const Chart = ({ cooperate = 0, incooperate = 0 }: Props) => {
  const lengends = ["Success percentage (%)"];

  const data = {
    labels: lengends,
    datasets: [
      {
        label: "Cooperate",
        data: [cooperate],
        backgroundColor: ["green"],
        borderColor: ["green"],
        borderWidth: 1,
      },
      {
        label: "Incoperate",
        data: [incooperate],
        backgroundColor: ["red"],
        borderColor: ["red"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Success percentage (%) based on patient cooperation",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default Chart;
