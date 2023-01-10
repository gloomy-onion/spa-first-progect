import MainContent from "../../MainContent/MainContent";
import ChatContainer from "../../Chat/ChatContainer";
import MyPostsContainer from "../../Updates/MyPostsConainer";
import TeamContainer from "../../Team/TeamContainer";
import ProfileContainer from "../../Profile/ProfileContainer";

const routesElements = [
  { exact: true, path: "/", element: <MainContent /> },
  { exact: false, path: "/chat", element: <ChatContainer /> },
  { exact: false, path: "/updates", element: <MyPostsContainer /> },
  { exact: false, path: "/team", element: <TeamContainer /> },
  { exact: false, path: "/profile/:userId?", element: <ProfileContainer /> },
];

export default routesElements;
