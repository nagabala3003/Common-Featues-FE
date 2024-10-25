import Button1 from "../buttons/buttons";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

const Facebook_Login = () => {
  return (
    <>
      <div>
        {/* <Button1 btnName="Sign in with Facebook" /> */}
        <LoginSocialFacebook
          appId="852430790375986"
          onResolve={(res) => {
            console.log("Result when login with Facebook", res);
          }}
          onReject={(err) => {
            console.log("Error Ocurred when login with Facebook", err);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      </div>
    </>
  );
};

export default Facebook_Login;
