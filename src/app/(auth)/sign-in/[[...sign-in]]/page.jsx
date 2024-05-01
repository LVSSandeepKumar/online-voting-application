import { Balthazar } from "next/font/google";
import {SignIn} from "@clerk/nextjs"

const balthazar = Balthazar({subsets : ['latin'], weight : '400'});

export default function signIn() {
    return (
        //SignIn is a prebuilt user component provided by Clerk to log in the authenticated users. //
        <SignIn path="/sign-in" className="card"></SignIn>
    ) 
}