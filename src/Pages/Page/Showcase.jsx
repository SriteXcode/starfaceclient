// import React, { useState, useEffect} from 'react'
// import { useAuth } from '../../Store/auth';




// const URL = "http://localhost:5000/api/model/becomemodel";


// const Showcase = () => {
//   const [modelUser, setmodelUser] = useState({
//     username:"",
//     fullname:"",
//     gender:"",
//     phone:"",
//     email:"",
//     age:"",
//     location:"",
//     height:"",
//     bust:"",
//     waist:"",
//     hip:"",
//     eyes:"",
//     hair:"",
//     model: "",
//     // image2: null,

// });
// const [modelData, setmodelData] = useState(true);

// const {user} = useAuth();


// useEffect(() => {
//   if (modelData && user) {
//     setmodelUser({
//       username: user.username || "",
//       email: user.email || "",
//       fullname: "",
//       phone: "",
//       age: "",
//       gender: "",
//       location: "",
//       height: "",
//       bust: "",
//       waist: "",
//       hip: "",
//       eyes: "",
//       hair: "",
//       model: "",
//     });
//     setmodelData(false);
//   }
// }, [modelData, user]);




//   // handling the input
  
//   const handleInput = (e) => {
//     const { name, value, files } = e.target;
  
//     setmodelUser({
//       ...modelUser,
//       [name]: name === "model" ? files[0] : value, // Handle file input
//     });
//   };
  

//   // handling form submission

//   const handleModelSubmit = async (e) =>{
//     e.preventDefault();
//     alert(modelUser);
//     console.log(modelUser);

//     try{
//       const formData = new FormData();
//         for (const key in modelUser) {
//             formData.append(key, modelUser[key]);
//         }
      
//       const response = await fetch(URL,{
//          method:"POST",
//         //  headers:{
//         //   "Content-Type":"application/json",
//         // },
//         // body:JSON.stringify(modelUser),
//         body: formData,
//        });
//        if (response.ok) {
//         alert("Message submitted!");
//         setmodelUser({
//           fullname:"",
//     phone:"",
//     age:"",
//     gender:"",
//     location:"",
//     height:"",
//     bust:"",
//     waist:"",
//     hip:"",
//     eyes:"",
//     hair:"",
//     model: "",
//          });
//         alert('message submitted');
//         console.log("message submitted");
//       }else{
//         alert('message not sent');
//         console.log("message not sent");
//       }
      
//     console.log("model",response);
//       // You can also parse the response data if needed
//       const data = await response.json();
//       console.log(data);
//     }catch(error){
//       console.log("model",error);
//     }

//   }

//   // Common input class - replace the existing input className with this
//   const inputClass = "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out text-gray-700";

//   // Radio input class
//   const radioClass = "h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer transition duration-150 ease-in-out";

//   // Button class
//   const buttonClass = "w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out transform hover:-translate-y-0.5";

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
//       <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Model Application</h2>
//         <form onSubmit={handleModelSubmit} className="space-y-6" action='/upload' encType='multipart/form-data' method="POST">
//           {/* Username field */}
//           <div className="space-y-1">
//             <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//               Username
//             </label>
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               id="username"
//               required
//               autoComplete="off"
//               value={modelUser.username}
//               onChange={handleInput}
//               className={inputClass}
//             />
//           </div>

//           {/* Full name field */}
//           <div className="space-y-1">
//             <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="fullname"
//               placeholder="Full Name"
//               id="fullname"
//               required
//               autoComplete="off"
//               value={modelUser.fullname}
//               onChange={handleInput}
//               className={inputClass}
//             />
//           </div>

//           {/* Gender field */}
//           <div className="space-y-2">
//             <h2 className="block text-sm font-medium text-gray-700">Gender</h2>
//             <div className="flex space-x-6">
//               <div className="flex items-center">
//                 <input
//                   type="radio"
//                   name="gender"
//                   id="male"
//                   required
//                   onChange={handleInput}
//                   value="male"
//                   checked={modelUser.gender === 'male'}
//                   className={radioClass}
//                 />
//                 <label htmlFor="male" className="ml-2 text-sm text-gray-700 cursor-pointer">
//                   Male
//                 </label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="radio"
//                   name="gender"
//                   id="female"
//                   required
//                   onChange={handleInput}
//                   value="female"
//                   checked={modelUser.gender === 'female'}
//                   className={radioClass}
//                 />
//                 <label htmlFor="female" className="ml-2 text-sm text-gray-700 cursor-pointer">
//                   Female
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* Apply the same pattern to other fields */}
//           {/* Example for one more field */}
//           <div className="space-y-1">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               id="email"
//               required
//               autoComplete="off"
//               value={modelUser.email}
//               onChange={handleInput}
//               className={inputClass}
//             />
//           </div>

//           {/* Phone field */}
//           <div className="space-y-1">
//             <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               id="phone"
//               required
//               autoComplete="off"
//               value={modelUser.phone}
//               onChange={handleInput}
//               className={inputClass}
//             />
//           </div>

