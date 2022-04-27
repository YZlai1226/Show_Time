import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap';
// import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link} from "react-router-dom";
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

export default function GenreList() {

  const [genresData, setGenresData] = useState([])

    useEffect(() => {
      axios.get('http://localhost:3000/genres')
      .then(res => {
        console.log(res)
        setGenresData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }, [])



    const columns = [
        { field: '_id', headerName: 'ID', width: 300 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'image', headerName: 'Image', width: 100, renderCell: (params) => {
          return(
            <div>
              <img style={{ width: 30, height: 30, borderRadius: 50}} src={params.row.image} alt=""></img>
            </div>
          )
        } },
        
        { field: '__v', headerName: 'V', width: 100 },
        { field: 'created_at',  headerName: 'Created At',  width: 200, },
        { field: 'updated_at',  headerName: 'Updated At',  width: 200, },

        
        { field: 'action',  headerName: 'Actions', width: 150, 
          renderCell: (params) => {
              return (
                  <>
                  <Container>
                    <Link to={"/dashboard/user/" + params.row._id}>
                    <Button  variant="success">
                        Edit
                    </Button>                       
                    </Link>
                        <DeleteForeverIcon style={{color: "red", fontSize: 40, marginLeft: 10}}/> 
                  </Container>
                  </>
              );
          }
            },


      ];

      

        return (
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              getRowId={(row) => row._id}
              rows={genresData}
              disableSelectionOnClick
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
        );
        }     

