import React, { useState } from 'react'
import { useUpdatemeMutation, useUseravatarMutation, useUserprofileQuery } from '../redux/api/user'

const UserLayout = () => {
    const [useravatar]=useUseravatarMutation();
    const { data, isLoading } = useUserprofileQuery();
    const [updateme]=useUpdatemeMutation();
    const [email,setemail]=useState();
    const [name,setname]=useState();
    async function updateemail(e){
      e.preventDefault();
      const result =await updateme({email});
      console.log(result);
      
    }
    async function updatename(e){
      e.preventDefault();
      const result =await updateme({name});
      console.log(result);
      
    }
    const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file); // convert file to base64

    reader.onloadend = async () => {
      const base64Image = reader.result; // data:image/png;base64,...

      try {
        const res = await useravatar({ avatar: base64Image }).unwrap();
        console.log("✅ Avatar uploaded successfully:", res);
        window.location.reload(); // refresh to show new avatar
      } catch (err) {
        console.error("❌ Avatar upload failed:", err);
      }
    };
  };
  return (
    <div className='flex justify-center items-center text-center min-h-screen'>
        <div className='rounded-2xl w-96 p-10 shadow-gray-500 flex flex-col bg-orange-400'>
            <h1 className='text-2xl font-bold mb-2 text-left'>personal details</h1>
              <div className="flex flex-col items-center gap-3 justify-center">

                  <img
                      src={
                          data?.user?.avatar?.url ||
                          "https://cdn-icons-png.flaticon.com/512/847/847969.png"
                      }
                      alt="Avatar"
                      className="w-20 h-20 rounded-full border-2 border-white object-cover"
                  />

                  {data?.user && (
                      <div>
                          <label
                              htmlFor="avatarUpload"
                              className="px-4 py-2 bg-black text-white rounded-md cursor-pointer"
                          >
                              Upload Avatar
                          </label>

                          <input
                              id="avatarUpload"
                              type="file"
                              accept="image/*"
                              onChange={handleFileChange}
                              className="hidden"
                          />
                      </div>

                  )}
              </div>
            <div className='flex flex-col mt-5'>
              <p className='text-2xl font-bold mb-2 text-left'>Email</p>
              <input className='w-70 p-1 border-2 mb-2 outline-0 border-orange-200 bg-amber-50 rounded-md' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
              <button className='bg-black  p-3 w-24 text-white font-bold text-2md mr-5 ml-0 rounded-md' onClick={updateemail}>submit</button>
            </div>
            <div className='flex flex-col mt-5'>
              <p className='text-2xl font-bold mb-2 text-left'>Name</p>
              <input className='w-70 p-1 border-2 mb-2 outline-0 border-orange-200 bg-amber-50 rounded-md' value={name} onChange={(e)=>{setname(e.target.value)}}/>
              <button className='bg-black  p-3 w-24 text-white font-bold text-2md mr-5 ml-0 rounded-md' onClick={updatename}>submit</button>
            </div>

        </div>
    </div>
  )
}

export default UserLayout