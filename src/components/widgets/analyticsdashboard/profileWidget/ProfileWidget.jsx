import React from "react";
import { people1 } from "helper/constant";
import { ProfileWidgetWrapper } from "./ProfileWidget.style";
import Button from "components/button/Button";

const ProfileWidget = ({
  name,
  designation,
  description
  // postCount,
  // followCount,
  // likeCount
}) => {
  return (
    <ProfileWidgetWrapper className="whiteLight pa-25 roe-shadow-2">
      <img src={people1} className="profile-image" alt="profile" />
      <div className="mt-10">
        <div className="fs-16 bold-text">{name}</div>
      </div>
      <p className="fs-13 medium-text">{designation}</p>
      <p className="mt-20 fs-13">{description}</p>
      <Button className="btn btn-primary border-radius-20 mt-25">Follow</Button>
      {/* <hr />
      <div className="flex space-evenly">
        <div>
          <p>
            <h1 className="text-dark fs-16">{postCount}</h1>
          </p>
          <p>Post</p>
        </div>
        <div>
          <p>
            <h1 className="text-dark fs-16">{followCount}</h1>
          </p>
          <p>Follower</p>
        </div>
        <div>
          <p>
            <h1 className="text-dark fs-16">{likeCount}</h1>
          </p>
          <p>Likes</p>
        </div>
      </div> */}
    </ProfileWidgetWrapper>
  );
};

export default ProfileWidget;
