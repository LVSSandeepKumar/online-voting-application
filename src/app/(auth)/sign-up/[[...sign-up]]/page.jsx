import {Balthazar} from "next/font/google";
import { SignUp } from "@clerk/nextjs";

const balthazar = Balthazar({subsets : ['latin'], weight : '400'});

export default function Register() {
    
    return (
        //SignUp is a prebuilt user component provided by Clerk to register Users. //
        <SignUp path="/sign-up"></SignUp>    
    )
}