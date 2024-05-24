import React, {  useState } from "react";
import { getCookie } from "../../utils/manageCookie";
const AddStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [motherName, setMName] = useState("");
  const [mobileNumber, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCatogory] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDOB] = useState("");

  const [profilePic, setProfilePic] = useState(null)
  const [prevImage,setPrevImage] = useState(null)


  const accessToken = getCookie("accessToken");

  const addStudents = async (e) => {
    e.preventDefault()
    console.log(name);
    console.log(email);
    console.log(fName);
    console.log(aadhar);
    console.log(motherName);
    console.log(mobileNumber);
    console.log(address);
    console.log(category);
    console.log(gender);
    console.log(dob);
    try {
      const res = await fetch(
        "https://api.iot.inflection.org.in/sms/students",

        {
          method: "POST",
          body: JSON.stringify({
            name: name,
            email: email,
            father_name: fName,
            mother_name: motherName,
            mobile_number: mobileNumber,
            address: address,
            aadhar: aadhar,
            gender: gender,
            category: category,
            dob: dob,
          }),
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      console.log(res);
      const data = await res.json();
      console.log(data);
      console.log("hello");
    } catch (err) {
      console.log(err);
    }
  };


  const handleImage = (e) => {
    setProfilePic(e.target.files[0])
    setPrevImage(URL.createObjectURL(e.target.files[0]))
  };



  return (
    <div className="flex items-center justify-center h-auto ">
      <form onSubmit={addStudents} className="flex  bg-gray-300 w-2/4 justify-center  h-auto p-2 items-center ">
        <div>
          <div>
            {
            prevImage !== null && <img src={prevImage} width={100} height={200}/>
            }
             <input type="file" accept="image/**" onChange={handleImage} />
             <button type="submit">uplaod</button>
          </div>
          <div className="grid grid-cols-2 p-8 gap-16  ">
            <div className=" grid grid-rows-2  gap-y-2">
              <label className="text-blue-600 text-xl">Name</label>
              <input 
                type="text"
                required
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className=" grid grid-rows-2 gap-y-2">
              <label className="text-blue-600 text-xl">Email</label>
              <input
                type="email"
                required
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className=" grid grid-rows-2 gap-y-2">
              <label className="text-blue-600 text-xl">fatherName</label>
              <input
                type="text"
                placeholder="Enter Your fatherName"
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div className=" grid grid-rows-2 gap-y-2">
              <label className="text-blue-600 text-xl">MotherName</label>
              <input
                type="text"
                placeholder="Enter Your MotherName"
                onChange={(e) => setMName(e.target.value)}
              />
            </div>
            <div className=" grid grid-rows-2 gap-y-2">
              <label className="text-blue-600 text-xl">MobileNumber</label>
              <input
                type="number"
                required
                placeholder="Enter Your MobileNumber"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className=" grid grid-rows-2 gap-y-2">
              <label className="text-blue-600 text-xl">Aadhar</label>
              <input
                type="text"
                required
                placeholder="Enter Your AadharNumber"
                onChange={(e) => setAadhar(e.target.value)}
              />
            </div>
            <div className=" grid grid-rows-2 gap-y-2">
              <label className="text-blue-600 text-xl">Address</label>
              <input
                type="text"
                placeholder="Enter Your Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className=" grid grid-rows-2 gap-y-2">
              <label className="text-blue-600 text-xl">Gender</label>
              <input
                type="text"
                required
                placeholder="Enter Your Gender"
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className=" grid grid-rows-2 gap-y-2">
              <label className="text-blue-600 text-xl">DOB</label>
              <input
                type="date"
                required
                placeholder="Enter Your DOB"
                onChange={(e) => setDOB(e.target.value)}
              />
            </div>
            <div className=" grid grid-rows-2 gap-y-2">
              <label className="text-blue-600 text-xl">Category</label>
              <input
                type="text"
                placeholder="Enter Your Category"
                onChange={(e) => setCatogory(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center items-center border-2 bg-blue-600">
          <button  type="submit"> submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;


  
 
 



    