//           {/* Age field */}
//           <div className="space-y-1">
//             <label htmlFor="age" className="block text-sm font-medium text-gray-700">
//               Age
//             </label>
//             <input
//               type="number"
//               name="age"
//               placeholder="Age"
//               id="age"
//               required
//               autoComplete="off"
//               value={modelUser.age}
//               onChange={handleInput}
//               className={inputClass}
//             />
//           </div>

//           {/* Location field */}
//           <div className="space-y-1">
//             <label htmlFor="location" className="block text-sm font-medium text-gray-700">
//               Location
//             </label>
//             <input
//               type="text"
//               name="location"
//               placeholder="Location"
//               id="location"
//               required
//               autoComplete="off"
//               value={modelUser.location}
//               onChange={handleInput}
//               className={inputClass}
//             />
//           </div>

//           {/* Height field */}
//           <div className="space-y-1">
//             <label htmlFor="height" className="block text-sm font-medium text-gray-700">
//               Height (cm)
//             </label>
//             <input
//               type="number"
//               name="height"
//               placeholder="Height in cm"
//               id="height"
//               required
//               autoComplete="off"
//               value={modelUser.height}
//               onChange={handleInput}
//               className={inputClass}
//             />
//           </div>

//           {/* Measurements section */}
//           <div className="grid grid-cols-3 gap-4">
//             <div className="space-y-1">
//               <label htmlFor="bust" className="block text-sm font-medium text-gray-700">
//                 Bust (inches)
//               </label>
//               <input
//                 type="number"
//                 name="bust"
//                 placeholder="Bust"
//                 id="bust"
//                 required
//                 autoComplete="off"
//                 value={modelUser.bust}
//                 onChange={handleInput}
//                 className={inputClass}
//               />
//             </div>

//             <div className="space-y-1">
//               <label htmlFor="waist" className="block text-sm font-medium text-gray-700">
//                 Waist (inches)
//               </label>
//               <input
//                 type="number"
//                 name="waist"
//                 placeholder="Waist"
//                 id="waist"
//                 required
//                 autoComplete="off"
//                 value={modelUser.waist}
//                 onChange={handleInput}
//                 className={inputClass}
//               />
//             </div>

//             <div className="space-y-1">
//               <label htmlFor="hip" className="block text-sm font-medium text-gray-700">
//                 Hip (inches)
//               </label>
//               <input
//                 type="number"
//                 name="hip"
//                 placeholder="Hip"
//                 id="hip"
//                 required
//                 autoComplete="off"
//                 value={modelUser.hip}
//                 onChange={handleInput}
//                 className={inputClass}
//               />
//             </div>
//           </div>

//           {/* Features section */}
//           <div className="grid grid-cols-2 gap-4">
//             <div className="space-y-1">
//               <label htmlFor="eyes" className="block text-sm font-medium text-gray-700">
//                 Eye Color
//               </label>
//               <input
//                 type="text"
//                 name="eyes"
//                 placeholder="Eye Color"
//                 id="eyes"
//                 required
//                 autoComplete="off"
//                 value={modelUser.eyes}
//                 onChange={handleInput}
//                 className={inputClass}
//               />
//             </div>

//             <div className="space-y-1">
//               <label htmlFor="hair" className="block text-sm font-medium text-gray-700">
//                 Hair Color
//               </label>
//               <input
//                 type="text"
//                 name="hair"
//                 placeholder="Hair Color"
//                 id="hair"
//                 required
//                 autoComplete="off"
//                 value={modelUser.hair}
//                 onChange={handleInput}
//                 className={inputClass}
//               />
//             </div>

//             <div className="space-y-1">
//               <label htmlFor="model" className="block text-sm font-medium text-gray-700">
//                 img Upload
//               </label>
//               <input
//                 type="file"
//                 name="model"
//                 placeholder="upload image"
//                 id="model"
//                 required
//                 autoComplete="off"
//                 // value={modelUser.model}
//                 onChange={handleInput}
//                 className={inputClass}
//               />
//             </div>

//           </div>

//           {/* Submit button */}
//           <div className="pt-6">
//             <button
//               type="submit"
//               className={buttonClass}
//             >
//               Submit Application
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Showcase












import React, { useState, useEffect, useRef} from "react";
import { useAuth } from "../../Store/auth";

const API_URL = "http://localhost:5000/api/model/becomemodel";

