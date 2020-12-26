<template>
  <div>
    <nav class="bg-white shadow-lg">
      <div class="md:flex items-center justify-between pt-8 px-5 md:px-16">
        <div class="flex justify-between items-center">
          <div class="text-2xl font-serif font-bold text-gray-100 bg-gray-800 md:text-3xl px-4 ">
            <a href="#">Pensalud</a>
          </div>
          <div class="md:hidden">
            <button
              type="button"
              class="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
            >
              <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  class="hidden"
                  d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                />
                <path
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="flex flex-col md:flex-row hidden md:block -mx-2">
          <a
            href="#"
            class="text-gray-800 rounded hover:bg-brand-purple hover:text-gray-100 font-sans font-bold py-2 px-2 md:mx-2"
            >INICIO</a
          >
          <a
            href="#"
            class="text-gray-800 rounded hover:bg-brand-purple hover:text-gray-100 font-sans font-bold py-2 px-2 md:mx-2"
            >ACERCA DE MI</a
          >
          <a
            href="#"
            class="text-gray-800 rounded hover:bg-brand-purple hover:text-gray-100 font-sans font-bold py-2 px-2 md:mx-2"
            >BUSCAR ARTÍCULOS</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>