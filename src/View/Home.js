import React from "react";
import HelloWorld from "../Components/HelloWorld";

function Home() {
    return (
        <div>
          <h1 className='font-bold text-2xl'> this is the home page</h1>
           <HelloWorld name="Quentin"/>
        </div>
    );
}

export default Home;