import React, { useState } from "react";
import { X, Pencil } from "lucide-react";

export default function App() {
  const [heading, setHeading] = useState("");
  const [desc, setDesc] = useState("");
  const [task, setTask] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [viewNote, setViewNote] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const copy = [...task];
    copy.push({ heading, desc });
    setTask(copy);
    setHeading("");
    setDesc("");
  };

  const deleteNote = (idx) => {
    const copy = [...task];
    copy.splice(idx, 1);
    setTask(copy);
  };

  const startEdit = (idx) => {
    setIsEditing(true);
    setEditIndex(idx);
    setHeading(task[idx].heading);
    setDesc(task[idx].desc);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    const updated = [...task];
    updated[editIndex] = { heading, desc };

    setTask(updated);
    setIsEditing(false);
    setEditIndex(null);
    setHeading("");
    setDesc("");
  };

  return (
    <div className="h-screen bg-zinc-900 text-white flex flex-col lg:flex-row overflow-hidden">
      {/* LEFT FORM */}
      <form
        onSubmit={isEditing ? saveEdit : submitHandler}
        className="flex flex-col gap-6 p-8 lg:w-1/3 h-full overflow-y-auto 
        bg-zinc-950/40 backdrop-blur-xl border-r border-white/10"
      >
        <h1 className="text-3xl font-bold tracking-tight">
          {isEditing ? "Edit Note" : "Create Note"}
        </h1>

        <input
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          className="px-5 py-4 w-full border border-white/20 rounded-xl bg-white/10 backdrop-blur 
          outline-none focus:border-white/40"
          type="text"
          placeholder="Enter Note Heading"
        />

        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="px-5 py-4 w-full h-40 border border-white/20 rounded-xl bg-white/10 backdrop-blur 
          outline-none focus:border-white/40"
          placeholder="Enter Details"
        />

        <button className="bg-emerald-700 hover:bg-emerald-800 py-3 rounded-xl transition-all">
          {isEditing ? "Save Changes" : "Add Note"}
        </button>
      </form>

      {/* RIGHT MASONRY GRID */}
      <div className="lg:w-2/3 h-full overflow-y-auto p-8">
        <h1 className="text-3xl font-bold mb-6 tracking-tight">Recent Notes</h1>

        <div
          className="grid gap-6 transition-all"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          }}
        >
          {task.map((elem, idx) => (
            <div
              key={idx}
              draggable
              onDragStart={(e) => e.dataTransfer.setData("index", idx)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                const from = Number(e.dataTransfer.getData("index"));
                const to = idx;
                const updated = [...task];
                const temp = updated[from];
                updated[from] = updated[to];
                updated[to] = temp;
                setTask(updated);
              }}
              onClick={() => setViewNote(elem)}
              className="
              relative p-5 rounded-2xl border border-white/30 
              bg-white/10 backdrop-blur-lg shadow-xl
              cursor-pointer hover:scale-[1.04] transition-all duration-300 
              "
            >
              {/* DELETE */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteNote(idx);
                }}
                className="absolute right-3 top-3 bg-red-600 hover:bg-red-700 text-white p-1 rounded-full"
              >
                <X size={15} strokeWidth={3} />
              </button>

              {/* EDIT */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  startEdit(idx);
                }}
                className="absolute right-10 top-3 bg-blue-600 hover:bg-blue-700 text-white p-1 rounded-full"
              >
                <Pencil size={15} strokeWidth={3} />
              </button>

              <h3 className="text-xl font-semibold mt-4 mb-2 break-words line-clamp-2 text-white">
                {elem.heading}
              </h3>

              <p className="text-sm break-words text-white/70 line-clamp-4">
                {elem.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FULL READ MODAL */}
      {viewNote && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center p-6 z-50">
          <div
            className="border border-white/30 
              bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-8 max-w-xl w-full relative"
          >
            <button
              onClick={() => setViewNote(null)}
              className="absolute right-4 top-4 bg-red-600 text-white p-1 rounded-full hover:bg-red-700"
            >
              <X size={18} strokeWidth={3} />
            </button>

            <h2 className="text-3xl text-white font-bold mb-4 break-words">
              {viewNote.heading}
            </h2>

            <p className="text-lg whitespace-pre-wrap text-zinc-300 leading-relaxed break-words">
              {viewNote.desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
