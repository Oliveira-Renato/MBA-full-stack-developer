'use client'
import { Header } from "@/app/components/Header"
import SelectComponent from "@/app/components/SelectComponent"
import { TableComponent } from "@/app/components/TableComponent"
import { useEffect, useState } from "react"

type Params = {
  params: {
    year: string
  }
}

export default function PartidasPage({ params: { year } }: Params) {
  const [selectedYear, setSelectedYear] = useState(year);

  if (!selectedYear) return (<>NOT FOUND </>);

  return (
    <div>
      {/* header component */}
      <Header />

      {/* select component */}
      <SelectComponent selectedYear={selectedYear} setSelectedYear={setSelectedYear} />

      {/* table component */}
      <TableComponent year={selectedYear} />
    </div>
  );
}


