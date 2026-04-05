'use client';

import { useState, useId } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export function FAQ({ items, className = '' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className={`space-y-3 ${className}`} role="list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            key={index}
            role="listitem"
            className="border border-border rounded-xl overflow-hidden transition-colors hover:border-accent/20"
          >
            <button
              id={triggerId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer"
            >
              <span className="text-base md:text-lg font-medium text-foreground pr-4">
                {item.question}
              </span>
              <svg
                className={`w-5 h-5 text-accent shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="px-5 md:px-6 pb-5 md:pb-6 text-muted leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
