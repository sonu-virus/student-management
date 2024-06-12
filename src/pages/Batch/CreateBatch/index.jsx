import React, { useState } from 'react';
import { getCookie } from '../../utils/manageCookie';

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
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen ">
        <div className="flex  bg-gray-300 w-1/4 rounded-md justify-center h-2/3 items-center ">
          <form>
            <div className="grid  p-8 gap-8  ">
              <div className=" grid grid-rows-2 gap-y-2">
                <label className="text-blue-600 text-xl">BatchName</label>
                <input
                  type="text"
                  required
                  placeholder="Enter Your BactName"
                  onChange={(e) => setBatchName(e.target.value)}
                />
              </div>
              <div className=" grid grid-rows-2 gap-y-2">
                <label className="text-blue-600 text-xl">Class</label>
                <input
                  type="number"
                  required
                  placeholder="Enter Your BatchClass"
                  onChange={(e) => setBatchClass(e.target.value)}
                />
              </div>
              <div className=" grid grid-rows-2 gap-y-2">
                <label className="text-blue-600 text-xl">Note</label>
                <input
                  type="text"
                  placeholder="Enter Your Note"
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-center ">
              <button
                type="submit"
                className=" bg-blue-600 h-8 w-32 rounded-lg"
                onClick={StBatch}
              >
                CreateBatch
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Batch;