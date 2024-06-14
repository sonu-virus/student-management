import React, { useEffect, useState } from 'react';
import { getCookie } from '../../../utils/manageCookie';
import { useParams } from 'react-router-dom';

const StAdmission = () => {
  const [dob, setDOB] = useState('');
  const [category, setCatogory] = useState('');
  const accessToken = getCookie('accessToken');
  const params = useParams();

  const admission = async (e) => {
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
      const data = await res.json();
      console.log(data);
      console.log(params.id);
      console.log(data[0].id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    admission();
  }, []);
  return (
    <>
      <div>StAdmission</div>
      <div>
        <form className="min-h-screen ">
          {}
          <div>
            <div className="grid grid-cols-2 pt-8  p-4 gap-8  ">
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
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default StAdmission;
