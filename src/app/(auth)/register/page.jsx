import {Balthazar} from "next/font/google";
import "./register.css";

const balthazar = Balthazar({subsets : ['latin'], weight : '400'});

export default function Register() {
    const date = new Date().toString();
    return (
        <body className={`${balthazar.className}`}>
            <div className="card ml-[550px]">
                <h2 className="text-2xl pl-12">Register your Account</h2>
                <form action="/" className="px-12 my-3 space-y-1">
                    <label htmlFor="username">Username</label><br />
                    <input type="text" name="username" placeholder="Enter a unique username" className="rounded-xl w-[175px] mb-1 pl-2"/><br />
                    <label htmlFor="fname">First Name</label><br />
                    <input type="text" name="fname" placeholder="Enter your first name" className="rounded-xl w-[175px] mb-1 pl-2"/><br />
                    <label htmlFor="lname">Last Name</label><br />
                    <input type="text" name="lname" placeholder="Enter your last name" className="rounded-xl w-[175px] mb-1 pl-2"/><br />
                    <label htmlFor="pwd">Password</label><br />
                    <input type="password" name="password" placeholder="Enter new password" className="rounded-xl w-[175px] mb-1 pl-2" /><br />
                    <label htmlFor="cPassword">Confirm Password</label><br />
                    <input type="password" name="cpwd" placeholder="Re-Enter your password" className="rounded-xl w-[175px] mb-1 pl-2"/><br />
                    <label htmlFor="dob">Date Of Birth</label><br />
                    <input type="date" name="dob" min="1970-01-01" max={date} className="rounded-xl w-[175px] mb-1 pl-2"/><br />
                    <input type="submit" value="Register" className="h-[25px] w-[175px] text-[#00563B] font-bold rounded-3xl border-2 border-[#00563B] hover:bg-[#00563B] hover:text-white focus:border-white focus:border-2 cursor-pointer"/>
                </form>
            </div>
        </body>
    )
}