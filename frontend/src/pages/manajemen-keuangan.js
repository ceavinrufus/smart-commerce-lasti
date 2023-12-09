import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const FinancialDashboard = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const mockData = [
    { month: 'January', income: 5000, expenses: 3000 },
    { month: 'February', income: 6000, expenses: 3500 },
  ];

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const labels = mockData.map((data) => data.month);
    const incomeData = mockData.map((data) => data.income);
    const expensesData = mockData.map((data) => data.expenses);
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Income',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: incomeData,
          },
          {
            label: 'Expenses',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
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
  }, [mockData]);

  return (
    <div className="font-sans text-gray-900 antialiased w-full h-full bg-cover px-9 py-5" style={{ backgroundImage: "url('./images/bg.svg')" }}>
      <div className="flex items-center justify-between gap-12 mb-6">
        <img src="/images/home.svg" className="" alt="Home" />
        <form action="#" method="get">
          <input type="text" name="search" placeholder="Search" className="rounded-2xl bg-transparent w-96" />
        </form>
        <div>
          <a href="/login" className="font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Log in</a>
          <a href="/register" className="ml-4 font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Register</a>
        </div>
      </div>
      <div className="flex gap-12">
        <div className="flex flex-col items-center bg-stone-600 h-[800px] rounded-2xl py-4">
          <a href="/" className=""><img src="/images/katalog.svg" className="cursor-pointer" alt="Catalog" /></a>
          <a href="/history" className=""><img src="/images/history.svg" className="cursor-pointer" alt="History" /></a>
        </div>
        <div className="flex-1">
          <canvas ref={chartRef} width="400" height="200"></canvas>
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;
