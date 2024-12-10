import React, { useState } from 'react';

const UserProfileForm = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  const initials = `${form.firstName[0] || ''}${form.lastName[0] || ''}`.toUpperCase();


  return (
    <form onSubmit={handleSubmit}>
      <div>{initials}</div>
      <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" />
      <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <button type="submit">Update</button>
    </form>
  );
};

export default UserProfileForm;
