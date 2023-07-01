"use client"
import CreateProfile from "@/components/profilepatient/CreateProfile";
import CurrentDate from "@/components/CurrentDate";
import Checkbox from "@/components/form/Checkbox";
import Input from "@/components/form/Input";
import Option from "@/components/form/Option";
import Select from "@/components/form/Select";
import { useForm } from "react-hook-form"

export default function Profile() { 

  const patientId = "64a07bd14f5a1b2bc67eca9f"

  const form = useForm({
    defaultValues:{
      birthdate: CurrentDate(), 
    }
  })
  
  const { register, handleSubmit, formState, reset } = form
  const { errors, isDirty, isSubmitting, isSubmitSuccessful } = formState

  const onSubmit = (data) => {
    CreateProfile(data,patientId)
  }

  return(
    <> 
      <div className="grid xs:gap-6 md:gap-10 lg:gap-12 xs:pt-4 md:pt-12">
        <h1 className="xs:text-2xl md:text-3xl lg:text-4xl xs:pl-6 md:pl-12 lg:pl-16 xl:pl-24">Please fill your info:</h1>
        <form className="grid xs:gap-10 md:gap-14 mb-8" onSubmit={handleSubmit(onSubmit)} noValidate>

          <div className="grid grid-cols-12 xs:gap-4 md:gap-8 lg:gap-12 xs:pl-6 md:pl-12 lg:pl-16 xl:pl-24">
            <Input name="firstname">
              <input type="text" id="firstname" className="p-2 bg-gray-200 border rounded-[3px] xs:w-10/12 xl:w-8/12 "
              {...register("firstname",{
              required:{
              value: true,
              message: "*firstname is required",
              }
              })} 
              /> 
              <h1 className="text-red-600">{errors.firstname?.message}</h1>
            </Input> 

            <Input name="lastname">
              <input type="text" id="lastname" className="p-2 bg-gray-200 border rounded-[3px] xs:w-10/12 xl:w-8/12 "
              {...register("lastname",{
              required:{
              value: true,
              message: "*lastname is required",
              }
              })} 
              /> 
              <h1 className="text-red-600">{errors.lastname?.message}</h1>
            </Input>

            <Input name="birthdate">
              <input type="date" id="birthdate" className="p-2 bg-gray-200 border rounded-[3px] xs:w-10/12 xl:w-8/12 "
              {...register("birthdate",{
              required:{
              value: true,
              message: "*birthdate is required",
              }
              })} 
              /> 
              <h1 className="text-red-600">{errors.birthdate?.message}</h1>
            </Input>

            <Select name="bloodtype">
              <select id="bloodtype" className="p-2 bg-gray-200 border rounded-[4px] xs:w-10/12 xl:w-8/12 "
              {...register("bloodtype",{
                required:{
                  value: true,
                  message: "*bloodtype is required",
                }
              })}>
              <Option value="O+" />
              <Option value="O-" /> 
              <Option value="A+" />
              <Option value="A-" /> 
              <Option value="B+" />
              <Option value="B-" />  
              <Option value="AB+" />
              <Option value="AB-" />
              </select>
            </Select> 

            <Select name="profession">
              <select id="" className="p-2 bg-gray-200 border rounded-[4px] xs:w-10/12 xl:w-8/12 "
              {...register("profession",{
                required:{
                  value: true,
                  message: "*profession is required",
                }
              })}>
              <Option value="Teacher" />
              <Option value="Programmer" /> 
              <Option value="Lawer" />
              <Option value="Doctor" /> 
              <Option value="Nurse" />
              </select>
            </Select> 
          </div>  

          <div className="grid grid-cols-12 xs:gap-6 md:gap-7 lg:gap-12 xs:pl-6 md:pl-12 lg:pl-16 xl:pl-24">
            <h1 className="col-span-12">Chronic diseases</h1>
            <Checkbox name="arthrities" col="col-span-4">
              <input type="checkbox" id="arthrities" {...register("arthrities")} className="p-2 bg-gray-200 border rounded-[3px]" />  
            </Checkbox>
            <Checkbox name="cardiovascular diseases" col="col-span-4">
              <input type="checkbox" id="cardiovascular diseases" {...register("cardiovascular")} className="p-2 bg-gray-200 border rounded-[3px]" />
            </Checkbox>
            <Checkbox name="cancer" col="col-span-4">
              <input type="checkbox" id="cancer" {...register("cancer")} className="p-2 bg-gray-200 border rounded-[3px]" />
            </Checkbox>
            <Checkbox name="asthma" col="col-span-4">
              <input type="checkbox" id="asthma" {...register("asthma")} className="p-2 bg-gray-200 border rounded-[3px]" />
            </Checkbox>
            <Checkbox name="chronic obstructive pulmonary disease(COPD)" col="col-span-6">
              <input type="checkbox" id="chronic obstructive pulmonary disease(COPD)" {...register("copd")} className="p-2 bg-gray-200 border rounded-[3px]" />
            </Checkbox>
            <Checkbox name="mental diseases" col="col-span-4">
              <input type="checkbox" id="mental diseases" {...register("mental")} className="p-2 bg-gray-200 border rounded-[3px]" />
            </Checkbox>
            <Checkbox name="diabetes diseases" col="col-span-4">
            <input type="checkbox" id="Diabetes diseases" {...register("diabetes")} className="p-2 bg-gray-200 border rounded-[3px]" />
            </Checkbox>
          </div>

          <div className="flex justify-center">
            <button disabled={!isDirty||isSubmitting} className="bg-blue-600 text-white xl:text-xl xs:py-1 md:py-2 xs:px-8 md:px-10 xl:px-16">SAVE</button>
          </div>

        </form>
      </div>
    </>
  )

}