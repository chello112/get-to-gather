//Register user
const register = () => {
  localStorage.setItem("user");
};

//Login user
const login = () => {
  localStorage.setItem("user");
};

//Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
