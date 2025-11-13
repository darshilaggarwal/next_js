import { prisma } from "@/lib/prisma"
import { log } from "console";
import Link from "next/link"

const homepage = async() => {

  const snippets = await prisma.snippet.findMany();

  console.log(snippets);
  
  
  return (
    <>

    <div className="justify-between flex items-center p-20">
    <div className="text-3xl font-extrabold">HOME</div>
    <Link href="/snippets/new"><button className="bg-black py-2 px-5 rounded-md text-white mr-3">New</button></Link>
    
    </div>
    

    <div>
      {
      snippets.map((snippet) => (
        <div key={snippet.id} className="p-5 flex items-center justify-between ml-20 mr-20 bg-gray-400 mb-2 mt-2 rounded-md">
          <h1>{snippet.title}</h1>
          <Link href={`/snippets/${snippet.id}`}><button className="px-5 py-2 bg-black rounded-md text-white" >view</button></Link>
        </div>
          
      ))
      }
      
    </div>


    </>
    


    

    
  )
}

export default homepage