import className from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = className.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/8d949261a3949b3e49ecce00f6f147c2~c5_100x100.jpeg?x-expires=1682841600&x-signature=EHIKDhjT2Sw%2FjMeiDw0%2BwZXTZ4g%3D" alt="Hoaa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Võ Thái Hòa</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>vothaihoa</span>
            </div>
        </div>
    );
}

export default AccountItem;