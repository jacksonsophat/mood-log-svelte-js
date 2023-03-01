<script>
  import Icon from "@iconify/svelte";
</script>

<section id="ProfilePage">
  <div class="top-section flex justify-between">
    <div class="flex">
      <div class="avatar">
        <img class="w-20 mr-2" src="/images/anonymous-profile.png" alt="" />
      </div>
      <div>
        <p class="font-semibold mb-1">John Doe</p>
        <p class="text-sm text-gray text-gray-400 mb-1">johndoe</p>
        <small class="flex text-gray-400"
          ><Icon icon="uil:calender" height="14" /><span class="ml-1"
            >Joined July 2022</span
          ></small
        >
      </div>
    </div>
    <div>
      <form action="/account/auth/logout" method="POST">
        <button type="submit">Logout</button>
      </form>
      <a
        href="/account/settings"
        class="flex bg-secondary text-dark p-2 rounded"
      >
        <Icon icon="material-symbols:edit-outline-rounded" height="24" />
        <span class="pl-2 hidden md:block">Edit</span></a
      >
    </div>
  </div>
  <hr class="my-4" />
  <div class="grid grid-cols-2 gap-4">
    <div class="text-center bg-primary text-white py-2 rounded font-semibold">
      <p>Public Posts</p>
    </div>
    <div class="text-center bg-secondary text-dark py-2 rounded font-semibold">
      <p>Anonymous Posts</p>
    </div>
  </div>
</section>
