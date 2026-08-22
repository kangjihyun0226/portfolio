import { motion } from "framer-motion";

export default function Timeline({ icon: Icon, heading, items }) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-2 text-ink">
        {Icon && <Icon size={18} className="text-primary" />}
        <h3 className="font-display text-lg font-bold">{heading}</h3>
      </div>
      <ol className="space-y-8 border-l border-ink/10 pl-6">
        {items.map((item, i) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <span
              className={`absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full ${
                item.active ? "bg-primary" : "bg-ink/20"
              }`}
            />
            <p className="font-display text-base font-semibold text-ink">{item.title}</p>
            {item.org && <p className="text-sm text-primary">{item.org}</p>}
            {item.text && <p className="mt-1 text-sm text-ink-soft">{item.text}</p>}
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
