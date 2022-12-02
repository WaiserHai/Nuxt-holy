<template>
  <div class="py-5 flex max-w-screen-xl justify-between mx-auto w-full">
    <div class="video-wrapper">
      <video hover:active autoplay loop muted playsinline>
        <source
          src="~/assets/video/220202_02_Bible_2k_003.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <!-- This will be positioned on top of our video background -->
      <div class="header space-y-2">
        <span
          class="font-semibold bg-slate-50 text-blue-800 text-sm px-2.5 py-0.5 rounded"
          >Letze Versammlung</span
        >
        <h1>Der Seeligste Wunsch zu werden im Herrn</h1>
        <div class="space-x-2 space-y-2">
          <button
            class="text-white bg-orange-500 hover:bg-orange-600 transition duration-300 ease-in-out hover:-translate-x-0 hover:scale-105 rounded-md text-sm px-4 py-2"
            type="button"
          >
            <NuxtLink class="font-bold text-xl" to="/locked"
              >Hier Anschauen</NuxtLink
            >
          </button>
          <button
            class="text-white bg-blue-700 transition duration-300 ease-in-out hover:-translate-x-0 hover:scale-105 rounded-md text-sm px-4 py-2"
            type="button"
          >
            <NuxtLink class="font-bold text-xl" to="/locked"
              >Zum Archiv</NuxtLink
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
h1 {
  @apply font-bold text-3xl;
}

video {
  @apply object-cover absolute h-full w-full;
}

.header {
  @apply relative text-white  m-4;
}

.video-wrapper {
  @apply relative overflow-hidden flex items-end aspect-video h-[28rem] w-full rounded-2xl;
}
</style>
