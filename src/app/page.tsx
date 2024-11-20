"use client";
import Chart from "@/pages/main/Chart";
import Form from "@/pages/main/Form";
import { OrthodonticDTO } from "@/pages/main/scheme";
import { useState } from "react";

export default function Home() {
  const [chartData, setChartData] = useState({
    cooperate: 0,
    incooperate: 0,
  });

  const handleSubmit = (data: OrthodonticDTO) => {
    setChartData(data);
  };
  return (
    <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex  gap-16 row-start-2 items-center sm:items-start">
        <Form onSubmit={handleSubmit} />
        <Chart
          key={chartData.cooperate + chartData.incooperate}
          cooperate={chartData.cooperate}
          incooperate={chartData.incooperate}
        />
      </main>
    </div>
  );
}
