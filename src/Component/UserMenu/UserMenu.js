// import { useDispatch } from 'react-redux';
// import { getUsername } from '../../redux/auth/auth-selectors';
// import { logOut } from '../../redux/user/operations';
import pathToSprite from '../../images/sprite.svg';
import s from './UserMenu.module.css';

function UserMenu() {
    // const dispatch = useDispatch();
    // const nameOfUser = useSelector(getUsername);

    return (
        <>
            <div className={s.box}>
                <svg className={s.userIcon}>
                    <use href={pathToSprite + '#user'}></use>
                </svg>
                <p className={s.title}>Welcome</p>
                <button
                    className={s.btn}
                    type="button"
                    // onClick={() => dispatch(logOut())}
                >
                    Log out
                </button>
            </div>
        </>
    );
}
export default UserMenu;
