import className from "classnames/bind";
import styles from './Popper.module.scss'

const cx = className.bind(styles);

function Wrapper({ children, classNames }) {
    return (
        <div className={cx('wrapper', classNames)}>
            {children}
        </div>
    );
}

export default Wrapper;