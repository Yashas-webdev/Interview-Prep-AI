// import React from 'react'
import { useState } from "react";
// import {useNavigate} from 'react-router-dom';
import Input from "../../components/Inputs/Input.jsx";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector.jsx";
import { validEmail } from "../../utils/helper.js";

const SignUp = ({setCurrentPage}) => {

  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);

  // const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // let profileImageUrl = '';

    if(!fullName){
      setError("Pleaes enter full name.");
      return;
    }

    if(!validEmail(email)){
      setError("Please enter a validate email address.")
      return
    }

    if(!password){
      setError("Please enter the password")
    }

    setError("");

    ///Login API call
    try{
      //code will be written
    }catch(error){
      if(error.respones && error.response.data.message){
        setError(error.respones.data.message)
      }else{
        setError("Something went wrong. Please try again")
      }
    }
  };
  
  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">Create an Account</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">
        Join us today by entering you details below.
      </p>

      <form onSubmit={handleSignUp}>

        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic}/>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
          <Input 
             value = {fullName}
             onChange = {({target}) => setFullName(target.value)}
             label = 'Full Name'
             placeholder = 'John'
             type = 'text'
          />

          <Input 
              value = {email}
              onChange = {({target})=>setEmail(target.value)}
              label = 'Email Adress'
              placeholder = 'john@example.com'
              type = 'text'
          />

          <Input
              value = {password}
              onChange = {({target}) => setPassword(target.value)}
              label = 'Password'
              placeholder = 'Min 8 Characters'
              type = 'password'
          />

          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

          <button type="submit" className="btn-primary">
            SIGN UP
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            Already have an account?{''}
            <button 
              className="font-medium text-primary underline cursor-pointer"
              onClick={()=>{
                setCurrentPage('login');
              }}
            >
              Login
            </button>
          </p>


        </div>
      </form>
    </div>
  )
}

export default SignUp;