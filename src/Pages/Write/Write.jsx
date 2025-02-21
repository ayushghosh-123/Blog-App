function Write() {
  return (
    <div className="write pt-[50px] flex flex-col items-center">
      <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""  className="writeImg ml-[150px] w-[70vw] h-[250px] rounded-[10px]"/>
      
      <form className="writeForm w-[80%] max-w-[800px]">
        {/* File Input Section */}
        <div className="writeFormGroup flex items-center space-x-4">
          <label htmlFor="fileInput" className="cursor-pointer">
            <i className="fa-solid fa-address-card w-[40px] h-[40px] flex items-center justify-center rounded-full border border-gray-500 p-2"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input 
            type="text" 
            name="title" 
            className="writeInput w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-[15px]" 
            placeholder="Title" 
            autoFocus
          />
          <button 
          className="writeSubmit mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-red-500 transition"
        >
          Publish
        </button>
        </div>

        {/* Textarea Section */}
        <div className="writeFormGroup mt-4">
          <textarea 
            placeholder="Tell your story ..." 
            className="writeInput writeText w-full p-3 h-[200px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ml-[vw]"
          ></textarea>
        </div>

        {/* Submit Button */}
        
      </form>
    </div>
  );
}

export default Write;
