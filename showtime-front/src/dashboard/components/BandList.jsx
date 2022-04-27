import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link} from "react-router-dom";
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

export default function BandList() {
    const [bandsData, setBandsData] = useState([])

    useEffect(() => {
      axios.get('http://localhost:3000/bands')
      .then(res => {
        console.log(res)
        setBandsData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }, [])



    const columns = [
        { field: '_id', headerName: 'ID', width: 400 },
        { field: 'name', headerName: 'Name', width: 150 },
        
        { field: '__v', headerName: 'V', width: 100 },
        { field: 'created_at',  headerName: 'Created At',  width: 200, },
        { field: 'updated_at',  headerName: 'Updated At',  width: 200, },

        
        { field: 'action',  headerName: 'Actions', width: 150, 
          renderCell: (params) => {
              return (
                  <>
                    <Link to={"/dashboard/user/" + params.row._id}>
                    <Button  variant="success">
                        Edit
                    </Button>                       
                    </Link>
                        <DeleteForeverIcon style={{color: "red", fontSize: 40, marginLeft: 10}}/> 
                  </>
              );
          }
            },


      ];

      

        return (
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              getRowId={(row) => row._id}
              rows={bandsData}
              disableSelectionOnClick
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
        );
        }     

