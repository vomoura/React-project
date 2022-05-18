import { useState, useEffect } from "react";
import MeetupList from "../Components/Meetups/MeetupList";

function AllMeetupsPage() {
  // useState to set a state on the screen
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect to prevent an infinite loop on the page
  useEffect(() => {
    // setIsLoading for initial state
    setIsLoading(true);
    // fetch data from API
    fetch(
      "https://react-meetups-48e22-default-rtdb.firebaseio.com/meetups.json"
    )
      // transforms the response onto a .json file
      .then((response) => {
        return response.json();
      })
      // then convert data from the .json file onto an array
      .then((data) => {
        const meetups = [];
        // extract data to the constant "meetups" array
        for (const key in data) {
          // use a nested constant "meetup" for the extraction
          const meetup = {
            id: key,
            // using default spread operator "..." to get all info nested
            ...data[key],
          };
          // pussh data from the nested "meetup" to the constant "meetups"
          meetups.push(meetup);
        }
        // now change to a different state
        setIsLoading(false);
        // set new state with data from API within "meetups"
        setLoadedMeetups(meetups);
      });
    // using the second argument makes React check the values on this array and compare them to its previous state on the loop. If it starts with an empty array "[]", it will not load a second time after data is fetched.
  }, []);

  // show a "Loading..." message when isloading is true
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  // return all data loaded from API
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
