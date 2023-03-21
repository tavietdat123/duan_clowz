import classNames from 'classnames/bind';
import styles from './Layout.module.scss';
import Header from '../components/header';
import Footer from '../components/Footer';
const cx = classNames.bind(styles);
function Layout({ children, path }) {
    return (
        <div className={cx('wrapper')}>
            <div>
                <Header path={path} />
            </div>
            <div className={cx({ marginTop: path !== '/' })}>{children}</div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;
