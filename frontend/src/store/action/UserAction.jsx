import { account, ID } from "../../api/appwriteConfig";
import { loaduser, remover } from "../reducer/UserSlice";

// ─── REGISTER ────────────────────────────────────────────────────────────────
export const RegisterUser = (user) => async (dispatch) => {
  try {
    if (
      user.email === "" ||
      user.password === "" ||
      user.username.trim().length === 0
    ) {
      return console.log("Please fill all the fields");
    }
    if (user.password.length < 8) {
      return console.log("Password must be at least 8 characters long");
    }

    // 1. Create Appwrite account
    await account.create(ID.unique(), user.email, user.password, user.username);

    // 2. Auto-login after registration
    await account.createEmailPasswordSession(user.email, user.password);

    // 3. Store extra fields (phone, address etc.) in prefs
    await account.updatePrefs({
      phone: user.phone || "",
      streetAddress: user.streetAddress || "",
      city: user.city || "",
      state: user.state || "",
      zipCode: user.zipCode || "",
      country: user.country || "",
      isAdmin: false,
    });

    const appwriteUser = await account.get();
    const userData = {
      id: appwriteUser.$id,
      username: appwriteUser.name,
      email: appwriteUser.email,
      isAdmin: appwriteUser.prefs?.isAdmin || false,
      ...appwriteUser.prefs,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    dispatch(loaduser(userData));
    console.log("User registered successfully:", userData);
  } catch (error) {
    console.log("Register error:", error.message);
  }
};

// ─── LOGIN ───────────────────────────────────────────────────────────────────
export const LoginUser = (user) => async (dispatch) => {
  try {
    if (user.email === "" || user.password === "") {
      return console.log("Please fill all the fields");
    }

    // Create session via Appwrite Auth
    await account.createEmailPasswordSession(user.email, user.password);

    const appwriteUser = await account.get();
    const userData = {
      id: appwriteUser.$id,
      username: appwriteUser.name,
      email: appwriteUser.email,
      isAdmin: appwriteUser.prefs?.isAdmin || false,
      ...appwriteUser.prefs,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    dispatch(loaduser(userData));
    console.log("Login successful:", userData);
  } catch (error) {
    console.log("Login error:", error.message);
  }
};

// ─── LOGOUT ──────────────────────────────────────────────────────────────────
export const Logoutuser = () => async (dispatch) => {
  try {
    await account.deleteSession("current");
    localStorage.removeItem("user");
    dispatch(remover());
    console.log("Logout successful");
  } catch (error) {
    console.log("Logout error:", error.message);
  }
};

// ─── DELETE ACCOUNT ──────────────────────────────────────────────────────────
export const Deleteuser = () => async (dispatch) => {
  try {
    // Delete current session (Appwrite client SDK cannot delete full account)
    await account.deleteSession("current");
    localStorage.removeItem("user");
    dispatch(remover());
    console.log("User session deleted successfully");
  } catch (error) {
    console.log("Delete error:", error.message);
  }
};

// ─── CURRENT USER (restore from Appwrite session) ────────────────────────────
export const Currentuser = () => async (dispatch) => {
  try {
    const appwriteUser = await account.get(); // checks active session
    const userData = {
      id: appwriteUser.$id,
      username: appwriteUser.name,
      email: appwriteUser.email,
      isAdmin: appwriteUser.prefs?.isAdmin || false,
      ...appwriteUser.prefs,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    console.log("User session restored");
    dispatch(loaduser(userData));
  } catch (error) {
    // No active session — user is logged out
    localStorage.removeItem("user");
    dispatch(remover());
    console.log("No active session found");
  }
};

// ─── UPDATE USER DETAILS ─────────────────────────────────────────────────────
export const UpdateuserDetails = (id, user) => async (dispatch) => {
  try {
    // Update display name if provided
    if (user.username) {
      await account.updateName(user.username);
    }

    // Update extra fields in prefs
    const currentPrefs = (await account.get()).prefs;
    await account.updatePrefs({
      ...currentPrefs,
      phone: user.phone || currentPrefs.phone || "",
      streetAddress: user.streetAddress || currentPrefs.streetAddress || "",
      city: user.city || currentPrefs.city || "",
      state: user.state || currentPrefs.state || "",
      zipCode: user.zipCode || currentPrefs.zipCode || "",
      country: user.country || currentPrefs.country || "",
    });

    // Refresh user in Redux + localStorage
    console.log("User details updated successfully");
    dispatch(Currentuser());
  } catch (error) {
    console.log("Update error:", error.message);
  }
};
