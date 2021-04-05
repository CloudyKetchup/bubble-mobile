import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { localSittersSelector } from "../../../state/sitters";
import { fetchLocalSitters } from "../../../state/sitters/extraReducers";

import useUserToken from "../../../hooks/useUserToken";

export const useLocalSitters = () => {
  const sitters   = useSelector(localSittersSelector);
  const { get }   = useUserToken();
  const dispatch  = useDispatch();

  const fetch = useCallback(async () => {
    const token = await get();

    if (token) {
      dispatch(fetchLocalSitters(token));
    }
  }, [get]);

  return { sitters, fetch };
}