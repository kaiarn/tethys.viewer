// import { Prop } from "vue-property-decorator";
import { Component, Vue } from "vue-facing-decorator";
import SectionBannerStarOnGitHub from "@/components/SectionBannerStarOnGitea.vue";

@Component({
    name: "HelpViewComponent",
    components: {
        SectionBannerStarOnGitHub,
    },
})
export default class HelpViewComponent extends Vue {
    // results: Array<any> = [];
}
