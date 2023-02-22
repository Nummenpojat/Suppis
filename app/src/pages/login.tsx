import React, {useEffect, useState} from "react";
import {auth, signInWithGoogle, signOut} from "../firebaseConfig";
import {onAuthStateChanged} from "firebase/auth";

const Login = () => {

  const [signedInAs, setSignedInAs] = useState("")

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user && user.displayName) {
        setSignedInAs(user.displayName)
      } else {
        setSignedInAs("")
      }
    })
  }, [])

  return (
    <div className="w-screen flex place-content-center place-items-center h-[calc(100vh-120px)]">
      {signedInAs != "" ?
        <div className="flex flex-col w-1/3 min-w-[300px]">
          <h1 className="text-[40px] text-center">
            {`OLET KIRJATUNUT KÄYTTÄJÄLLÄ: ${signedInAs}`}
          </h1>
          <button onClick={signOut} className="nummari-button mx-auto bg-mansikanpunainen">
            KIRJAUDU ULOS
          </button>
        </div>

        :
        <button onClick={signInWithGoogle} className="nummari-button mx-auto">
          KIRJAUDU SISÄÄN
        </button>
      }
    </div>
  )
}
export default Login