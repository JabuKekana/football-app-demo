import React, { useEffect, useRef, useState } from "react";
import { Bot, CheckCircle2, ExternalLink, Send, Sparkles, UserRound } from "lucide-react";
import { promptResponses, STADIUM_MANAGEMENT_URL } from "../data/demoData";

const samplePrompts = Object.keys(promptResponses);

export function AIAssistantScreen({ onNavigate }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Sawubona Kabelo — I’m Khosi AI. Ask me about fixtures, tickets, annual membership, or the club store.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const timerRef = useRef(null);
  const messageScrollRef = useRef(null);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);
  useEffect(() => {
    const messageArea = messageScrollRef.current;
    if (!messageArea) return undefined;

    const frame = window.requestAnimationFrame(() => {
      messageArea.scrollTop = messageArea.scrollHeight;
    });

    return () => window.cancelAnimationFrame(frame);
  }, [messages, typing]);

  const sendPrompt = (prompt) => {
    const cleaned = prompt.trim();
    if (!cleaned || typing) return;
    setMessages((items) => [...items, { role: "user", content: cleaned }]);
    setInput("");
    setTyping(true);
    timerRef.current = window.setTimeout(() => {
      setMessages((items) => [
        ...items,
        {
          role: "assistant",
          content:
            promptResponses[cleaned] ||
            "I can help with that. For this prototype, try asking me about the next derby, the home kit, or the R250 annual supporter membership.",
          action: cleaned.includes("home kit") ? "store" : cleaned.includes("R250") ? "join" : cleaned.includes("match tickets") ? "ticketing" : null,
        },
      ]);
      setTyping(false);
    }, 850);
  };

  return (
    <div className="screen-bg flex h-full min-h-full animate-screen-in flex-col pb-[78px]">
      <header className="screen-header">
        <div className="relative grid h-10 w-10 place-items-center rounded-2xl bg-apex-teal text-apex-navy shadow-teal">
          <Bot size={20} />
          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-apex-navy" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5"><h1 className="text-sm font-extrabold">Khosi AI</h1><CheckCircle2 size={13} className="text-apex-teal" /></div>
          <p className="mt-0.5 text-[9px] font-bold text-emerald-400">Online · Answers instantly</p>
        </div>
        <div className="rounded-full border border-apex-teal/20 bg-apex-teal/10 px-2.5 py-1.5 text-[8px] font-black uppercase tracking-wider text-apex-teal">Club official</div>
      </header>

      <main ref={messageScrollRef} className="min-h-0 flex-1 overflow-y-auto px-4 pb-4 pt-4">
        <div className="mb-5 rounded-[22px] border border-apex-teal/15 bg-gradient-to-br from-apex-teal/10 to-transparent p-4">
          <div className="mb-2 flex items-center gap-2 text-apex-teal"><Sparkles size={15} /><span className="text-[9px] font-black uppercase tracking-[.16em]">Suggested questions</span></div>
          <div className="flex flex-wrap gap-2">
            {samplePrompts.map((prompt) => (
              <button key={prompt} onClick={() => sendPrompt(prompt)} className="rounded-full border border-white/10 bg-white/[.04] px-3 py-2 text-left text-[9px] font-bold leading-tight transition hover:border-apex-teal/40 hover:text-apex-teal">
                {prompt}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}`} className={`flex items-end gap-2 ${message.role === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`grid h-7 w-7 shrink-0 place-items-center rounded-xl ${message.role === "user" ? "bg-white/10" : "bg-apex-teal text-apex-navy"}`}>
                {message.role === "user" ? <UserRound size={13} /> : <Bot size={14} />}
              </div>
              <div className={`max-w-[80%] rounded-[20px] px-4 py-3 ${message.role === "user" ? "rounded-br-md bg-apex-teal text-apex-navy" : "surface rounded-bl-md border"}`}>
                <p className="text-[11px] font-medium leading-relaxed">{message.content}</p>
                {message.action === "ticketing" ? (
                  <a href={STADIUM_MANAGEMENT_URL} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wide text-apex-teal">
                    Open Stadium Management SA <ExternalLink size={11} />
                  </a>
                ) : message.action && (
                  <button onClick={() => onNavigate(message.action)} className={`mt-3 text-[9px] font-black uppercase tracking-wide ${message.role === "user" ? "text-apex-navy" : "text-apex-teal"}`}>
                    Open {message.action === "store" ? "club store" : "annual membership"} →
                  </button>
                )}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex items-end gap-2">
              <div className="grid h-7 w-7 place-items-center rounded-xl bg-apex-teal text-apex-navy"><Bot size={14} /></div>
              <div className="surface flex gap-1 rounded-[18px] rounded-bl-md border px-4 py-3">
                {[0, 1, 2].map((dot) => <span key={dot} className="h-1.5 w-1.5 animate-bounce rounded-full bg-apex-teal" style={{ animationDelay: `${dot * 100}ms` }} />)}
              </div>
            </div>
          )}
        </div>
      </main>

      <form
        onSubmit={(event) => { event.preventDefault(); sendPrompt(input); }}
        className="z-20 mx-4 mb-3 mt-2 flex shrink-0 items-center gap-2 rounded-[22px] border border-white/10 bg-apex-navy/85 p-2 pl-4 shadow-2xl backdrop-blur-xl"
      >
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask Khosi AI anything…"
          className="min-w-0 flex-1 bg-transparent text-[11px] font-medium text-white outline-none placeholder:text-white/35"
          aria-label="Message Khosi AI"
        />
        <button type="submit" disabled={!input.trim() || typing} className="grid h-10 w-10 place-items-center rounded-2xl bg-apex-teal text-apex-navy transition disabled:opacity-35" aria-label="Send message">
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
