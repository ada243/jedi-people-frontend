import {Link} from "react-router-dom" //you use link when you are trying to go to another route, not another website. for the latter you still use an a tag

function Header(props) {
    return <nav>
        <Link to="/">
            <div>People App</div>
        </Link>
    </nav>
}

export default Header;