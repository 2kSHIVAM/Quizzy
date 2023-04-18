import React from 'react'
import { useNavigate } from 'react-router-dom'
import CustomButton from './../components/CustomButton'
const Greeting = () => {
    const navigate = useNavigate()
    const navi=()=>{
        navigate('/')
    }
  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      <div className="flex flex-col justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white mb-4">
          Thank you for the response
        </h1>
        <div className="flex justify-center items-center mt-[40px]">
          <CustomButton
            btnType="submit"
            title="Submit another response"
            styles="bg-[#1dc071]"
            handleClick={navi}
          />
        </div>
      </div>
    </div>
  )
}

export default Greeting