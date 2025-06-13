import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [id, setId] = useState({});
  useEffect(() => {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("userToken");

    setId({ id: id, token: token });
  }, []);
  console.log(id);

  useEffect(() => {
    if (id.id && id.token) {
      axios
        .post(`http://localhost:3000/user/profile/${id.id}`, {
          headers: { Authorization: `Bearer ${id.token}` },
        })
        .then((success) => {
          if (success.data.status === 1) {
            console.log(success.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);
  return (
    <div>
      <button>Profile Edit</button>
      <div>User Name:</div>
    </div>
  );
};

export default Profile;
