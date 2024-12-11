import React from "react";
import Navigation from "./Navigation";

function Header(){
    return (
        <header className="border-b p-3">
            <div className="container mx-auto flex justify-between items-center">
                <span className="font-bold"> 
                    AppName
                </span>

                <Navigation />
            </div>
        </header>
    )
}

export default Header