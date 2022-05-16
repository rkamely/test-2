import { Button } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import React,{Component} from 'react'
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
    
    state = {hasError:false}

    componentDidCatch(error,errorInfo){
        if(error){
            this.setState({hasError:true})
        }
        return this.props.children
    }
    render(){
        if(this.state.hasError){
            return (
                <>
            <h1>پوزش خطایی رخ داده است  برای ادامه روی دکمه زیر کلیک کنید</h1>
            <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/"
            size="large"
          >
            برگشت به خانه
          </Button>
          </>
            )
        }
    }
 
}

export default ErrorBoundary