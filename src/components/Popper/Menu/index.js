import Tippy from "@tippyjs/react/headless";
import { wrapper as PopperWrapper } from "~/components/Popper";

import classNames from "classnames/bind";
import styles from './Menu.module.scss'
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {

    const renderItems = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item} />
        ))
    }

    return (
        <Tippy
            delay={[0, 700]}
            interactive
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper classNames={cx('menu-popper')}>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}

        </Tippy>
    );
}

export default Menu;