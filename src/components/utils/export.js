import { useState } from "react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
export const exportData = (userData, fileType) => {
  const startDate = new Date("2024-05-10T00:00:00Z");
  const endDate = new Date("2024-05-10T23:59:59Z");
  if (!startDate || !endDate) {
    alert("Please select both start and end date.");
    return;
  }
  const filteredData = userData.filter((item) => {
    const itemDate = new Date(item.created_at);
    return itemDate >= startDate && itemDate <= endDate;
  });
  if (filteredData.length === 0) {
    alert("No data found for the selected date range.");
    return;
  }

  // Generate and download Excel file
  if (fileType === "xlsx" || fileType === "xls") {
    // Export to Excel
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

    const excelBuffer = XLSX.write(workbook, {
      bookType: fileType,
      type: "array",
    });
    const dataBlob = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });
    saveAs(dataBlob, `data.${fileType}`);
  } else if (fileType === "pdf") {
    // Export to PDF using jsPDF and autoTable
    const doc = new jsPDF("p", "pt", "a4");

    const columns = Object.keys(filteredData[0]).map((key) => ({
      header: key,
      dataKey: key,
    }));
    doc.autoTable({
      head: [columns],
      body: filteredData,
      theme: "striped",
      styles: { fontSize: 8 },
      margin: { top: 20 },
    });

    doc.save("data.pdf");
  }

  console.log(filteredData);
};
