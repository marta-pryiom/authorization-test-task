import s from './ForgotName.module.css';
function ForgotName({ active, setActive }) {
    const activebg = !active ? s.bg : s.bgActive;
    const activeContent = !active ? s.content : s.contentActive;
    return (
        <div className={`${activebg}`} onClick={() => setActive(false)}>
            <div
                className={`${activeContent}`}
                onClick={e => e.stopPropagation()}
            >
                <form>
                    <label>
                        Please enter your email to search for your account.
                        <input
                            type="email"
                            name="email"
                            className={s.formItem}
                            // value={email}
                            placeholder="email"
                            // autocomplete="on"
                        />
                    </label>
                    <button type="submit" className={s.btn}>
                        OK
                    </button>
                </form>
            </div>
        </div>
    );
}
export default ForgotName;
