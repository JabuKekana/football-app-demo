// pages/Admin/UserManagement.jsx
import React, { useMemo, useState } from "react";
import "./styles/admin-pages.css";

export const UserManagement = () => {
  const initialUsers = useMemo(
    () => [
      { id: "U-1001", name: "Lorem Borrower", type: "Borrower", status: "Active", verified: "Pending", kyc: "Pending" },
      { id: "U-1002", name: "Lorem Investor", type: "Investor", status: "Active", verified: "Verified", kyc: "Approved" },
      { id: "U-1003", name: "Lorem Admin", type: "Admin", status: "Active", verified: "Verified", kyc: "N/A" },
      { id: "U-1004", name: "Lorem Company", type: "Borrower", status: "Suspended", verified: "Pending", kyc: "Rejected" },
    ],
    []
  );

  const [query, setQuery] = useState("");
  const [users, setUsers] = useState(initialUsers);
  const [toast, setToast] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return users;
    return users.filter((u) => `${u.id} ${u.name} ${u.type}`.toLowerCase().includes(q));
  }, [query, users]);

  const updateUser = (id, patch) => {
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, ...patch } : u)));
    setToast("Changes saved (demo).");
    setTimeout(() => setToast(""), 1800);
  };

  return (
    <main className="admin" aria-labelledby="um-title">
      <section className="admin__hero">
        <div className="admin__container">
          <div className="admin__kicker">Admin</div>
          <h1 className="admin__title" id="um-title">
            User Management
          </h1>
          <p className="admin__lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Search, update status, and manage verification.
          </p>

          <div className="adminCard">
            <div className="adminTopRow">
              <div className="adminSearch">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input
                  className="adminSearch__input"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search users by name, id, or type..."
                  aria-label="Search users"
                />
              </div>

              <div className="adminTopRow__actions">
                <a className="adminBtn adminBtn--outline" href="/admin/settings">
                  Platform settings
                </a>
                <a className="adminBtn" href="/admin/review-loan">
                  Review applications
                </a>
              </div>
            </div>

            <div className="adminTableWrap" role="region" aria-label="Users table">
              <table className="adminTable">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Verification</th>
                    <th>KYC</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filtered.map((u) => (
                    <tr key={u.id}>
                      <td>
                        <div className="adminUserCell">
                          <div className="adminAvatar" aria-hidden="true">
                            {u.name.slice(0, 1).toUpperCase()}
                          </div>
                          <div>
                            <div className="adminUserCell__name">{u.name}</div>
                            <div className="adminUserCell__id">{u.id}</div>
                          </div>
                        </div>
                      </td>

                      <td>{u.type}</td>

                      <td>
                        <select
                          className="adminSelect adminSelect--tight"
                          value={u.status}
                          onChange={(e) => updateUser(u.id, { status: e.target.value })}
                          aria-label={`Status for ${u.id}`}
                        >
                          {["Active", "Suspended"].map((v) => (
                            <option key={v} value={v}>
                              {v}
                            </option>
                          ))}
                        </select>
                      </td>

                      <td>
                        <select
                          className="adminSelect adminSelect--tight"
                          value={u.verified}
                          onChange={(e) => updateUser(u.id, { verified: e.target.value })}
                          aria-label={`Verification for ${u.id}`}
                        >
                          {["Pending", "Verified"].map((v) => (
                            <option key={v} value={v}>
                              {v}
                            </option>
                          ))}
                        </select>
                      </td>

                      <td>
                        <select
                          className="adminSelect adminSelect--tight"
                          value={u.kyc}
                          onChange={(e) => updateUser(u.id, { kyc: e.target.value })}
                          aria-label={`KYC for ${u.id}`}
                        >
                          {["Pending", "Approved", "Rejected", "N/A"].map((v) => (
                            <option key={v} value={v}>
                              {v}
                            </option>
                          ))}
                        </select>
                      </td>

                      <td>
                        <div className="adminRowActions">
                          <button
                            className="adminBtn adminBtn--ghost adminBtn--small"
                            type="button"
                            onClick={() => updateUser(u.id, { kyc: "Approved", verified: "Verified" })}
                          >
                            Approve KYC
                          </button>
                          <button
                            className="adminBtn adminBtn--outline adminBtn--small"
                            type="button"
                            onClick={() => updateUser(u.id, { status: u.status === "Active" ? "Suspended" : "Active" })}
                          >
                            Toggle status
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={6}>
                        <div className="adminEmpty">
                          No users found. Lorem ipsum dolor sit amet.
                        </div>
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>

            {toast ? (
              <p className="adminStatus isSuccess" role="status">
                {toast}
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
};
