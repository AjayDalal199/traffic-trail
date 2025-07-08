import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import TableRow from "./TableRow";

function PostTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(
    function () {
      async function fetchData() {
        try {
          const { data } = await axiosInstance.get("/api/data");
          console.log(data);
          setTableData(data);
        } catch (err) {
          console.error(err);
        }
      }
      fetchData();
    },
    [setTableData]
  );

  return (
    <div>
      <h1 className="font-bold text-5xl mb-8">
        190+ High PR Social Bookmarking Sites with Free Download
      </h1>
      <table className="min-w-full table-auto border border-gray-300 text-left ">
        <thead className="text-gray-900">
          <tr className="divide-x divide-gray-300">
            <th className="px-4 py-4 text-left border-b border-gray-300">
              S.No.
            </th>
            <th className="px-4 py-4 text-left border-b border-gray-300">
              Social Bookmarking Sites
            </th>
            <th className="px-4 py-4 text-left border-b border-gray-300">PR</th>
            <th className="px-4 py-4 text-left border-b border-gray-300">DA</th>
            <th className="px-4 py-4 text-left border-b border-gray-300">PA</th>
            <th className="px-4 py-4 text-left border-b border-gray-300">SS</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <TableRow key={row.serialNum} rowData={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PostTable;
