import { faAngleDown, faAngleUp, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { memo, useState } from 'react';
import styles from './Filter.module.scss';
import SubMenu from './Submenu';
const cx = classNames.bind(styles);
const category = [
    { title: 'Tắt cả sẳn phẩm', path: '/' },
    { title: 'ACADEMY MINI COLLECTION', path: '/' },
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
];
const filterList = [
    {
        title: 'Giá sản phẩm',
        subMenu: [
            {
                title: 'Giá dưới 100.000đ',
                value: 100,
            },
            {
                title: '100.000đ - 200.000đ',
                value: 100,
            },
            {
                title: '200.000đ - 300.000đ',
                value: 100,
            },
            {
                title: '300.000đ - 500.000đ',
                value: 100,
            },
            {
                title: '500.000đ - 1.000.000đ',
                value: 100,
            },
            {
                title: 'Giá trên 1.000.000đ',
                value: 100,
            },
        ],
    },
    {
        title: 'Loại',
        subMenu: [
            {
                title: 'Caps',
            },
            {
                title: 'Tanktop & Sleeveless',
            },
            {
                title: 'Tees & Polo shirts',
            },
        ],
    },
    {
        title: 'Size',
        subMenu: [
            {
                title: 'S',
            },
            {
                title: 'M',
            },
            {
                title: 'L',
            },
            {
                title: 'XL',
            },
        ],
    },
];
function Filter() {
    const [onCategory, setOnCategory] = useState(false);
    const [data_g, setData] = useState([]);
    const [index, setIndex] = useState([]);
    const [filter, setFilter] = useState(false);
    const handleCategory = () => {
        setOnCategory(true);
        if (onCategory === true) setOnCategory(false);
    };
    const handleIndex = (data, id) => {
        if (index.includes(id)) {
            setIndex(index.filter((el) => el !== id));
        } else {
            setIndex((prev) => [...prev, id]);
        }
        if (data_g[id]) {
            delete data_g[id];
        } else {
            setData((prev) => ({
                ...prev,
                [id]: data,
            }));
        }
    };
    const handleFilter = () => {
        filter === true ? setFilter(!filter) : setFilter(!filter);
    };
    return (
        <div className={cx('wrapper')}>
            <div>
                <Tippy
                    visible={onCategory}
                    onClickOutside={() => {
                        setOnCategory(false);
                    }}
                    offset={[-5, 0]}
                    placement="bottom-end"
                    interactive={true}
                    render={(attrs) => (
                        <div tabIndex="-1" {...attrs}>
                            <ul className={cx('container_')}>
                                {category.map((el, id) => {
                                    return (
                                        <li key={id}>
                                            <div className="d-flex w-100">
                                                <a href={el.path} className="flex-grow-1">
                                                    {el.title}
                                                </a>
                                                {el.children && (
                                                    <div onClick={() => handleIndex(el.children, id)}>
                                                        {(index.includes(id) && <FontAwesomeIcon icon={faMinus} />) || (
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                            {el.children && index.includes(id) && <SubMenu data={data_g[id]} />}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                >
                    <h3 onClick={handleCategory}>
                        danh mục
                        {(onCategory && <FontAwesomeIcon icon={faAngleUp} />) || <FontAwesomeIcon icon={faAngleDown} />}
                    </h3>
                </Tippy>
            </div>
            <Tippy
                visible={filter}
                onClickOutside={() => {
                    setFilter(false);
                }}
                offset={[-5, 0]}
                placement="bottom-end"
                interactive={true}
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <form className={cx('form')}>
                            {filterList.map((el, index) => {
                                return (
                                    <div key={index}>
                                        <h3>{el.title}</h3>
                                        <div
                                            className={cx({
                                                container_filter: index !== 0,
                                            })}
                                        >
                                            {el.subMenu &&
                                                el.subMenu.map((elC, iC) => {
                                                    return (
                                                        <div
                                                            className={cx('input', {
                                                                col2: index !== 0,
                                                            })}
                                                            key={iC}
                                                        >
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                value=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label className="form-check-label">{elC.title}</label>
                                                        </div>
                                                    );
                                                })}
                                        </div>
                                    </div>
                                );
                            })}
                        </form>
                    </div>
                )}
            >
                <h3 onClick={handleFilter}>
                    tìm theo
                    {(filter && <FontAwesomeIcon icon={faAngleUp} />) || <FontAwesomeIcon icon={faAngleDown} />}
                </h3>
            </Tippy>
        </div>
    );
}

export default memo(Filter);
