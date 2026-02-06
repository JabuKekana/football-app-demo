// pages/Borrower/BorrowerProfile.jsx
import React, { useState } from "react";
import "./styles/dashboard-pages.css";

export const BorrowerProfile = () => {
  const [savedMsg, setSavedMsg] = useState("");

  const [form, setForm] = useState({
    profilePic: null,
    businessAddress: "",
    website: "",
    social: "",
    elevatorPitch: "",
    teamMembers: [{ name: "", role: "" }],
    milestones: "",
    loanHistory: "",
  });

  const set = (key) => (e) => {
    const value = e.target.type === "file" ? e.target.files?.[0] ?? null : e.target.value;
    setForm((p) => ({ ...p, [key]: value }));
  };

  const setTeam = (idx, key) => (e) => {
    const value = e.target.value;
    setForm((p) => {
      const next = [...p.teamMembers];
      next[idx] = { ...next[idx], [key]: value };
      return { ...p, teamMembers: next };
    });
  };

  const addMember = () => {
    setForm((p) => ({ ...p, teamMembers: [...p.teamMembers, { name: "", role: "" }] }));
  };

  const removeMember = (idx) => {
    setForm((p) => {
      const next = p.teamMembers.filter((_, i) => i !== idx);
      return { ...p, teamMembers: next.length ? next : [{ name: "", role: "" }] };
    });
  };

  const save = (e) => {
    e.preventDefault();
    setSavedMsg("Profile saved (demo).");
    setTimeout(() => setSavedMsg(""), 2000);
  };

  const proceed = () => {
    window.location.href = "/borrower/loan-application";
  };

  return (
    <main className="dash" aria-labelledby="bp-title">
      <section className="dash__hero">
        <div className="dash__container">
          <div className="dash__kicker">Borrower</div>
          <h1 className="dash__title" id="bp-title">
            Borrower Profile
          </h1>
          <p className="dash__lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Complete your profile to improve matching.
          </p>

          <form className="dashCard" onSubmit={save}>
            <h2 className="dashCard__title">Business details</h2>

            <div className="dashGrid">
              <div className="dashField dashField--full">
                <label className="dashLabel" htmlFor="bp-pic">
                  Profile picture
                </label>
                <input className="dashFile" id="bp-pic" type="file" onChange={set("profilePic")} />
                <div className="dashHint">Demo: optional.</div>
              </div>

              <div className="dashField dashField--full">
                <label className="dashLabel" htmlFor="bp-address">
                  Business address
                </label>
                <input className="dashInput" id="bp-address" value={form.businessAddress} onChange={set("businessAddress")} placeholder="Lorem address" />
              </div>

              <div className="dashField">
                <label className="dashLabel" htmlFor="bp-web">
                  Website
                </label>
                <input className="dashInput" id="bp-web" value={form.website} onChange={set("website")} placeholder="https://lorem.com" />
              </div>

              <div className="dashField">
                <label className="dashLabel" htmlFor="bp-social">
                  Social links
                </label>
                <input className="dashInput" id="bp-social" value={form.social} onChange={set("social")} placeholder="LinkedIn, X, etc" />
              </div>

              <div className="dashField dashField--full">
                <label className="dashLabel" htmlFor="bp-pitch">
                  Business description (elevator pitch)
                </label>
                <textarea
                  className="dashTextarea"
                  id="bp-pitch"
                  rows={5}
                  value={form.elevatorPitch}
                  onChange={set("elevatorPitch")}
                  placeholder="Lorem ipsum dolor sit amet..."
                />
              </div>
            </div>

            <div className="dashDivider" />

            <h2 className="dashCard__title">Key team members</h2>
            <div className="dashTeam">
              {form.teamMembers.map((m, idx) => (
                <div className="dashTeam__row" key={`m-${idx}`}>
                  <input
                    className="dashInput"
                    value={m.name}
                    onChange={setTeam(idx, "name")}
                    placeholder="Name (Lorem)"
                    aria-label="Team member name"
                  />
                  <input
                    className="dashInput"
                    value={m.role}
                    onChange={setTeam(idx, "role")}
                    placeholder="Role (Lorem)"
                    aria-label="Team member role"
                  />
                  <button className="dashBtn dashBtn--ghost" type="button" onClick={() => removeMember(idx)}>
                    Remove
                  </button>
                </div>
              ))}

              <button className="dashBtn dashBtn--outline" type="button" onClick={addMember}>
                Add member
              </button>
            </div>

            <div className="dashDivider" />

            <h2 className="dashCard__title">Milestones and loan history</h2>
            <div className="dashGrid">
              <div className="dashField">
                <label className="dashLabel" htmlFor="bp-milestones">
                  Milestones or achievements
                </label>
                <textarea
                  className="dashTextarea"
                  id="bp-milestones"
                  rows={5}
                  value={form.milestones}
                  onChange={set("milestones")}
                  placeholder="Lorem milestones..."
                />
              </div>

              <div className="dashField">
                <label className="dashLabel" htmlFor="bp-history">
                  Previous loan history (if any)
                </label>
                <textarea
                  className="dashTextarea"
                  id="bp-history"
                  rows={5}
                  value={form.loanHistory}
                  onChange={set("loanHistory")}
                  placeholder="Lorem loan history..."
                />
              </div>
            </div>

            <div className="dashActions">
              <button className="dashBtn dashBtn--outline" type="button" onClick={() => (window.location.href = "/")}>
                Return home
              </button>

              <div className="dashActions__right">
                <button className="dashBtn dashBtn--ghost" type="button" onClick={proceed}>
                  Proceed to application
                </button>
                <button className="dashBtn" type="submit">
                  Save profile
                </button>
              </div>
            </div>

            {savedMsg ? <p className="dashStatus" role="status">{savedMsg}</p> : null}
          </form>
        </div>
      </section>
    </main>
  );
};
