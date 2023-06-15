<script lang="ts">
import BaseWidget from "./BaseWidget";
export default BaseWidget;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* https://stackoverflow.com/questions/12675622/script1028-expected-identifier-string-or-number */
.icon-metrics {
    width: 17px;
    height: 17px;
    display: inline-block;
}

a {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: "Cairo", "Helvetica", Arial, sans-serif;
    vertical-align: top;
}
a {
    color: #222222;
    -webkit-transition: all 150ms linear;
    -moz-transition: all 150ms linear;
    -o-transition: all 150ms linear;
    -ms-transition: all 150ms linear;
    transition: all 150ms linear;
    text-decoration: none;
}
a:hover,
a:focus {
    color: #222222;
    text-decoration: none;
}
a:focus,
a:active {
    outline: 0;
}
a,
a:visited {
    text-decoration: none;
}
</style>
