import React, { useEffect } from 'react';

const StudentsListPage = () => {
  useEffect(() => {
    const fetchAllStudents = async () => {
      try {
        const res = await fetch(
          'https://api.iot.inflection.org.in/sms/students',
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer v4.local.vnj4MHEper0JzZNVjTZ4KH8MJtzkwXj7X4oe6xtj6xdm_Csq0V_e8YQtSdf_4qemW8c1kip6xPkcIpF33FGMmsByoEznNHt7E-Rqp_1BBU9xYrfhI9156jiWToMdjZYpr60XB9yTbtg-2YHfZOJ2wktTuLfBrt55vYX0r4ywVdm4wmBeDnNQVK9Kto7QghTs1Ghr2dg_4vALFirpxkgbOiO7UBtlCAwa29QFcDeRHQnj_4kkte6Q7sdpzMiUNLjdwpMI3qYnZ3JLFwGYQ2oKT_anVqEtl44piNbWR7u71zqdhzKcz2Tcckrff3tvns_-qMsysMYwh9zziEhUcFr_Qxw9DT0yT8TLT4CfCpN4B7sw-WHjHhqCGI9ecBb3t6P8hMFbnZFtzvoa7xY1VAtLmSOV4l6KqUNJiaWGwK5PTl60BrDLbleEBR8NK3OfAGLyMNjWhjAg3M8_y56izxqEOtjYDzulwqXjcO26eZRvaQZjzkM_a1PfyW7ZWj26hVwOqomYUv0AeulSdu0jHWf06E1mOdHrO9Puj37YYiEnguA-EEMyaAtYLCrnz6sIlchzi4OP8Zreu1a9vI245doR-d1QFBU5Gkbe1tSZNbaco0S4OM3y70OiwyXj60ZpHsLyXMXJcZQxZo8uH4vKMX32cVMQiPHpnJcC7TUxloOsGsR7tru_mPF1GlpK8U5yDjKyuwkkj-gEnsmjepAB9q_OBsLm0t_JOPwUG9MkGw23_pgOLIME62SvU5pJOavh7PFKh5Fu_WKlrmIxhA9Wq7xWgcdp2qlph2oWEZ5DUJ8_IbUY_tBv-C6-iNBCXRjrNZQyMMdXdIr81lQebAUNnLqKJq2qFMvea0WOk0eMXa94PDggTzZmRMOebbvNHiTuXFKyHzPk8bN7SA7cG9L0`,
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
