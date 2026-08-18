import {LuUser, LuUpload, LuTrash} from 'react-icons/lu';

 const ProfilePhotoSelector = ({image, setImage, preview, setPreview}) => {

    const inputRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if(file){
            //Update the imamge state
            setImage(file);

            //Generate preview URL from the file
            const preview = URL.createObjectURL(file);
            if(setPreview){
                setPreview(preview)
            }
            setPreviewUrl(preview);
        }
    };
    
    const handleRemoveImage = () => {
        setImage(null);
        setPreviewUrl(null);

        if(setPreview){
            setPreview(null);
        }
    };

    const onChooseFile = () => {
        inputRef.current.click();
    }

  return (
    <div className=''>
        <input 
           type='file'
           accept='image/*'
           ref = {inputRef}
           onChange={handleImageChange}
           className=''
        />

        {!image ? (
            <div className=''>
                <LuUser className=''/>

                <button 
                   type='button'
                   className=''
                   onClick={onChooseFile}
                >
                    <LuUpload />
                </button>
            </div>
        ) : (
            <div className="">
                <img 
                   src={preview || previewUrl}
                   alt='profile Photo'
                   onClick={handleRemoveImage}
                />
                <button 
                   type='button'
                   className=''
                   onClick={handleRemoveImage}
                >
                    <LuTrash />
                </button>
            </div>
        )}
    </div>
  )
}

export default ProfilePhotoSelector