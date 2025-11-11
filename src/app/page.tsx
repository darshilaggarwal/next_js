import Link from "next/link"

const homepage = () => {
  return (
    <>

    <div className="justify-between flex items-center p-20">
    <div className="text-3xl font-extrabold p-5">HOME</div>
    <Link href="/snippets/new"><button className="bg-black py-2 px-5 rounded-md text-white mr-3">New</button></Link>
    
    </div>
    
    <h3 className="text-xl  font-medium ml-24">Snippets</h3>
    </>
    


    

    
  )
}

export default homepage