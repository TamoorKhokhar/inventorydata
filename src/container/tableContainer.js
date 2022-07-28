import React, { useEffect, useState } from "react";
import Table from "../table/table";
import { getTableData } from "../services/tableDataServices";
export default function TableContainer() {
  const [tableRowsData, setTableRowsData] = useState([]);

  const fetchTableData = async () => {
    const tableData = await getTableData();

    setTableRowsData(tableData);
    console.log(tableData);
  };
  useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <div>
      <Table tableRowsData={tableRowsData} apiGet={getTableData} />
    </div>
  );
}
