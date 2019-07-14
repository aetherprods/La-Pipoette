import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/lobby">
        <a style={linkStyle}>Lobby</a>
        </Link>
    </div>
);

export default Header;