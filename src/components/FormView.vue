<template>
  <form action="">
        <div>
            <input type="text" placeholder="first name">
        </div>
        <div>
            <input type="text" placeholder="last name">
        </div>
        <div>
            <input type="text" placeholder="comment">
        </div>
        <button>Add</button>
    </form>
</template>

<script>
export default {

}
</script>

<style>
    form{
        /* margin: auto; */
        padding: auto;
        height: 40vh;
        margin-top: 20px;
        border-radius: 4px;
        box-shadow: rgba(30, 30, 212, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
    button{
        width: 96%;
        height: 5vh;
        margin-top: 26px;
        margin-left: 7px;

    }
    input{
        width: 94%;
        height: 5vh;
        margin-top: 22px;
        margin-left: 7px;
    }
</style>