import s from './ForgotName.module.css';
import pathToSprite from '../images/sprite.svg';
function ForgotName({ active, setActive }) {
    const activebg = !active ? s.bg : s.bgActive;
    const activeContent = !active ? s.content : s.contentActive;
    return (
        <div className={`${activebg}`} onClick={() => setActive(false)}>
            <div
                className={`${activeContent}`}
                onClick={e => e.stopPropagation()}
            >
                <form className={s.form}>
                    <div>
                        <h2>
                            Please enter your email to search for your account
                        </h2>
                        <label>
                            <div className={s.labelItemEmail}>
                                <svg className={s.iconEnvelope}>
                                    <use
                                        href={pathToSprite + '#icon-envelope'}
                                    ></use>
                                </svg>
                                <input
                                    type="email"
                                    name="email"
                                    // value={email}
                                    placeholder="Email"
                                    className={s.formItem}
                                    // onChange={handleChange}
                                />
                            </div>
                        </label>
                    </div>
                    <button type="submit" className={s.btn}>
                        OK
                    </button>
                </form>
            </div>
        </div>
    );
}
export default ForgotName;
