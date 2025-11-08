import { useDispatch } from "react-redux";
import { Logoutuser } from "../store/action/UserAction";
import { Deleteuser } from "../store/action/UserAction";

const Account = () => {
  const dispatch = useDispatch();
  

  const Logouthandler = () => {
    console.log("logged out");
    dispatch(Logoutuser());
    alert("logged out successfully");
  };

  const delethandler = () => {
    console.log("account deleted");
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (currentUser && currentUser.id) {
      console.log("Deleting user with ID:", currentUser.id);
      dispatch(Deleteuser(currentUser)); 
    } else {
      alert("No user found to delete");
      console.log("Current user data:", currentUser);
    }
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-4xl px-4 mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">Your Account</h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Account Overview */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-semibold">Account Information</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <p className="text-gray-900">{}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <p className="text-gray-900">{localStorage.getItem("email")}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Member Since
                </label>
                <p className="text-gray-900">
                  {" "}
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-semibold">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 font-semibold text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700">
                Edit Profile
              </button>
              <button
                className="w-full px-4 py-2 font-semibold text-white transition-colors bg-gray-600 rounded-lg hover:bg-gray-700"
                onClick={Logouthandler}
              >
                LOGOUT
              </button>
              <button
                onClick={delethandler}
                className="w-full px-4 py-2 font-semibold text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="p-6 mt-8 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-xl font-semibold">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-gray-200">
              <span className="text-gray-700">Order #12345 - Shipped</span>
              <span className="text-sm text-gray-500">2 days ago</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-200">
              <span className="text-gray-700">Password Changed</span>
              <span className="text-sm text-gray-500">1 week ago</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-700">Profile Updated</span>
              <span className="text-sm text-gray-500">2 weeks ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
