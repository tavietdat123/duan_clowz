function SubMenu({ data }) {
    return (
        <ul>
            {data.map((el, index) => {
                return (
                    <li key={index}>
                        <a href={el.path}>{el.title}</a>
                    </li>
                );
            })}
        </ul>
    );
}
export default SubMenu;
