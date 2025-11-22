import React from "react";
import { Link } from "react-router-dom";
import {
  useLazyLogoutQuery,
  useUseravatarMutation,
  useUserprofileQuery,
} from "../redux/api/user";

const Header = () => {
  const [logout] = useLazyLogoutQuery();
  const [useravatar] = useUseravatarMutation();
  const { data, isLoading } = useUserprofileQuery();



  // 🟢 Logout Handler
  const loggedout = async () => {
    try {
      const result = await logout();
      console.log("✅ Logout successful:", result);
      window.location.reload();
    } catch (err) {
      console.error("❌ Logout failed:", err);
    }
  };

  if (isLoading) return null;

  return (
    <div className="bg-orange-400">
      <div className="flex justify-end items-center p-3">
        {/* Left Section: Avatar + Upload */}
        <div className="flex items-center gap-3">
          <Link to="/user">
            <img
              src={
                data?.user?.avatar?.url ||
                "https://cdn-icons-png.flaticon.com/512/847/847969.png"
              }
              alt="Avatar"
              className="w-12 h-12 rounded-full border-2 border-white object-cover"
            />
          </Link>
      
        </div>

        {/* Right Section: Links or Buttons */}
        <div className="flex gap-4 items-center">
          {data?.user ? (
            <>
              <span className="text-white font-semibold">
                {data.user.name}
              </span>
              <button
                onClick={loggedout}
                className="text-white font-semibold hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white font-semibold hover:underline"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-white font-semibold hover:underline"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
