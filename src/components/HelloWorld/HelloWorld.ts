import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Options({
    name: "HelloWorld",
})
export default class HelloWorld extends Vue {
    @Prop({ type: String })
    private msg!: string;
}
