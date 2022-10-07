import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Stats from "./Stats";

const data = require("./planning.json");

const rows = data.map((item) => ({
  id: item.id,
  originalId: item.originalId,
  operatingUnit: item.operatingUnit,
  officePostalCode: item.officePostalCode,
  totalHours: item.totalHours,
  startDate: item.startDate,
  endDate: item.endDate,
  officeCity: item.officeCity,
  bookingGrade: item.bookingGrade,
  clientId: item.clientId,
}));

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "originalId", headerName: "Original ID", width: 150 },
  { field: "operatingUnit", headerName: "Operating Unit", width: 150 },
  { field: "officePostalCode", headerName: "Office Postal Code", width: 150 },
  {
    field: "totalHours",
    headerName: "Total Hours",
    width: 120,
  },
  { field: "startDate", headerName: "Start Date", width: 180 },
  { field: "endDate", headerName: "End Date", width: 180 },
  { field: "officeCity", headerName: "Office City", width: 150 },
  { field: "bookingGrade", headerName: "Booking Grade", width: 150 },
  { field: "clientId", headerName: "Client ID", width: 150 },
];

export default function Table() {
  return (
    <>
      <Stats data={rows} />
      <div
        style={{
          height: 1200,
          width: "100%",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[20]}
        />
      </div>
    </>
  );
}