const Showcase = () => {
  const { user } = useAuth();

  const [modelUser, setModelUser] = useState({
    username: "",
    fullname: "",
    gender: "",
    phone: "",
    email: "",
    age: "",
    location: "",
    height: "",
    bust: "",
    waist: "",
    hip: "",
    eyes: "",
    hair: "",
    model: "",
  });

  const [loadingUser, setLoadingUser] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  // Prefill username/email from logged-in user
  useEffect(() => {
    if (user) {
      setModelUser((prev) => ({
        ...prev,
        username: user.username || "",
        email: user.email || "",
      }));
      setLoadingUser(false);
    }
  }, [user]);

  const handleInput = (e) => {
    const { name, value, files } = e.target;
    if (name === "model" && files && files.length > 0) {
      const file = files[0];
      setModelUser({ ...modelUser, model: file });
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setModelUser({
        ...modelUser,
        [name]: value,
      });
    }
  };

  // Drag and drop handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setModelUser({ ...modelUser, model: file });
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  

   const handlePreviewClick = () => {
    fileInputRef.current.click(); // ✅ reliably triggers the file input
  };

  const handleModelSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Required fields list
    const requiredFields = [
      "username",
      "fullname",
      "gender",
      "phone",
      "email",
      "age",
      "location",
      "height",
      "bust",
      "waist",
      "hip",
      "eyes",
      "hair",
      "model",
    ];

    for (let field of requiredFields) {
      let value = modelUser[field] || (user && user[field]) || "";
      if (!value || (field === "model" && !(modelUser.model instanceof File))) {
        alert(`Please fill in the required field: ${field}`);
        setSubmitting(false);
        return;
      }
    }

    try {
      const formData = new FormData();
      for (const key in modelUser) {
        if (modelUser[key]) {
          formData.append(key, modelUser[key]);
        } else if (user && user[key]) {
          formData.append(key, user[key]);
        }
      }

      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        alert("Application submitted successfully!");
        setModelUser({
          username: user.username || "",
          email: user.email || "",
          fullname: "",
          gender: "",
          phone: "",
          age: "",
          location: "",
          height: "",
          bust: "",
          waist: "",
          hip: "",
          eyes: "",
          hair: "",
          model: "",
        });
        setPreviewUrl(null);
      } else {
        alert(data?.message || "Message not sent");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong while submitting the form.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700";
  const radioClass =
    "h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer";
  const buttonClass = `w-full flex justify-center items-center py-3 px-4 rounded-md text-sm font-medium text-white ${
    submitting
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
  }`;

  // if (loadingUser) {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen text-gray-600">
  //       Loading form...
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Model Application Form
        </h2>

        <form onSubmit={handleModelSubmit} className="space-y-6">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={modelUser.username}
              onChange={handleInput}
              className={inputClass}
              required
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={modelUser.fullname}
              onChange={handleInput}
              className={inputClass}
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium">Gender</label>
            <div className="flex space-x-4">
              {["male", "female"].map((g) => (
                <label key={g} className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={modelUser.gender === g}
                    onChange={handleInput}
                    className={radioClass}
                    required
                  />
                  <span className="ml-2 capitalize">{g}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={modelUser.email}
              onChange={handleInput}
              className={inputClass}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={modelUser.phone}
              onChange={handleInput}
              className={inputClass}
              required
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium">Age</label>
            <input
              type="number"
              name="age"
              value={modelUser.age}
              onChange={handleInput}
              className={inputClass}
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={modelUser.location}
              onChange={handleInput}
              className={inputClass}
              required
            />
          </div>

          {/* Height */}
          <div>
            <label className="block text-sm font-medium">Height</label>
            <input
              type="text"
              name="height"
              value={modelUser.height}
              onChange={handleInput}
              className={inputClass}
              required
            />
          </div>

          {/* Bust */}
          <div>
            <label className="block text-sm font-medium">Bust</label>
            <input
              type="text"
              name="bust"
              value={modelUser.bust}
              onChange={handleInput}
              className={inputClass}
              required
            />
          </div>

          {/* Waist */}
          <div>
            <label className="block text-sm font-medium">Waist</label>
            <input
              type="text"
              name="waist"
              value={modelUser.waist}
              onChange={handleInput}
              className={inputClass}
              required
            />
          </div>

          {/* Hip */}
          <div>
            <label className="block text-sm font-medium">Hip</label>
            <input
              type="text"
              name="hip"
              value={modelUser.hip}
              onChange={handleInput}
              className={inputClass}
              required
            />
          </div>

          {/* Eyes */}
          <div>
            <label className="block text-sm font-medium">Eyes</label>
            <input
              type="text"
              name="eyes"
              value={modelUser.eyes}
              onChange={handleInput}
              className={inputClass}
              required
            />
          </div>

          {/* Hair */}
          <div>
            <label className="block text-sm font-medium">Hair</label>
            <input
              type="text"
              name="hair"
              value={modelUser.hair}
              onChange={handleInput}
              className={inputClass}
              required
            />
          </div>

          {/* Drag and Drop Upload */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition ${
              dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
            }`}
          >
            <input
              type="file"
              name="model"
              id="model"
              className="hidden"
              onChange={handleInput}
              accept="image/*"
            />
            <label htmlFor="model" className="block text-sm text-gray-600">
              {modelUser.model instanceof File
                ? modelUser.model.name
                : "Drag & drop your photo here, or click to select"}
            </label>
            {previewUrl && (
              <div className="mt-4 flex justify-center">
                <img
                  src={previewUrl}
                  onClick={handlePreviewClick}
                  // onClick={() => document.getElementById("fileInput").click()}
                  alt="Preview"
                  className="border-4 max-h-48 rounded-lg shadow-md border"
                />
              </div>
            )}
          </div>

          {/* Submit */}
          <div>
            <button type="submit" className={buttonClass} disabled={submitting}>
              {submitting && (
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              )}
              {submitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Showcase;
