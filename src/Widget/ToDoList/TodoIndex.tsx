import React, { useEffect, useState } from 'react'

const TodoIndex = () => {
  const [step, setStep] = useState(1)
  const [form, setform] = useState({
    username: '',
    name: '',
    startdate: '',
    enddate: '',
    task: ''
  })
  const [task, setTask] = useState({
    username: '',
    name: '',
    startdate: '',
    enddate: '',
    task: ''
  })
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const data: any = localStorage.getItem("taskData")
  // console.log("data",data)

  useEffect(() => {
    console.log("here-->", JSON.parse(data))
    setTask(JSON.parse(data))

  }, [data])
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentdata = localStorage.getItem("taskdata");

    const parsedata = currentdata ? JSON.parse(currentdata) : [];

    const updatedata = [...parsedata, form]
    localStorage.setItem("taskData", JSON.stringify(updatedata))
    setStep(3)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setform((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleEdit = (index: number) => {
    setStep(2)
    // setform(task)
    const selectedItem = task[index];
    setform(selectedItem)
    console.log("selectedItem", selectedItem)
    setEditIndex(index);
    // const { name, value } = e.target;
    // setform((prev) => ({
    //   ...prev,
    //   [name]: value
    // }))

    console.log("Edit", task)
  }



  const [count, setcount] = useState<any>('')
  const [even, setEven] = useState<any>('')
  const [odd, setOadd] = useState<any>('')


  useEffect(() => {
    const number = count;
    if (number % 2 == 0) {
      setEven(Number(even) + 1)
    }
    else {
      setOadd(Number(odd) + 1)
    }
  }, [count])


  return (
    <>
      <div className=" container flex justify-between items-center m-auto p-4 bg-gray-200  mt-2 rounded-2xl " >
        <div>
          Todo App
        </div>
        <div>
          Profile
        </div>
      </div>

      <button className=" bg-amber-200 p-3 rounded text-sm font-semibold cursor-pointer" onClick={() => setcount(Number(count) + 1)}  >Click her {count}</button>
      <button className=" bg-amber-200 p-3 rounded text-sm font-semibold cursor-pointer"  >Even {even}</button>
      <button className=" bg-amber-200 p-3 rounded text-sm font-semibold cursor-pointer"  >Odd {odd}</button>



      <div className="h-screen grid place-items-center">
        {step == 1 ? <>
          <button className=" bg-amber-200 p-3 rounded text-sm font-semibold cursor-pointer" onClick={() => setStep(2)}>Add Task</button>
        </> : step == 2 ?
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs text-black font-medium">Enter UserName</label>
              <input type="text" name="username" className="bg-gray-100 p-3 w-full border-0 text-black text-sm focus-within:outline-0 focus-within:border-0 rounded" placeholder="Enter UserName" onChange={handleChange} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs text-black font-medium">Enter Name</label>
              <input type="text" name="name" className="bg-gray-100 p-3 w-full border-0 text-black text-sm focus-within:outline-0 focus-within:border-0 rounded" placeholder="Enter Name" onChange={handleChange} />
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs text-black font-medium">Start Date</label>
                <input type="date" name='startdate' onChange={handleChange} className="bg-gray-100 p-3 w-full border-0 text-black text-sm focus-within:outline-0 focus-within:border-0 rounded" placeholder="Enter Date" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs text-black font-medium">End Date</label>
                <input type="date" name="enddate" className="bg-gray-100 p-3 w-full border-0 text-black text-sm focus-within:outline-0 focus-within:border-0 rounded" placeholder="Enter Date" onChange={handleChange} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs text-black font-medium">Task</label>
              <input type="dattexte" name="task" className="bg-gray-100 p-3 w-full border-0 text-black text-sm focus-within:outline-0 focus-within:border-0 rounded" placeholder="Enter Task Details" onChange={handleChange} />
            </div>
            <div>
              <button className=" bg-amber-200 p-3 rounded text-sm font-semibold w-full  cursor-pointer" type="submit">Assign</button>
            </div>
          </form>
          : step === 3 ? <>
            {
              task?.length === 0 ? (
                <div className="text-black text-2xl" >

                  No data
                </div>
              )
                :

                <div className="grid grid-cols-2">

                  {
                    task?.map((item, index) => (
                      <div className="bg-gray-200 rounded-2xl p-6" key={index}>
                        <div className="text-black">
                          User Id:  <span>  {item.username} </span>
                        </div>
                        <div className="text-black">
                          User Name: <span>  {item.name} </span>
                        </div>
                        <div className="text-black">
                          Task start:  <span>   {item.startdate}  </span>
                        </div>
                        <div className="text-black">
                          Task End:   <span>  {item.enddate}  </span>
                        </div>
                        <div className="text-black">
                          Task Details: <span>    {item.task}  </span>
                        </div>
                        <div className="col-span-12 grid grid-cols-2 text-center mt-3">
                          <div onClick={() => handleEdit(index)}>Edit</div>
                          <div>Delete</div>
                        </div>
                      </div>

                    ))
                  }
                </div>
            }


          </>
            : null}
      </div>




      
    </>
  )
}

export default TodoIndex