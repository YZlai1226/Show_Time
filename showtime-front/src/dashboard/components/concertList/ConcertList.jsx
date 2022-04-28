import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link} from "react-router-dom";
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export default function ConcertList() {

    const [concertsData, setConcertsData] = useState([])

    useEffect(() => {
      axios.get('http://localhost:3000/concerts')
      .then(res => {
        console.log(res)
        setConcertsData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }, [])



    const columns = [
        { field: '_id', headerName: 'ID', width: 150 },
        { field: 'image', headerName: 'Image', width: 100, renderCell: (params) => {
          return(
            <div>
              <img style={{ width: 30, height: 30, borderRadius: 50}} src={params.row.image} alt=""></img>
            </div>
          )
        } },
        { field: 'title', headerName: 'Title', width: 130 },
        { field: 'date', headerName: 'Date', width: 110 },
        { field: 'description', headerName: 'Description', width: 230 },
        { field: 'band_id', headerName: 'Band_id', width: 120 },
        { field: 'genre_id', headerName: 'Genre_id', width: 120 },
        { field: 'created_at',  headerName: 'Created At',  width: 110, },
        
        { field: 'action',  headerName: 'Actions', width: 130, 
          renderCell: (params) => {
              return (
                  <>
                    <Link to={"/dashboard/concert/" + params.row._id}>
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
          <div style={{ height: 600, width: '100%' }}>
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






//     const [concerts, setConcerts] = useState([])

//     useEffect(() => {
//       axios.get('http://localhost:3000/concerts')
//       .then(res => {
//         console.log(res)
//         setConcerts(res.data)
//       })
//       .catch(err => {
//         console.log(err)
//       })
//     }, [])
//   return (
//     <div>
//         <Container> 
         
//             <Table responsive="sm">
//                 <thead>
//                     <tr>
//                     <th>id</th>
//                     <th>Image</th>
//                     <th>Title</th>
//                     <th>Description</th>
//                     <th>Band_id</th>
//                     <th>Genre_id</th>
//                     <th>Date</th>
//                     <th>Created_at</th>
//                     <th>Actions</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {concerts.map(concert => (
                      
//                       <tr key={concert.id}>
//                        <td>{concert.id}</td>
//                        <td style={{ textAlign: "center",}}>
                           
//                                <Image style={{  width: 30, height: 30, }}
//                                src=
//                                "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
//                                roundedCircle
//                                />
                           
//                        </td>
//                        <td>{concert.title}</td>
//                        <td>{concert.description}</td>
//                        <td>{concert.band_id}</td>
//                        <td>{concert.genre_id}</td>
//                        <td>{concert.created_at}</td>
//                        <td>{concert.updated_at}</td>
//                        <td style={{textAlign: "center"}}> 
//                            <RemoveRedEyeIcon style={{ fontSize: 30}}/> <EditIcon style={{color: "green", fontSize: 30}}/> <DeleteForeverIcon style={{color: "red", fontSize: 30}}/> </td>
//                        </tr>     
//                     ))}
                    
                
//                 </tbody>
//             </Table>
//         </Container>
//     </div>
//   )
// }
