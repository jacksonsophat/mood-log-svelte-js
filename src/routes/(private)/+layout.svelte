<script>
  import "../../app.css";
  export let data;
  import { getImageURL } from "$lib/utils";
  // import { Header } from "$lib/components";
  // console.log(data);
  // import "iconify-icon";
  import Icon from "@iconify/svelte";
  import Header from "$lib/components/Header.svelte";
</script>

<!-- <div>
  <header />
</div> -->

<main class="grid grid-cols-12 gap-4 container pt-4">
  <Header
    src={data?.user?.avatar
      ? getImageURL(data.user.collectionId, data.user?.id, data.user?.avatar)
      : "/images/anonymous-profile.png"}
  />
  <div class="col-span-12 md:col-span-10 ">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 md:col-span-8">
        <slot />
      </div>
      <!-- Announcement -->
      <div class="col-span-4 bg-pink-400 hidden md:block">
        <p>Announcement</p>
      </div>
    </div>
  </div>
  <!-- Body -->
  <!-- content -->
</main>
