import { useEffect, useState } from "react";

const initProfile = {
  username: null,
  name: null,
  company: null,
  website: null,
  location: null,
};

const Effect = () => {
  const [profile, setProfile] = useState(initProfile);

  const getProfile = async () => {
    const response = await fetch("https://api.github.com/users/pickadolly");
    const data = await response.json();

    setProfile({
      username: data.login,
      name: data.name,
      company: data.company,
      website: data.blog,
      location: data.location,
    });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <h1>Fetch data with useEffect</h1>
      <h3>{`Github user name: ${profile.username}`}</h3>
      <h3>{`Name: ${profile.name}`}</h3>
      <h3>{`Company: ${profile.company}`}</h3>
      <h3>{`Website: ${profile.website}`}</h3>
      <h3>{`Location: ${profile.location}`}</h3>
    </div>
  );
};

export default Effect;
