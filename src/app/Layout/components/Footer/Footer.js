/* eslint-disable react/jsx-no-target-blank */
import { faEnvelope, faGift, faHouse, faLocation, faPhone, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import images from '../../../../assets/img';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { IconMessageFB } from '../../icons/icons';
const cx = classNames.bind(styles);
const footer = [
    {
        img: images.mainIcon,
        children: [
            {
                icon: <FontAwesomeIcon icon={faTruckFast} />,
                title: 'Ship COD toàn quốc',
            },
            {
                icon: <FontAwesomeIcon icon={faGift} />,
                title: 'FREESHIP đơn hàng từ 700.000đ',
            },
        ],
    },
    {
        title: 'LIÊN HỆ',
        children: [
            {
                icon: <FontAwesomeIcon icon={faHouse} />,
                title: 'CLOWNZ STORE',
            },
            {
                icon: <FontAwesomeIcon icon={faLocation} />,
                title: '45 Núi Trúc, Ba Đình, HN',
            },
            {
                icon: <FontAwesomeIcon icon={faLocation} />,
                title: '19 Hồ Đắc Di, Đống Đa, HN',
            },
            {
                icon: <FontAwesomeIcon icon={faEnvelope} />,
                title: 'duong@clownz.vn',
            },
            {
                icon: <FontAwesomeIcon icon={faPhone} />,
                title: '058660 8660',
            },
        ],
    },
    {
        title: 'CHÍNH SÁCH',
        children: [
            {
                title: 'CHÍNH SÁCH THÀNH VIÊN',
                path: '/',
            },
            {
                title: 'CHÍNH SÁCH ĐỔI TRẢ',
                path: '/',
            },
            {
                title: 'CHÍNH SÁCH VẬN CHUYỂN',
                path: '/',
            },
        ],
    },
];
function Footer() {
    return (
        <div className={cx('container_footer')}>
            <Container style={{ marginBottom: '20px' }}>
                <Row>
                    {footer.map((el, index) => {
                        return (
                            <Col key={index} xs="12" md="6" lg="3">
                                {el.img ? <img className={cx('logo')} src={el.img} alt="" /> : <h3>{el.title}</h3>}
                                <ul>
                                    {el.children.map((el, index) => {
                                        if (el.icon) {
                                            return (
                                                <li key={index} className={cx('item')}>
                                                    {el.icon} <p>{el.title}</p>
                                                </li>
                                            );
                                        } else {
                                            return (
                                                <li key={index} className={cx('item_')}>
                                                    <a href={el.path}>•{el.title}</a>
                                                </li>
                                            );
                                        }
                                    })}
                                </ul>
                            </Col>
                        );
                    })}
                    <Col xs="12" md="6" lg="3">
                        <h3 className={cx('title')}>ĐĂNG KÝ NHẬN TIN</h3>
                        <p className={cx('text')}>Nhận thông tin sản phẩm mới nhất, tin khuyến mãi và nhiều hơn nữa.</p>
                        <form className={cx('form')}>
                            <input placeholder="Email của bạn" />
                            <button>ĐĂNG KÝ</button>
                        </form>
                        <div>
                            {images.payImg.map((el, index) => {
                                return <img className={cx('img_pay')} src={el} key={index} alt="" />;
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className={cx('container')}>© Bản quyền thuộc về Clownz Store | Cung cấp bởi Sapo</div>
            <div className={cx('fixed_mes')}>
                <a href="https://clownz.vn/stand-for-northside" target="_blank">
                    <IconMessageFB width="100%" height="100%" />
                </a>
            </div>
        </div>
    );
}

export default Footer;
