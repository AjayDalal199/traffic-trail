function TableRow({ rowData }) {
  return (
    <tr className="divide-x divide-gray-300 text-gray-700 odd:bg-gray-50">
      <td className="px-4 py-4 border-b border-gray-300">
        {rowData.serialNum}
      </td>
      <td className="px-4 py-4 border-b border-gray-300">{rowData.site}</td>
      <td className="px-4 py-4 border-b border-gray-300">{rowData.pr}</td>
      <td className="px-4 py-4 border-b border-gray-300">{rowData.pa}</td>
      <td className="px-4 py-4 border-b border-gray-300">{rowData.da}</td>
      <td className="px-4 py-4 border-b border-gray-300">{rowData.ss}</td>
    </tr>
  );
}

export default TableRow;
