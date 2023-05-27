import "./header.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & NodeJs</span>
            <span className="headerTitleLg">Blog</span>

        </div>
        <img className="headerImg" src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
      </div>
    </>
  );
};

export default Header;
