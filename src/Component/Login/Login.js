import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { logIn } from '../../redux/user/operations';
import s from './Login.module.css';
import ForgotName from '../ForgotName/ForgotName';
import pathToSprite from '../images/sprite.svg';

function Login({ isAuth }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();
    const avatar = 'https://www.syn-enosis.gr/media/1909/group-5-2x.png';

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e);
        dispatch(logIn({ email, password }));
        reset();
    };
    const reset = () => {
        setEmail('');
        setPassword('');
    };
    return (
        !isAuth && (
            <>
                <div className={s.loginBox}>
                    <div className={s.boxAvatar}>
                        <img
                            alt="avatar"
                            src={avatar}
                            className={s.avatarIcon}
                        />
                        <svg className={s.triangle}>
                            <use href={pathToSprite + '#triangle'}></use>
                        </svg>
                        <svg className={s.triangleTwo}>
                            <use href={pathToSprite + '#play'}></use>
                        </svg>
                        <svg className={s.circle}>
                            <use href={pathToSprite + '#circle'}></use>
                        </svg>
                        <svg className={s.circleTwo}>
                            <use href={pathToSprite + '#circle'}></use>
                        </svg>
                        <svg className={s.square}>
                            <use href={pathToSprite + '#square'}></use>
                        </svg>
                    </div>
                    <div className={s.box}>
                        <h1 className={s.title}>Member Login</h1>
                        <form onSubmit={handleSubmit}>
                            <label>
                                <div className={s.labelItemEmail}>
                                    <svg className={s.iconEnvelope}>
                                        <use
                                            href={
                                                pathToSprite + '#icon-envelope'
                                            }
                                        ></use>
                                    </svg>
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        placeholder="Email"
                                        className={s.formItem}
                                        onChange={handleChange}
                                    />
                                </div>
                            </label>

                            <label>
                                <div className={s.labelPassword}>
                                    <svg className={s.iconLock}>
                                        <use
                                            href={pathToSprite + '#icon-locked'}
                                        ></use>
                                    </svg>

                                    <input
                                        type="password"
                                        name="password"
                                        value={password}
                                        placeholder="Password"
                                        className={s.formItem}
                                        onChange={handleChange}
                                    />
                                </div>
                            </label>
                            <button
                                type="submit"
                                className={s.btn}
                                disabled={email.length === 0}
                            >
                                LOGIN
                            </button>
                        </form>
                        <div className={s.addBox}>
                            <button
                                className={s.forgotInfo}
                                onClick={() => setActive(true)}
                            >
                                Forgot{' '}
                                <span className={s.forgotAddInfo}>
                                    Username/Password?
                                </span>
                            </button>

                            <button type="button" className={s.addBtn}>
                                Create your Account
                                <svg className={s.Icon}>
                                    <use
                                        href={pathToSprite + '#arrow-right'}
                                    ></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <ForgotName active={active} setActive={setActive} />
            </>
        )
    );
}
export default Login;
