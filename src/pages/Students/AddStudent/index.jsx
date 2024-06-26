import React, { useState } from 'react';
import { getCookie } from '../../../utils/manageCookie';
import { Link } from 'react-router-dom';
import AdminLayout from '../../Components/AdminLayout/Layout';
import Button from '../../Components/AdminLayout/Ui/Button';
const AddStudent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [fName, setFName] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [motherName, setMName] = useState('');
  const [mobileNumber, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [category, setCatogory] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDOB] = useState('');

  const [profilePic, setProfilePic] = useState(null);
  const [prevImage, setPrevImage] = useState(null);

  const accessToken = getCookie('accessToken');

  const addStudents = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        'https://api.iot.inflection.org.in/sms/students',

        {
          method: 'POST',
          body: JSON.stringify({
            image: profilePic,
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

            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  // --------------------------------------------------

  const handleImage = (e) => {
    setProfilePic(e.target.files[0]);
    setPrevImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <AdminLayout>
      <form onSubmit={addStudents} className="min-h-screen ">
        <div>
          {prevImage !== null}
          <div>
            {prevImage !== null && (
              <img src={prevImage} width={150} height={200} />
            )}
            <input type="file" accept="image/**" onChange={handleImage} />
          </div>
          <div className="grid grid-cols-2 pt-8  p-4 gap-8  ">
            {/* -----------------0--------------- */}

            <div className=" grid grid-rows-2  ">
              <label
                htmlFor="name"
                className="relative block rounded-md border shadow shadow-md border-gray-200 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
              >
                <input
                  type="text"
                  id="name"
                  className="px-3 py-1.5 peer border-none bg-transparent text-gray-800 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white  p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Name
                </span>
              </label>
            </div>

            {/* -----------------1--------------- */}

            <div className=" grid grid-rows-2 ">
              <label
                htmlFor="email"
                className="relative block rounded-md border  shadow shadow-md border-gray-200 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
              >
                <input
                  type="text"
                  id="email"
                  className="px-3 py-1.5 peer border-none bg-transparent text-gray-800 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white  p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Email
                </span>
              </label>
            </div>

            {/* -----------------2--------------- */}

            <div className=" grid grid-rows-2 ">
              <label
                htmlFor="fatherName"
                className="relative block rounded-md border  shadow shadow-md border-gray-200 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
              >
                <input
                  type="text"
                  id="fatherName"
                  className="px-3 py-1.5 peer border-none bg-transparent text-gray-800 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="fatherName"
                  onChange={(e) => setFName(e.target.value)}
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white  p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  FatherName
                </span>
              </label>
            </div>

            {/* -----------------3--------------- */}

            <div className=" grid grid-rows-2 ">
              <label
                htmlFor="motherName"
                className="relative block rounded-md border  shadow shadow-md border-gray-200 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
              >
                <input
                  type="text"
                  id="motherName"
                  className="px-3 py-1.5 peer border-none bg-transparent text-gray-800 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="MotherName"
                  onChange={(e) => setMName(e.target.value)}
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white  p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  MotherName
                </span>
              </label>
            </div>

            {/* -----------------4--------------- */}

            <div className=" grid grid-rows-2 ">
              <label
                htmlFor="mobileNumber"
                className="relative block rounded-md border  shadow shadow-md border-gray-200 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
              >
                <input
                  type="number"
                  id="mobileNumber"
                  className="px-3 py-1.5 peer border-none bg-transparent text-gray-800 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="Name"
                  onChange={(e) => setNumber(e.target.value)}
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white  p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  MobileNumber
                </span>
              </label>
            </div>

            {/* -----------------5--------------- */}

            <div className=" grid grid-rows-2 ">
              <label
                htmlFor="aadhar"
                className="relative block rounded-md border  shadow shadow-md border-gray-200 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
              >
                <input
                  type="text"
                  id="aadhar"
                  className="px-3 py-1.5 peer border-none bg-transparent text-gray-800 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="Aadhar"
                  onChange={(e) => setAadhar(e.target.value)}
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white  p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Aadhar
                </span>
              </label>
            </div>

            {/* -----------------6--------------- */}

            <div className=" grid grid-rows-2 ">
              <label
                htmlFor="gender"
                className="relative block rounded-md border  shadow shadow-md border-gray-200 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
              >
                <input
                  type="text"
                  id="gender"
                  className="px-3 py-1.5 peer border-none bg-transparent text-gray-800 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="Gender"
                  onChange={(e) => setGender(e.target.value)}
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white  p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Gender
                </span>
              </label>
            </div>

            {/* -----------------7--------------- */}

            <div className=" grid grid-rows-2 ">
              <label
                htmlFor="address"
                className="relative block rounded-md border  shadow shadow-md border-gray-200 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
              >
                <input
                  type="text"
                  id="address"
                  className="px-3 py-1.5 peer border-none bg-transparent text-gray-800 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white  p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Address
                </span>
              </label>
            </div>

            {/* -----------------8--------------- */}

            <div className=" grid grid-rows-2 ">
              <label
                htmlFor="dob"
                className="relative block rounded-md border  shadow shadow-md border-gray-200 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
              >
                <input
                  type="text"
                  id="dob"
                  className="px-3 py-1.5 peer border-none bg-transparent text-gray-800 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="DateOfBirth"
                  onChange={(e) => setDOB(e.target.value)}
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white  p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  DateOfBirth
                </span>
              </label>
            </div>

            {/* ------------------9-------------- */}

            <div className=" grid grid-rows-2 ">
              <label
                htmlFor="category"
                className="relative block rounded-md border  shadow shadow-md border-gray-200 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
              >
                <input
                  type="text"
                  id="category"
                  className="px-3 py-1.5 peer border-none bg-transparent text-gray-800 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="Category"
                  onChange={(e) => setCatogory(e.target.value)}
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white  p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Category
                </span>
              </label>
            </div>

            {/* ------------------10-------------- */}
          </div>
          <div className="flex justify-center space-x-60 items-center">
            <Button type="submit">Submit</Button>
            <Button>
              <Link to={'/students'}>StudentsListPage</Link>
            </Button>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
};

export default AddStudent;
