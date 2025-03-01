import axios from "axios";
import Swal from "sweetalert2";

const URL = `http://localhost:8001`;

export const addUser = async (data) => {
  try {
    console.log("entered");

    const response = await axios.post(`${URL}/add`, data);
    Swal.fire({
      title: "Success!",
      text: "User added successfully!",
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    });

    return response;
  } catch (error) {
    console.log("error while calling addUser API", error);

    if (error.response && error.response.data.errors) {
      // Extract validation messages and format them in HTML
      const errorMessages = Object.values(error.response.data.errors)
        .map((err) => `<li>${err.message}</li>`) // Wrap each message in <li>
        .join(""); // Join without new lines (since we're using <ul>)

      Swal.fire({
        icon: "error",
        title: "Validation Failed!",
        html: `<ul style="text-align:left; color:red;">${errorMessages}</ul>`, // Display as a list
      });
    } else {
      // General Error Alert
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to add user. Please try again.",
      });
    }
  }
};
export const editUser = async (data, id) => {
  try {
    console.log("entered");

    const response = await axios.put(`${URL}/${id}`, data); // ✅ Use PUT method
    Swal.fire({
      title: "Success!",
      text: "User Edited successfully!",
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    });

    return response;
  } catch (error) {
    console.log("error while calling editUser API", error);

    if (error.response && error.response.data.errors) {
      const errorMessages = Object.values(error.response.data.errors)
        .map((err) => `<li>${err.message}</li>`)
        .join("");

      Swal.fire({
        icon: "error",
        title: "Validation Failed!",
        html: `<ul style="text-align:left; color:red;">${errorMessages}</ul>`,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to edit user. Please try again.",
      });
    }
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log("error:", error);
  }
};
export const getUser = async (data) => {
  try {
    return await axios.get(`${URL}/${data}`);
  } catch (error) {
    console.log("error:", error);
  }
};
export const deleteUser = async (id) => {
  try {
    // Show confirmation dialog before deleting
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
      // If user confirms, proceed with deletion
      const response = await axios.delete(`${URL}/${id}`);

      // Show success alert
      Swal.fire({
        title: "Deleted!",
        text: "User has been deleted successfully.",
        icon: "success",
      });

      return response;
    }
  } catch (error) {
    console.log("Error while deleting user:", error);

    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "Failed to delete user. Please try again.",
    });
  }
};
