<script>
  import Icon from "@iconify/svelte";
  import { getImageURL } from "$lib/utils";
  import Time, { svelteTime } from "svelte-time";

  export let data;
  console.log(data);

  let posts = data.posts;
  let profile = data.profile;
  let isUserProfile = false;
  let currentTab = "public";

  if (data.user.id == profile.id) {
    isUserProfile = true;
  }

  function activeTab() {
    console.log("active tab");
  }

  console.log(isUserProfile);

  let publicPosts = posts.filter(function (el) {
    return el.post_status == "publicly";
  });

  let anonymousPosts = posts.filter(function (el) {
    return el.post_status == "anonymously";
  });

  // post_status == "publicly"
  // let anonymousPosts =;

  // console.log(data.posts);
  // console.log(posts);
  console.log(profile);

  // Get profile image

  let profileImage = "/images/anonymous-profile.png";
  if (profile.avatar) {
    profileImage = getImageURL(
      profile.collectionId,
      profile.id,
      profile.avatar
    );
  }
  // console.log(publicPosts);
</script>

<section id="ProfilePage">
  <!-- Profile Section -->
  <div class="top-section flex justify-between">
    <div class="flex">
      <div class="avatar">
        <img
          class="w-20 h-20 rounded mr-2"
          src={profile?.avatar
            ? getImageURL(profile.collectionId, profile.id, profile.avatar)
            : "/images/anonymous-profile.png"}
          alt={profile?.username}
        />
      </div>
      <div>
        <p class="font-semibold mb-1">
          {isUserProfile ? data.user.name : profile.name}
        </p>
        <p class="text-sm text-gray text-gray-400 mb-1 lowercase">
          @{isUserProfile ? data.user.username : profile.username}
        </p>
        <small class="flex text-gray-400"
          ><Icon icon="uil:calender" height="14" /><span class="ml-1"
            ><Time
              timestamp={isUserProfile ? data.user.created : profile.created}
            /></span
          ></small
        >
      </div>
    </div>
    <!-- Log out and settings buttons -->
    {#if isUserProfile}
      <div>
        <form action="/account/auth/logout" method="POST" class="mb-1">
          <button type="submit" class="flex items-center btn-secondary-small"
            ><Icon icon="material-symbols:logout-rounded" /><span
              class="ml-1 hidden md:block">Logout</span
            ></button
          >
        </form>
        <a
          href="/account/settings"
          class="flex btn-secondary-small items-center"
        >
          <Icon icon="material-symbols:edit-outline-rounded" />
          <span class="pl-2 hidden md:block">Edit</span></a
        >
      </div>
    {:else}
      <a href="/">
        <Icon icon="material-symbols:flag-outline-rounded" />
        <span>Report</span></a
      >
    {/if}
  </div>
  <!-- End Profile Section -->

  <hr class="my-4" />
  {#if isUserProfile}
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div
        on:click={() => (currentTab = "public")}
        class="cursor-pointer btn-{currentTab == 'public'
          ? 'primary'
          : 'secondary'} text-center"
      >
        <p>Public Posts</p>
      </div>
      <div
        on:click={() => (currentTab = "anonymous")}
        class="cursor-pointer btn-{currentTab == 'anonymous'
          ? 'primary'
          : 'secondary'} text-center"
      >
        <p>Anonymous Posts</p>
      </div>
    </div>

    <!-- Posts -->
    <div id="AllPosts">
      <!-- Public Posts -->
      <div>
        {#if posts.length === 0}
          <div class="text-center">
            <p>You don't have any posts.</p>
            <a href="/posts/create-post" class="btn-primary-small"
              >Log a mood!</a
            >
          </div>
        {:else}
          {#if currentTab == "public"}
            <div id="PublicPosts">
              {#each publicPosts as post}
                <!-- Each Card -->
                <div class="each-card bg-white p-2 rounded border mb-2">
                  <!-- Card Header -->
                  <div class="card-header flex justify-between">
                    <div class="flex">
                      <img
                        src={profile?.avatar
                          ? getImageURL(
                              profile.collectionId,
                              profile.id,
                              profile.avatar
                            )
                          : "/images/anonymous-profile.png"}
                        class="w-8 h-8 md:w-10 md:h-10 mr-2 rounded"
                        alt="username"
                      />

                      <div class="leading-3">
                        <p class="text-sm pb-0">
                          {profile?.name ? profile.name : "Anonymous"}
                        </p>
                        <small class="text-gray-400"
                          >@{profile?.username
                            ? profile.username
                            : "anonymous"}</small
                        >
                      </div>
                    </div>
                    <div class="text-gray-400 ">
                      <a href="/" class="text-sm"
                        ><Icon icon="material-symbols:flag-outline-rounded" />
                      </a>
                    </div>
                  </div>
                  <!-- Card Body -->
                  <div class="card-body py-2">
                    <p>{post.content}</p>
                  </div>

                  <!-- Card Footer -->
                  <div class="card-footer border-t pt-2">
                    <div
                      class="flex justify-between text-gray-400 items-center"
                    >
                      <div class="flex">
                        <Icon icon="material-symbols:calendar-month-outline" />
                        <!-- <small class="ml-1">{post.created}</small> -->
                        <small class="ml-1"
                          ><Time
                            timestamp={post.created}
                            format="MMMM D, YYYY - h:mm A"
                          /></small
                        >
                      </div>
                      <div>
                        <small class="bg-{post.mood} px-2 py-1 rounded "
                          >{post.mood}</small
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Each Card -->
              {/each}
            </div>
          {:else if currentTab == "anonymous"}
            <div id="AnonymousPosts">
              <!-- Anonymous Posts -->
              {#each anonymousPosts as post}
                <!-- Each Card -->
                <div class="each-card bg-white p-2 rounded border mb-2">
                  <!-- Card Header -->
                  <div class="card-header flex justify-between">
                    <div class="flex">
                      <img
                        src="/images/anonymous-profile.png"
                        class="w-8 h-8 md:w-10 md:h-10 mr-2 rounded"
                        alt="username"
                      />

                      <div class="leading-3">
                        <p class="text-sm pb-0">Anonymous</p>
                        <small class="text-gray-400">@anonymous</small>
                      </div>
                    </div>
                    <div class="text-gray-400 ">
                      <a href="/" class="text-sm"
                        ><Icon icon="material-symbols:flag-outline-rounded" />
                      </a>
                    </div>
                  </div>
                  <!-- Card Body -->
                  <div class="card-body py-2">
                    <p>{post.content}</p>
                  </div>

                  <!-- Card Footer -->
                  <div class="card-footer border-t pt-2">
                    <div
                      class="flex justify-between text-gray-400 items-center"
                    >
                      <div class="flex">
                        <Icon icon="material-symbols:calendar-month-outline" />
                        <!-- <small class="ml-1">{post.created}</small> -->
                        <small class="ml-1"
                          ><Time
                            timestamp={post.created}
                            format="MMMM D, YYYY - h:mm A"
                          /></small
                        >
                      </div>
                      <div>
                        <small class="bg-{post.mood} px-2 py-1 rounded "
                          >{post.mood}</small
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Each Card -->
              {/each}
            </div>
          {/if}
          <!-- End of posts -->
        {/if}
      </div>
    </div>

    <!-- end if isUserProfile -->
  {/if}
</section>
