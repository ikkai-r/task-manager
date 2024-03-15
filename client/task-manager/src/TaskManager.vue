<script>
</script>

<template>
  <div class="flex flex-col items-center mt-52 w-[40%] h-full">
      <div class="w-full">

        <p class="text-5xl font-semibold text-neutral-100">
          Task Manager
      </p>
      <div class="pt-10 flex gap-4">
          <input class="rounded bg-neutral-400 border w-full py-2 px-3 text-neutral-100 leading-tight focus:outline-none focus:shadow-outline" id="task" type="text" placeholder="Task Name">
          <select 
            id="status" 
            class="rounded bg-neutral-400 border py-2 px-3 text-neutral-100 leading-tight focus:outline-none focus:shadow-outline">
            <option selected="to-start">Not Started</option>
            <option value="in-prog">In Progress</option>
            <option value="comp">Completed</option>
          </select>
          <button type="submit" class="hover:bg-primary-100 rounded bg-primary-70 px-3 py-2 text-neutral-100">Add</button>
        </div>
        
      <div class="pt-10 flex items-center">
          <div class="w-full bg-neutral-400 py-4 px-5 text-neutral-100 flex justify-between items-center h-full">
            <div class="flex items-center w-full">
              <p>
                Task A
              </p>
            </div>
              <div class="flex items-center  gap-3 ">
                <select 
                id="status" 
                class="rounded bg-neutral-400 py-2 px-3 text-neutral-100 leading-tight">
                <option selected="to-start">Not Started</option>
                <option value="in-prog">In Progress</option>
                <option value="comp">Completed</option>
              </select>
                <button type="submit" class="bg-neutral-400 font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="23" viewBox="0 0 24 24">
                  <path fill="#ef233c" d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
              </svg>
              </button>
              </div>

          </div>
        </div>
      </div>
  </div>
</template>

<style>

</style>