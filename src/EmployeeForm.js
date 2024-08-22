import React, { useState } from 'react';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    email: '',
    phoneNumber: '',
    gender: '',
    starttime:'',
    endtime:'',
    jobPosition: '',
    teams: '',
    designation: '',
    Billablehours:'',
    isBillable: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert("Form submitted Successfully")
    console.log(formData);
  };

  return (
    <div class="container">
    <div class="form">
        <h1>Employee Form</h1>
    <form onSubmit={handleSubmit} className="employee-form">
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Middle Name</label>
        <input
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Select Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <label>Start Time</label>
        <input type='time'
         name='starttime'
         value={formData.starttime}
         onChange={handleChange}
         required />

      </div>
      <div>
        <label>End Time</label>
        <input type='time'
         name='endtime'
         value={formData.endtime}
         onChange={handleChange}
         required />

      </div>

      <div>
        <label>Job Position</label>
        <input
          type="text"
          name="jobPosition"
          value={formData.jobPosition}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Select Teams</label>
        <select
          name="teams"
          value={formData.teams}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="developer">Developer</option>
          <option value="Management">Managemenet</option>
          <option value="QA">QA</option>
        </select>
      </div>

     

      <div>
        <label>Select Designation</label>
        <select
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
          <option value="Lead">Lead</option>
        </select>
      </div>

      <div>
        <label>Billable Hours</label>
        <input type='number'
        name='Billablehours'
        value={formData.Billablehours}
        onChange={handleChange}
        required />
      </div>

      <div class="bill">
        <label>Is Billable</label>
        <input
          type="checkbox"
          name="isBillable"
          checked={formData.isBillable}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
};

export default EmployeeForm;

