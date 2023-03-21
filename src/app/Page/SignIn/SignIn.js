import { Col, Container, Row } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import config from '../../config';
const cx = classNames.bind(styles);
function SignIn() {
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
                    <Col xxl="6" xl="10" lg="8" md="12">
                        <h1>ĐĂNG KÝ TÀI KHOẢN</h1>
                        <p className={cx('note')}>Nếu chưa có tài khoản vui lòng đăng ký tại đây</p>
                        <div className={cx('social_media')}>
                            <img src="https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg" alt="" />
                            <img src="https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg" alt="" />
                        </div>
                        <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label>
                                    Họ<span style={{ color: 'red' }}>*</span>
                                </label>
                                <Controller
                                    control={control}
                                    name="fistname"
                                    rules={{
                                        required: true,
                                        validate: (value) => value.trim() !== '',
                                    }}
                                    pla
                                    render={({ field }) => (
                                        <input
                                            className={cx('input', {
                                                error: errors.fistname,
                                                success: !errors.fistname,
                                            })}
                                            placeholder="Nhập họ"
                                            {...field}
                                        />
                                    )}
                                />
                                {errors.fistname?.type === 'required' && <p>Trường này là bắt buộc.</p>}
                                {errors.fistname?.type === 'validate' && <p>Trường này là bắt buộc.</p>}
                            </div>
                            <div>
                                <label>
                                    Tên<span style={{ color: 'red' }}>*</span>
                                </label>
                                <Controller
                                    control={control}
                                    name="lastname"
                                    rules={{
                                        required: true,
                                        validate: (value) => value.trim() !== ' ',
                                    }}
                                    pla
                                    render={({ field }) => (
                                        <input
                                            className={cx('input', {
                                                error: errors.lastname,
                                                success: !errors.lastname,
                                            })}
                                            placeholder="Nhập tên"
                                            {...field}
                                        />
                                    )}
                                />
                                {errors.lastname?.type === 'required' && <p>Trường này là bắt buộc.</p>}
                                {errors.lastname?.type === 'validate' && <p>Trường này là bắt buộc.</p>}
                            </div>
                            <div>
                                <label>
                                    số điện thoại<span style={{ color: 'red' }}>*</span>
                                </label>
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
                            </div>
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
                                            // type="password"
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
                                    Đăng ký
                                </button>
                            </p>
                        </form>
                        <div className={cx('text')}>
                            <Link to={config.routesConfig.login} className={cx('text_link')}>
                                Đăng nhập
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default SignIn;
