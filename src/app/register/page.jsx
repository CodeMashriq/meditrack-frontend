'use client'
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useState, useEffect, useCallback } from "react"
import { AiOutlineEye } from "react-icons/ai" 
import { AiOutlineEyeInvisible } from "react-icons/ai"
import { notification } from "antd"
import RegisterPatient from "@/components/signpatient/RegisterPatient"
import { useStore } from "@/store/Store"

export default function Register() { 

  const [secure, setSecure] = useState(true)
  const form = useForm()
  const { register, handleSubmit, formState, reset } = form
  const { errors, isDirty, isSubmitting, isSubmitSuccessful } = formState

  const onSubmit = ({username,email,password}) => {
    RegisterPatient(username,email,password)
  }
  const handleSecure = () => {
    setSecure(!secure)
  }

  const [api, contextHolder] = notification.useNotification();
  
  const openNotificationWithIcon = useCallback((type, message) => {
      api[type]({
        message,
      });
  }, [api])

  const { done } = useStore()
  
  console.log("done:",done,"isSubmitSuccessful",isSubmitSuccessful)

  useEffect(() => {
    if(isSubmitSuccessful && done == true) {
      reset()
      openNotificationWithIcon("success","Register is done")
      useStore.setState({ done: undefined })
    }
    else if(isSubmitSuccessful && done == false) {
      openNotificationWithIcon("error","Register failed, Something went wrong")
      useStore.setState({ done: undefined })
    }
  }, [isSubmitSuccessful,done,reset,openNotificationWithIcon])
  
  return(
    <> 
      {contextHolder}
      <div className="grid grid-cols-12 h-screen">
        <div className="xs:hidden md:flex col-span-5 bg-gray-400">
          
        </div>
        <div className="xs:col-span-12 md:col-span-7 xs:pt-16 xl:pt-28 xs:pl-7 lg:pl-12 xl:pl-24">
            <h1 className="xs:text-2xl lg:text-3xl font-bold">Register as patient:</h1>
            <p className="xs:w-10/12 xl:w-9/12 xs:my-6">Good health is the state of mental, physical and social well being and it does not just mean absence of diseases.</p>
            <form className="grid xs:gap-3 md:gap-5 lg:gap-7 xs:w-10/12 md:w-9/12 lg:w-7/12 xl:w-5/12"
            onSubmit={handleSubmit(onSubmit)} 
            noValidate
            >
              <label htmlFor="username">
                Username
                <div>
                  <input type="text" id="username" className="p-2 bg-gray-200 border rounded-[4px] w-full"
                  {...register("username",{
                    required:{
                      value: true,
                      message: "*username is required",
                    }
                  })}
                  />  
                  <h1 className="text-red-600">{errors.username?.message}</h1>
                </div>
              </label>
        
              <label htmlFor="email">
                Email Address
                <div>
                  <input type="email" id="email" className="p-2 bg-gray-200 border rounded-[4px] w-full"
                  {...register("email",{
                    required:{
                      value: true,
                      message: "*email address is required",
                    },
                    pattern:{
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "*email is invalid"
                    }
                  })}
                  />
                  <h1 className="text-red-600">{errors.email?.message}</h1>
                </div>
              </label>
              
              <label htmlFor="password" className="relative">
                Password
                <div className="realtive">
                  <input type={secure == false ? "text" : "password"} id="password" className="p-2 pr-14 mb-3 bg-gray-200 border rounded-[4px] w-full"
                  {...register("password",{
                    required:{
                      value: true,
                      message: "*password is required",
                    }
                  })}
                  />
                  {
                    secure == false ?
                    <AiOutlineEye className="absolute top-[33px] right-3 text-2xl" onClick={handleSecure}/>
                    :
                    <AiOutlineEyeInvisible className="absolute top-[33px] right-3 text-2xl" onClick={handleSecure}/>
                  }
                  <h1 className="text-red-600">{errors.password?.message}</h1>
                </div>
              </label>
              <button disabled={!isDirty||isSubmitting} className="mt-2 mb-10 bg-black text-white p-[6px] border rounded-[4px]">Sign Up</button>
              </form> 
            <p className="text-gray-400">Already have an account? <Link href="/login" className="text-black">Login here</Link></p>
        </div>
      </div>
    </>
  )
}