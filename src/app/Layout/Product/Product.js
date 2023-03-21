import classNames from 'classnames//bind';
import styles from './Product.module.scss';
const cx = classNames.bind(styles);

function Product({ data }) {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    return (
        <div className={cx('container_')}>
            <div className=" position-relative">
                <div className={cx('img')}>
                    <img src={data.img_2} alt="" className="w-100" />
                    <img src={data.img} alt="" className="w-100" />
                </div>
                <div className={cx('wrapper_box')}>
                    {data.color.map((el, index) => {
                        return <div key={index} className={cx('box')} style={{ backgroundColor: el }}></div>;
                    })}
                </div>
            </div>
            <div>
                <h3 className={cx('title')}>{data.name}</h3>
                <h4 className={cx('type')}>{data.type}</h4>
                <div>
                    <strong>
                        {(data.sale && formatter.format(data.price - (data.price / 100) * data.sale)) ||
                            formatter.format(data.price)}
                    </strong>
                    {data.sale && <strong className={cx('old_price')}>{formatter.format(data.price)}</strong>}
                </div>
                <div className={cx('cart')}>
                    <button>Thêm vào giỏ hàng</button>
                </div>
            </div>
            {data.new && (
                <div className={cx('new')}>
                    <span>New Arrival</span>
                </div>
            )}
            {data.sale && (
                <div className={cx('sale')}>
                    <span>-{data.sale}%</span>
                </div>
            )}
        </div>
    );
}

export default Product;
