<template>
  <div>
    <header>
      <nav class="bg-white shadow-lg">
        <div class="flex w-8/12 mx-auto items-center">
          <div
            class="flex justify-start lg:w-0 lg:flex-1 text-xl font-semibold"
          >
            <NuxtLink to="/">Site name here</NuxtLink>
          </div>
          <ul>
            <li
              class="flex flex-col gap-5 mb-5 md:mb-0 mt-5 md:flex-row md:items-center md:justify-end sm:mt-0 md:pl-5"
            >
              <NuxtLink class="navElement" to="/">Home</NuxtLink>
              <NuxtLink class="navElement" to="/about">About</NuxtLink>
              <NuxtLink class="navElement" to="/1-test">1-test</NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<style scoped>
.navElement:not([aria-current="page"]) {
  @apply font-bold block py-2 pr-4 pl-3 dark:text-gray-400 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent;
}

.navElement[aria-current="page"] {
  @apply font-bold block py-2 pr-4 pl-3 text-black rounded md:bg-transparent text-blue-500 md:p-0 dark:text-black;
}
</style>
