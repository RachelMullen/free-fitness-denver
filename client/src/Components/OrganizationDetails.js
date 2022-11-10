import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

//TO DO: Look at profile code for this and routing

export default function OrganizationDetail({ deleteOrganization }) {
  const [organization, setOrganization] = useState({});
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);

  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    //GET to '/organizations/:id'
    fetch(`/organizations/${params.id}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setOrganization(data);
          setLoading(false);
        });
      } else {
        r.json().then((data) => setErrors(data.error));
      }
    });
  }, []);

  function handleDelete() {
    //DELETE to `/organizations/${params.id}`
    fetch(`/organizations/${params.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((r) => {
      if (r.ok) {
        deleteOrganization(id);
        navigate("/");
      } else {
        r.json().then((data) =>
          setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
        );
      }
    });
  }

  const handleOrganizationFollow = () => {
    fetch(`/organization_follows`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ organization_id: id, user_id: 1 }),
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
    link,
    social_media,
    events,
  } = organization;

  return (
    <div>
      <h1>{name}</h1>
      <div className="wrapper">
        <div>
          <p>{description}</p>
          <p>{announcements}</p>
          <h2>{link}</h2>
          <h2>{social_media}</h2>
          <ul>
            {events.map((event) => (
              <li>{event.name}</li>
            ))}
          </ul>
        </div>
        <img src={attachment} alt={name} />
      </div>
      <button>
        <Link to={`/organizations/${id}/edit`}>Edit Organization</Link>
      </button>
      <button onClick={handleDelete}>Delete Organization</button>
      <button onClick={handleOrganizationFollow}>Follow Organization</button>
    </div>
  );
}
