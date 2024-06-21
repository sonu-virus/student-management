import React, { useState } from 'react';
import { getCookie } from '../../../utils/manageCookie';
import { Link } from 'react-router-dom';
import { seeToast } from '../../../utils/toast';
import AdminLayout from '../../Components/AdminLayout/Layout';

const Batch = () => {
  const accessToken = getCookie('accessToken');
  const [BatchName, setBatchName] = useState('');
  const [Class, setBatchClass] = useState('');
  const [Note, setNote] = useState('');

  const StBatch = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.iot.inflection.org.in/sms/batches', {
        method: 'POST',
        body: JSON.stringify({
          name: BatchName,
          class: Class,
          note: Note,
        }),

        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      console.log('post');
      const data = await res.json();
      // console.log(data);
      seeToast('Batch Created !');
    } catch (err) {
      console.log(err);
      seeToast(err.error);
    }
  };

  return (
    <AdminLayout>
      <div className="flex items-center  justify-center h-screen ">
        <div className="flex  bg-white w-full mx-16 shadow-md shadow-gray-600 rounded-md justify-center  h-96 items-center ">
          <form className="flex w-full  mx-4 flex-col gap-y-2 ">
            <label className=" text-xl  text-blue-600 font-medium">
              BatchName
            </label>
            <input
              className="rounded-md "
              type="text"
              required
              placeholder="Enter Your BactName"
              onChange={(e) => setBatchName(e.target.value)}
            />
            <label className=" text-blue-600 text-xl font-medium">Class</label>
            <input
              className="rounded-md"
              type="number"
              required
              placeholder="Enter Your BatchClass"
              onChange={(e) => setBatchClass(e.target.value)}
            />
            <label className=" text-blue-600 text-xl font-medium">Note</label>
            <input
              className="rounded-md"
              type="text"
              placeholder="Enter Your Note"
              onChange={(e) => setNote(e.target.value)}
            />
            <div className="mt-4 text-white ">
              <div className="flex justify-center  rounded-lg  bg-blue-600">
                <button
                  type="submit"
                  className="  px-2 py-2 "
                  onClick={StBatch}
                >
                  Submit
                </button>
              </div>

              <div className="flex mt-4 justify-center  rounded-lg  bg-blue-600">
                <Link className=" px-2 py-2" to={'/students/create'}>
                  AddStudent
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Batch;
