import { PureComponent } from "react";

interface props {
    route : any
}
interface state {
    username:string,
    password: string

}

export default class LoginDesignController extends PureComponent<props, state>{
    userNameRef: any = "";
  passwordRef: any = "";
    constructor(props: any) {
        super(props)
        this.state = {
            username: "",
            password: ""   

        }
    }
} 