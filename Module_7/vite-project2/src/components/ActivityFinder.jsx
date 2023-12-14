import { useState, useEffect } from "react";

function ActivityFinder() {
  // Fetches a random activity
  const [participants, setParticipants] = useState(1);
  const [activity, setActivity] = useState("");
  const [type, setType] = useState("education");


  useEffect(() => {
    console.log ("running effect");
    let ignore = false;

   let fetchUrl = "https://www.boredapi.com/api/activity?" + "participants=" + participants + "&type=" + type
    console.log(fetchUrl)
    fetch(fetchUrl)

      .then((response) => response.json())
      .then((json) => {
        console.log(json)
       if (!ignore) setActivity (json.error ? json.error : json.activity);
      });
    

    return () => {
        ignore = true;
        console.log('cleanup complete');
    };
  }, [participants, type]);

  return (
    <div className="ActivityFinder componentBox">
      <h3>Activity Finder</h3>
      
      <label>
        Choose number of participants:
        <select
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        >

          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>

      <label>
        Choose type of activity:
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>education</option>
          <option>recreational</option>
          <option>diy</option>
          <option>cooking</option>
          <option>relaxation</option>
          <option>music</option>
          <option>busywork</option>

        </select>
      </label>


      <div>
        <strong>Suggested Activity: </strong>
        {activity}
      </div>

    </div>
  );
}

export default ActivityFinder

// ++ Reference https://www.boredapi.com/documentation and add a
// new dropdown to suggest an activity based on type
