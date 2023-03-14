<script>
  import Icon from "@iconify/svelte";
  // import { getImageURL } from "$lib/utils";
  // let avatar = "";
  export let src = "";
  export let username = "";
</script>

<!-- Full Screen -->
<header class="col-span-12 md:col-span-2 px-4 z-50 relative" id="HeaderScreen">
  <div class="md:hidden">
    <a href="/" class="mb-2">
      <img src="/images/mood-log-logo.png" class="w-20 m-auto bg-nude" alt="" />
    </a>
  </div>

  <div class="hidden md:block w-full">
    <div class=" md:w-[100px] xl:w-[150px] fixed">
      <a href="/">
        <img src="/images/mood-log-logo.png" class="w-32 mb-10" alt="" />
      </a>
      <nav class="nav-screen">
        <a href="/" class="flex items-center mb-6 p-2 rounded"
          ><Icon icon="material-symbols:home-outline-rounded" height="24" />
          <span class="pl-2 text-lg font-semibold hidden lg:block">Home</span>
        </a>
        <a href="/" class="flex items-center mb-6 p-2 rounded"
          ><Icon icon="material-symbols:search-rounded" height="24" />
          <span class="pl-2 text-lg font-semibold hidden lg:block">Explore</span
          >
        </a>
        <a
          href="/account/profile/{username}"
          class="flex items-center mb-6 p-2 rounded"
        >
          <img
            {src}
            id="avatar"
            alt="user avatar"
            class="rounded w-6 h-6 object-cover"
          />
          <span class="pl-2 text-lg font-semibold hidden lg:block">Profile</span
          >
        </a>
        <div
          class="text-center bg-primary block rounded font-semibold text-white "
        >
          <a href="/posts/create-post" class="flex justify-center py-3 "
            ><Icon
              icon="material-symbols:add-box-outline-rounded"
              height="24"
            /><span class="ml-2 hidden lg:block">Log</span></a
          >
        </div>
      </nav>
    </div>
  </div>
</header>

<!-- Mobile -->
<header
  class="md:hidden fixed bottom-0 left-0 bg-nude py-2 flex justify-around w-screen border-t nav-mb z-50"
>
  <a href="/"
    ><Icon icon="material-symbols:home-outline-rounded" height="24" /></a
  >
  <a href="/"><Icon icon="material-symbols:search-rounded" height="24" /></a>
  <a href="/posts/create-post"
    ><Icon icon="material-symbols:add-box-outline-rounded" height="24" /></a
  >
  <a href="/account/profile/{username}">
    <img {src} alt="anonymous-profile" class="w-6 h-6 rounded" />
  </a>
</header>

<style lang="scss">
  .nav-screen {
    a:not(:last-child) {
      transition: all 0.25s ease-in-out;
      &:hover {
        background-color: #d1fae5;
      }
    }
  }

  .nav-mb {
    a {
      padding: 0.25rem;
      border-radius: 0.25rem;
      transition: all 0.25s ease-in-out;
      &:hover {
        background-color: #d1fae5;
      }
    }
  }
</style>
