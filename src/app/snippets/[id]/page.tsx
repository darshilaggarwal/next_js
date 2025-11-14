import { prisma } from '@/lib/prisma';
import React from 'react'
import Link from 'next/link';

const page = async ({
    params,
}: {
    params: Promise<{ id: string }>;

}) => {

    const id = parseInt((await params).id);
    console.log(id);

    const snippet = await prisma.snippet.findUnique({
        where: {
            id,
        },
    });

    if (!snippet) return <div>snippet not found</div>






    return (
        <div className='p-10 '>
            <h1 className='text-3xl'>Snippet</h1>

            <div className='flex justify-between items-center mt-14'>   
                <div className='text-xl font-semibold font-sans  mb-2 w-1/2 items-center bg-gray-400 h-12 rounded-md p-3 flex justify-between'>

                {snippet?.title}

            </div>

                <div className='flex justify-between space-x-5 '>
                   <Link href={`/snippets/${id}/edit`}><button className='py-2 px-3 bg-amber-300 rounded-md'>edit</button></Link> 
                    <button className='py-2 px-3 bg-red-500 rounded-md'>delete</button>
                </div></div>
            <pre className='bg-gray-300 w-1/2 rounded-md p-3'>
                <code className='text-xl bg-gray-300 '>
            {snippet?.code}</code></pre>


        </div>
    )
}

export default page