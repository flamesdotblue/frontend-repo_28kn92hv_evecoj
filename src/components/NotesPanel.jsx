import React, { useMemo, useState } from 'react';
import { Plus, Pencil, Trash2, Save, X } from 'lucide-react';

const NoteCard = ({ note, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState({ title: note.title, content: note.content });

  const startEdit = () => setIsEditing(true);
  const cancelEdit = () => {
    setDraft({ title: note.title, content: note.content });
    setIsEditing(false);
  };
  const saveEdit = () => {
    onEdit({ ...note, ...draft });
    setIsEditing(false);
  };

  return (
    <div className="group rounded-xl border border-white/10 bg-neutral-900/60 p-4 text-white shadow-sm">
      {isEditing ? (
        <div className="space-y-3">
          <input
            className="w-full rounded-lg bg-neutral-800/80 px-3 py-2 text-sm outline-none ring-1 ring-white/10 focus:ring-rose-500"
            value={draft.title}
            onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))}
          />
          <textarea
            className="h-24 w-full resize-none rounded-lg bg-neutral-800/80 px-3 py-2 text-sm outline-none ring-1 ring-white/10 focus:ring-rose-500"
            value={draft.content}
            onChange={(e) => setDraft((d) => ({ ...d, content: e.target.value }))}
          />
          <div className="flex items-center justify-end gap-2">
            <button onClick={cancelEdit} className="inline-flex items-center gap-1 rounded-lg bg-neutral-800 px-2.5 py-1.5 text-xs text-white/80 hover:bg-neutral-700">
              <X size={14} /> Cancel
            </button>
            <button onClick={saveEdit} className="inline-flex items-center gap-1 rounded-lg bg-rose-500 px-2.5 py-1.5 text-xs text-white hover:bg-rose-600">
              <Save size={14} /> Save
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-start justify-between gap-3">
            <div>
              <h4 className="font-medium leading-tight">{note.title}</h4>
              <p className="mt-1 text-sm text-white/70">{note.content}</p>
            </div>
            <div className="opacity-0 transition-opacity group-hover:opacity-100">
              <button onClick={startEdit} className="mr-1 rounded-lg bg-neutral-800 p-2 text-white/80 hover:bg-neutral-700">
                <Pencil size={16} />
              </button>
              <button onClick={() => onDelete(note.id)} className="rounded-lg bg-neutral-800 p-2 text-white/80 hover:bg-neutral-700">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const NotesPanel = () => {
  const initial = useMemo(
    () => [
      { id: '1', title: 'Welcome to your unified workspace', content: 'Use Notes to capture ideas, then upload PDFs to chat with them.' },
      { id: '2', title: 'Security first', content: 'Your content is isolated per account with Firebase Auth.' },
    ],
    []
  );

  const [notes, setNotes] = useState(initial);
  const [newNote, setNewNote] = useState({ title: '', content: '' });

  const addNote = () => {
    if (!newNote.title.trim()) return;
    const created = { id: Date.now().toString(), ...newNote };
    setNotes((prev) => [created, ...prev]);
    setNewNote({ title: '', content: '' });
  };

  const editNote = (updated) => {
    setNotes((prev) => prev.map((n) => (n.id === updated.id ? updated : n)));
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <section className="flex-1">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-white font-medium">Notes</h3>
        <span className="text-xs text-white/60">Local preview • API-ready UI</span>
      </div>

      <div className="mb-4 rounded-xl border border-white/10 bg-neutral-900/60 p-4">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <input
            placeholder="Note title"
            className="w-full rounded-lg bg-neutral-800/80 px-3 py-2 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-rose-500"
            value={newNote.title}
            onChange={(e) => setNewNote((d) => ({ ...d, title: e.target.value }))}
          />
          <div className="flex gap-3 md:col-span-1 md:justify-end">
            <input
              placeholder="Quick thought..."
              className="flex-1 rounded-lg bg-neutral-800/80 px-3 py-2 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-rose-500"
              value={newNote.content}
              onChange={(e) => setNewNote((d) => ({ ...d, content: e.target.value }))}
            />
            <button
              onClick={addNote}
              className="inline-flex items-center gap-2 rounded-lg bg-rose-500 px-3 py-2 text-sm font-medium text-white hover:bg-rose-600"
            >
              <Plus size={16} /> Add
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} onEdit={editNote} onDelete={deleteNote} />)
        )}
      </div>
    </section>
  );
};

export default NotesPanel;
