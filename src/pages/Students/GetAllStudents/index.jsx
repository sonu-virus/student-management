import React, { useEffect, useState } from 'react';
import { getCookie } from '../../../utils/manageCookie';
import { Link } from 'react-router-dom';
import { seeToast } from '../../../utils/toast';
import AdminLayout from '../../Components/AdminLayout/Layout';
import StudentCard from '../../Components/AdminLayout/Card';

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
      fetchStuByBatch(data[0].id);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchStuByBatch = async (id) => {
    try {
      const res = await fetch(
        `https://api.iot.inflection.org.in/sms/students/batch/${id}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
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
    <AdminLayout>
      <div className="flex p-4   justify-between ">
        <p className=" px-2 py-1 text-xl">StudentsList</p>
        <div className="flex gap-x-2">
          <Link className="bg-blue-600 rounded-md p-2" to={'/students/create'}>
            AddStudent
          </Link>
        </div>
      </div>
      {allStuData.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 ">
          {allStuData?.map((data) => (
            <div key={data.id}>
              <StudentCard
                data={data}
                clickMe={() => {
                  setAddmissionDetails((prevStat) => ({
                    ...prevStat,
                    student_id: data.id,
                  }));
                  handlePopup();
                }}
              />
              {show && (
                <div className="fixed inset-0  bg-black/10 flex justify-center items-center">
                  <div className=" absolute  w-1/3 h-96 bg-white  ">
                    <div>
                      <button
                        className="relative left-2 top-2"
                        onClick={() => {
                          resetAdmissionDetails();
                          handlePopup();
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      {/* ---------------------------- */}
                      <div className="px-8 pt-4 flex flex-col gap-y-8 ">
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
                        <button
                          className="bg-blue-600 p-2"
                          onClick={admitStudent}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center h-screen items-center">
          <p className="text-2xl">No Student Found</p>
        </div>
      )}
    </AdminLayout>
  );
};

export default StudentsListPage;
