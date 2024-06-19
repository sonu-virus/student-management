import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCookie } from '../../../utils/manageCookie';
import { seeToast } from '../../../utils/toast';

const Updatebatch = () => {
  const params = useParams();
  const [batchName, setBatchName] = useState('');
  const [bClass, setBClass] = useState('');
  const [note, setNote] = useState('');
  const [isActive, setIsActive] = useState('');
  const accessToken = getCookie('accessToken');

  const updateBatch = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://api.iot.inflection.org.in/sms/batches/${params.id}`,
        {
          method: 'PATCH',
          body: JSON.stringify({
            name: batchName,
            class: bClass,
            note: note,
            is_active: isActive,
          }),
          headers: {
            Authorization: `Bearer ${accessToken}`,

            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      const data = await res.json();
      console.log(data);
      seeToast(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={updateBatch} className="min-h-screen ">
          <div>
            <div className="flex flex-col pt-8  p-4 gap-8  ">
              <div className=" grid grid-rows-2  ">
                <label
                  htmlFor="batchName"
                  className="relative block rounded-md border   border-gray-200 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
                >
                  <input
                    type="text"
                    id="batchName"
                    required
                    className="px-3 py-1.5 peer border-none bg-transparent text-gray-800 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="batchNameame"
                    onChange={(e) => setBatchName(e.target.value)}
                  />

                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white  p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    BatchName
                  </span>
                </label>
              </div>
              <div className=" grid grid-rows-2 ">
                <label
                  htmlFor="bClass"
                  className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
                >
                  <input
                    type="text"
                    id="bClass"
                    className="px-3 py-1.5 peer border-none bg-transparent text-gray-800 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="email"
                    onChange={(e) => setBClass(e.target.value)}
                  />

                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white  p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    BClass
                  </span>
                </label>
              </div>
              <div className=" grid grid-rows-2 ">
                <label
                  htmlFor="note"
                  className="relative block rounded-md border   border-gray-200 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
                >
                  <input
                    type="text"
                    id="note"
                    className="px-3 py-1.5 peer border-none bg-transparent text-gray-800 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="note"
                    onChange={(e) => setNote(e.target.value)}
                  />

                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white  p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Note
                  </span>
                </label>
              </div>
              <div className=" grid grid-rows-2 ">
                <label
                  htmlFor="isActive"
                  className="relative block rounded-md border   border-gray-200 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
                >
                  <input
                    type="text"
                    id="isActive"
                    className="px-3 py-1.5 peer border-none bg-transparent text-gray-800 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="isActive"
                    onChange={(e) => setIsActive(e.target.value)}
                  />

                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white  p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    IsActive
                  </span>
                </label>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-blue-600 py-2 px-2 rounded" type="submit">
                Updatebatch
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Updatebatch;
