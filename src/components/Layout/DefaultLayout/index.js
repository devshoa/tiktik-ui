import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar";
import classnames from "classnames/bind";
import styles from './DefaultLayout.module.scss'

const cx = classnames.bind(styles);

// do content thay đổi thì chúng ta phải nhận từ ngoài vào dưới dạng chidlren
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;