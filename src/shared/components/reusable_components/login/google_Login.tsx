import { useGoogleLogin } from "@react-oauth/google";
import Button1 from "../buttons/buttons";

const Google_Login = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <>
      <div onClick={() => login()}>
        <Button1 btnName="Sign in with Google 🚀"></Button1>
      </div>
    </>
  );
};
export default Google_Login;
