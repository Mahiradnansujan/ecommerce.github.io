import moment from "moment";
import React, { useEffect, useState } from "react";
import { getData } from "../../utils/api";

export default function AdminSeller() {
  const selectValue = [
    { id: 1, value: "Activate" },
    { id: 2, value: "Deactivate" },
  ];

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const get = async () => {
    const res = await getData(`allSeller`);
    setUsers(res);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    get();
  }, []);

  return (
    <div className="table-responsive my-5">
      {loading ? (
        <h2 className="text-center">...Loading...</h2>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Avatar</th>
              <th scope="col">Store</th>
              <th scope="col">Store Avatar</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr>
                <th scope="row">{moment(u.createdAt).format("DD-MM-YYYY")}</th>
                <td>{u.name}</td>
                <td>
                  <img src={u.avatar} alt="" width="30" />
                </td>
                <td>{u.store}</td>
                <td>
                  <img src={u.storeAvatar} alt="" width="30" />
                </td>
                <td>
                  <select className="form-select" name="status">
                    {selectValue.map((item, index) => (
                      <>
                        <option value={item.value} key={index}>
                          {item.value}
                        </option>
                      </>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
