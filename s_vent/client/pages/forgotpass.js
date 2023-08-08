import Link from 'next/link';

function ForgotPassword() {
    return (
        <div>
        <h1>Forgot Password Page</h1>
        <p>This is the forgot password page of your application.</p>
        <Link href="/login">
          Login
        </Link>
      </div>
    );
  }
  
  export default ForgotPassword;