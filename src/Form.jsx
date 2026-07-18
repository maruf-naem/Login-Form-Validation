import { useActionState } from "react";

function Form() {
  async function validateData(preData, currenData) {
    await new Promise((resolve)=>{
      setTimeout(resolve, 1000)
    })
    let email = currenData.get("email");
    let pass = currenData.get("password");
    let emailTest = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passTest =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!email || !emailTest.test(email)) {
      return { errorEmail: "Your Email is not Valid!" };
    } else if (!passTest.test(pass)) {
      return {
        errorPass: "Your passowrd mush have 1 lower, Upper, special cherecters",
      };
    } else {
      return { success: true };
    }
  }
  const [data, action, pending] = useActionState(validateData);

  return (
    <div className="loginContainer">
      <form action={action}>
        <h2>Login</h2>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        {data?.errorEmail && <div>{data.errorEmail}</div>}

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        {data?.errorPass && !data?.errorEmail && <div>{data.errorPass}</div>}

        <button type="submit" disabled={pending}>
          {pending ? "Checking..." : "Login"}
        </button>
        {data?.success && <div>You loged successfully</div>}
      </form>
    </div>
  );
}

export default Form;
