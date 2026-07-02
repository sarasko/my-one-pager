// Reusable Tailwind class groups shared across App.vue sections.
// Keeps repeated combos (section wrappers, headings, badges, buttons) in
// one place so template markup stays readable and edits stay in sync.

export const ui = {
  sectionBase: 'scroll-mt-20 border-t border-line',
  sectionHeading: 'font-display font-medium tracking-tight text-heading',
  sectionIndex: 'font-mono text-xs text-faint',
  kickerLabel: 'font-mono text-xs uppercase tracking-widest text-faint',
  btnBase: 'rounded-md px-5 py-2.5 font-mono text-sm transition-colors',
}
