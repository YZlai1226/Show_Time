import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link} from "react-router-dom";
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';


export default function UserList() {

    const [usersData, setUsersData] = useState([])

    useEffect(() => {
      axios.get('http://localhost:3000/users')
      .then(res => {
        console.log(res)
        setUsersData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }, [])

    

    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        { field: 'avatar', headerName: 'Avatar', width: 100, renderCell: (params) => {
          return(
            <div>
              <img style={{ width: 30, height: 30, borderRadius: 50}} src={params.row.avatar} alt=""></img>
            </div>
          )
        } },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 220 },
        { field: 'account_active', headerName: 'is Active', width: 100 },
        { field: 'admin', headerName: 'is Admin', width: 100 },
        { field: 'created_at',  headerName: 'Created At',  width: 200, },
        
        { field: 'action',  headerName: 'Actions', width: 150, 
          renderCell: (params) => {
              return (
                  <>
                    <Link to={"/dashboard/user/" + params.row._id}>
                    <Button  variant="success">
                    <i style={{marginRight: 2}} class="bi bi-box-arrow-in-right"></i>  Actions
                    </Button>                       
                    </Link>
                                              
                  </>
              );
          }
            },

      ];

      

        return (
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              getRowId={(row) => row._id}
              rows={usersData}
              disableSelectionOnClick
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
        );
        }     
