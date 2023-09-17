import PropTypes from 'prop-types'; // ES6

const Link = ({ route }) => {
    return (
        <div>
            <li className="mr-6">
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;