export {};

declare global {
  export type MainParamList = {
    LoginScreen: undefined;
    RegisterScreen: undefined;
    MainScreen: undefined;
    ChatScreen: {
      name: string;
    };
  };
}
