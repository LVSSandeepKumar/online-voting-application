import "./login.css";
import { Balthazar } from "next/font/google";

const balthazar = Balthazar({subsets : ['latin'], weight : '400'});

export default function Login() {
    return (
        <body className={`${balthazar.className}`}>
            <div className="card ml-[550px]">
                <h2 className="text-2xl pl-12">Login to your account</h2>
                <form action="/" className="px-12 my-3 space-y-1">
                    <label htmlFor="username">Username</label><br />
                    <input type="text" id="username" name="username" placeholder="Enter your username" className="rounded-xl w-[175px] mb-1 pl-2"/><br />
                    <label htmlFor="pwd">Password</label><br />
                    <input type="password" id="pwd" name="pwd" placeholder="Enter your password" className="rounded-xl w-[175px] mb-1 pl-2"/><br />
                    <input type="submit" value="Login" className="h-[25px] w-[175px] text-[#00563B] font-bold rounded-3xl border-2 border-[#00563B] hover:bg-[#00563B] hover:text-white focus:border-white focus:border-2 cursor-pointer"/>
                </form>
            </div>
        </body>
    ) 
}