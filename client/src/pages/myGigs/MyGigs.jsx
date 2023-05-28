import React from "react";
import { Link } from "react-router-dom";
import "./mygigs.scss";
import getCurrentUser from "../../utils/getCurrentUser";
import newRequest from "../../utils/newRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function MyGigs() {
  const currentUser = getCurrentUser();
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["myGigs"],
    queryFn: () =>
      newRequest.get(`/gigs?userId=${currentUser.id}`).then((res) => {
        return res.data;
      }),
  });
  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };
  return (
    <div className="myGigs">
      {isLoading ? (
        "loading..."
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Gigs</h1>
            <Link to="/add">
              <button>Add New Gig</button>
            </Link>
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th> Price</th>
              <th> Sales</th>
              <th> Action</th>
            </tr>
            {data.map((gig) => (
              <tr key={gig}>
                <td>
                  <img className="img" src={gig.cover} alt="" />
                </td>
                <td>{gig.title}</td>
                <td> {gig.price} </td>
                <td>{gig.sales}</td>
                <td>
                  <img
                    src="./img/delete.png"
                    className="delete"
                    onClick={() => handleDelete(gig._id)}
                    alt=""
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}

export default MyGigs;
