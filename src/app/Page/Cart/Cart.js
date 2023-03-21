import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Cart.module.scss';
const cx = classNames.bind(styles);
function Cart() {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return (
        <Container>
            <div>
                <Row className={cx('wrapper')}>
                    <Col>
                        <h1 className={cx('title')}>
                            Giỏ hàng{' '}
                            <span>
                                ( <span>1</span> sản pẩm )
                            </span>
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs="9">
                        <div className={cx('cart_body')}>
                            <Row className={cx('cart_item')}>
                                <Col xs="3" className={cx('img_item')}>
                                    <img
                                        src="https://bizweb.dktcdn.net/thumb/medium/100/414/728/products/quan-dai6.jpg"
                                        alt=""
                                    />
                                </Col>
                                <Col xs="9" className={cx('info_product')}>
                                    <div className={cx('box_info')}>
                                        <p>ClownZ Basic Sweat Pants - Green / L</p>
                                        <p>Xóa</p>
                                    </div>
                                    <div className={cx('price')}>{formatter.format(360000)}</div>
                                    <div className={cx('quantity')}>
                                        <button>-</button>
                                        <input value="1" disabled />
                                        <button>+</button>
                                    </div>
                                </Col>
                            </Row>
                            <Row className={cx('cart_item')}>
                                <Col xs="3" className={cx('img_item')}>
                                    <img
                                        src="https://bizweb.dktcdn.net/thumb/medium/100/414/728/products/quan-dai6.jpg"
                                        alt=""
                                    />
                                </Col>
                                <Col xs="9" className={cx('info_product')}>
                                    <div className={cx('box_info')}>
                                        <p>ClownZ Basic Sweat Pants - Green / L</p>
                                        <p>Xóa</p>
                                    </div>
                                    <div className={cx('price')}>{formatter.format(360000)}</div>
                                    <div className={cx('quantity')}>
                                        <button>-</button>
                                        <input value="1" disabled />
                                        <button>+</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs="3" className="d-flex flex-column">
                        <div className={cx('provisional')}>
                            <span>Tạm tính: </span>
                            <strong>{formatter.format(2595000)}</strong>
                        </div>
                        <div className={cx('total')}>
                            <span>Thành tiền: </span>
                            <strong>{formatter.format(2595000)}</strong>
                        </div>
                        <button className={cx('btn_black')}>thanh toán ngay</button>
                        <button className={cx('btn_white')}>tiếp tục mua hàng</button>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Cart;
