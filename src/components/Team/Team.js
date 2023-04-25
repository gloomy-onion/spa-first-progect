import React from "react";

import User from "./User";
import Paginator from "../common/Paginator/Paginator";

const Team = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  users,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      {users.map((u) => (
        <User
          user={u}
          followingInProgress={props.followingInProgress}
          unfollow={props.unfollow}
          follow={props.follow}
          key={u.id}
        />
      ))}
    </div>
  );
};

export default Team;
