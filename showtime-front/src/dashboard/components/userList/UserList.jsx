import React from 'react'
import { Button } from 'react-bootstrap';
// import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link} from "react-router-dom";

import { DataGrid } from '@mui/x-data-grid';


export default function UserList() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'avatar', headerName: 'Avatar', width: 100 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 170 },
        { field: 'password', headerName: 'Password', width: 150 },
        { field: 'isActive', headerName: 'is Active', width: 150 },
        { field: 'isAdmin', headerName: 'is Admin', width: 150 },
        { field: 'createdAt',  headerName: 'Created At',  width: 170, },
        
        { field: 'action',  headerName: 'Actions', width: 150, 
          renderCell: (params) => {
              return (
                  <>
                    <Link to={"/dashboard/user/" + params.row.id}>
                    <Button  variant="success">
                        Edit
                    </Button>                       
                    </Link>
                        <DeleteForeverIcon style={{color: "red", fontSize: 30}}/> 
                  </>
              );
          }
            },


      ];
      
      const rows = [
        { id: 1, name: 'Snow', email: 'Jon@gmail.com', isActive: 1, isAdmin: 0, createdAt: "15-01-19" },
        { id: 2, name: 'Lannister', email: 'Cersei@gmail.com', isActive: 1, isAdmin: 0, createdAt: "15-01-19" },
        { id: 3, name: 'Lannister', email: 'Jaime@gmail.com', isActive: 1, isAdmin: 0, createdAt: "15-01-19" },
  
      ];
      

        return (
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              disableSelectionOnClick
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
        );
        }     
//   return (

//     <Container> 
             
            
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                     <th>id</th>
//                     <th>Avatar</th>
//                     <th>Name</th>
//                     <th>E-mail</th>
//                     <th>Password</th>
//                     <th>is-Active</th>
//                     <th>is-Admin</th>
//                     <th>Created_at</th>
//                     <th>Actions</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     <tr>
//                     <td>1</td>
//                     <td style={{ textAlign: "center",}}>
                        
//                             <Image style={{  width: 30, height: 30, }}
//                             src=
//                             "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
//                             roundedCircle
//                             />
                        
//                     </td>
//                     <td>Otto</td>
//                     <td>Otto@gmail.com</td>
//                     <td>*********</td>
//                     <td>1</td>
//                     <td>0</td>
//                     <td>12/15/2015</td>
//                     <td style={{textAlign: "center"}}> 
//                         <RemoveRedEyeIcon style={{ fontSize: 30}}/> 
//                         <Link to={"/user/"+ params.row.id}>
//                         <EditIcon style={{color: "green", fontSize: 30}}/>
//                         </Link>
//                          <DeleteForeverIcon style={{color: "red", fontSize: 30}}/> </td>
//                     </tr>
                
//                 </tbody>
//             </Table>
//         </Container>
//   )

