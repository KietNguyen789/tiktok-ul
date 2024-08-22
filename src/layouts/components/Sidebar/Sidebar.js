import config from '~/config';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import {
    UserGroupIcon,
    UserGroupActiveIcon,
    HomeIcon,
    HomeActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import { useRef } from 'react';
import SuggestedAccounts from '~/components/SuggestedAccounts';
const cx = classNames.bind(styles);
// neu menu trong sidebar dung chung trong layout thi dua ra component trong layout
// dung chung cho src dua vao component cua src
function Sidebar() {
    const Item = useRef();
    return (
        <aside className={styles.wrapper}>
            <Menu>
                {/* <HomeIcon /> react.creatElement */}
                <MenuItem
                    title="For Your"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon></HomeActiveIcon>}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon></UserGroupActiveIcon>}
                ></MenuItem>
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                ></MenuItem>
            </Menu>
            <SuggestedAccounts label="Suggested for you" />
            {/* <SuggestedAccounts label="Following accounts" /> */}
        </aside>
    );
}

export default Sidebar;
