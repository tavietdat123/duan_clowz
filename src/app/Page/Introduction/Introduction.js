import { Col, Row } from 'react-bootstrap';
import classNames from 'classnames/bind';
import style from './introdution.module.scss';
const cx = classNames.bind(style);
const introdution = [
    {
        title: 'Brand Vision',
        text: [
            'Một trong những đại diện lớn nhất của thời trang & văn hoá hiphop thủ đô, trong suốt những năm qua "chú hề" liên tục chuyển mình, mang đến nhiều niềm vui, sự mới mẻ',
            'Và sẽ không dừng lại ở đó, ClownZ mong muốn trở thành 1 phần quan trọng trong việc phát triển, phổ biến văn hoá hiphop nói riêng & là đại diện nổi bật của tinh thần đột phá trong thời trang đường phố Việt Nam',
        ],
    },
    {
        title: 'Brand Mission',
        text: [
            'Chúng tôi đam mê với việc truyền tải nền văn hoá Hip-hop, Streetwear lâu đời từ Âu Mỹ tới với những khách hàng Việt Nam. Để mỗi sản phẩm được bán ra, ngoài sự chau chuốt về chất lượng và thiết kế, chúng tôi còn đem vào đó một tinh thần vui vẻ, màu sắc và thật nhiều giá trị phía sau ',
        ],
    },
];
function Introduction() {
    return (
        <div className={cx('container')}>
            <Row>
                <Col>
                    <h1 className={cx('title')}>Giới thiệu</h1>
                    <div className={cx('intro')}>
                        <img
                            src="https://bizweb.dktcdn.net/100/414/728/files/vector-smart-object.png?v=1669965363192"
                            alt=""
                            width="100"
                        />
                        <p>
                            Câu chuyện bắt đầu vào năm 2011 của Hà Nội, khi chúng tôi - những con người yêu Hip-hop và
                            thời trang đường phố tụ họp lại. Một vài người là B-Boy và C-Walker, một số khác là
                            Beatboxer. Nhưng tất cả đều có chung một câu hỏi:
                            <br /> “Chúng ta có thể làm gì cho cộng đồng những người yêu Streetwear và Hip-hop?
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://bizweb.dktcdn.net/100/414/728/files/317142184-524797399577245-7396206391814838519-n.jpg?v=1669957930487"
                            alt=""
                            className="w-100"
                        />
                    </div>
                    <div className={cx('text')}>
                        {introdution.map((el, index) => {
                            return (
                                <div key={index}>
                                    <p>
                                        <strong>{el.title}</strong>
                                    </p>
                                    {el.text.map((elText, indexText) => (
                                        <p key={indexText}>{elText}</p>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                    <div className={cx('end')}>
                        <em>ClownZ stand for Northside</em>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Introduction;
