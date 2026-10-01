import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

const Page1Content = (props) => {
  return (
    <div className='h-[90vh]  flex  justify-between pb-16 pt-6 px-18 gap-10'>
        <LeftContent/>
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content
