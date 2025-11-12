import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UpdateuserDetails } from "../store/action/UserAction";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const EditProfile = () => {
  const [activeSection, setActiveSection] = useState("personal");

  const currentUser = useSelector((state) => state.user.user);
  const userData = localStorage.getItem("user");
  const currentuser = currentUser || (userData ? JSON.parse(userData) : null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: currentuser?.username || "",
      email: currentuser?.email || "",
      phone: currentUser?.phone || "",

      streetAddress: currentuser?.streetAddress || "",
      city: currentuser?.city || "",
      state: currentuser?.state || "",
      zipCode: currentuser?.zipCode || "",
      country: currentuser?.country || "",
    },
  });

  const [currentpass, setcurrentpass] = useState("");
  const [newpass, setnewpass] = useState("");
  const [confirmpass, setconfirmpass] = useState("");

  const updateuserhander = (formData) => {
    if (activeSection === "security") {
      if (!currentpass || !newpass || !confirmpass) {
        alert("Please fill all fields.");
        return;
      }
      if (newpass !== confirmpass) {
        alert("New passwords do not match.");
        return;
      }
      console.log("sdd");
      dispatch(UpdateuserDetails(currentuser.id, { password: newpass }));
      return;
    } else {
      dispatch(UpdateuserDetails(currentuser.id, formData));
    }
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-4xl px-4 mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/account")}
            className="flex items-center text-red-600 hover:text-red-700 mb-4"
          >
            ⬅️ Back to Account
          </button>

          <h1 className="text-3xl font-bold text-gray-900">Edit Profile</h1>
          <p className="text-gray-600 mt-2">
            Update your account information and settings
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Navigation Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveSection("personal")}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeSection === "personal"
                    ? "border-red-500 text-red-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Personal Info
              </button>
              <button
                onClick={() => setActiveSection("address")}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeSection === "address"
                    ? "border-red-500 text-red-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Address
              </button>
              <button
                onClick={() => setActiveSection("security")}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeSection === "security"
                    ? "border-red-500 text-red-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Security
              </button>
            </nav>
          </div>

          {/* Form Content */}
          <div className="p-6">
            <form onSubmit={handleSubmit(updateuserhander)}>
              {/* Personal Information Section */}
              {activeSection === "personal" && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Personal Information
                  </h3>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Username
                      </label>
                      <input
                        {...register("username")}
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Address Section */}
              {activeSection === "address" && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Address Information
                  </h3>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Street Address
                      </label>
                      <input
                        {...register("streetAddress")}
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter your street address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      <input
                        {...register("city")}
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter your city"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State/Province
                      </label>
                      <input
                        {...register("state")}
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter your state/province"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ZIP/Postal Code
                      </label>
                      <input
                        {...register("zipCode")}
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter your ZIP/postal code"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <select
                        {...register("country")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <option value="">Select your country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="IN">India</option>
                        <option value="JP">Japan</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Settings Section */}
              {activeSection === "security" && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {" "}
                    Security Settings
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Password
                      </label>
                      <input
                        type="password"
                        value={currentpass}
                        onChange={(e) => setcurrentpass(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter current password"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        value={newpass}
                        onChange={(e) => setnewpass(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter new password"
                      />
                      <p className="mt-1 text-sm text-gray-500">
                        Password must be at least 8 characters long
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        value={confirmpass}
                        onChange={(e) => setconfirmpass(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Confirm new password"
                      />
                    </div>
                  </div>
                </div>
              )}
              {/* Action Buttons */}
              <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => navigate("/account")}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
