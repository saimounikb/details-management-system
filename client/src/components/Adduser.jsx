import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { addUser } from "../service/Api";
import { useNavigate } from "react-router-dom";

const PageContainer = styled("div")`
  background: linear-gradient(135deg, #1e3c72, #2a5298); /* Deep blue gradient */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

const Container = styled(Card)`
  width: 40%;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #f3f4f6, #e0e0e0); /* Light gray gradient */
`;

const StyledFormControl = styled(FormControl)`
  margin-top: 20px;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  background: #ff9800; /* Bright orange button */
  color: white;
  font-weight: bold;
  &:hover {
    background: #e68900;
  }
`;

const AddUser = () => {
  const [user, setUser] = useState({ name: "", Username: "", phone: "", email: "" });

  const valueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  const navigate = useNavigate();

  const addUserDetails = async () => {
    await addUser(user);
    navigate("/all");
  };

  return (
    <PageContainer>
      <Container>
        <CardContent>
          <Typography variant="h4" align="center" color="primary" gutterBottom>
            Add New User
          </Typography>
          <FormGroup>
            <StyledFormControl>
              <InputLabel>Name</InputLabel>
              <Input onChange={valueChange} name="name" />
            </StyledFormControl>
            <StyledFormControl>
              <InputLabel>Username</InputLabel>
              <Input onChange={valueChange} name="Username" />
            </StyledFormControl>
            <StyledFormControl>
              <InputLabel>Phone</InputLabel>
              <Input onChange={valueChange} name="phone" />
            </StyledFormControl>
            <StyledFormControl>
              <InputLabel>Email</InputLabel>
              <Input onChange={valueChange} name="email" />
            </StyledFormControl>
            <StyledFormControl>
              <StyledButton variant="contained" onClick={addUserDetails} fullWidth>
                Add User
              </StyledButton>
            </StyledFormControl>
          </FormGroup>
        </CardContent>
      </Container>
    </PageContainer>
  );
};

export default AddUser;
