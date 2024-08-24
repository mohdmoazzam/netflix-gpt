import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import headerLogo from "../assets/Netflix_Logo_PMS.png";
import { addUser, removeUser } from "../redux/userSlice";
import { firebaseAuth } from "../utils/firebase";
import ProfileDropdown from "./ProfileDropdown";
import { PROFILE_PIC } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(firebaseAuth)
      .then(() => {
        toast.success("Succesfully Logout");
      })
      .catch((error) => {
        toast.error("Something went wrong");
        navigate("/error");
      });
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });

    // Cleanup func.
    return () => {
      unsubscribe();
    };
  }, [dispatch, navigate]);

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img src={headerLogo} alt="logo" className="w-44" />
      {user && (
        <div className="relative flex items-center cursor-pointer">
          <img
            src={PROFILE_PIC}
            alt="usericon"
            className="h-12 w-12 rounded-full cursor-pointer"
            onClick={toggleDropdown}
          />
          <IoIosArrowDropdown
            className={`text-white ml-2 transition-transform duration-300 text-3xl ${
              dropdownVisible ? "rotate-180" : "rotate-0"
            }`}
            onClick={toggleDropdown}
          />
          {dropdownVisible && <ProfileDropdown handleSignOut={handleSignOut} />}
        </div>
      )}
    </div>
  );
};

export default Header;
