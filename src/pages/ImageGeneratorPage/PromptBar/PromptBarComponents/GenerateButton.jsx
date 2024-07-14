//Providers
import { useContext } from 'react';

import { AImageContext } from '../../../../providers/AImageContext'
import { useModal } from '../../../../providers/AlertModalContext';

//Styles - Icons
import { RiAiGenerate } from "react-icons/ri";
import { RiImageEditFill } from "react-icons/ri";


const GenerateButton = () => {

    const { toggleModal } = useModal();
    const { onSentPrompts, prompts, loading, isSaved, setIsSaved } = useContext(AImageContext);


    const handleNewImageGenerate = () => {
        if (prompts.length > 0) {
            onSentPrompts();
            setIsSaved(false);
           
        } else {
            toggleModal(true,"Please input a prompt.");
        }
    }

    return (
        <>
            {/* Image Generator Button */}
            <div className="w-full flex justify-center mt-8 mb-2">
                <button disabled={loading} onClick={!loading ? handleNewImageGenerate : null} className="generate-btn">
                    {!loading
                        ? <>
                            <span className={`mx-3 text-[#ececec]`}>
                               Generate Image
                            </span>

                            <span className=" mr-3">
                                <RiAiGenerate className="text-[24px]" />
                            </span>
                        </>
                        : <>
                            <span className={`generating-ani mx-3 text-[#ececec]`}>
                                Generating...
                            </span>
                            <span className="generating-ani mr-3">
                                <RiImageEditFill className="text-[24px]" />
                            </span>
                        </>
                    }


                </button>
            </div>
        </>
    )
}

export default GenerateButton