import React, { useMemo, useState } from "react";
import "./styles/messaging-center.css";

export const MessagingCenter = () => {
  const threads = useMemo(
    () => [
      {
        id: "T-9001",
        name: "Support Team",
        role: "Admin",
        last: "Lorem ipsum dolor sit amet, we received your request.",
        time: "1h",
        messages: [
          { from: "Support", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", time: "Today 09:10" },
          { from: "You", text: "Lorem ipsum dolor sit amet. Can you clarify the next steps?", time: "Today 09:18" },
          { from: "Support", text: "Lorem ipsum dolor sit amet. Please upload one more document (demo).", time: "Today 09:22" },
        ],
      },
      {
        id: "T-9002",
        name: "Investor: Lorem Partner",
        role: "Investor",
        last: "Lorem ipsum, what is the repayment source?",
        time: "6h",
        messages: [
          { from: "Investor", text: "Lorem ipsum dolor sit amet, what is the repayment source?", time: "Today 03:05" },
          { from: "You", text: "Lorem ipsum dolor sit amet, repayment is from monthly sales.", time: "Today 03:11" },
        ],
      },
      {
        id: "T-9003",
        name: "Borrower: Lorem SME",
        role: "Borrower",
        last: "Lorem ipsum, I uploaded the business plan.",
        time: "1d",
        messages: [
          { from: "Borrower", text: "Lorem ipsum, I uploaded the business plan.", time: "Yesterday 14:21" },
          { from: "You", text: "Lorem ipsum, thanks. We will review shortly.", time: "Yesterday 14:40" },
        ],
      },
    ],
    []
  );

  const [activeId, setActiveId] = useState(threads[0]?.id ?? "");
  const [draft, setDraft] = useState("");
  const [localThreads, setLocalThreads] = useState(threads);

  const active = useMemo(() => localThreads.find((t) => t.id === activeId) ?? localThreads[0], [activeId, localThreads]);

  const send = (e) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;

    setLocalThreads((prev) =>
      prev.map((t) => {
        if (t.id !== active.id) return t;
        const nextMsgs = [...t.messages, { from: "You", text, time: "Just now" }];
        return { ...t, messages: nextMsgs, last: text, time: "now" };
      })
    );

    setDraft("");
  };

  const createNew = () => {
    const id = `T-${Date.now()}`;
    const newThread = {
      id,
      name: "New message",
      role: "Draft",
      last: "Lorem: start typing your message...",
      time: "now",
      messages: [{ from: "System", text: "Lorem ipsum. This is a new conversation (demo).", time: "Just now" }],
    };

    setLocalThreads((p) => [newThread, ...p]);
    setActiveId(id);
  };

  return (
    <main className="core" aria-labelledby="msg-title">
      <section className="core__hero">
        <div className="core__container">
          <div className="core__kicker">Messaging</div>
          <h1 className="core__title" id="msg-title">
            Messaging Center
          </h1>
          <p className="core__lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Keep communication inside the platform.
          </p>

          <div className="msgShell">
            <aside className="msgList" aria-label="Message threads">
              <div className="msgList__top">
                <div className="msgList__title">Inbox</div>
                <button className="coreBtn coreBtn--outline coreBtn--small" type="button" onClick={createNew}>
                  New
                </button>
              </div>

              <div className="msgThreads" role="list">
                {localThreads.map((t) => {
                  const on = t.id === active.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      className={`msgThread ${on ? "isOn" : ""}`}
                      onClick={() => setActiveId(t.id)}
                    >
                      <div className="msgThread__top">
                        <div className="msgThread__name">{t.name}</div>
                        <div className="msgThread__time">{t.time}</div>
                      </div>
                      <div className="msgThread__meta">
                        <span className="msgRole">{t.role}</span>
                        <span className="msgThread__preview">{t.last}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="msgList__bottom">
                <a className="coreBtn coreBtn--ghost coreBtn--full" href="/faq">
                  Help
                </a>
              </div>
            </aside>

            <section className="msgChat" aria-label="Active conversation">
              <div className="msgChat__top">
                <div>
                  <div className="msgChat__name">{active?.name}</div>
                  <div className="msgChat__meta">
                    <span className="msgRole">{active?.role}</span>
                    <span className="coreMuted">Lorem secure messaging</span>
                  </div>
                </div>

                <div className="msgChat__actions">
                  <a className="coreBtn coreBtn--outline coreBtn--small" href="/privacy">
                    Privacy
                  </a>
                  <a className="coreBtn coreBtn--small" href="/dashboard">
                    Dashboard
                  </a>
                </div>
              </div>

              <div className="msgBubbleWrap" role="log" aria-label="Messages">
                {active?.messages?.map((m, idx) => {
                  const mine = m.from === "You";
                  return (
                    <div key={`${m.time}-${idx}`} className={`msgBubbleRow ${mine ? "isMine" : ""}`}>
                      <div className={`msgBubble ${mine ? "isMine" : ""}`}>
                        <div className="msgBubble__text">{m.text}</div>
                        <div className="msgBubble__meta">
                          <span>{m.from}</span>
                          <span className="msgDot" aria-hidden="true" />
                          <span>{m.time}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <form className="msgComposer" onSubmit={send}>
                <label className="srOnly" htmlFor="msg-draft">
                  Message
                </label>
                <textarea
                  id="msg-draft"
                  className="msgComposer__input"
                  rows={3}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Type your message..."
                />
                <div className="msgComposer__actions">
                  <button className="coreBtn coreBtn--ghost" type="button" onClick={() => setDraft("")}>
                    Clear
                  </button>
                  <button className="coreBtn" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </section>
          </div>

          <div className="coreHint coreHint--wide">
            Lorem ipsum dolor sit amet. Attachments and role-based access will be added later.
          </div>
        </div>
      </section>
    </main>
  );
};
