import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

//TO DO:

export default function EventDetail({ deleteEvent }) {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);

  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    //GET to '/events/:id'
    fetch(`/events/${params.id}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setEvent(data);
          setLoading(false);
        });
      } else {
        r.json().then((data) => setErrors(data.error));
      }
    });
  }, []);

  function handleDelete() {
    //DELETE to `/organizations/${params.id}`
    fetch(`/events/${params.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((r) => {
      if (r.ok) {
        deleteEvent(id);
        navigate("/");
      } else {
        r.json().then((data) =>
          setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
        );
      }
    });
  }

  const handleEventFollow = () => {
    fetch(`/event_follows`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event_id: id, user_id: 1 }),
    }).then((res) => {
      if (res.ok) {
        navigate("/users/1");
      } else {
        res
          .json()
          .then((data) =>
            setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
          );
      }
    });
  };

  if (loading) return <h1>Loading</h1>;
  if (errors) return <h1>{errors}</h1>;

  const {
    id,
    name,
    attachment,
    description,
    announcements,
    date,
    time,
    link,
    social_media,
    location_name,
    address,
    city,
    state,
    zip,
    difficulty_distance,
    category,
    organizations,
  } = event;

  return (
    <div>
      <h1>{name}</h1>
      <div className="wrapper">
        <div>
          <p>{description}</p>
          <p>{announcements}</p>
          <p>{date}</p>
          <p>{time}</p>
          <p>{location_name}</p>
          <p>{address}</p>
          <p>{city}</p>
          <p>{state}</p>
          <p>{zip}</p>
          <p>{difficulty_distance}</p>
          <p>{category}</p>

          <h2>{link}</h2>
          <h2>{social_media}</h2>
          <ul>
            {organizations.map((organization) => (
              <li>{organization.name}</li>
            ))}
          </ul>
        </div>
        <img src={attachment} alt={name} />
      </div>
      <button>
        <Link to={`/events/${id}/edit`}>Edit Event</Link>
      </button>
      <button onClick={handleDelete}>Delete Event</button>
      <button onClick={handleEventFollow}>Follow Event</button>
    </div>
  );
}
