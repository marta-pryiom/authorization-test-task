import React, { useState } from 'react';
import Login from '../Login';
import Container from '../Container';
import UserMenu from '../UserMenu/UserMenu';
// import ForgotName from '../ForgotName/ForgotName';
const isAuth = false;
function App() {
    // const [active, setActive] = useState(true);
    return (
        <>
            {!isAuth ? (
                <Container>
                    <Login isAuth={isAuth} />
                    {/* <ForgotName active={active} setActive={setActive} /> */}
                </Container>
            ) : (
                <UserMenu />
            )}
        </>
    );
}
export default App;
