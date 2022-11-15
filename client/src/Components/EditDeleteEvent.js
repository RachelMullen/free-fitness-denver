  // function handleDelete() {
  //   //DELETE to `/organizations/${params.id}`
  //   fetch(`/events/${params.id}`, {
  //     method: "DELETE",
  //     headers: { "Content-Type": "application/json" },
  //   }).then((r) => {
  //     if (r.ok) {
  //       deleteEvent(id);
  //       navigate("/");
  //     } else {
  //       r.json().then((data) =>
  //         setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
  //       );
  //     }
  //   });
  // }