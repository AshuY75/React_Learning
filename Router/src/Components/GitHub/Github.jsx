import React, { useState, useEffect } from "react";

function Github() {
  const [userData, setUserData] = useState({}); // ✅ initial state as object

  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchaudhary")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.followers);
        setUserData(data); // ✅ set state with fetched data
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="text-center m-4v bg-gray-400 text-white p-4 text-3xl">
      Github Followers: {userData.followers} {/* ✅ use state variable */}
      <img src={userData.avatar_url} alt="" />
    </div>
  );
}

export default Github;
