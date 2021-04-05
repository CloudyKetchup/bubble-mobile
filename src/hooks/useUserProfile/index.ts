import { useDispatch, useSelector } from "react-redux";

import { userProfileSelector, clearUserProfile } from "../../state/account";
import useUserToken from "../useUserToken";

const useUserProfile = () => {
  const profile   = useSelector(userProfileSelector);
  const { clear } = useUserToken();
  const dispatch  = useDispatch();
  
  const logout = async () => {
    await clear();
    dispatch(clearUserProfile());
  };

  return { profile, logout };
};

export default useUserProfile;