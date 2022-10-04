import {users} from "../users";

function Alldata() {

    return (
        <div className="card">
            <div className="card-header">
                All Data
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, i) => (
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>${user.balance}</td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
    );
}

export default Alldata;