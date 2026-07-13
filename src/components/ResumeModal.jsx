import { motion } from "framer-motion";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/80
        backdrop-blur-sm
        flex
        items-center
        justify-center
        z-[999]
        p-4
      "
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="
          bg-slate-900
          rounded-3xl
          w-full
          max-w-6xl
          h-[90vh]
          overflow-hidden
          border
          border-white/10
        "
      >
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <h2 className="text-xl font-bold">
            Resume Preview
          </h2>

          <button
            onClick={onClose}
            className="
              px-4
              py-2
              rounded-xl
              bg-red-500
              hover:bg-red-600
            "
          >
            Close
          </button>
        </div>

        <iframe
          src="/resume.pdf"
          title="Resume"
          width="100%"
          height="100%"
        />
      </motion.div>
    </div>
  );
}