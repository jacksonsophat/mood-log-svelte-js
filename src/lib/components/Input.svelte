<script>
  export let value = "";
  export let placeholder = "";
  export let id;
  export let label;
  export let type = "text";
  export let disabled = false;
  export let required = false;
</script>

<div class="mb-2">
  <label for={id} class="text-sm"> <span>{label}</span></label>
  <input
    {type}
    {placeholder}
    {required}
    {disabled}
    {id}
    name={id}
    {value}
    class="border w-full mt-1 rounded px-2 py-2 "
  />
</div>
