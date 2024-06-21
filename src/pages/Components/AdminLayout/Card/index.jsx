import React from 'react';

const StudentCard = ({ data, clickMe }) => {
  return (
    <>
      <div
        key={data.id}
        id={data.id}
        className="bg-gradient-to-t from-violet-400 to-gray-400 p-2  rounded-xl"
      >
        <div
          className="bg-white 
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

        <button
          onClick={() => {
            clickMe();
          }}
        >
          Admission
        </button>
      </div>
    </>
  );
};

export default StudentCard;
