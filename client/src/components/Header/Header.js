import "./header.css";
import GuestNav from "../NavBars/GuestNav";
import LoggedNav from "../NavBars/LoggedNav";
import { useSelector } from "react-redux";

// function Header({ addNewPhone, setTextSearch }) {
function Header({ setTextSearch }) {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  return isAuth ? <LoggedNav setTextSearch={setTextSearch} /> : <GuestNav />;
}

export default Header;
