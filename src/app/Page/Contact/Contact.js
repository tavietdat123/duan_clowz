import { Col, Container, Row } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const cx = classNames.bind(styles);
const contact = [
    { title: 'CÔNG TY TNHH 2 THÀNH VIÊN CLOWNZ', header: true },
    { text: 'Điện thoại:', title: '058660 8660', btn: 'Gọi ngay', path: '/' },
    { text: 'Email:', title: 'duong@clownz.vn', btn: 'Gửi ngay', path: '/' },
    { text: 'Chatbot:', title: 'Messenger', btn: 'Nhắn ngay', path: '/' },
    { text: 'Giờ mở cửa:', title: 'Mon - Sun | 09:30 ~ 21:30' },
];
const location = [
    {
        img: 'https://bizweb.dktcdn.net/100/414/728/files/clownzzz.jpg?v=1666252856870',
        title: 'CLOWN NÚI TRÚC',
        address: '45 Núi Trúc, Ba Đình, HN',

        contact: [
            { text: 'Mở cửa:', title: 'Mon - Sun | 09:30 ~ 21:30' },
            { text: 'Phone: ', title: '058660 8660', path: '/' },
        ],
        btn: 'Xem cửa hàng',
    },
    {
        img: 'https://bizweb.dktcdn.net/100/414/728/files/2-49c44195-ad12-4fda-8f31-602001c8266f.jpg?v=1661222846655',
        title: 'CLOWN HỒ ĐẮC DI',
        address: '19 Hồ Đắc Di, Đống Đa, HN',

        contact: [
            { text: 'Mở cửa:', title: 'Mon - Sun | 09:30 ~ 21:30' },
            { text: 'Phone: ', title: '058660 8660' },
        ],
        btn: 'Xem cửa hàng',
        path: '/',
    },
];
function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', text: '' });
    const { name, email, phone, text } = formData;
    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();

    const onSubmit = (data) => console.log(data);
    return (
        <Container>
            <Row>
                <Col md="7" className="mb-5">
                    <iframe
                        className={cx('map')}
                        title="map"
                        src="https://api.maptiler.com/maps/outdoor-v2/?key=lEWRlxFi7OVyF6naKjMK#17.7/21.02857/105.85099"
                    ></iframe>
                </Col>
                <Col md="5" className="mb-5">
                    <div className={cx('wrapper')}>
                        {contact.map((el, index) => {
                            if (el.header) {
                                return (
                                    <div key={index} className={cx('item')}>
                                        <b>{el.title}</b>
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={index} className={cx('item')}>
                                        <p>{el.text}</p>
                                        <b>
                                            <a href={el.path}>{el.title}</a>
                                        </b>
                                        {el.btn && (
                                            <a href={el.path} className={cx('btn')}>
                                                {el.btn}
                                            </a>
                                        )}
                                    </div>
                                );
                            }
                        })}
                        {location.map((el, index) => {
                            return (
                                <div className={cx('container')} key={index}>
                                    <div className={cx('img')}>
                                        <img src={el.img} alt="" />
                                    </div>
                                    <div className={cx('location')}>
                                        <p>
                                            <strong>{el.title}</strong>
                                            <FontAwesomeIcon icon={faLocationDot} className="ms-2" />
                                        </p>
                                        <p>{el.address}</p>
                                        {el.contact.map((el, index) => {
                                            return (
                                                <p key={index} className="d-flex">
                                                    {el.text}
                                                    <strong className="ms-2">
                                                        <a href={el.path}>{el.title}</a>
                                                    </strong>
                                                </p>
                                            );
                                        })}
                                        <a href={el.path} className={cx('btn', 'm-0')}>
                                            {el.btn}
                                        </a>
                                    </div>
                                </div>
                            );
                        })}

                        <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                            <Row>
                                <Col className={cx('form_group')} sm="12">
                                    <Controller
                                        control={control}
                                        name="name"
                                        rules={{
                                            required: true,
                                            validate: (value) => value.trim() !== '',
                                        }}
                                        pla
                                        render={({ field }) => (
                                            <input
                                                className={cx('input', {
                                                    error: errors.name,
                                                    success: !errors.name,
                                                })}
                                                placeholder="Họ và tên"
                                                {...field}
                                            />
                                        )}
                                    />
                                    {errors.name?.type === 'required' && <p>Trường này là bắt buộc.</p>}
                                    {errors.name?.type === 'validate' && <p>Trường này là bắt buộc.</p>}
                                </Col>
                                <Col className={cx('form_group')} sm="6">
                                    <Controller
                                        control={control}
                                        name="sdt"
                                        rules={{
                                            required: true,
                                            validate: (value) => value.trim() !== ' ',
                                            minLength: 10,
                                            maxLength: 10,
                                        }}
                                        pla
                                        render={({ field }) => (
                                            <input
                                                className={cx('input', {
                                                    error: errors.sdt,
                                                    success: !errors.sdt,
                                                })}
                                                placeholder="Nhập số điện thoại"
                                                {...field}
                                                type="number"
                                            />
                                        )}
                                    />
                                    {errors.sdt?.type === 'required' && <p>Trường này là bắt buộc.</p>}
                                    {errors.sdt?.type === 'validate' && <p>Trường này là bắt buộc.</p>}
                                    {errors.sdt?.type === 'minLength' && <p>Số điện thoại chưa đúng định dạng.</p>}
                                    {errors.sdt?.type === 'maxLength' && <p>Số điện thoại chưa đúng định dạng.</p>}
                                </Col>
                                <Col className={cx('form_group')} sm="6">
                                    <Controller
                                        control={control}
                                        name="email"
                                        rules={{
                                            required: true,
                                            pattern: /^\S+@\S+$/i,
                                            validate: (value) => value.trim() !== ' ',
                                        }}
                                        pla
                                        render={({ field }) => (
                                            <input
                                                className={cx('input', {
                                                    error: errors.email,
                                                    success: !errors.email,
                                                })}
                                                placeholder="Nhập địa chỉ email"
                                                {...field}
                                            />
                                        )}
                                    />
                                    {errors.email?.type === 'required' && <p>Trường này là bắt buộc.</p>}
                                    {errors.email?.type === 'validate' && <p>Trường này là bắt buộc.</p>}
                                    {errors.email?.type === 'pattern' && <p>Email chưa đúng định dạng.</p>}
                                </Col>

                                <Col className={cx('form_group')} sm="12">
                                    <Controller
                                        control={control}
                                        name="text"
                                        rules={{
                                            required: true,
                                            validate: (value) => value.trim() !== ' ',
                                        }}
                                        render={({ field }) => (
                                            <textarea
                                                className={cx('input', {
                                                    error: errors.text,
                                                    success: !errors.text,
                                                })}
                                                {...field}
                                                type="color"
                                                placeholder="Lời nhắn"
                                            ></textarea>
                                        )}
                                    />
                                    {errors.text && errors.text.type === 'required' && <p>Trường này là bắt buộc.</p>}
                                    {errors.text?.type === 'validate' && <p>Trường này là bắt buộc.</p>}
                                </Col>
                                <p className="d-flex ">
                                    <button className={cx('btn_contact')} type="submit">
                                        Gửi đi
                                    </button>
                                </p>
                            </Row>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
