import MainContent from "../../MainContent/MainContent";
import ChatContainer from "../../Chat/ChatContainer";
import MyPostsContainer from "../../Updates/MyPostsConainer";
import TeamContainer from "../../Team/TeamContainer";
import LoginContainer from '../../Login/LoginContainer';
import UserViewerContainer from '../../UserViewer/UserViewerContainer';

const routesElements = [
  { exact: true, path: "/", element: <MainContent /> },
  { exact: false, path: "/chat", element: <ChatContainer /> },
  { exact: false, path: "/updates", element: <MyPostsContainer /> },
  { exact: false, path: "/team", element: <TeamContainer /> },
  { exact: false, path: "/login", element: <LoginContainer /> },
  { exact: false, path: "/user-viewer", element: <UserViewerContainer /> },
];

export default routesElements;
