import { PureComponent } from "react";

interface props {
    navigation : any
}
interface state {
    username:string,
    email:string,
    password: string

}

export default class SignUpController extends PureComponent<props, state>{
  
    constructor(props: any) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: ""   

        }
    }


    setUsername(_text : string){
        this.setState({username:_text })
    }

    setEmail(_email: string){
        this.setState({ email : _email})
    }

    setPassword(_password: string){
        this.setState({ password : _password})
    }
    openLoginPage(userName: string, email: string){
        this.props.navigation.navigate('HomeScreen',{userName, email})
    }
} 