import './form.css';
import { useState } from "react";
import { useContext } from "react";
import Context from '../../contexts/Context'
import Axios from 'axios';
import Button from '@mui/lab/LoadingButton';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export function Inputs({ currentUser, setCurrentUser }) {

  // let navigate = useNavigate();

    const { auth, setAuth, user, setUser } = useContext(Context)

    const [values, setValues] = useState({
      emailUsuario: "",
      senhaUsuario: "",
    });

    var notfoundd, sucess;

    const [style, setStyle] = useState("");

    const [isInputChanged, setIsInputChanged] = useState (true);

    const loginBTN = {
      color: "white",
      borderColor: "transparent",
      borderRadius: "0.5rem",
      marginTop: "15px",
      transition: "all 0.5s ease-out",
      fontWeight: "bold",
      backgroundColor: "#5819BB",
      "&:disabled": {
        borderColor: "transparent",
        padding: "0.5rem 1rem",
        backgroundColor: "#5819BB",
        cursor: "pointer",
        filter: "drop-shadow(5px 5px 0px #210D41)",
      },
    }

    function notfound () {console.log('nao achou')}
    function sucess () {console.log('achou')}


    const handleChangeValues = (value) => {
      setIsInputChanged(!values.any ? false : true)
      setValues((prevValue) => ({
          ...prevValue,
          [value.target.name]: value.target.value,
      }));
    };

    const CustomBackButton = {
      position: "absolute", 
      top: "14px", 
      left: "5px",
      transition: "all 0.5s ease-out",
      "&:hover": {
        transform: "rotateZ(360deg)"
      },
    }

    const email = values.emailUsuario;
    const senha = values.senhaUsuario;
  

    class responseData {
      
      constructor(userObj) {

        const responses = {
          response404: notfound,
          response200: sucess
        }

        responses[userObj]()

        this.userObj = userObj;
      }

      setResponse (userObj) {
        this.userObj = userObj;
      }

      showLog () {
        return console.log(this.userObj)
      }
      
      notfound () {
        console.log('nao achou')
      }

    }

    const handleLogin = () => {

        if (email === "" || senha === "") {
            alert("Preencha todos os campos");
        } else {
            Axios.post("http://localhost:3001/login", {
                email: email,
                senha: senha,
            }).then((response) => {

              
              let userObj = 'response' + response.data;

              // let isSucess = userObj === 200 ? true : false;              

              new responseData(userObj);
              
/*


                console.log(userObj)
                console.log(isSucess)

                if (isSucess) {
                    alert("Login feito com sucesso");
                    //alterando a autenticação
                   

                    //navegar a outra rota
                    // navigate("/main")
                  } else if (!isSucess) {
                    alert("Email ou senha invalidos");
                  } else {
                    
                  }

                  */
                });
        }
    };

  return (
    <div>
      <IconButton sx={CustomBackButton} onClick={() => setCurrentUser(null)} fontaria-label="back to select page">
        <ChevronLeftIcon sx={{color: "white"}} fontSize="large"/>
      </IconButton>   
      <div className='loginInput'>
        <div>
          <h2 className="formTitle">
            Olá, <span> {currentUser}</span>
          </h2>
        </div>
        <div>
          <input type="email" name="emailUsuario" onChange={handleChangeValues} placeholder="Insira o Email" />
        </div>
        <div>
          <input type="password" name="senhaUsuario" onChange={handleChangeValues} placeholder="Insira a senha" />
        </div>
      </div>
    
      <Button variant="contained" onClick={handleLogin} sx={loginBTN} >
        Entrar
      </Button>

    </div>
  );
}
