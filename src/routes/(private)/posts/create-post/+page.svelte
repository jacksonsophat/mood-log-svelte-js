<script>
  import { Input } from "$lib/components";
  import { each } from "svelte/internal";

  let active = "";
  let selected = "";

  let moods = {
    happy: "Happy",
    sad: "Sad",
    fearful: "Fearful",
    disgusted: "Disgusted",
    angry: "Angry",
    surprised: "Surprised",
    positive: "Positive",
    neutral: "Neutral",
    negative: "Negative",
  };

  let postStatus = {
    publicly: "Publicly",
    anonymously: "Anonymously",
  };

  //   happy, sad, fearful, disgusted, angry, surprised, positive, neutral, negative;

  //  change body background color
  let bodyBgColor = "";
  $: {
    updateBodyBgColor(bodyBgColor);
  }
  function updateBodyBgColor(value) {
    console.log(value);
    // document.body.classList.add(`bg-${value}`);
  }
</script>

<section id="CreatePostPage">
  <div class="bg-white/70 rounded p-4 md:mt-8">
    <h1 class="text-lg text-center pb-2">Log New Mood:</h1>
    <hr class="pb-6" />
    <form action="?/createPost" method="POST">
      <div class="mb-3">
        <label for="mood" class="text-sm"
          ><span>How are you feeling?</span></label
        >
        <div
          class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6  mt-2 gap-2"
          id="SelectMood"
        >
          {#each Object.entries(moods) as [value, label]}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <label
              for={value}
              class="text-sm text-center bg-{value} rounded border cursor-pointer py-1"
              class:active={active === value}
              on:click={() => (active = value)}
              on:click={() => (bodyBgColor = value)}
              ><input
                type="radio"
                id={value}
                name="mood"
                {value}
                required
              />{label}</label
            >
          {/each}
        </div>
      </div>
      <div class="mb-3">
        <label for="content" class="text-sm">What's on your mind?</label><br />
        <textarea
          class="border rounded w-full mt-1 p-2 text-sm"
          name="content"
          id="content"
          rows="5"
        />
      </div>
      <div class="mb-3">
        <label for="post_status" class="text-sm"
          ><span>How are you feeling?</span></label
        >
        <div class="grid grid-cols-3 mt-2 gap-2" id="PostStatus">
          {#each Object.entries(postStatus) as [value, label]}
            <!-- <div class="text-center rounded border cursor-pointer"></div> -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <label
              for={value}
              class="text-sm text-center rounded border cursor-pointer py-1"
              class:selected={selected === value}
              on:click={() => (selected = value)}
              ><input
                type="radio"
                id={value}
                name="post_status"
                {value}
              />{label}</label
            >
          {/each}
        </div>
      </div>

      <!-- <p>What's on your mind?</p>
      <p>How would you like to share?</p> -->
      <div class="text-right mt-12">
        <button class="btn-primary-small px-4" type="submit">Log</button>
      </div>
    </form>
  </div>
</section>

<style>
  #SelectMood input[type="radio"],
  #PostStatus input[type="radio"] {
    /* visibility: hidden; */
    display: none;
  }
  button {
    padding-left: 2rem !important;
    padding-right: 2rem;
  }

  #PostStatus .selected {
    background-color: var(--dark);
    color: white;
    transition: all 0.25s ease-in-out;
  }

  #SelectMood .active {
    background-color: var(--dark);
    color: white;
    transition: all 0.25s ease-in-out;
  }
</style>
