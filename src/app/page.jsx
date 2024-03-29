//"use client" is a necessary command in next used to differentiate between client side and server side components in Next.js .//
'use client';

//NPM modules and other necessary assets are imported to our application through this import section.//
import "./globals.css";
import Link from "next/link";
import {Balthazar} from "next/font/google";
import { useState } from "react";

//The font I wanted to use is declared here with the help of "font" module in Next.js .// 
const balthazar = Balthazar({subsets : ['latin'], weight : "400"})

//This is the default page of my applicaiton which I'm going to export as a default react component in the name "Home".//
export default function Home() {
    //The set of political parties are placed in arrays.//
    const assemblyParties = ["R Party", "S Party", "L Party"];
    const loksabhaParties = ["R Party", "S Party", "L Party"];

    //State Initialization //
    /*The following state variables are initialized using the `useState` hook in React:
        --> "selectedAssemblyOption": Represents the currently selected Assembly option.
        --> "selectedLoksabhaOption": Represents the currently selected Lok Sabha option.
        --> "selectedAssemblyOptionIndex": Represents the index of the currently selected Assembly option.
        --> "selectedLoksabhaOptionIndex": Represents the index of the currently selected Lok Sabha option.*/    
    const [selectedAssemblyOption, setSelectedAssemblyOption] = useState('');
    const [selectedLoksabhaOption, setSelectedLoksabhaOption] = useState('');
    const [selectedAssemblyOptionIndex, setSelectedAssemblyOptionIndex] = useState(null);
    const [selectedLoksabhaOptionIndex, setSelectedLoksabhaOptionIndex] = useState(null);

    /*The following functions are callback functions that handle the selection of an Assembly/Loksabha option that is clicked. It takes two parameters:
    --> "party": The selected party for the Assembly/Loksabha option.
    --> "idx": The index of the selected Assembly/Loksabha option.*/
    const onAssemblyOptionSelected = (party,idx) => {
            setSelectedAssemblyOption(party);
            setSelectedAssemblyOptionIndex(idx);
        }

    const onLoksabhaOptionSelected = (party,idx) => {
            setSelectedLoksabhaOption(party);
            setSelectedLoksabhaOptionIndex(idx);
    }

    // The below functions are asynchronous functions that hold the value of the selected party and it's index for further usage//
    const confirmAssemblyVote = async () => {
        console.log(selectedAssemblyOption, selectedAssemblyOptionIndex);
    }
    
    const confirmLoksabhaVote = async () => {
        console.log(selectedLoksabhaOption, selectedLoksabhaOptionIndex);
    }

    //Voting Application UI Layout//
    //The following JSX code contains the UI Layout for the voting application I'm building//
    return (
        <body className={`${balthazar.className}`}  >
        <div className="mt-6">
            <div className="header"> 
                <h1 className="text-4xl">Online Voting App</h1>
                <div className="button-holder">
                    <button className="border-[#FF7722] border-2 w-[95px] text-[#FF7722] font-bold rounded-3xl bg-white hover:bg-[#FF7722] hover:text-white focus:border-white focus:border-2 cursor-pointer"><Link href="/login">Login</Link></button>
                    <button className="border-[#FF7722] border-2 w-[95px] text-[#FF7722] font-bold rounded-3xl bg-white hover:bg-[#FF7722] hover:text-white focus:border-white focus:border-2 cursor-pointer"><Link href="/register">Register</Link></button>
                </div>
            </div>
            <div className="cards-container">
                <div className="card">
                   <h2 className="text-2xl">Cast your vote for Assembly</h2>
                    <div>
                    <ul className="*:rounded-full *:border *:border-black-600 *:w-250 *:h-8 flex flex-col *:bg-[#F7DED0] my-4 space-y-4">
                        {assemblyParties.map((party,idx) => {
                            return (
                                <li 
                                key={idx}
                                onMouseUp={() => onAssemblyOptionSelected(party,idx)}
                                className={selectedAssemblyOptionIndex === idx ? "party cursor-pointer border-black border-2 bg-[#E2BFB3]" : "party cursor-pointer"}>{party}</li>
                            )
                        })}
                    </ul>
                    </div>
                    <button 
                    onClick={() => confirmAssemblyVote()}
                    className="text-[#00563B] font-bold rounded-3xl border-2 border-[#00563B] hover:bg-[#00563B] hover:text-white focus:border-white focus:border-2 cursor-pointer">Confirm</button>
                </div>
                <div className="card">
                    <h2 className="text-2xl">Cast your vote for Loksabha</h2>
                    <div>
                        <ul className="*:rounded-full *:border *:border-black-600 *:w-250 *:h-8 flex flex-col *:bg-[#F7DED0] my-4 space-y-4">
                            {loksabhaParties.map((party,idx) => {
                                return (
                                    <li 
                                    onClick={() => {onLoksabhaOptionSelected(party,idx)}}
                                    className={selectedLoksabhaOptionIndex === idx ? "party cursor-pointer border-black border-2 bg-[#E2BFB3]" : "party cursor-pointer" }  key={idx}>{party}</li>
                                )
                            })}                        
                        </ul>
                    </div>
                    <button 
                    onClick={() => confirmLoksabhaVote()}
                    className="text-[#00563B] font-bold rounded-3xl border-2 border-[#00563B] hover:bg-[#00563B] hover:text-white focus:border-white focus:border-2 cursor-pointer">Confirm</button>
                </div>
            </div>
        </div>
    </body>
    )
}
