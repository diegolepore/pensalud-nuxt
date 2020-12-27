<template>
  <div>
    <div class="wrapper bg-white mx-auto mt-4 md:mt-6">
      <Nav/>
    </div>
    <div class="wrapper bg-white mx-auto px-5 pb-5 md:px-12 md:pb-16">
      <Nuxt />
    </div>
    <footer class="w-full bg-indigo-600">
      <div class="wrapper mx-auto h-20 flex justify-between py-5 items-center">
        <div class="text-white flex flex-col flex-grow-0">
          <div class="text-lg inline-block font-serif font-bold text-gray-100 bg-gray-800 md:text-3xl px-6 ">
            <a href="#">Pensalud</a>
          </div>
          <div class="nav__logo-name inline-block text-xs font-sans font-bold text-gray-100 bg-brand-purple px-4">
            <a href="#">Dra. Diana Rodríguez</a>
          </div>
        </div>
        <div class="text-white">Social</div>
      </div>
    </footer>
  </div>
</template>

<style>
</style>
