import { Component, Vue, Prop } from "vue-facing-decorator";
// import { Prop } from "vue-property-decorator";

@Component({
    name: "HelloWorld",
})
export default class HelloWorld extends Vue {
    @Prop({ type: String })
    private msg!: string;
}
