import React from 'react'

const RightCardContent = (props) => {
    return (
    <div>
                <div className='h-full w-full top-0 left-0 absolute flex flex-col justify-between p-10'>
            <h2 className='h-12 w-12 text-xl bg-white rounded-full flex justify-center items-center font-semibold '>{props.id+1}</h2>
            <div>
                <p className='text-shadow-2xs text-xl text-white mb-14 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium quas minima, veniam amet temporibus?</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-2 rounded-full text-lg'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className=' text-white font-medium px-3 py-2 rounded-full text-lg'><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default RightCardContent
