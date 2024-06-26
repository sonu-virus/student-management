import React, { useEffect, useState } from 'react';
import { getCookie } from '../../../utils/manageCookie';
import { seeToast } from '../../../utils/toast';
import Button from '../../Components/AdminLayout/Ui/Button';

const AddDevice = () => {
  const accessToken = getCookie('accessToken');
  const [device_id, setDeviceId] = useState('');
  const [model, setModel] = useState('');
  const [firmware_version, setFirmware_version] = useState('');
  const [client_key, setClient_key] = useState('');
  const [client_cert, setClient_cert] = useState('');
  const [imei, setImei] = useState('');
  const [mac, setMac] = useState('');

  const AddDevices = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://api.iot.inflection.org.in/devices`, {
        method: 'POST',
        body: JSON.stringify({
          device_id: device_id,
          model: model,
          firmware_version: firmware_version,
          client_key: client_key,
          client_cert: client_cert,
          imei: imei,
          mac: mac,
        }),
        headers: {
          Authorization: `Bearer ${accessToken}`,

          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await res.json();
      if (data.error == true) {
        seeToast(data.message, 'error');
        return;
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url(/background.png',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="h-screen "
    >
      <form onSubmit={AddDevices} className="min-h-screen bg-gray-800/50 ">
        <div>
          <div className="grid grid-cols-2 pt-8  p-4 gap-8  ">
            {/* -----------------1--------------- */}

            <div className=" grid grid-rows-2 ">
              <label
                htmlFor="device_id"
                className="relative block rounded-md border   border-gray-200 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
              >
                <input
                  type="text"
                  id="device_id"
                  className="px-3 py-1.5 peer border-none bg-transparent text-white placeholder-transparent focus:border-transparent focus:outline-none w-full focus:ring-0"
                  placeholder="device_id"
                  onChange={(e) => setDeviceId(e.target.value)}
                />

                <span className="pointer-events-none w-full absolute start-2.5 top-0 -translate-y-1/2 text-white  p-0.5 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Device_id
                </span>
              </label>
            </div>
            {/* -------------------2-------------- */}
            <div className=" grid grid-rows-2 ">
              <label
                htmlFor="model"
                className="relative block rounded-md border   border-gray-200 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
              >
                <input
                  type="text"
                  id="model"
                  className="px-3 py-1.5 peer border-none  bg-transparent text-white placeholder-transparent focus:border-transparent focus:outline-none w-full focus:ring-0"
                  placeholder="model"
                  onChange={(e) => setModel(e.target.value)}
                />

                <span className="pointer-events-none w-full absolute start-2.5 top-0 -translate-y-1/2 text-white  p-0.5 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Model
                </span>
              </label>
            </div>
            {/* -----------3-------------- */}
            <div className=" grid grid-rows-2 ">
              <label
                htmlFor="firmware_version"
                className="relative block rounded-md border   border-gray-200 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
              >
                <input
                  type="text"
                  id="firmware_version"
                  className="px-3 py-1.5 peer w-full border-none bg-transparent text-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="firmware_version"
                  onChange={(e) => setFirmware_version(e.target.value)}
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 text-white  p-0.5 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Firmware_version
                </span>
              </label>
            </div>
            {/* -----------4---------- */}
            <div className=" grid grid-rows-2 ">
              <label
                htmlFor="firmware_version"
                className="relative block rounded-md border   border-gray-200 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
              >
                <input
                  type="text"
                  id="client_key"
                  className="px-3 py-1.5 peer w-full border-none bg-transparent text-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="client_key"
                  onChange={(e) => setClient_key(e.target.value)}
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 text-white  p-0.5 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Client_key
                </span>
              </label>
            </div>
            {/* ------------5---------- */}
            <div className=" grid grid-rows-2 ">
              <label
                htmlFor="firmware_version"
                className="relative block rounded-md border   border-gray-200 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
              >
                <input
                  type="text"
                  id="client_cert"
                  className="px-3 py-1.5 peer w-full border-none bg-transparent text-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="client_cert"
                  onChange={(e) => setClient_cert(e.target.value)}
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 text-white  p-0.5 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Client_cert
                </span>
              </label>
            </div>
            {/* --------6----------- */}
            <div className=" grid grid-rows-2 ">
              <label
                htmlFor="firmware_version"
                className="relative block rounded-md border   border-gray-200 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
              >
                <input
                  type="text"
                  id="imei"
                  className="px-3 w-full py-1.5 peer border-none bg-transparent text-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="imei"
                  onChange={(e) => setImei(e.target.value)}
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 text-white  p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Imei
                </span>
              </label>
            </div>
            {/* --------------7-------------- */}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center w-full">
              <div className="w-1/2">
                <label
                  htmlFor="firmware_version"
                  className="relative block rounded-md border  border-gray-200 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
                >
                  <input
                    type="text"
                    id="mac"
                    className=" py-1.5 peer border-none bg-transparent text-white placeholder-transparent focus:border-transparent focus:outline-none w-full focus:ring-0"
                    placeholder="mac"
                    onChange={(e) => setMac(e.target.value)}
                  />

                  <span className="pointer-events-none w-full absolute start-2.5 top-0 -translate-y-1/2 text-white  p-0.5 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Mac
                  </span>
                </label>
              </div>
            </div>
            <div className="flex justify-center space-x-60 items-center">
              <Button type="submit">Submit</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDevice;
