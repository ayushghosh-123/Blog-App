import Sidebar from "../../Component/sidebar/Sidebar"

function Setting() {
  return (
    <div className="setting">
      <div className="settingsWrapper">
          <div className="settingTitle">
            <span className="settingUpdateTitle">Update Your Account</span>
            <span className="settingDeleteTitle">Delete Account</span>
          </div>
          <form action="" className="settingForm"></form>
      </div>
      <Sidebar/>
    </div>
  )
}

export default Setting