<script>
  import Icon from "@iconify/svelte";
  import Time from "svelte-time";
  import { getImageURL } from "$lib/utils";

  export let data;

  const { publicPosts } = data;
  const { anonymousPosts } = data;

  // Array.prototype.push.apply(publicPosts, anonymousPosts);
  // posts.push(anonymousPosts);
  let posts = [...publicPosts, ...anonymousPosts];
  // console.log(typeof publicPosts);

  console.log(posts);

  // function reportPost() {
  //   console.log("Click");
  //   let report = this.querySelector("#MoreOption");
  //   report.classList.add("active");
  //   report.style.display = "block";
  //   console.log(report);
  // }
</script>

<section>
  <div id="all-posts relative z-0">
    {#await posts}
      Loading...
    {:then value}
      {#each posts as post}
        <!-- Each Card -->
        <div class="each-card bg-white p-2 rounded border mb-2">
          <!-- Card Header -->
          <div class="card-header flex justify-between">
            <div class="flex">
              <img
                src={post?.expand?.user?.avatar
                  ? getImageURL(
                      post.expand.user?.collectionId,
                      post.expand.user?.id,
                      post.expand.user?.avatar
                    )
                  : "/images/anonymous-profile.png"}
                class="w-8 h-8 md:w-10 md:h-10 mr-2 rounded"
                alt="username"
              />

              <div class="leading-3">
                <p class="text-sm pb-0">
                  {post.expand?.user?.name
                    ? post.expand.user.name
                    : "Anonymous"}
                </p>
                <small class="text-gray-400"
                  >@{post.expand?.user?.username
                    ? post.expand.user.username
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
            <div class="flex justify-between text-gray-400 items-center">
              <div class="flex">
                <Icon icon="material-symbols:calendar-month-outline" />
                <!-- <small class="ml-1">{post.created}</small> -->
                <small class="ml-1"
                  ><Time relative timestamp={post.created} /></small
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
    {:catch error}
      <p>Not Working</p>
    {/await}
  </div>
</section>

<style lang="scss">
  .each-card {
    position: relative;
    .more-option {
      div {
        display: none;
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: white;
        a {
          display: flex;
          align-items: center;
        }
      }
    }
  }
</style>
