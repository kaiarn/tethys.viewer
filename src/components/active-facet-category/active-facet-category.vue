<template>
    <div>
        <input v-bind:id="alias" v-bind:name="alias" type="checkbox" checked="checked" class="css-checkbox" @click.prevent="deactivateFacetCategory()" />
        <label v-bind:for="alias" class="css-label">
            <span>{{ alias + ": " }}</span>
            <a v-if="filterItems && filterItems.length > 0" class="gbaterm">{{ filterItems.join(", ") }}</a>
        </label>
    </div>
</template>

<script lang="ts">
import ActiveFacetCategory from "./ActiveFacetCategory";
export default ActiveFacetCategory;
</script>

<style lang="scss" scoped>
th,
td {
    border-bottom: 0px solid #e1e1e1;
}
.gbaterm {
    color: #0099cc;
    border: 1px solid rgb(200, 210, 255);
    padding: 4px;
    background: rgb(220, 225, 255);
    /* display: inline-block; */
    margin: 1px 0 1px 0;
    border-radius: 2px;
}

/* -------------------------------------
CSS for Checkbox Type-1
---------------------------------------- */
input[type="checkbox"].css-checkbox {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    padding: 0;
    border: 0;
}

input[type="checkbox"].css-checkbox + label.css-label {
    padding-left: 25px;
    /* height: 24px;
    display: inline-block; */
    line-height: 30px;
    background-repeat: no-repeat;
    font-size: 12px;
    font-weight: bold;
    vertical-align: middle;
    cursor: pointer;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAn1BMVEXMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzJycnLy8v////c3Nzn5+fp6en8/PzNzc3KysrOzs7l5eXGxsbR0dHa2trg4ODz8/PMzMzX19fw8PDd3d3m5ubu7u7y8vL7+/v09PTb29vk5OTY2NiyHSPoAAAAGXRSTlP0yb3mvngEyOd/6BbFrZrAlcoXt/Hp89A1KxYHDAAAAJBJREFUGNN1kEcOwzAMBJnee6Wo6p5e//+2BJIdCAq8lx3MgSAJ3cG44aU3HUHnEGQC7ZIYYw6GpTLvosiNxT40beOZSKDFVqU40cVTBjHJiOIE0TjFjpxnguiafVtbZW70yz1ioVJOsVxKcSJ6CClj/Tce65eoUU+lXpWauWN1mkaONjAPP7GA5WoNXra7/Qf12yWALFrgcgAAAABJRU5ErkJggg==");
}

input[type="checkbox"].css-checkbox:checked + label.css-label {
    color: black;
    /* opacity: 1; */
    cursor: pointer;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAABGlBMVEUAmcwAmcwAmcwAmcwAmcwAmcwAmcwAmcwAmcwAmcwAmcwAmcwAmcwAmcwAmcwAmcwAmcwAmcwAmcwAmcwAmcwAmcwAmcwAmcz///8AmcwAl8sAmMsAmMwAlssAlcoAk8kAlsoAlMkMm80NnM0OnM4Pnc4Sns4SoNAAkskDl8sEl8sFmcwGm80AksgAkccAkch1x+R6yeV7yuWAzOaCzeZzx+MClssTns8Tn88TodAfpdIwq9VFtNlGtdpItdpKttpNt9tXvN5yx+ODzeaHz+eN0uiQ0+mX1uqY1uqd2Oui2u2w4O+x4O+04fC65PG75PHA5vPC5/PK6vTK6vXl9frm9frw+fzy+vz1+/33/P74/P78/v79/v8Cl8vxGPkTAAAAGHRSTlMCEB0+cHKNm6W5vL2+wMPP2ubn6On4+vtKR3RrAAAAy0lEQVR4Xl3M5XLDMBSEUSXlJinDXpEdZk6ZmZnp/V8jVxO7k/H3Yz1zJFmIsanEUNPjMTFKkSZFIkqLIsmrjdH8MVLxLrhbOt07SWsqHV1XJdG8o78u0PHqh5+4yagBrZ8DWNv/Ah5zAWl7xvYL3GdM8JCUPf1hvM36FBI1976Z2g36p9LuO1zHng7IHHwAD5dsrUpA5TvgKe9dAK+bckBy4/mlYJW9etvxw3/5xS3LJ7VtXqYUcVK6VcbtkpigSLMiPrO8OtTK3Egf1HcmSFPcuygAAAAASUVORK5CYII=");
}
</style>
