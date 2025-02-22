import Sidebar from "../../Component/sidebar/Sidebar";

function Setting() {
  return (
    <div className="setting flex">
      <div className="settingsWrapper flex-9 p-[20px]">
        <div className="settingTitle flex justify-between items-center">
          <span className="settingUpdateTitle text-[30px] mb-[20px] text-lime-600">
            Update Your Account
          </span>
          <span className="settingDeleteTitle text-[12px] text-red-600 cursor-pointer">
            Delete Account
          </span>
        </div>
        <form className="settingForm flex flex-col">
          <label className="text-[20px]">Profile Picture</label>
          <div className="settingPP flex items-center mt-[10px] mb-[10px]">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Profile"
              className="w-[70px] h-[70px] rounded-[20px]"
            />
            <label htmlFor="fileInput">
              <i className="fas fa-user-circle w-[25px] h-[25px] rounded-[50%] bg-red-400 text-white flex items-center justify-center ml-[10px] cursor-pointer"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <div className="settingForm flex flex-col">
            <label className="text-[20px] mt-[20px]">Username</label>
            <input
              type="text"
              placeholder="safak"
              className="text-gray-500 mt-[10px] mb-[10px] p-[10px] border border-gray-300 rounded"
            />
            <label className="text-[20px] mt-[20px]">Email</label>
            <input
              type="email"
              placeholder="safak@gmail.com"
              className="text-gray-500 mt-[10px] mb-[10px] p-[10px] border border-gray-300 rounded"
            />
            <label className="text-[20px] mt-[20px]">Password</label>
            <input
              type="password"
              className="text-gray-500 mt-[10px] mb-[10px] p-[10px] border border-gray-300 rounded"
            />
            <button className="SettingSubmit mt-[20px] p-[10px] bg-lime-600 text-white rounded cursor-pointer hover:bg-lime-700">
              Update
            </button>
          </div>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Setting;
