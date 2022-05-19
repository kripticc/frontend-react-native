import { NextPage } from "next"
import InputBtn from "./input-btn";

const SignInForm: NextPage = () => {
    return (
            <div className="p-2 bg-gray-800 shadow-black drop-shadow-md hover:shadow-2xl rounded-2xl">
                <form action="/send-data-here" method="post" className="grid grid-cols-1 m-6">
                    <label htmlFor="username" className="col-sm-2 control-label text-gray-300 p-3">username</label>
                    <input type="text" id="username" name="username" className="rounded-md" required />
                    <label htmlFor="email" className="col-sm-2 control-label text-gray-300 p-3">email</label>
                    <input type="text" id="email" name="email"  className="rounded-md" required />
                    <button type="submit" className="btn p-1 bg-blue-400 rounded-3xl mt-6 mx-8 hover:mix-blend-color-dodge hover:shadow-2xl">Sign In</button>
                </form>
            </div>
    )
}

export default SignInForm
