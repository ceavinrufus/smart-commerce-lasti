import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

const FinancialDashboardPage = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_BASE_URL + "/recap"
        );
        const groupedTransactions = {};

        response.data?.transactions.forEach((transaction) => {
          const date = new Date(transaction.date);
          const monthYear = `${date.toLocaleString("en-US", {
            month: "long",
          })} ${date.getFullYear()}`;
          const key = monthYear.toLowerCase();

          if (!groupedTransactions[key]) {
            groupedTransactions[key] = {
              month: monthYear,
              income: 0,
              expenses: 0,
            };
          }

          if (transaction.type === "incoming") {
            groupedTransactions[key].income += transaction.amount;
          } else if (transaction.type === "outgoing") {
            groupedTransactions[key].expenses += transaction.amount;
          }
        });

        const result = Object.values(groupedTransactions).sort((a, b) => {
          const months = [
            "january",
            "february",
            "march",
            "april",
            "may",
            "june",
            "july",
            "august",
            "september",
            "october",
            "november",
            "december",
          ];
          return (
            months.indexOf(a.month.toLowerCase().split(" ")[0]) -
            months.indexOf(b.month.toLowerCase().split(" ")[0])
          );
        });
        setData(result);
      } catch (error) {
        console.error("Error post data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const labels = data.map((data) => data.month);
    const incomeData = data.map((data) => data.income);
    const expensesData = data.map((data) => data.expenses);
    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Income",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            data: incomeData,
          },
          {
            label: "Expenses",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            data: expensesData,
          },
        ],
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [data]);

  return (
    <div className="flex p-12 justify-center">
      <div className="h-3/4 w-3/4">
        <canvas ref={chartRef} width="400" height="200"></canvas>
      </div>
    </div>
  );
};

export default FinancialDashboardPage;
