<template>
    <div>
         <header class="container header active" id="home">
        <div class="header-content">
            <div class="left-header">
                <div class="h-shape"></div>
                <div class="image">
                    <img :src="hero" alt="">
                </div>
            </div>
            <div class="right-header">
                <h1 class="name">
                    Hi, I'm <span>Rahul Sonawane.</span>
                    A Web Developer.
                </h1>
                <p>
                    I'm a Web Developer, I love to create beautiful and functional websites.
                             </p>
                <div class="btn-con">
                    <a href="" class="main-btn">
                        <span class="btn-text">Download CV</span>
                        <span class="btn-icon"><i class="fas fa-download"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </header>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // path: require("@/assets/img/"),
 hero: require("@/assets/img/hero.png"),
        }
    },
}
</script>