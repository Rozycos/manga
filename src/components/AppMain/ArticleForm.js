import React, {useState, useReducer} from 'react';
import { Timestamp, addDoc, collection } from "firebase/firestore"; 
import {getDb} from '../../firebase_setup/db';
import { Link, useNavigate  } from 'react-router-dom';
//import { Categories } from '../context/Categories';
//import { useHistory } from 'react-router-dom';

const ArticleForm = () => {
    const navigate = useNavigate();

    const [isPublish, setIsPublish] = useState(false);
    const [action, setAction] = useState(false);
    const [comedy, setComedy] = useState(false);
    const [drama, setDrama] = useState(false);
    const [military, setMilitary] = useState(false);
    const [fantasy, setFantasy] = useState(false);
    const [other, setOther] = useState(false);
    


    const [inputsContent, setInputsContent] = useReducer(
     (state, newState) => ({ ...state, ...newState }),
        {
            imageURL: "",
            title: "",
            subtitle: "",
            postURL: "",
            postText: "",
        //   isPublish: false
        }
);
const { imageURL, title, subtitle, postURL, postText} = inputsContent; 

    const handleInputChange = e => {
        setInputsContent({
            [e.target.name]: e.target.value
        });
    };

    const handleChange = () => {
        setIsPublish(!isPublish);
      };

    const handleChangeOnAction = () => {
        setAction(!action);
      };

    const handleChangeOnDrama = () => {
        setDrama(!drama);
      };

    const handleChangeOnComedy = () => {
        setComedy(!comedy);
      };

    const handleChangeOnMilitary = () => {
        setMilitary(!military);
      };

    const handleChangeOnFantasy = () => {
        setFantasy(!fantasy);
      };

    const handleChangeOnOther = () => {
        setOther(!other);
      };

    const handleSubmit = async (e) => {
        e.preventDefault()
// if(inputsContent === ""){

//{!inputsContent.title || !inputsContent.subtitle || !inputsContent.postURL} alert("wypełnij wszystkie pola");

//alert("wypełnij wszystkie pola");
// }else{
//    alert(JSON.stringify(inputsContent, null, 2));

// if (inputsContent.title === "" || inputsContent.subtitle === "" || inputsContent.postURL ==="")
//     {alert("wszystkie pola muszą być wypełnione")}


        try {
          await addDoc(collection(getDb(), 'articles'), {
            imageURL: imageURL,
            title: title,
            subtitle: subtitle,
            postURL: postURL,
            postText: postText,
            isPublish: isPublish,
            action: action,
            comedy: comedy,
            drama: drama,
            military: military,
            fantasy: fantasy,
            other: other,
            created: Timestamp.now()
          })

          alert("Your data is saved!")
          navigate('/admin');
        } catch (err) {
          alert(err)
        }
    }
    return (
        <>
            <div className="login__form">
            <div className="login__column">
                <form className="form">
                    <div className="form__field">
                        <label className="form__label">Image URL</label>
                        <input className="form__input" type="text" name="imageURL" id="imageURL" placeholder="Enter image URL" onChange={handleInputChange}/>
                        {/* <input className="form__input" type="text" name="imageURL" id="imageURL" placeholder="Enter image URL" onChange={handleInputChange}/> */}
                    </div>
                    <span>*required field</span>
                    <div className="form__field">
                        <label className="form__label">Title</label>
                        <input className="form__input" type="text" name="title" id="title" placeholder="Enter post title" onChange={handleInputChange}/>
                    </div>
                    <span>*required field</span>
                    <div className="form__field">
                        <label className="form__label">Subtitle</label>
                        <input className="form__input" type="text" name="subtitle" id="subtitle" placeholder="Enter post subtitle" onChange={handleInputChange}/>
                    </div>
                    <span>*required field</span>
                    <div className="form__field">
                        <label className="form__label">Post URL</label>
                        <input className="form__input" type="text" name="postURL" id="postURL" placeholder="Enter post URL" onChange={handleInputChange}/>
                    </div>  
                    <span>*required field</span> 
                    <div className="form__field--textarea">
                        <label className="form__label" >Post text</label>
                        <textarea className="form__input form__input--textarea" name="postText" id="postText" rows="5" cols="33" placeholder="Article" onChange={handleInputChange}/>
                    </div>  
                    <div className="form__field--checkbox">
                        <label className="form__label" >Published</label>
                        <input type="checkbox" id="post__publish" name="post__publish" checked={isPublish} onChange={handleChange} />
                    </div>
                    <div className="form__field">
                        <label className="form__label" >Action</label>
                        <input type="checkbox" id="post__categories" name="post__categories" checked={action} onChange={handleChangeOnAction} />
                        <label className="form__label" >Comedy</label>
                        <input type="checkbox" id="post__categories" name="post__categories" checked={comedy} onChange={handleChangeOnComedy} />
                        <label className="form__label" >Drama</label>
                        <input type="checkbox" id="post__categories" name="post__categories" checked={drama} onChange={handleChangeOnDrama} />
                    </div>
                    <div className="form__field">
                        <label className="form__label" >Military</label>
                        <input type="checkbox" id="post__categories" name="post__categories" checked={military} onChange={handleChangeOnMilitary} />
                        <label className="form__label" >Fantasy</label>
                        <input type="checkbox" id="post__categories" name="post__categories" checked={fantasy} onChange={handleChangeOnFantasy} />
                        <label className="form__label" >Other</label>
                        <input type="checkbox" id="post__categories" name="post__categories" checked={other} onChange={handleChangeOnOther} />
                    </div>
                </form>
                <div>
                    <button className="btn btn__primary btn__form btn__form--log">
                    {/* </button><button className="btn btn__primary btn__form btn__form--log" onClick={handlePreview}> */}
                            Previev
                    </button>
                    <button className="btn btn__primary btn__form btn__form--log" disabled={!inputsContent.title || !inputsContent.subtitle || !inputsContent.postURL} onClick={handleSubmit}>Submit
                        {/* <Link className="admin__link" to="/admin">Submit</Link> */}
                    </button>
                </div>
            </div>
            </div>
        </>
    )
    
}


export default ArticleForm;

//<div className="form__field">

//<label className="form__label" >Not published</label>
//<input type="checkbox" id="post__publish" name="post__publish" defaultChecked/>
//{/* <input type="checkbox" id="post__publish" name="post__publish" onChange={handleInputChange}/> */}
//</div>