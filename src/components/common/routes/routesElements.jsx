import MainContent from '../../MainContent/MainContent';
import ChatContainer from '../../Chat/ChatContainer';
import MyPostsContainer from '../../Updates/MyPostsConainer';
import TeamContainer from '../../Team/TeamContainer';

const routesElements = [
    {exact: true, path: '/', element: <MainContent/>},
    {exact: false, path: '/chat', element: <ChatContainer/>},
    {exact: false, path: '/updates', element: <MyPostsContainer/>},
    {exact: false, path: '/team', element: <TeamContainer/>}

];

export default routesElements;