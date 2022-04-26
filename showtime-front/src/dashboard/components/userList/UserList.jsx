import React from 'react'
import { Table, Container, Image } from 'react-bootstrap';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function UserList() {

  return (

    <Container> 
            <h1 className='dashTitle'  > Users Dashboard </h1>  
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>id</th>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Password</th>
                    <th>is-Active</th>
                    <th>is-Admin</th>
                    <th>Created_at</th>
                    <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    <td>1</td>
                    <td style={{ textAlign: "center",}}>
                        
                            <Image style={{  width: 30, height: 30, }}
                            src=
                            "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
                            roundedCircle
                            />
                        
                    </td>
                    <td>Otto</td>
                    <td>Otto@gmail.com</td>
                    <td>*********</td>
                    <td>1</td>
                    <td>0</td>
                    <td>12/15/2015</td>
                    <td style={{textAlign: "center"}}> 
                        <RemoveRedEyeIcon style={{ fontSize: 30}}/> <EditIcon style={{color: "green", fontSize: 30}}/> <DeleteForeverIcon style={{color: "red", fontSize: 30}}/> </td>
                    </tr>
                
                </tbody>
            </Table>
        </Container>
  )
}
