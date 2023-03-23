import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Blog.module.scss';
const cx = classNames.bind(styles);
const blog = [
    {
        img: 'https://bizweb.dktcdn.net/thumb/large/100/414/728/articles/untitled-session0936.jpg?v=1639477429930',
        title: '𝐂𝐥𝐨𝐰𝐧𝐙 𝐱 𝐒𝐚𝐢𝐠𝐨𝐧 𝐒𝐰𝐚𝐠𝐠𝐞𝐫 𝐂𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐢𝐨𝐧',
        path: '/',
    },
    {
        img: 'https://bizweb.dktcdn.net/thumb/large/100/414/728/articles/182621288-4026388387397132-8967378679853572507-n.jpeg?v=1639475863017',
        title: '𝐂𝐥𝐨𝐰𝐧𝐙 𝐱 𝐒𝐚𝐢𝐠𝐨𝐧 𝐒𝐰𝐚𝐠𝐠𝐞𝐫 𝐂𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐢𝐨𝐧',
        path: '/',
    },
    {
        img: 'https://bizweb.dktcdn.net/thumb/large/100/414/728/articles/clownz-6-427.jpg?v=1610362183260',
        title: '𝐂𝐥𝐨𝐰𝐧𝐙 𝐱 𝐒𝐚𝐢𝐠𝐨𝐧 𝐒𝐰𝐚𝐠𝐠𝐞𝐫 𝐂𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐢𝐨𝐧',
        path: '/',
    },
];
function Blog() {
    return (
        <div>
            <Container fluid>
                <div className={cx('main_img')}>
                    <img
                        alt=""
                        src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/blog_2_img.jpg?1677585439601"
                    />
                    <div className={cx('btn_img')}>
                        <a href="/">Khám phá</a>
                    </div>
                </div>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <h1 className={cx('title')}>Tin tức</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <h3 className={cx('title_page')}>Tin tức</h3>
                    </Col>
                    {blog.map((el, index) => {
                        return (
                            <Col key={index} sm="6" xs="12" className={cx('item')}>
                                <a href={el.path} className={cx('img')}>
                                    <img src={el.img} alt="" />
                                </a>
                                <div className={cx('info')}>
                                    <h3>
                                        <a href={el.path}>{el.title}</a>
                                    </h3>
                                    <a href={el.path} className={cx('btn_link')}>
                                        Xem thêm
                                    </a>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default Blog;
