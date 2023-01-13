import Header from "../components/Header"
import ForgotPassword from "../components/ForgotPassword"

export default function ForgotPasswordPage(){
    return(
        <>
            <Header
              heading="Reset password an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <ForgotPassword/>
        </>
    )
}