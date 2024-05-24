import React, { useEffect } from 'react';
import { getCookie } from '../../utils/manageCookie';

const StudentsListPage = () => {

const accessToken = getCookie('accessToken')

  useEffect(() => {
    const fetchAllStudents = async () => {
      try {
        const res = await fetch(
          'https://api.iot.inflection.org.in/sms/students',
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllStudents();
  }, []);

  return <div>StudentsListPage</div>;
};

export default StudentsListPage;
