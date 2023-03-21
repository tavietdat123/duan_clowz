import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../../../../assets/img';
import config from '../../../config';
import { IconBag, IconLocation, IconPhone, IconSearch, IconUser } from '../../icons/icons';
import Cart from './Cart';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
const list_head = [
    {
        title: 'TRANG CHỦ',
        path: config.routesConfig.home,
    },
    {
        title: 'VỀ CHÚNG TÔI',
        path: config.routesConfig.introduction,
    },
    {
        title: 'STAND FOR NORTHSIDE',
        path: config.routesConfig.Northside,
    },
    {
        title: 'ALL SALE',
        path: '/',
    },
    {
        title: 'SẢN PHẨM',
        path: '/',
        children: [
            {
                title: 'TOP',
                path: '/',
                children: [
                    {
                        title: 'T-SHIRT',
                        path: '/',
                    },
                    {
                        title: 'T-SHIRT',
                        path: '/',
                    },
                    {
                        title: 'T-SHIRT',
                        path: '/',
                    },
                ],
            },
            {
                title: 'BOTTOM',
                path: '/',
                children: [
                    {
                        title: 'PANS',
                        path: '/',
                    },
                    {
                        title: 'PANS',
                        path: '/',
                    },
                    {
                        title: 'PANS',
                        path: '/',
                    },
                ],
            },
            {
                title: 'ASSECCORY',
                path: '/',
                children: [
                    {
                        title: 'HAT',
                        path: '/',
                    },
                    {
                        title: 'HAT',
                        path: '/',
                    },
                ],
            },
        ],
    },
    {
        title: 'NEW ARRIVAL',
        path: '/',
        children: [
            {
                title: 'TOP',
                path: '/',
                children: [
                    {
                        title: 'T-SHIRT',
                        path: '/',
                    },
                    {
                        title: 'T-SHIRT',
                        path: '/',
                    },
                    {
                        title: 'T-SHIRT',
                        path: '/',
                    },
                ],
            },
            {
                title: 'BOTTOM',
                path: '/',
                children: [
                    {
                        title: 'PANS',
                        path: '/',
                    },
                    {
                        title: 'PANS',
                        path: '/',
                    },
                    {
                        title: 'PANS',
                        path: '/',
                    },
                ],
            },
            {
                title: 'ASSECCORY',
                path: '/',
                children: [
                    {
                        title: 'HAT',
                        path: '/',
                    },
                    {
                        title: 'HAT',
                        path: '/',
                    },
                ],
            },
        ],
    },
    {
        title: 'BLOG',
        path: '/',
    },
    {
        title: 'LIÊN HỆ',
        path: '/',
    },
];
function Header({ path }) {
    const [scroll, setScroll] = useState(() => (path === '/' ? true : false));
    const [shadow, setShadow] = useState(false);
    const handleHover = () => {
        if (window.scrollY < 40 && path === '/') {
            setScroll(false);
        }
    };
    const handleLeave = () => {
        if (window.scrollY < 40 && path === '/') {
            setScroll(true);
        }
    };
    useEffect(() => {
        const handleScroll = (e) => {
            if (window.scrollY < 40 && path === '/') {
                setScroll(true);
            } else if (window.scrollY < 40) {
                setShadow(false);
            } else {
                setShadow(true);
                setScroll(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path]);
    return (
        <div
            className={cx('wrapper', {
                active: scroll,
                boxShadow: shadow,
            })}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
        >
            <div className={cx('header_1')}>
                <div className={cx('nav_list_1')}>
                    <Link className={cx('nav_link')}>
                        <IconLocation /> <span>ĐỊA CHỈ: VIỆT NAM</span>
                    </Link>
                    <a href="tel: 058660 8660" className={cx('nav_link')}>
                        <IconPhone /> <span>SĐT: 058660 8660</span>
                    </a>
                </div>
                <div>
                    <img className={cx('main_logo')} src={images.mainIcon} alt="" />
                </div>
                <div className={cx('nav_list_2')}>
                    <div>
                        <Tippy
                            offset={[0, 0]}
                            delay={[0, 1000]}
                            placement="bottom-end"
                            interactive={true}
                            render={(attrs) => (
                                <div tabIndex="-1" {...attrs}>
                                    <form className={cx('search')}>
                                        <input placeholder="Nhập từ khóa" />
                                        <button>Tìm kiếm</button>
                                    </form>
                                </div>
                            )}
                        >
                            <a href="/" className={cx('nav_link')}>
                                <IconSearch />
                            </a>
                        </Tippy>
                    </div>

                    <Link to={config.routesConfig.login} className={cx('nav_link')}>
                        <IconUser /> <span>TÀI KHOẢN</span>
                    </Link>
                    <Cart>
                        <Link to={config.routesConfig.cart} className={cx('nav_link', 'position-relative')}>
                            <IconBag /> <span>GIỎ HÀNG</span>
                            <span className={cx('quantity_cart')}>1</span>
                        </Link>
                    </Cart>
                </div>
            </div>
            <ul className={cx('header_2')}>
                {list_head.map((menuItem, menuIndex) => (
                    <div key={menuIndex}>
                        <Tippy
                            offset={[0, 0]}
                            placement="bottom-start"
                            interactive={true}
                            render={(attrs) => (
                                <div className={cx('modal')} tabIndex="-1" {...attrs}>
                                    {menuItem.children && (
                                        <ul>
                                            {menuItem.children.map((subMenuItem, subMenuIndex) => (
                                                <li key={subMenuIndex}>
                                                    <Tippy
                                                        // visible
                                                        offset={[0, 0]}
                                                        placement="right-start"
                                                        interactive={true}
                                                        render={(attrs) => (
                                                            <div className={cx('modal')} tabIndex="-1" {...attrs}>
                                                                <ul>
                                                                    {subMenuItem.children.map(
                                                                        (subMenuItem2, subMenuIndex2) => (
                                                                            <li key={subMenuIndex2}>
                                                                                <Link to={subMenuItem2.path}>
                                                                                    {subMenuItem2.title}
                                                                                </Link>
                                                                            </li>
                                                                        ),
                                                                    )}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    >
                                                        <Link to={subMenuItem.path}>
                                                            {subMenuItem.title}{' '}
                                                            {subMenuItem.children && (
                                                                <FontAwesomeIcon
                                                                    style={{ marginBottom: '-1px', marginLeft: '2px' }}
                                                                    icon={faAngleRight}
                                                                />
                                                            )}
                                                        </Link>
                                                    </Tippy>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        >
                            <li key={menuIndex}>
                                <Link to={menuItem.path}>
                                    {menuItem.title}{' '}
                                    {menuItem.children && (
                                        <FontAwesomeIcon
                                            style={{ marginBottom: '-1px', marginLeft: '2px' }}
                                            icon={faAngleDown}
                                        />
                                    )}
                                </Link>
                            </li>
                        </Tippy>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Header;
