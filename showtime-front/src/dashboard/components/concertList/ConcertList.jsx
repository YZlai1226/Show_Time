import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import axios from "axios";
import axios from '../../../api/axios'
import { DataGrid } from "@mui/x-data-grid";

export default function ConcertList() {
  const [concertsData, setConcertsData] = useState([]);

  useEffect(() => {
    axios
      .get("/concerts")
      .then((res) => {
        console.log(res);
        setConcertsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    {
      field: "image",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return (
          <div>
            <img
              style={{ width: 30, height: 30, borderRadius: 50 }}
              src={params.row.image}
              alt=""
            ></img>
          </div>
        );
      },
    },
    { field: "title", headerName: "Title", width: 130 },
    { field: "date", headerName: "Date", width: 110 },
    { field: "description", headerName: "Description", width: 230 },
    { field: "band_id", headerName: "Band_id", width: 120 },
    { field: "genre_id", headerName: "Genre_id", width: 120 },
    { field: "created_at", headerName: "Created At", width: 110 },

    {
      field: "action",
      headerName: "Actions",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/dashboard/concert/" + params.row._id}>
              <Button variant="success">
                <i
                  style={{ marginRight: 2 }}
                  class="bi bi-box-arrow-in-right"
                ></i>{" "}
                Actions
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={concertsData}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
