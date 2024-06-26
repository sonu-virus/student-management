import React, { useEffect, useState } from 'react';
import { getCookie } from '../../../utils/manageCookie';
import { useParams, Link } from 'react-router-dom';
import AdminLayout from '../../Components/AdminLayout/Layout';
import Button from '../../Components/AdminLayout/Ui/Button';

const GetAllBatches = () => {
  const params = useParams();

  const [batchDetails, setBatcheDetails] = useState([]);

  const accessToken = getCookie('accessToken');

  const fetchAllBatches = async () => {
    try {
      const res = await fetch(
        'https://api.iot.inflection.org.in/sms/batches ',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await res.json();
      console.log(data);
      setBatcheDetails(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllBatches();
  }, []);

  return (
    <AdminLayout>
      <div>
        <div className="flex justify-between p-2 w-full">
          <p className="pt-4 pl-4 text-3xl text-blue-600">Batches</p>
          <div className=" flex justify-center items-center">
            <Button>
              <Link to={'/create/batches'}>Create Batches</Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 m-6">
          {batchDetails.map((data) => (
            <li
              key={data.id}
              className="flex font-serif text-lg border-2 p-2 border-black items-center justify-between"
            >
              <p> BatchName : {data.name} </p>
              <p> Class : {data.class} </p>
              <p> Note : {data.note} </p>
              <Button>
                <Link to={`/batches/${data.id}`}>EditBtatch</Link>
              </Button>
            </li>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default GetAllBatches;
