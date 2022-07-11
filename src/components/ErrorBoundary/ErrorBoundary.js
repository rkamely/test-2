import { Button } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import React,{Component} from 'react'
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
    
    // state = {hasError:false}

    // componentDidCatch(error,errorInfo){
    //     if(error){
    //         this.setState({hasError:true})
    //     }
    //     return this.props.children
    // }
    render(){

            return (
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"90%"}}>
              <h1>پوزش خطایی رخ داده است لطفا از وصل بودن اینترنت خود مطمئن شوید. </h1>
              <h2>برای ادامه روی دکمه زیر کلیک کنید</h2>
            <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/"
            size="large"
            style={{
                background:"orange",
                color:"#000"
            }}
          >
            برگشت به خانه
          </Button>
          </div>
     
            )
    }
 
}

export default ErrorBoundary