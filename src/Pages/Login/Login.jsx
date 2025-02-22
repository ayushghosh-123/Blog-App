function Login() {
    return (
      <div className="Login h-[100vh] flex justify-center items-center bg-[url(https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)] bg-cover bg-center">
        <div className="loginBox bg-white p-[40px] rounded-lg shadow-lg w-[400px] flex flex-col items-center animate-fade-in">
          <span className="loginTitle text-[35px] font-semibold text-gray-700">Login</span>
          <form className="loginForm w-full flex flex-col mt-[20px]">
            <label className="text-gray-600 text-[16px] font-medium">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email..." 
              className="p-[12px] mt-[5px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all duration-300"
            />
            <label className="mt-[15px] text-gray-600 text-[16px] font-medium">Password</label>
            <input 
              type="password" 
              placeholder="Enter your password..." 
              className="p-[12px] mt-[5px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all duration-300"
            />
            <button className="loginButton mt-[20px] p-[12px] bg-lime-600 text-white rounded-md cursor-pointer hover:bg-lime-700 transition-all duration-300 transform hover:scale-105">
              Login
            </button>
          </form>
          <button className="loginRegisterButton mt-[15px] p-[12px] bg-gray-200 text-gray-700 rounded-md cursor-pointer hover:bg-gray-300 transition-all duration-300 transform hover:scale-105">
            Register
          </button>
        </div>
      </div>
    );
  }
  
  export default Login;
  