import Login from '../Login';
import { useSelector } from 'react-redux';
import Container from '../Container';
import UserMenu from '../UserMenu/UserMenu';
import { getIsLoggedIn } from '../../redux/user/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const isAuth = useSelector(getIsLoggedIn);
    return !isAuth ? (
        <>
            <ToastContainer />
            <Container>
                <Login isAuth={isAuth} />
            </Container>
        </>
    ) : (
        <UserMenu />
    );
}
export default App;
