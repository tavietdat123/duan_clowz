import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);
function Home() {
    return (
        <Container fluid>
            <div>
                <img
                    className="w-100"
                    src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/slider_1.jpg?1677585439601"
                    alt=""
                />
            </div>
            <div className={cx('slide')}>
                <Row>
                    <Col xs="6" lg="4">
                        <img
                            src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/ant_index_banner_1.jpg?1677585439601"
                            alt=""
                            className="w-100"
                        />
                    </Col>
                    <Col xs="6" lg="4">
                        <img
                            src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/ant_index_banner_2.jpg?1677585439601"
                            alt=""
                            className="w-100"
                        />
                    </Col>
                    <Col xs="12" lg="4">
                        <img
                            src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/ant_index_banner_3.jpg?1677585439601"
                            alt=""
                            className="w-100"
                        />
                    </Col>
                </Row>
            </div>
            <div className={cx('banner_2')}>
                <img
                    className="w-100"
                    src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/slider_story_1.jpg?1677585439601"
                    alt=""
                />
            </div>
        </Container>
    );
}

export default Home;
