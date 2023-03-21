import { Col, Container, Row } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './Northside.module.scss';
import Filter from '../../Layout/Filter';
import Product from '../../Layout/Product';
const cx = classNames.bind(styles);
const demoProduct = {
    img: 'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/6-28600afe-5295-47af-9ec4-b9209dcc653a.jpg?v=1677663923000',
    img_2: 'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/8-26b1b12c-64df-4665-8788-9688c06232b6.jpg?v=1677663929000',
    name: 'H-TownZ Bucket Hat',
    type: 'CAPS',
    price: 900000,
    color: ['black', 'green'],
    sale: '10',
    new: true,
};
function Northside() {
    return (
        <Container fluid>
            <img
                className={cx('banner')}
                src="https://bizweb.dktcdn.net/100/414/728/collections/cover-fb-1m-1.png?v=1677584857863"
                alt=""
            />
            <Container>
                <Row>
                    <Col>
                        <Filter />
                    </Col>
                </Row>
                <Row>
                    <Col xs="6" sm="4" lg="3">
                        <Product data={demoProduct} />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Northside;
