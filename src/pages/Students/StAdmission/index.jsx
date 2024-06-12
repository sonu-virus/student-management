import React from 'react';
import setAllStuData from '../GetAllStudents';
const StAdmission = () => {
  const admission = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://api.iot.inflection.org.in/sms/baches`, {
        method: 'POST',
        body: JSON.stringify({
          student_id: 'studentId',
          batch_id: 'batchId',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>StAdmission</div>
      <div>
        <form>
          <div>
            <div>
              <label>StudentId</label>
              <input type="text" placeholder="Enter StudentId" required />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default StAdmission;
