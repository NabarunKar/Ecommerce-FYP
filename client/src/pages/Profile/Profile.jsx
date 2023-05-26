import React from "react";
import "./Profile.scss";
import { useAuthContext } from "../../hooks/useAuthContext";

const Profile = () => {
  const { user } = useAuthContext();
  return (
    <div>
      {user && (
        <div className="profile">
          <div className="profile__avatar"></div>
          <div className="profile__info">
            <p className="profile__email">{user.user.email}</p>
            <p className="profile__username">{user.user.username}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
