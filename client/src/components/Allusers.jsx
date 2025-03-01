import { Button, styled, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../service/Api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PageContainer = styled("div")`
  background: linear-gradient(135deg, #1e3c72, #2a5298); /* Deep blue gradient */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

const StyledTable = styled(Table)`
  width: 85%;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
`;

const Thead = styled(TableRow)`
  background: #0077b6;
  & > th {
    color: #fff;
    font-size: 18px;
    padding: 14px;
    text-align: center;
  }
`;

const Tbody = styled(TableRow)`
  &:nth-of-type(odd) {
    background: #f1f8ff;
  }
  &:hover {
    background: #d7e9ff;
  }
  & > td {
    font-size: 16px;
    padding: 12px;
    text-align: center;
  }
`;

const StyledButton = styled(Button)`
  font-weight: bold;
  &:first-of-type {
    background: #ffa726;
    &:hover {
      background: #fb8c00;
    }
  }
  &:last-of-type {
    background: #e53935;
    &:hover {
      background: #c62828;
    }
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  const deleteUserDetails = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      await deleteUser(id);
      getAllUsers();

      Swal.fire({
        title: "Deleted!",
        text: "User has been deleted successfully.",
        icon: "success",
      });
    }
  };

  return (
    <PageContainer>
      <Typography variant="h4" color="white" gutterBottom>
        All Users
      </Typography>
      <StyledTable>
        <TableHead>
          <Thead>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Actions</TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <Tbody key={user._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.Username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <StyledButton variant="contained" onClick={() => navigate(`/edit/${user._id}`)} style={{ marginRight: 10 }}>
                  Edit
                </StyledButton>
                <StyledButton variant="contained" onClick={() => deleteUserDetails(user._id)}>
                  Delete
                </StyledButton>
              </TableCell>
            </Tbody>
          ))}
        </TableBody>
      </StyledTable>
    </PageContainer>
  );
};

export default AllUsers;
