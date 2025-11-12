import React from 'react'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { log } from 'console'

const createsnippets = () => { 

    async function createNewSnippet(formdata :FormData){
        "use server"
        const title = formdata.get("title") as string;
        const code = formdata.get("code") as string ;

        const snippet =  await prisma.snippet.create ({
            data:{
                title ,
                code 
            }
        })  
        console.log(snippet);
        


    }


    return (
        <>

            <div className='text-2xl font-semibold p-5'>CREATE A NEW SNIPPET</div>

            <form action={createNewSnippet}>

            <div className='p-5'>
                <h2 className='font-medium text-xl '>Title</h2>
                <input
                    type="text"
                    name ="title"
                    className="w-1/2 border-2 h-10 border-black rounded"
                    placeholder="Enter Title..."
                />

            </div>
 
            <div className='p-5'>
                <h2 className='font-medium text-xl '>Code</h2>
                <textarea className="w-1/2 border-2 h-10 border-black rounded"
                 placeholder="Enter Code..." name ="code"></textarea>
               


            </div> 

            <button className='py-2 px-5 bg-black text-white rounded-md ml-5'>Save</button>

            </form>

           

      




        </>

    )
}

export default createsnippets

