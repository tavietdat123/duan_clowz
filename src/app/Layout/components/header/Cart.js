import Tippy from '@tippyjs/react/headless';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import config from '../../../config';
const cx = classNames.bind(styles);
const cart = [1];
function Cart({ children }) {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return (
        <div>
            <Tippy
                delay={[0, 200]}
                offset={[0, 0]}
                placement="bottom-end"
                interactive={true}
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs} className={cx('wrapper_cart')}>
                        {(cart.length === 0 && (
                            <div style={{ fontWeight: '400' }}>Không có sản phẩm nào trong giỏ hàng.</div>
                        )) || (
                            <div>
                                <ul className={cx('cart_list')}>
                                    <li className={cx('cart_item')}>
                                        <a href="/" className={cx('cart_link')}>
                                            <img
                                                src="https://bizweb.dktcdn.net/100/414/728/products/1-363bea5c-251c-4a28-90ce-9a27bca81cc7.jpg?v=1677574034717"
                                                alt=""
                                                className="w-100"
                                            />
                                        </a>
                                        <div className={cx('cart_detail')}>
                                            <FontAwesomeIcon className={cx('cart_close')} icon={faXmark} />

                                            <p className={cx('product_name')}>
                                                <a href="/">Hanoi Playground Sleeveless Shirt - Black / M</a>
                                            </p>

                                            <div className={cx('cart_price')}>
                                                <p>{formatter.format(900000)}</p>
                                            </div>
                                            <form className={cx('quantity')}>
                                                <button>-</button>
                                                <input type="number" disabled value="1" />
                                                <button>+</button>
                                            </form>
                                        </div>
                                    </li>
                                    <li className={cx('cart_item')}>
                                        <a href="/" className={cx('cart_link')}>
                                            <img
                                                src="https://bizweb.dktcdn.net/100/414/728/products/1-363bea5c-251c-4a28-90ce-9a27bca81cc7.jpg?v=1677574034717"
                                                alt=""
                                                className="w-100"
                                            />
                                        </a>
                                        <div className={cx('cart_detail')}>
                                            <FontAwesomeIcon className={cx('cart_close')} icon={faXmark} />

                                            <p className={cx('product_name')}>
                                                <a href="/">Hanoi Playground Sleeveless Shirt - Black / M</a>
                                            </p>
                                            <div className={cx('cart_price')}>
                                                <p>{formatter.format(900000)}</p>
                                            </div>
                                            <form className={cx('quantity')}>
                                                <button>-</button>
                                                <input disabled value="1" />
                                                <button>+</button>
                                            </form>
                                        </div>
                                    </li>
                                </ul>
                                <div className={cx('cart_total')}>
                                    <div>Tổng cộng:</div>
                                    <div>{formatter.format(12300000)}</div>
                                </div>
                                <div className={cx('cart_action')}>
                                    <a href="/">thanh toán</a>
                                    <Link to={config.routesConfig.cart}>giỏ hàng</Link>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default Cart;
