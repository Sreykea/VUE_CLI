<template>
    <header>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">Help</a></li>
    </ul>
</header>
    
</template>

<script>
export default {

}
</script>

<style>
    header{
        background: pink;
        width: 100%;
        height: 10vh;
    }
    ul{
        display: flex;
    }
    li{
        display: block;
        margin-left: 20px;
        list-style: none;
        margin-top: 20px;
    }
    a{
        text-decoration: none;
    }
</style>