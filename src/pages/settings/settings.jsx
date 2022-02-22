import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://i.ibb.co/zxLVmqs/pexels-nikita-krasnov-6065314.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display : "none"}} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Alireza" />
          <label>Email</label>
          <input type="email" placeholder="alireza.ettehadi9595@gmail.com" />
          <label>Password</label>
          <input type="password"  />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
