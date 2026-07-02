<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed } from 'vue'
import { profile } from './profile'

// Nav + rail stations are derived from the hobbies, then byday + contact.
const sections = computed(() => [
  { id: 'top', label: 'Intro' },
  ...profile.hobbies.map((h) => ({ id: h.id, label: h.title })),
  { id: 'byday', label: 'By day' },
  { id: 'contact', label: 'Contact' },
])

const active = ref('top')
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) if (e.isIntersecting) active.value = e.target.id
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
  )
  for (const s of sections.value) {
    const el = document.getElementById(s.id)
    if (el) observer.observe(el)
  }
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <a
    href="#top"
    class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-on-accent"
  >
    Skip to content
  </a>

  <!-- Top bar -->
  <header class="sticky top-0 z-40 border-b border-line bg-page/85 backdrop-blur">
    <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
      <a href="#top" class="font-display text-lg font-medium tracking-tight text-heading">
        {{ profile.name }}
      </a>
      <nav aria-label="Sections" class="hidden gap-6 sm:flex">
        <a
          v-for="s in sections.slice(1)"
          :key="s.id"
          :href="`#${s.id}`"
          class="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-heading"
          :class="{ 'text-accent hover:text-accent': active === s.id }"
        >
          {{ s.label }}
        </a>
      </nav>
    </div>
  </header>

  <!-- Left station rail (signature) -->
  <aside
    aria-hidden="true"
    class="pointer-events-none fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-6 lg:flex"
  >
    <a
      v-for="(s, i) in sections"
      :key="s.id"
      :href="`#${s.id}`"
      class="pointer-events-auto flex items-center gap-3"
    >
      <span class="font-mono text-[10px] tabular-nums text-faint">
        {{ String(i).padStart(2, '0') }}
      </span>
      <span
        class="h-px transition-all duration-300"
        :class="active === s.id ? 'w-8 bg-accent' : 'w-4 bg-line'"
      />
    </a>
  </aside>

  <main id="top" class="mx-auto max-w-5xl px-6">
    <!-- Hero -->
    <section class="scroll-mt-20 pb-16 pt-16 sm:pt-24">
      <p class="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        {{ profile.location }}
      </p>
      <h1
        class="mt-5 font-display text-5xl font-semibold uppercase leading-[1.02] tracking-tight text-heading sm:text-7xl"
      >
        {{ profile.name }}
      </h1>
      <div class="mt-4 h-1 w-24 bg-mustard"></div>
      <p class="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
        {{ profile.tagline }}
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <a
          :href="`#${profile.hobbies[0].id}`"
          class="rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-medium text-on-accent transition-colors hover:bg-accent-strong"
        >
          The good stuff
        </a>
        <a
          href="#contact"
          class="rounded-md border border-line px-5 py-2.5 font-mono text-sm text-fg transition-colors hover:bg-surface"
        >
          Say hello
        </a>
      </div>
    </section>

    <!-- Hobby sections (the focus) -->
    <section
      v-for="(h, i) in profile.hobbies"
      :id="h.id"
      :key="h.id"
      class="scroll-mt-20 border-t border-line py-16"
    >
      <div class="mb-2 flex items-baseline gap-3">
        <span class="font-mono text-xs text-faint">{{ String(i + 1).padStart(2, '0') }}</span>
        <span class="font-mono text-xs text-accent">{{ h.code }}</span>
        <h2 class="font-display text-3xl font-medium tracking-tight text-heading">
          {{ h.title }}
        </h2>
      </div>
      <div class="mb-8 h-[3px] w-12 bg-mustard"></div>

      <div class="grid gap-8 lg:grid-cols-[1fr_16rem]">
        <!-- Lead + entries -->
        <div>
          <p class="max-w-2xl text-lg leading-relaxed text-fg">{{ h.lead }}</p>
          <ul class="mt-6 flex flex-col gap-3">
            <li
              v-for="(entry, j) in h.entries"
              :key="j"
              class="border-l-2 border-accent/50 pl-4 text-muted"
            >
              {{ entry }}
            </li>
          </ul>
        </div>

        <!-- Meta panel -->
        <aside class="h-fit rounded-lg border border-line bg-surface p-5">
          <dl class="flex flex-col gap-3">
            <div v-for="m in h.meta" :key="m.label">
              <dt class="font-mono text-[11px] uppercase tracking-widest text-faint">
                {{ m.label }}
              </dt>
              <dd class="mt-0.5 text-fg">{{ m.value }}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>

    <!-- By day — deliberately slim -->
    <section id="byday" class="scroll-mt-20 border-t border-line py-12">
      <div class="flex items-baseline gap-3">
        <span class="font-mono text-xs uppercase tracking-widest text-faint">By day</span>
        <p class="max-w-xl text-muted">{{ profile.byDay.line }}</p>
      </div>
      <ul class="mt-5 flex flex-wrap gap-2">
        <li
          v-for="s in profile.byDay.skills"
          :key="s"
          class="rounded border border-line bg-surface px-2 py-0.5 font-mono text-xs text-muted"
        >
          {{ s }}
        </li>
      </ul>
    </section>

    <!-- Contact -->
    <section id="contact" class="scroll-mt-20 border-t border-line py-16">
      <div class="mb-8 flex items-baseline gap-3">
        <span class="font-mono text-xs text-faint">{{ String(profile.hobbies.length + 1).padStart(2, '0') }}</span>
        <h2 class="font-display text-2xl font-medium tracking-tight text-heading">
          Get in touch
        </h2>
      </div>
      <ul class="flex flex-col gap-3">
        <li v-for="l in profile.links" :key="l.label">
          <a :href="l.href" class="group flex items-baseline gap-4">
            <span class="w-24 shrink-0 font-mono text-xs uppercase tracking-widest text-faint">
              {{ l.label }}
            </span>
            <span class="text-fg underline-offset-4 transition-colors group-hover:text-accent group-hover:underline">
              {{ l.handle }}
            </span>
          </a>
        </li>
      </ul>
    </section>

    <footer class="border-t border-line py-8">
      <p class="font-mono text-xs text-faint">
        © {{ new Date().getFullYear() }} {{ profile.name }} · {{ profile.location }}
      </p>
    </footer>
  </main>
</template>
