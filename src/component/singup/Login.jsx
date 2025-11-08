import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../store/action/UserAction";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const LoginHandler = (user) => {
    if (user.email === "" || user.password === "") {
      return alert("please fill all the fields");
    }
    console.log(user);
    dispatch(LoginUser(user));
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-gray-500 px-4 relative">
      <img
        className="absolute top-0 left-0 object-cover w-full h-full"
        src="https://images.unsplash.com/photo-1722182877533-7378b60bf1e8?q=80&w=1614&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <div className="z-10 w-full max-w-md p-6 bg-white rounded-lg shadow">
        <h1 className="mb-1 text-2xl font-bold text-zinc-900">Welcome back</h1>
        <p className="mb-6 text-sm text-gray-900">
          Sign in to continue to your account
        </p>
        <form className="space-y-4" onSubmit={handleSubmit(LoginHandler)}>
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            placeholder="xyz@example.com"
            className={
              "w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black focus:border-black"
            }
          />

          <input
            {...register("password")}
            type="password"
            autoComplete="password"
            placeholder="•••••••••"
            className={
              "w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black focus:border-black"
            }
          />

          <button
            type="submit"
            className="w-full py-2.5 bg-black text-white rounded-md font-semibold hover:bg-gray-900 disabled:opacity-60 disabled:cursor-not-allowed transition"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <button onClick={() => navigate("/Register")}>Create one</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
