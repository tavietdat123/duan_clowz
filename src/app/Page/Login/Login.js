import { Col, Container, Row } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import config from '../../config';

const cx = classNames.bind(styles);

function Login() {
    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();

    const onSubmit = (data) => console.log(data);
    return (
        <Container>
            <div className={cx('wrapper')}>
                <Row className={cx('row')}>
                    <Col xxl="8" xl="10" lg="10" md="12">
                        <h1>ĐĂNG NHẬP TÀI KHOẢN</h1>
                        <div className={cx('social_media')}>
                            <img src="https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg" alt="" />
                            <img src="https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg" alt="" />
                        </div>
                        <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label>
                                    email<span style={{ color: 'red' }}>*</span>
                                </label>
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
                            </div>

                            <div>
                                <label>
                                    mật khẩu<span style={{ color: 'red' }}>*</span>
                                </label>
                                <Controller
                                    control={control}
                                    name="password"
                                    rules={{
                                        required: true,
                                        validate: (value) => value.trim() !== ' ',
                                        minLength: 6,
                                    }}
                                    render={({ field }) => (
                                        <input
                                            className={cx('input', {
                                                error: errors.password,
                                                success: !errors.password,
                                            })}
                                            {...field}
                                            placeholder="Nhập mật khẩu"
                                        />
                                    )}
                                />
                                {errors.password && errors.password.type === 'required' && (
                                    <p>Trường này là bắt buộc.</p>
                                )}
                                {errors.password?.type === 'validate' && <p>Trường này là bắt buộc.</p>}
                                {errors.password && errors.password.type === 'minLength' && (
                                    <p>Mật khẩu cần hơn 6 ký tự</p>
                                )}
                            </div>
                            <p className="d-flex justify-content-center">
                                <button className={cx('btn')} type="submit">
                                    Đăng nhập
                                </button>
                            </p>
                        </form>
                        <div className={cx('text')}>
                            <a href="/" className={cx('text_link')}>
                                Quên mật khẩu?
                            </a>
                            <p>
                                BẠN CHƯA CÓ TÀI KHOẢN. ĐĂNG KÝ <Link to={config.routesConfig.signin}>TẠI ĐÂY.</Link>
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Login;
