<script setup>
const route = useRoute();
const router = useRouter();

const devRootPort = "http://localhost:3000";
const { data: posts } = await useAsyncData(`main`, async () => {
  return $fetch(`${devRootPort}/data/indexSimple.json`);
});

watch(() => route.fullPath, (newFullPath, oldFullPath) => {
  console.log(`Route changed from ${oldFullPath} to ${newFullPath}`);
});
</script>

<template>
  <div class="main max-w-7xl">
    <div
      class="navbar fixed top-0 bg-base-100 min-h-5 h-12 border border-b-grey-500 z-50 max-w-7xl"
    >
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
        <a class="btn btn-ghost text-xl pl-0">daisyUI</a>
      </div>
      <!-- <div class="navbar-center"></div> -->
      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span class="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
    <!-- <ul
      class="menu menu-horizontal p-0 pl-1 bg-base-200 rounded-btn flex mt-14 h-9 items-center m-3 box-border flex-nowrap overflow-auto no-scrollbar text-xs md:justify-center"
    >
      <li><a class="active px-2 py-0.5 mx-0.5 md:px-5"> All </a></li>
      <li><a class="px-2 py-0.5 mx-0.5 md:px-5"> Discover </a></li>
      <li><a class="px-2 py-0.5 mx-0.5 md:px-5"> Food </a></li>
      <li><a class="px-2 py-0.5 mx-0.5 md:px-5"> Apparel </a></li>
      <li><a class="px-2 py-0.5 mx-0.5 md:px-5"> Grocery </a></li>
      <li><a class="px-2 py-0.5 mx-0.5 md:px-5"> Shopping </a></li>
      <li><a class="px-2 py-0.5 mx-0.5 md:px-5"> Experience </a></li>
    </ul> -->

    <h1>Blog posts</h1>
    <button class="btn w-64 rounded-full">Button</button>
    <button class="btn w-64 rounded-full">Button</button>
    <button class="btn w-64 rounded-full">Button</button>


    <article v-for="post in posts.slice(0, 5)" :key="post.id">
      <header>
        <strong> {{ post.name }}</strong>
      </header>
      <p>{{ post.body }}</p>
      <NuxtLink class="link" :to="`/posts/post-${post.id}`">Read more</NuxtLink>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.main {
}

.link {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
</style>