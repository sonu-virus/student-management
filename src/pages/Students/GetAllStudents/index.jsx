import React, { useEffect, useState } from 'react';
import { getCookie } from '../../utils/manageCookie';
import { Link } from 'react-router-dom';

const StudentsListPage = () => {
  const [allStuData, setAllStuData] = useState([]);
  const accessToken = getCookie('accessToken');

  useEffect(() => {
    const fetchAllStudents = async () => {
      try {
        const res = await fetch(
          'https://api.iot.inflection.org.in/sms/students  ',
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = await res.json();
        console.log(data);
        setAllStuData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllStudents();
  }, []);

  return (
    <div>
      <div>StudentsListPage</div>

      <div className="grid grid-cols-3 gap-4 ">
        {allStuData?.map((data) => (
          <div
            key={data.id}
            className="bg-gradient-to-t from-violet-400 to-gray-400 p-2  rounded-xl"
          >
            <div
              className="  bg-white 
               p-2 rounded-2xl text-black grid grid-cols-2 gap-2"
            >
              <p>Name : {data.name}</p>
              <p>Email : {data.email}</p>
              <p>Aadhar : {data.aadhar}</p>
              <p>Adress : {data.address}</p>
              <p>AlternateMobileNumber : {data.alternate_mobile_number}</p>
              <p>DOB : {data.dob}</p>
              <p>FatherName : {data.father_name}</p>
              <p>Gender : {data.gender.gender}</p>
              <p>MobileNumber : {data.mobile_number}</p>
              <p>MotherName : {data.mother_name}</p>
              <p>Category : {data.category.student_categories}</p>
            </div>
            <Link to={`/students/admission/${data.id}`}>Addmission</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsListPage;
