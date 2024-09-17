const UserBasicInfo = ({ basicInfo, basicInfoChange, heading }) => {
  return (
    <div>
      {heading && <h3 className="text-center font-bold text-2xl">{heading}</h3>}

      {/* new  */}
      <div className="max-w-md mx-auto">
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="name"
            id="name"
            value={basicInfo.name}
            onChange={basicInfoChange}
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 peer-focus:font-medium peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <br />
        <div className="relative z-0 w-full group">
          <input
            type="email"
            name="email"
            id="email"
            value={basicInfo.email}
            onChange={basicInfoChange}
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 peer-focus:font-medium peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <br />

        {/* Address Info */}
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone"
            value={basicInfo.phone}
            onChange={basicInfoChange}
            required
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="street"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 peer-focus:font-medium peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone
          </label>
        </div>
        <br />

        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={basicInfo.username}
            onChange={basicInfoChange}
            required
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="company"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 peer-focus:font-medium peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Username
          </label>
        </div>
        <br />
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="website"
            id="website"
            value={basicInfo.website}
            onChange={basicInfoChange}
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Example@gmail.com"
            required
          />
          <label
            htmlFor="company"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 peer-focus:font-medium peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Website
          </label>
        </div>
      </div>
    </div>
  );
};

export default UserBasicInfo;
