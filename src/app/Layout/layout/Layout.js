import classNames from 'classnames/bind';
import styles from './Layout.module.scss'
import Header from '../components/header'
import Footer from '../components/Footer'
const cx = classNames.bind(styles)
function Layout({children}) {
    return ( <div className={cx("wrapper")}>
        <div>
            <Header/>
        </div>
        <div>{children}</div>
        <div><Footer/></div>
    </div>);
}

export default Layout;