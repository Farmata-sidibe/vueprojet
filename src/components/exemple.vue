<template>
  <div>

  <div class="form-row align-items-center">
    <div class="col-auto my-1">
      <select id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    
  </div>

  </div>
</template>

<script>
  export default {
  
}

</script>

<style scoped>
.col-auto {
    flex: 0 0 auto;
    width: 36%;
    max-width: 100%;
}

#inlineFormCustomSelect {
    width: 38%;
    height: 32px;
    font-size: 17px;
     border: none;
    border-radius: 9px;
    border-left: 5px solid #3a2b3b;
    background: lightgray;
    box-shadow: 2px 2px 2px #1f1220;
    outline: none;
  
}
</style>