//React Hooks
import { useState, useEffect } from "react"

//Providers
//Component
import HamiLogo from '../../../components/HamiLogo';


const HamiLogoAndInfos = ({ setIsLoginBox }) => {



    //Animation States
    const [isHamiLogo, setIsHamiLogo] = useState(false);
    const [isHamiInfo, setIsHamiInfo] = useState(false);
    const [isHamiInfo2, setIsHamiInfo2] = useState(false);
    const [isHamiInfo3, setIsHamiInfo3] = useState(false);
    const [isLoginHamiLogo, setIsLoginHamiLogo] = useState(false);

    useEffect(() => {
        setIsHamiLogo(true);

        setTimeout(() => {
            setIsHamiLogo(false);
        }, 1600);

        setTimeout(() => {
            setIsHamiInfo(true)
        }, 2200);


        setTimeout(() => {
            setIsHamiInfo(false)
        }, 4200);

        setTimeout(() => {
            setIsHamiInfo2(true);
        }, 4800);

        setTimeout(() => {

            setIsHamiInfo2(false);
        }, 7200);

        setTimeout(() => {

            setIsHamiInfo3(true);
        }, 7600);

        setTimeout(() => {

            setIsHamiInfo3(false);
        }, 11400);

        setTimeout(() => {
            setIsLoginHamiLogo(true);
            setIsLoginBox(true);
        }, 12200);

    }, [])

    return (
        <>
            <div className="hami-logo-box">
                {isHamiLogo &&
                    <HamiLogo />
                }
                {isHamiInfo &&
                    <p className={`hami-login-info`}>
                       Image Generator
                    </p>
                }
                {isHamiInfo2 &&
                    <p className="hami-login-info">
                    Are you ready for a great AI experience
                    </p>
                }
                {isHamiInfo3 &&
                    <p className="hami-login-info">  
                    Start by choosing a username and avatar
                    </p>

                }
            </div>

            {isLoginHamiLogo &&
                <div className="hami-logo-box">
                    <HamiLogo />
                </div>
            }
        </>
    )
}

export default HamiLogoAndInfos