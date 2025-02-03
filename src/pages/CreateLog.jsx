import { MenuItem, Select } from "@mui/material";
import categories from "../utilities/categoryList"
import React from "react";
import WideButton from "../components/WideButton";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addLog } from "../features/logging/logThunk";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Link } from "react-router-dom";


function CreateLog() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const emission = Number.parseFloat((categories[data.category] * data.performedTime).toFixed(2));
    const log = {...data, emission: emission, performedTime: Number.parseFloat(data.performedTime)}
    dispatch(addLog(log))
    navigate('/calculator')
  }

  return (
    <section className="!mt-32 flex justify-center items-center">
      <div className="!px-4 w-[350px] sm:w-[550px] flex flex-col items-stretch justify-center gap-2 !py-4 border-[1px] border-gray-400 rounded-2xl shadow-ls">
        <Link to={'/calculator/'}><IoIosArrowDropleftCircle className="text-2xl text-cyan-950" /></Link>
        <h1 className="font-Bricolage text-center text-2xl text-cyan-950">New Log</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full font-Outfit !p-1">
            <p className="!pb-1">Description</p>
            <input
              type="text"
              name="desc"
              id="desc"
              maxLength={50}
              placeholder="Description"
              className="outline-none font-Outfit border-none w-full !p-1 bg-gray-200 placeholder:font-Outfit hover:bg-gray-300 transition-all placeholder:text-gray-700 rounded-sm"
              {...register('description', { required: true, maxLength: 50 })}
            />
            {errors.description && <p className="font-Outfit text-red-600">Field cannot be empty</p>}
          </div>

          <div className="w-full font-Outfit !p-1">
            <p className="!pb-1">Date</p>
            <input
              type="date"
              name="date"
              id="date"
              className="outline-none border-none w-full !p-1 bg-gray-200 text-black font-Outfit rounded-sm"
              {...register('date', {required: true})}
            />
            {errors.date && <p className="font-Outfit text-red-600">Field cannot be empty</p>}
          </div>

          <div className="w-full font-Outfit !p-1">
            <p className="!pb-1">Time performed(in hours)</p>
            <input
              type="number"
              name="performed-time"
              id="performed-time"
              max={10}
              min={1}
              className="outline-none border-none w-full !p-1 bg-gray-200 text-black font-Outfit rounded-sm"
              {...register('performedTime', { required: true })}    
            />
            {errors.performedTime && <p className="font-Outfit text-red-600">Field cannot be empty</p>}
          </div>

          <div className="w-full font-Outfit !p-1">
            <p className="!pb-1">Categories</p>
            <Select
              id="categories"
              displayEmpty
              defaultValue=""
              sx={{
                outline: "none",
                border: "none",
                width: "100%",
                fontFamily: 'Outfit',
                bgcolor: '#e5e7eb',
                color: "black",
                transition: 'all',
                borderRadius: "4px", // rounded-sm
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                "&:hover": { backgroundColor: "#d1d5db" },
              }}
              {...register('category', {required: true})}
            >
              <MenuItem value="" sx={{ fontFamily: "Outfit", color: "#364153" }}>
                Select Category
              </MenuItem>
              {Object.keys(categories).map((category) => (
                <MenuItem key={category} value={category} sx={{ fontFamily: "Outfit" }}>
                  {category}
                </MenuItem>
              ))}
            </Select>
            {errors.category && <p className="font-Outfit text-red-600">Field cannot be empty</p>}
          </div>

          <WideButton color={'bg-gray-200'} activeColor={'bg-gray-300'} hoverColor={'bg-gray-400'} textColor={'bg-black'} value={'Add log'} />

        </form>
      </div>
    </section>
  )
}

export default CreateLog;
