<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed } from "vue";
import { profile } from "./profile";
import { ui } from "./styles";

// Nav + rail stations: intro, then byday, then the hobbies.
const sections = computed(() => [
  { id: "top", label: "Intro" },
  { id: "workstyle", label: profile.workStyle.title },
  { id: "byday", label: profile.byDay.title },
  ...profile.hobbies.map((h) => ({ id: h.id, label: h.title })),
]);

const active = ref("top");
const mobileNavOpen = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) if (e.isIntersecting) active.value = e.target.id;
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
  );
  for (const s of sections.value) {
    const el = document.getElementById(s.id);
    if (el) observer.observe(el);
  }
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-line bg-page/85 backdrop-blur lg:hidden"
  >
    <div class="mx-auto flex max-w-5xl items-center justify-end px-6 py-4">
      <button
        type="button"
        class="flex cursor-pointer items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted"
        :aria-expanded="mobileNavOpen"
        aria-controls="mobile-nav"
        @click="mobileNavOpen = !mobileNavOpen"
      >
        <span class="flex h-3 w-4 flex-col justify-between">
          <span
            class="h-px w-full bg-current transition-transform"
            :class="{ 'translate-y-1.25 rotate-45': mobileNavOpen }"
          />
          <span
            class="h-px w-full bg-current transition-opacity"
            :class="{ 'opacity-0': mobileNavOpen }"
          />
          <span
            class="h-px w-full bg-current transition-transform"
            :class="{ '-translate-y-1.25 -rotate-45': mobileNavOpen }"
          />
        </span>
      </button>
    </div>

    <nav
      v-if="mobileNavOpen"
      id="mobile-nav"
      aria-label="Sections"
      class="flex flex-col border-t border-line px-6 py-2"
    >
      <a
        v-for="s in sections.slice(1)"
        :key="s.id"
        :href="`#${s.id}`"
        class="border-b border-line/50 py-3 font-mono text-xs uppercase tracking-widest text-muted last:border-b-0"
        :class="{ 'text-accent': active === s.id }"
        @click="mobileNavOpen = false"
      >
        {{ s.label }}
      </a>
    </nav>
  </header>

  <!-- Left station rail: the primary desktop nav. Labels reveal on hover/focus. -->
  <nav
    aria-label="Sections"
    class="fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-6 lg:flex"
  >
    <a
      v-for="(s, i) in sections"
      :key="s.id"
      :href="`#${s.id}`"
      class="group -ml-2 flex items-center gap-3 rounded-full py-1.5 pl-2 pr-4 transition-colors duration-200 hover:bg-surface focus-visible:bg-surface"
    >
      <span class="font-mono text-[10px] tabular-nums text-faint">
        {{ String(i).padStart(2, "0") }}
      </span>
      <span
        class="h-px transition-all duration-300"
        :class="active === s.id ? 'w-8 bg-accent' : 'w-4 bg-line'"
      />
      <span
        class="whitespace-nowrap font-mono text-xs uppercase tracking-widest text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
        :class="{ 'text-accent': active === s.id }"
      >
        {{ s.label }}
      </span>
    </a>
  </nav>

  <main class="mx-auto max-w-5xl px-6">
    <!-- Hero -->
    <section id="top" class="scroll-mt-20 pb-16 pt-16 sm:pt-24">
      <h1
        class="mt-5 font-display text-5xl font-semibold uppercase leading-[1.02] tracking-tight text-heading sm:text-7xl"
      >
        {{ profile.name }}
      </h1>
      <p class="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        {{ profile.location }}
      </p>
      <div class="mt-4 h-1 w-24 bg-mustard"></div>
      <p class="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
        {{ profile.tagline }}
      </p>
    </section>

    <!-- How I like to work -->
    <section id="workstyle" :class="[ui.sectionBase, 'py-16']">
      <div class="mb-2 flex items-baseline gap-3">
        <h2 :class="[ui.sectionHeading, 'text-3xl']">
          {{ profile.workStyle.title }}
        </h2>
      </div>
      <div class="mb-8 h-[3px] w-8 bg-mustard"></div>

      <ul class="flex flex-col gap-3">
        <li
          v-for="(w, j) in profile.workStyle.items"
          :key="j"
          class="border-l-2 border-accent/50 pl-4 text-muted"
        >
          {{ w }}
        </li>
      </ul>
    </section>

    <!-- By day -->
    <section id="byday" :class="[ui.sectionBase, 'py-16']">
      <div class="mb-2 flex items-baseline gap-3">
        <h2 :class="[ui.sectionHeading, 'text-3xl']">
          {{ profile.byDay.title }}
        </h2>
      </div>
      <div class="mb-8 h-[3px] w-8 bg-mustard"></div>

      <div class="grid gap-8 lg:grid-cols-[1fr_16rem]">
        <div>
          <p class="max-w-2xl text-lg leading-relaxed text-fg">
            {{ profile.byDay.line }}
          </p>
          <ul class="mt-6 flex flex-col gap-3">
            <li
              v-for="(p, j) in profile.byDay.projects"
              :key="j"
              class="border-l-2 border-accent/50 pl-4 text-muted"
            >
              {{ p }}
            </li>
          </ul>
        </div>
        <aside class="h-fit rounded-lg border border-line bg-surface p-5">
          <p :class="ui.kickerLabel">Pagrindiniai įgūdžiai</p>
          <ul class="mt-3 flex flex-wrap gap-2">
            <li
              v-for="s in profile.byDay.skills"
              :key="s"
              class="rounded border border-line bg-page px-2 py-0.5 font-mono text-xs text-muted"
            >
              {{ s }}
            </li>
          </ul>
        </aside>
      </div>
    </section>

    <!-- Hobby sections (the focus) -->
    <p class="pt-16" :class="ui.kickerLabel">Pomėgiai</p>
    <section
      v-for="h in profile.hobbies"
      :id="h.id"
      :key="h.id"
      :class="[ui.sectionBase, 'py-16']"
    >
      <div class="mb-2 flex items-baseline gap-3">
        <span class="font-mono text-xs text-accent">{{ h.code }}</span>
        <h2 :class="[ui.sectionHeading, 'text-3xl']">
          {{ h.title }}
        </h2>
      </div>
      <div class="mb-8 h-[3px] w-8 bg-mustard"></div>

      <img
        v-if="h.image"
        :src="h.image"
        alt=""
        class="mb-8 aspect-12/5 w-full rounded-lg border border-line object-cover"
      />

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
              <dt
                class="font-mono text-[11px] uppercase tracking-widest text-faint"
              >
                {{ m.label }}
              </dt>
              <dd class="mt-0.5 text-fg">{{ m.value }}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>

    <footer class="border-t border-line py-8">
      <p class="font-mono text-xs text-faint">
        © {{ new Date().getFullYear() }} {{ profile.name }} ·
        {{ profile.location }}
      </p>
    </footer>
  </main>
</template>
