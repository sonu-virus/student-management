import React, { useEffect, useState } from 'react';
import { getCookie } from '../../../utils/manageCookie';
import { Link } from 'react-router-dom';
import { seeToast } from '../../../utils/toast';

const StudentsListPage = () => {
  const [allStuData, setAllStuData] = useState([]);
  const [batcheDetails, setBatchDetails] = useState([]);
  const accessToken = getCookie('accessToken');
  const [show, setShow] = useState(false);

  const [admissionDetails, setAddmissionDetails] = useState({
    student_id: '',
    batch_id: '',
  });

  const resetAdmissionDetails = () => {
    setAddmissionDetails({ student_id: '', batch_id: '' });
  };

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
      setAllStuData(data);
    } catch (err) {
      console.log(err);
    }
  };
  const batcheDetail = async () => {
    try {
      const res = await fetch(
        'https://api.iot.inflection.org.in/sms/batches  ',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const batchData = await res.json();
      console.log(batchData);
      setBatchDetails(batchData);
    } catch (error) {
      console.log(error);
    }
  };

  const admitStudent = async () => {
    if (admissionDetails.student_id == '' || admissionDetails.batch_id == '') {
      seeToast('Please Select Student And Batch to Addmission', 'info');
      return;
    }
    try {
      const res = await fetch(
        'https://api.iot.inflection.org.in/sms/students/admission',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify(admissionDetails),
        }
      );
      const data = await res.json();
      if (data.error == true) {
        seeToast(data?.message, 'error');
      } else {
        seeToast('Addmission Successfull', 'success');
      }

      resetAdmissionDetails();
      handlePopup();
    } catch (error) {
      console.log(error);
      handlePopup();
    }
  };

  const handlePopup = () => {
    setShow(!show);
  };

  useEffect(() => {
    fetchAllStudents();
    batcheDetail();
  }, []);

  return (
    <div>
      <div>StudentsListPage</div>

      <div className="grid grid-cols-3 gap-4 ">
        {allStuData?.map((data) => (
          <div
            key={data.id}
            id={data.id}
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

            <div className="flex justify-between">
              <button
                onClick={() => {
                  setAddmissionDetails((prevStat) => ({
                    ...prevStat,
                    student_id: data.id,
                  }));
                  handlePopup();
                }}
              >
                Admission{' '}
              </button>
              <Link to={'/students/create'}>AddStudent</Link>
            </div>
            {show && (
              <div className="fixed inset-0 bg-black/10 flex justify-center items-center">
                <div className="w-96 h-96 bg-white">
                  <button
                    onClick={() => {
                      resetAdmissionDetails();
                      handlePopup();
                    }}
                  >
                    close
                  </button>
                  <div>
                    <h3>Select A Batch To Take Addmission</h3>
                    <div>
                      <select
                        name="batches"
                        id="batches"
                        onChange={(e) =>
                          setAddmissionDetails((prev) => ({
                            ...prev,
                            batch_id: e.target.value * 1,
                          }))
                        }
                      >
                        <option value="">Choose a batch</option>
                        {batcheDetails?.map((batch) => (
                          <option value={batch.id} key={batch.id}>
                            {batch.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button onClick={admitStudent}>Submit</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsListPage;
