import React, { useRef, useState } from 'react';
import { UploadCloud, FileText, Loader2 } from 'lucide-react';

const QuickActions = () => {
  const fileRef = useRef(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const onPick = () => fileRef.current?.click();

  const onFileChange = (e) => {
    const f = e.target.files?.[0];
    setFile(f || null);
  };

  const onUpload = async () => {
    if (!file) return;
    setLoading(true);
    // UI-only preview; hook this to your API when backend is ready
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <section className="w-full rounded-2xl border border-white/10 bg-neutral-900/60 p-4 text-white">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <UploadCloud size={18} />
          <h3 className="font-medium">Quick Actions</h3>
        </div>
        <span className="text-xs text-white/60">PDF Upload</span>
      </div>

      <div className="rounded-xl border border-dashed border-white/15 bg-neutral-950/40 p-4">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <div className="flex items-center gap-2 text-white/80">
            <FileText size={18} />
            <span className="text-sm">Drop a PDF here or browse</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onPick}
              className="rounded-lg bg-neutral-800 px-3 py-2 text-sm text-white/90 hover:bg-neutral-700"
            >
              Browse
            </button>
            <button
              onClick={onUpload}
              disabled={!file || loading}
              className="inline-flex items-center gap-2 rounded-lg bg-rose-500 px-3 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-60 hover:bg-rose-600"
            >
              {loading ? <Loader2 className="animate-spin" size={16} /> : <UploadCloud size={16} />}
              {loading ? 'Uploading…' : file ? 'Upload PDF' : 'Select a PDF'}
            </button>
          </div>
          <input
            ref={fileRef}
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={onFileChange}
          />
          {file && (
            <p className="text-xs text-white/60">Selected: {file.name}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
