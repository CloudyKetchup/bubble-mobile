import * as SecureStorage from "expo-secure-store";

const useUserToken = () => {
  const key = "user_token";

  const save = (token: string) => SecureStorage.setItemAsync(key, token);

  const get = () => SecureStorage.getItemAsync(key);

  const clear = () => SecureStorage.deleteItemAsync(key);

  return { get, save, clear };
};

export default useUserToken;