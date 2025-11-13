import React from 'react'

const page = async ({
    params,
}:{
    params:Promise<{id:string}>;

}) => {

    const id = (await params).id;
    console.log(id);
    console.log(id);

    

    


    return (
        <div>
            <h1 className='text-3xl'>page</h1>
            <h1 className='text-xl'>{id}</h1>

        </div>
    )
}

export default page