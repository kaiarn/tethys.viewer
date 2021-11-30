<template>
    <div class="container">
        <section class="section">
            <div class="column is-full text-center">
                <!-- <h1>TETHYS SERVICES</h1> -->
                <p class="lead">Want to keep updated or need further information?</p>
                <hr class="center-line" />
            </div>
            <div class="column is-half contact-us-details" style="padding-top: 0; margin-top: 0">
                <h3>Our Location</h3>
                <h5>
                    Geologische Bundesanstalt <br />
                    Neulinggasse 38 <br />
                    1030 Wien <br />
                    <!-- <i class="fas fa-mobile-alt"></i> +43-1-7125674 <br />
                    <i class="fas fa-envelope-open-text"></i>
                    <a class="social-media" href="mailto:repository@geologie.ac.at"> repository@geologie.ac.at</a><br /> -->
                </h5>
                <ul class="social-links">
                    <li><i class="fas fa-phone-alt pr-2"></i> +43-1-7125674 <br /></li>
                    <li>
                        <a class="social-media" href="mailto:repository@geologie.ac.at"><i class="fas fa-envelope pr-2"></i> repository(at)geologie.ac.at </a>
                    </li>
                    <li>
                        <a class="social-media" href="https://twitter.com/GeologischeBA" target="_blank"> <i class="fab fa-twitter"></i> twitter.com/GeologischeBA </a>
                    </li>
                    <li>
                        <a class="social-media" href="https://www.facebook.com/geologie.ac.at" target="_blank"> <i class="fab fa-facebook"></i> www.facebook.com/geologie.ac.at </a>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import ContactViewComponent from "./contact-view-component";
export default ContactViewComponent;
</script>

<style scoped lang="scss">
@import "./contact-view-component.scss";
</style>
