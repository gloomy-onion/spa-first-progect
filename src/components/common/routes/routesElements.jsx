import React from "react";
// import ChatContainer from "../../Chat/ChatContainer";
// import MainContent from "../../MainContent/MainContent";
// import MyPostsContainer from "../../Updates/MyPostsContainer";
// import TeamContainer from "../../Team/TeamContainer";
// import LoginContainer from "../../Login/LoginContainer";
// import UserViewerContainer from "../../UserViewer/UserViewerContainer";

const MainContent = React.lazy(() => import("../../MainContent/MainContent"));
const ChatContainer = React.lazy(() => import("../../Chat/ChatContainer"));
const MyPostsContainer = React.lazy(() =>
  import("../../Updates/MyPostsContainer")
);
const TeamContainer = React.lazy(() => import("../../Team/TeamContainer"));
const LoginContainer = React.lazy(() => import("../../Login/LoginContainer"));
const UserViewerContainer = React.lazy(() =>
  import("../../UserViewer/UserViewerContainer")
);

const routesElements = [
  { exact: true, path: "/", element: <MainContent /> },
  { exact: false, path: "/chat", element: <ChatContainer /> },
  { exact: false, path: "/updates", element: <MyPostsContainer /> },
  { exact: false, path: "/team", element: <TeamContainer /> },
  { exact: false, path: "/login", element: <LoginContainer /> },
  { exact: false, path: "/user-viewer", element: <UserViewerContainer /> },
];

export default routesElements;
